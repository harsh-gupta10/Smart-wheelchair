//Format of the working of this thingSpeak
//ThingSpeak.setField( field_number, sensor_data )
//ThingSpeak.writeFields( Channel_Id, API_Key )
// Here we are following: 
// 1. We have three channels: accelerometer, oxiometer and hall effect sensor readings.
// 2. First we are setting fields values of channel 1 ( acccelerometer ) and then writing to the accelerometer fields.
//    Later again resetting the field values of channel 2 ( Oxiometer )  and then writing to the oxiometer fields. 
//    Finally again resetting the field values of channel 3 ( Hall effect ) and then writing to the hall effector fields. 

#include <Arduino.h>
#include <WiFi.h>
#include <Adafruit_Sensor.h>
#include <ThingSpeak.h> 
#include <Adafruit_MPU6050.h>
#include <Adafruit_Sensor.h>
#include <WiFiClientSecure.h>
#include <HTTPClient.h>



const char* ssid = "Real me 5i";
const char* password = "12345678";


// API keys of the channels 
const char* thingSpeakApiKey_Accelerometer = "IKY5BGFVX74Z9V5P"; 
const char* thingSpeakApiKey_Oxiometer = "SJZBMNET6DLVXZSV"; 
const char* thingSpeakApiKey_Halleffect = "HIYNXC6ZN4HPUTP8"; 


// Channel Id's 
const long thingSpeakChannelID_Accelerometer = 2165912 ;
const long thingSpeakChannelID_Oxiometer = 2165919 ;
const long thingSpeakChannelID_Halleffect = 2165914 ;


WiFiClient client;




// Accelerometer Readings Calculation part. 

Adafruit_MPU6050 mpu;
sensors_event_t a, g, temp;





void initMPU() {
  if (!mpu.begin()) {
    Serial.println("Failed to find MPU6050 chip");
    while (1) {
      delay(10);
    }
  }
  Serial.println("MPU6050 Found!");
}

unsigned long lastTime = 0;
unsigned long lastTimeTemperature = 0;
unsigned long lastTimeAcc = 0;
unsigned long gyroDelay = 10;
unsigned long temperatureDelay = 1000;
unsigned long accelerometerDelay = 200;




String getGyroReadings_Xdirection() {
  mpu.getEvent(&a, &g, &temp);
  
  float gyroX = g.gyro.x;
  return String(gyroX);
}

String getGyroReadings_Ydirection() {
  mpu.getEvent(&a, &g, &temp);

  float gyroY = g.gyro.y;
  return String(gyroY);
}

String getGyroReadings_Zdirection() {
  mpu.getEvent(&a, &g, &temp);

  float gyroZ = g.gyro.z;
  return String(gyroZ);
}


String getAccReadings_Xdirection() {
  mpu.getEvent(&a, &g, &temp);

  float accX = a.acceleration.x;
  return String(accX);
}

String getAccReadings_Ydirection() {
  mpu.getEvent(&a, &g, &temp);

  float accY = a.acceleration.y;
  return String(accY);
}

String getAccReadings_Zdirection() {
  mpu.getEvent(&a, &g, &temp);

  float accZ = a.acceleration.z;
  return String(accZ);
}

String getTemperature() {
  mpu.getEvent(&a, &g, &temp);

  float temperature = temp.temperature;

  return String(temperature);
}


// Accelerometer Readings Calculation part ends. 



void setup() {
  Serial.begin(115200);
  Serial.println("hello");
  // WiFi connection starts. 
  
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  Serial.println("Connected to WiFi");

  // WiFi connection ends. 


 // Thing Speak begin
  ThingSpeak.begin(client);

  // Accelerometer code 
   initMPU();
  
}

void loop() {
  int randomData = random(1,1000);

  Serial.print("Random Data: ");
  Serial.println(randomData);





  // Accelerometer Code starts. 


      if ((millis() - lastTime) > gyroDelay) {
          String gyroReadings_Xdirection = getGyroReadings_Xdirection();
          String gyroReadings_Ydirection = getGyroReadings_Ydirection();
          String gyroReadings_Zdirection = getGyroReadings_Zdirection();
          
          Serial.println("Gyro X reading: " + gyroReadings_Xdirection);
          Serial.println("Gyro Y reading: " + gyroReadings_Ydirection);
          Serial.println("Gyro Z reading: " + gyroReadings_Zdirection);
          ThingSpeak.setField(4,gyroReadings_Xdirection);
          ThingSpeak.setField(5,gyroReadings_Ydirection);
          ThingSpeak.setField(6, gyroReadings_Zdirection);
          lastTime = millis();
      }
      if ((millis() - lastTimeAcc) > accelerometerDelay) {
          String accReadings_Xdirection = getAccReadings_Xdirection();
          String accReadings_Ydirection = getAccReadings_Ydirection();
          String accReadings_Zdirection = getAccReadings_Zdirection();
          
          Serial.println("Accelerometer  X Readings: " + accReadings_Xdirection);
          Serial.println("Accelerometer  Y Readings: " + accReadings_Ydirection);
          Serial.println("Accelerometer  Z Readings: " + accReadings_Zdirection);
          ThingSpeak.setField(1, accReadings_Xdirection);
          ThingSpeak.setField(2, accReadings_Ydirection);
          ThingSpeak.setField(3, accReadings_Zdirection);
          
          
          lastTimeAcc = millis();
      }
      if ((millis() - lastTimeTemperature) > temperatureDelay) {
          String tempReadings = getTemperature();
          Serial.println("Temperature: " + tempReadings);
          ThingSpeak.setField(7,tempReadings);
          lastTimeTemperature = millis();
      }  
   
  
  // Writing the values to the accelerometer channel. 
  int response_Accelerometer = ThingSpeak.writeFields(thingSpeakChannelID_Accelerometer, thingSpeakApiKey_Accelerometer);
  
  if (response_Accelerometer == 200) {
    Serial.println("Data sent to Accelerometer successfully");
  } else {
    Serial.println("Error sending data to ThingSpeak");
  }
  

  // Accelerometer code ends here. 




  
  // Oxiometer code starts here. 
  ThingSpeak.setField(1, randomData);
  ThingSpeak.setField(2, randomData);

  // Writing the values of the oxiometer channel. 
  int response_Oxiometer = ThingSpeak.writeFields(thingSpeakChannelID_Oxiometer, thingSpeakApiKey_Oxiometer);
  
  // Checking the response of the Oxiometer
  if (response_Oxiometer == 200) {
    Serial.println("Data sent to Oxiometer successfully");
  } else {
    Serial.println("Error sending data to ThingSpeak");
  }


  // Oxiometer code ends. 


  // Hall effect code starts. 
  // Setting the field values of the hall effect sensor. 
  ThingSpeak.setField(1, randomData);
  int response_Halleffect = ThingSpeak.writeFields(thingSpeakChannelID_Halleffect, thingSpeakApiKey_Halleffect); 

  // Checking the response of the hall effect. 
  if (response_Halleffect == 200) {
    Serial.println("Data sent to  Hall effect successfully");
  } else {
    Serial.println("Error sending data to ThingSpeak");
  }
  // Hall effect sensor code ends. 

  delay(1000);
}
