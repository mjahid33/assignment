$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/CountriesAPI.feature");
formatter.feature({
  "name": "Capital city of Countries",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Positive Sceario: Get Capital City with Country Name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PositiveTest"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "User submits GET request to \"countryNameURL\" for \"\u003ccountryName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "User validates response status code is 200",
  "keyword": "And "
});
formatter.step({
  "name": "User validates capital city is \"\u003ccapitalCity\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "countryName",
        "capitalCity"
      ]
    },
    {
      "cells": [
        "USA",
        "Washington"
      ]
    },
    {
      "cells": [
        "Canada",
        "Ottawa"
      ]
    },
    {
      "cells": [
        "Mexico",
        "Mexico City"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Positive Sceario: Get Capital City with Country Name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PositiveTest"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User submits GET request to \"countryNameURL\" for \"USA\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CountriesAPISteps.user_submits_GET_request_to_for(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validates response status code is 200",
  "keyword": "And "
});
formatter.match({
  "location": "CountriesAPISteps.user_validates_response_status_code_is(int)"
});
formatter.write("Status Code: 200");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validates capital city is \"Washington\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CountriesAPISteps.user_validates_capital_city_is(String)"
});
formatter.write("Actual Capital City: [\"Washington, D.C.\"]");
formatter.write("Expected Capital City: Washington");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Positive Sceario: Get Capital City with Country Name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PositiveTest"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User submits GET request to \"countryNameURL\" for \"Canada\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CountriesAPISteps.user_submits_GET_request_to_for(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validates response status code is 200",
  "keyword": "And "
});
formatter.match({
  "location": "CountriesAPISteps.user_validates_response_status_code_is(int)"
});
formatter.write("Status Code: 200");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validates capital city is \"Ottawa\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CountriesAPISteps.user_validates_capital_city_is(String)"
});
formatter.write("Actual Capital City: [\"Ottawa\"]");
formatter.write("Expected Capital City: Ottawa");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Positive Sceario: Get Capital City with Country Name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PositiveTest"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User submits GET request to \"countryNameURL\" for \"Mexico\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CountriesAPISteps.user_submits_GET_request_to_for(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validates response status code is 200",
  "keyword": "And "
});
formatter.match({
  "location": "CountriesAPISteps.user_validates_response_status_code_is(int)"
});
formatter.write("Status Code: 200");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validates capital city is \"Mexico City\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CountriesAPISteps.user_validates_capital_city_is(String)"
});
formatter.write("Actual Capital City: [\"Mexico City\"]");
formatter.write("Expected Capital City: Mexico City");
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Nagative Sceario: Get Capital City with Country Name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NegativeTest"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "User submits GET request to \"countryNameURL\" for \"\u003ccountryName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "User validates response status code is 404",
  "keyword": "And "
});
formatter.step({
  "name": "User validates error message is \"Not Found\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "countryName"
      ]
    },
    {
      "cells": [
        "Whatever"
      ]
    },
    {
      "cells": [
        "Somewhere"
      ]
    },
    {
      "cells": [
        "Anuwhere"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Nagative Sceario: Get Capital City with Country Name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NegativeTest"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User submits GET request to \"countryNameURL\" for \"Whatever\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CountriesAPISteps.user_submits_GET_request_to_for(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validates response status code is 404",
  "keyword": "And "
});
formatter.match({
  "location": "CountriesAPISteps.user_validates_response_status_code_is(int)"
});
formatter.write("Status Code: 404");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validates error message is \"Not Found\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CountriesAPISteps.user_validates_error_message_is(String)"
});
formatter.write("Actual Error Message: Not Found");
formatter.write("Expected Error Message: Not Found");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Nagative Sceario: Get Capital City with Country Name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NegativeTest"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User submits GET request to \"countryNameURL\" for \"Somewhere\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CountriesAPISteps.user_submits_GET_request_to_for(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validates response status code is 404",
  "keyword": "And "
});
formatter.match({
  "location": "CountriesAPISteps.user_validates_response_status_code_is(int)"
});
formatter.write("Status Code: 404");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validates error message is \"Not Found\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CountriesAPISteps.user_validates_error_message_is(String)"
});
formatter.write("Actual Error Message: Not Found");
formatter.write("Expected Error Message: Not Found");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Nagative Sceario: Get Capital City with Country Name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NegativeTest"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User submits GET request to \"countryNameURL\" for \"Anuwhere\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CountriesAPISteps.user_submits_GET_request_to_for(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validates response status code is 404",
  "keyword": "And "
});
formatter.match({
  "location": "CountriesAPISteps.user_validates_response_status_code_is(int)"
});
formatter.write("Status Code: 404");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validates error message is \"Not Found\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CountriesAPISteps.user_validates_error_message_is(String)"
});
formatter.write("Actual Error Message: Not Found");
formatter.write("Expected Error Message: Not Found");
formatter.result({
  "status": "passed"
});
});