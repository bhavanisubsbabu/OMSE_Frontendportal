$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Featurefiles/1.0.2.SignIn.feature");
formatter.feature({
  "name": "User Sign In to OSME portal",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SignIn"
    }
  ]
});
formatter.background({
  "name": "User is on OSME Homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "selenium is required",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonStepDef.selenium_is_required()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat uk.os.utils.BrowserFactory.getRemoteDriver(BrowserFactory.java:52)\r\n\tat uk.os.utils.SeleniumBaseFile.sharedDriver(SeleniumBaseFile.java:38)\r\n\tat uk.os.stepdefinations.CommonStepDef.selenium_is_required(CommonStepDef.java:50)\r\n\tat ✽.selenium is required(src/test/resources/Featurefiles/1.0.2.SignIn.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user navigates to \"OMSEUrl\"",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDef.userNavigatesTo(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "SignUp Functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SignIn"
    }
  ]
});
formatter.step({
  "name": "user is on \"Dashboard\" screen",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonStepDef.userIsOnScreen(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"SignIn_Button\"",
  "keyword": "When "
});
formatter.match({
  "location": "SignUp.userClicksOn(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Sign-in screen is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.signInScreenIsDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter \"seleniumtest@mailinator.com\" in \"Email_Address_Field\"",
  "keyword": "And "
});
formatter.match({
  "location": "SignUp.userEnterIn(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter \"Password1\" in \"Password_Field\"",
  "keyword": "And "
});
formatter.match({
  "location": "SignUp.userEnterIn(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Sign_In_Button\"",
  "keyword": "And "
});
formatter.match({
  "location": "SignUp.userClicksOn(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "dashboard displays with users display name indicating successful login",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.dashboardDisplaysWithUsersDisplayNameIndicatingSuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user logout",
  "keyword": "And "
});
formatter.match({
  "location": "Login.userLogout()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"SignIn_Button\"",
  "keyword": "When "
});
formatter.match({
  "location": "SignUp.userClicksOn(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter \"seleniumtest@test.com\" in \"Email_Address_Field\"",
  "keyword": "And "
});
formatter.match({
  "location": "SignUp.userEnterIn(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter \"Password1\" in \"Password_Field\"",
  "keyword": "And "
});
formatter.match({
  "location": "SignUp.userEnterIn(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Sign_In_Button\"",
  "keyword": "And "
});
formatter.match({
  "location": "SignUp.userClicksOn(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "an error message \"We can\u0027t seem to find your account\" displays",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.anErrorMessageDisplays(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter correct emailId \"seleniumtest@mailinator.com\" in \"Email_Address_Field\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login.userEnterCorrectEmailIdIn(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter \"Password\" in \"Password_Field\"",
  "keyword": "And "
});
formatter.match({
  "location": "SignUp.userEnterIn(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Sign_In_Button\"",
  "keyword": "And "
});
formatter.match({
  "location": "SignUp.userClicksOn(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "an error message \"Your password is incorrect\" displays",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.anErrorMessageDisplays(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "\"don\u0027t have an account?\" text is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Login.something_text_is_displayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "\"Sign up now\" link is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Login.something_link_is_displayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Sign_Up_Now_Link\"",
  "keyword": "When "
});
formatter.match({
  "location": "SignUp.userClicksOn(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Sign up screen is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SignUp.signUpScreenIsDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});