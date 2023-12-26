#include <ThingSpeak.h>
#include<WiFi.h>

// const char* ssid = "Real me 5i";
// const char* password = "12345678";


// const char* thingSpeakWriteKey = "SGK9JYL007M6UPET";
// const int channelId = 2185769;
// WiFiClient client;

// Ultrasound Mappings
#define SOUND_SPEED 0.034
int trig_forward = 13;
int echo_forward = 14;

int trig_left = 16;
int echo_left = 17;

int trig_right = 18;
int echo_right = 19;

int trig_backward = 26;
int echo_backward = 27;

int enA = 32;
int in1 = 18;
int in2 = 19;

// Motor B

int enB = 22;
int in3 = 23;
int in4 = 21;

// Joystick Input

int joyVert = 34; // Vertical  
int joyHorz = 35; // Horizontal
int joyButt = 25;


// Motor Speed Values - Start at zero

int MotorSpeed1 = 0;
int MotorSpeed2 = 0;

// Joystick Values - Start at 512 (middle position)

int joyposVert = 512;
int joyposHorz = 512;  

// dirn = 1 for forward, 2 for right, 3 for backward, 4 for left
int detect_obstacle(int direction) {
  if (direction == 1){
    digitalWrite(trig_forward, LOW);
    delayMicroseconds(2);
    digitalWrite(trig_forward, HIGH);
    delayMicroseconds(10);
    digitalWrite(trig_forward, LOW);
    
    long duration = pulseIn(echo_forward, HIGH);
    
    // Calculate the distance in centimeters
    long distance =  duration * SOUND_SPEED/2;

    Serial.println(distance);
    
    if (distance <= 20) { // If obstacle is within 30cm range
      return 1;
    }
    else {
      return 0;
    }
  } else if (direction == 2){
    digitalWrite(trig_right, LOW);
    delayMicroseconds(2);
    digitalWrite(trig_right, HIGH);
    delayMicroseconds(10);
    digitalWrite(trig_right, LOW);
    
    long duration = pulseIn(echo_right, HIGH);
    
    // Calculate the distance in centimeters
    long distance =  duration * SOUND_SPEED/2;

    Serial.println(duration);
    
    if (distance <= 15) { // If obstacle is within 15cm range
      return 1;
    }
    else {
      return 0;
    }
  } else if (direction == 3){
    digitalWrite(trig_backward, LOW);
    delayMicroseconds(2);
    digitalWrite(trig_backward, HIGH);
    delayMicroseconds(10);
    digitalWrite(trig_backward, LOW);
    
    long duration = pulseIn(echo_backward, HIGH);
    
    // Calculate the distance in centimeters
    long distance =  duration * SOUND_SPEED/2;

    Serial.println(duration);
    
    if (distance <= 20) { // If obstacle is within 30cm range
      return 1;
    }
    else {
      return 0;
    }
  } else if (direction == 4){
    digitalWrite(trig_left, LOW);
    delayMicroseconds(2);
    digitalWrite(trig_left, HIGH);
    delayMicroseconds(10);
    digitalWrite(trig_left, LOW);
    
    long duration = pulseIn(echo_left, HIGH);
    
    // Calculate the distance in centimeters
    long distance =  duration * SOUND_SPEED/2;

    Serial.println(duration);
    
    if (distance <= 15) { // If obstacle is within 15cm range
      return 1;
    }
    else {
      return 0;
    }
  }
  return 0;
}


long duration;
float distanceCm;

void setup()

{

  
  Serial.begin(9600);
  // ThingSpeak.begin(client);

  // WiFi.begin(ssid, password);
  // while(WiFi.status() != WL_CONNECTED){
  // delay(1000);
  // Serial.println("Connecting to Wifi");
  // }
  // Serial.println("Connected to Wifi");
  // Set up ultrasound pins
  pinMode(trig_forward, OUTPUT);
  pinMode(trig_left, OUTPUT);
  // pinMode(trig_right, OUTPUT);
  // pinMode(trig_backward, OUTPUT);

  // pinMode(echo_forward, INPUT);
  // pinMode(echo_left, INPUT);
  // pinMode(echo_right, INPUT);
  // pinMode(echo_backward, INPUT);

  // Set all the motor control pins to outputs
  
  ledcSetup(2, 75, 8);
  ledcSetup(3, 75, 8);
  ledcAttachPin(enA, 2);
  ledcAttachPin(enB, 3);
  pinMode(in1, OUTPUT);
  pinMode(in2, OUTPUT);
  pinMode(in3, OUTPUT);
  pinMode(in4, OUTPUT);
  // pinMode(joyButt, sINPUT);
   
  // Start with motors disabled and direction forward
  
  // Motor A
  
  digitalWrite(enA, LOW);
  digitalWrite(in1, HIGH);
  digitalWrite(in2, LOW);
  
  // Motor B
  
  digitalWrite(enB, LOW);
  digitalWrite(in3, HIGH);
  digitalWrite(in4, LOW);
  
}

void loop() {

	// Read the Joystick X and Y positions

	joyposVert = analogRead(joyVert); 
	joyposHorz = analogRead(joyHorz);
  Serial.print("vert ");
  Serial.println(joyposVert);
  Serial.print("horz ");
  Serial.println(joyposHorz);
  // int joybuttstate = digitalRead(joyButt);
  // if(joybuttstate == 0){
  //   ThingSpeak.setField(2, 1);
  //   ThingSpeak.writeFields(channelId, thingSpeakWriteKey);
  // }
  // delay(1000);
	// Determine if this is a forward or backward motion
	// Do this by reading the Verticle Value
	// Apply results to MotorSpeed and to Direction

	if (joyposVert > 1850)
	{
		// This is Backward
    // We check for an imminent collision, in which case we set the speeds to 0
    // if (detect_obstacle(3)){
    //   //We set motors to forward direction and set their speed to 0
    //   // Motor A
    //   digitalWrite(in1, HIGH);
    //   digitalWrite(in2, LOW);
      
    //   // Motor B
    //   digitalWrite(in3, HIGH);
    //   digitalWrite(in4, LOW);
    //   MotorSpeed1 = 0;
    //   MotorSpeed2 = 0;
    // } else{
      // Set Motor A backward

      digitalWrite(in1, LOW);
      digitalWrite(in2, HIGH);

      // Set Motor B backward

      digitalWrite(in3, LOW);
      digitalWrite(in4, HIGH);

      //Determine Motor Speeds

      // As we are going backwards we need to reverse readings

      // joyposVert = joyposVert; // This produces a negative number
      // joyposVert = joyposVert * -1;  // Make the number positive

      MotorSpeed1 = map(joyposVert, 1850, 4095, 0, 255);
      MotorSpeed2 = map(joyposVert, 1850, 4095, 0, 255);
    // }
	}
	else if (joyposVert < 1400)
	{
		// This is Forward
    // We check for an imminent collision, in which case we set the speeds to 0
    // if (detect_obstacle(1)){
    //   //We set motors to backward direction and set their speed to 0
    //   // Motor A
    //   digitalWrite(in1, LOW);
    //   digitalWrite(in2, HIGH);
      
    //   // Motor B
    //   digitalWrite(in3, LOW);
    //   digitalWrite(in4, HIGH);
    //   MotorSpeed1 = 0;
    //   MotorSpeed2 = 0;
    // } else{
      // Set Motor A forward
      joyposVert = joyposVert - 1400;
      joyposVert *= -1;
      digitalWrite(in1, HIGH);
      digitalWrite(in2, LOW);

      // Set Motor B forward

      digitalWrite(in3, HIGH);
      digitalWrite(in4, LOW);

      //Determine Motor Speeds

      MotorSpeed1 = map(joyposVert, 0, 1400, 0, 255);
      MotorSpeed2 = map(joyposVert, 0, 1400, 0, 255); 
    // }
	}
	else
	{
		// This is Stopped

		MotorSpeed1 = 0;
		MotorSpeed2 = 0; 

	}
	
	// Now do the steering
	// The Horizontal position will "weigh" the motor speed
	// Values for each motor

	if (joyposHorz < 1500)
	{
		// Move Left
    // if (!detect_obstacle(4)){
      // As we are going left we need to reverse readings

      joyposHorz = joyposHorz - 1500; // This produces a negative number
      joyposHorz = joyposHorz * -1;  // Make the number positive

      // Map the number to a value of 255 maximum

      joyposHorz = map(joyposHorz, 0, 1500, 0, 255);
          

      MotorSpeed1 = MotorSpeed1 - joyposHorz;
      MotorSpeed2 = MotorSpeed2 + joyposHorz;

      // Don't exceed range of 0-255 for motor speeds

      if (MotorSpeed1 < 0)MotorSpeed1 = 0;
      if (MotorSpeed2 > 255)MotorSpeed2 = 255;
    // }
	}
	else if (joyposHorz > 1950)
	{
		// Move Right
  //  if (!detect_obstacle(2)){
      // Map the number to a value of 255 maximum

      joyposHorz = map(joyposHorz, 1950, 4095, 0, 255);
          

      MotorSpeed1 = MotorSpeed1 + joyposHorz;
      MotorSpeed2 = MotorSpeed2 - joyposHorz;

      // Don't exceed range of 0-255 for motor speeds

      if (MotorSpeed1 > 255)MotorSpeed1 = 255;
      if (MotorSpeed2 < 0)MotorSpeed2 = 0;		  
  //  }
	}


	// Adjust to prevent "buzzing" at very low speed

	if (MotorSpeed1 < 8)MotorSpeed1 = 0;
	if (MotorSpeed2 < 8)MotorSpeed2 = 0;

	// Set the motor speeds

	ledcWrite(2, MotorSpeed1);
	ledcWrite(3, MotorSpeed2);

}