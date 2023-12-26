#include <Arduino.h>
#include <WiFi.h>
#include <Adafruit_MPU6050.h>
#include <Adafruit_Sensor.h>
#include <WiFiClientSecure.h>
#include <HTTPClient.h>

//  SCL Pin - GPIO22
// SDA Pin - GPIO21

const char *ssid = "Chandana";
const char *password = "nenu cheppanu";
const char *serverUrl = "https://c686-2401-4900-62cc-eae-d511-b0a2-7c94-f553.ngrok-free.app";

Adafruit_MPU6050 mpu;
sensors_event_t a, g, temp;

unsigned long lastTime = 0;
unsigned long lastTimeTemperature = 0;
unsigned long lastTimeAcc = 0;
unsigned long gyroDelay = 10;
unsigned long temperatureDelay = 1000;
unsigned long accelerometerDelay = 200;

WiFiClientSecure client;
HTTPClient http;

void initMPU()
{
    if (!mpu.begin())
    {
        Serial.println("Failed to find MPU6050 chip");
        while (1)
        {
            delay(10);
        }
    }
    Serial.println("MPU6050 Found!");
}

void initWiFi()
{
    WiFi.mode(WIFI_STA);
    WiFi.begin(ssid, password);
    Serial.println("");
    Serial.print("Connecting to WiFi...");
    while (WiFi.status() != WL_CONNECTED)
    {
        Serial.print(".");
        delay(1000);
    }
    Serial.println("");
    Serial.println("WiFi connected");
    Serial.println("IP address: " + WiFi.localIP().toString());
}

String getGyroReadings()
{
    mpu.getEvent(&a, &g, &temp);

    float gyroX = g.gyro.x;
    float gyroY = g.gyro.y;
    float gyroZ = g.gyro.z;

    String readings = "{\"gyroX\": " + String(gyroX) +
                      ", \"gyroY\": " + String(gyroY) +
                      ", \"gyroZ\": " + String(gyroZ) + "}";

    return readings;
}

String getAccReadings()
{
    mpu.getEvent(&a, &g, &temp);

    float accX = a.acceleration.x;
    float accY = a.acceleration.y;
    float accZ = a.acceleration.z;

    String readings = "{\"accX\": " + String(accX) +
                      ", \"accY\": " + String(accY) +
                      ", \"accZ\": " + String(accZ) + "}";

    return readings;
}

String getTemperature()
{
    mpu.getEvent(&a, &g, &temp);

    float temperature = temp.temperature;

    String readings = "{\"temperature\": " + String(temperature) + "}";

    return readings;
}

void sendReadingsToServer(const String &readings, const String &sensorType)
{

    String payload = "{\"sensor_type\":\"" + sensorType + "\",\"readings\":" + readings + "}";

    http.begin(client, serverUrl);
    http.addHeader("Content-Type", "application/json");
    int httpResponseCode = http.POST(payload);

    if (httpResponseCode > 0)
    {
        Serial.print("HTTP response code: ");
        Serial.println(httpResponseCode);
    }
    else
    {
        Serial.print("Error sending request. HTTP error code: ");
        Serial.println(httpResponseCode);
    }

    http.end();
}

void setup()
{

    Serial.begin(9600);
    Serial.println("Initializing MPU6050...");
    initWiFi();
    initMPU();
}

void loop()
{
    if ((millis() - lastTime) > gyroDelay)
    {
        String gyroReadings = getGyroReadings();
        Serial.println("Gyro Readings: " + gyroReadings);
        sendReadingsToServer(gyroReadings, "gyro");
        lastTime = millis();
    }
    if ((millis() - lastTimeAcc) > accelerometerDelay)
    {
        String accReadings = getAccReadings();
        Serial.println("Accelerometer Readings: " + accReadings);
        sendReadingsToServer(accReadings, "accelerometer");
        lastTimeAcc = millis();
    }
    if ((millis() - lastTimeTemperature) > temperatureDelay)
    {
        String tempReadings = getTemperature();
        Serial.println("Temperature: " + tempReadings);
        sendReadingsToServer(tempReadings, "temperature");
        lastTimeTemperature = millis();
    }
}
