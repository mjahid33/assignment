Feature: Capital city of Countries

 @PositiveTest  @regression
Scenario Outline: Positive Sceario: Get Capital City with Country Name 
Given User submits GET request to "countryNameURL" for "<countryName>"
And User validates response status code is 200
Then User validates capital city is "<capitalCity>"


Examples:
 |countryName| capitalCity|
 |USA				 | Washington	|
 |Canada	   | Ottawa 	  |
 |Mexico	   | Mexico City|
 
 
 
 @NegativeTest  @regression
Scenario Outline: Nagative Sceario: Get Capital City with Country Name 
Given User submits GET request to "countryNameURL" for "<countryName>"
And User validates response status code is 404
Then User validates error message is "Not Found"
Examples:
 |countryName|
 |Whatever	 |
 |Somewhere	 | 
 |Anuwhere	 |