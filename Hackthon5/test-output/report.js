$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Mycart.feature");
formatter.feature({
  "line": 1,
  "name": "Login into application",
  "description": "",
  "id": "login-into-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "TC014 Return Product validation",
  "description": "",
  "id": "login-into-application;tc014-return-product-validation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Navigate to Cart URL",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User click on My account and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "User fill the Login form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user going to shopping cart and estimate taxes",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "enter details and click quote",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "flat shipping and scrrenshot",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "billing details and continue",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "return to home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "login-into-application;tc014-return-product-validation;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 16,
      "id": "login-into-application;tc014-return-product-validation;;1"
    },
    {
      "cells": [
        "Login",
        "0"
      ],
      "line": 17,
      "id": "login-into-application;tc014-return-product-validation;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 22733099,
  "status": "passed"
});
formatter.before({
  "duration": 6133558200,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "TC014 Return Product validation",
  "description": "",
  "id": "login-into-application;tc014-return-product-validation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Navigate to Cart URL",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User click on My account and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "User fill the Login form from given sheetname \"Login\" and rownumber 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user going to shopping cart and estimate taxes",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "enter details and click quote",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "flat shipping and scrrenshot",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "billing details and continue",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "return to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.navigate_to_Cart_URL()"
});
formatter.result({
  "duration": 6711386900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_on_My_account_and_Login()"
});
formatter.result({
  "duration": 4075808800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 47
    },
    {
      "val": "0",
      "offset": 68
    }
  ],
  "location": "StepDefinition.user_fill_the_Login_form_from_given_sheetname_and_rownumber(String,int)"
});
formatter.result({
  "duration": 13947282601,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_should_be_logged_in_successfully()"
});
formatter.result({
  "duration": 41136600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_going_to_shopping_cart_and_estimate_taxes()"
});
formatter.result({
  "duration": 3415734700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.enter_details_and_click_quote()"
});
formatter.result({
  "duration": 4328452800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.flat_shipping_and_scrrenshot()"
});
formatter.result({
  "duration": 7946212100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.billing_details_and_continue()"
});
formatter.result({
  "duration": 23520899400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"button-confirm\"]\"}\n  (Session info: chrome\u003d89.0.4389.128)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:01:39.354Z\u0027\nSystem info: host: \u0027DESKTOP-ETLRJL6\u0027, ip: \u0027192.168.1.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.128, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\atish\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62415}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c4e9bec773f4fba9773cc60481db0813\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"button-confirm\"]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:472)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\r\n\tat stepDefinition.StepDefinition.billing_details_and_continue(StepDefinition.java:238)\r\n\tat ✽.And billing details and continue(Mycart.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.return_to_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1421094300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "TC015 Add to wishlist validation",
  "description": "",
  "id": "login-into-application;tc015-add-to-wishlist-validation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "Navigate to Cart URL",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User click on My account and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User fill the Login form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Select a product and add to wishlist",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "login-into-application;tc015-add-to-wishlist-validation;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 27,
      "id": "login-into-application;tc015-add-to-wishlist-validation;;1"
    },
    {
      "cells": [
        "Login",
        "0"
      ],
      "line": 28,
      "id": "login-into-application;tc015-add-to-wishlist-validation;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 33675600,
  "status": "passed"
});
formatter.before({
  "duration": 6732200900,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "TC015 Add to wishlist validation",
  "description": "",
  "id": "login-into-application;tc015-add-to-wishlist-validation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "Navigate to Cart URL",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User click on My account and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User fill the Login form from given sheetname \"Login\" and rownumber 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Select a product and add to wishlist",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.navigate_to_Cart_URL()"
});
formatter.result({
  "duration": 6695018900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_on_My_account_and_Login()"
});
formatter.result({
  "duration": 5137335699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 47
    },
    {
      "val": "0",
      "offset": 68
    }
  ],
  "location": "StepDefinition.user_fill_the_Login_form_from_given_sheetname_and_rownumber(String,int)"
});
formatter.result({
  "duration": 7589094700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.select_a_product_and_add_to_wishlist()"
});
formatter.result({
  "duration": 14983199800,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d89.0.4389.128)\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:01:39.354Z\u0027\nSystem info: host: \u0027DESKTOP-ETLRJL6\u0027, ip: \u0027192.168.1.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.128, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\atish\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62508}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 6c25ff695113aea2ddeb5290108cc1b9\n*** Element info: {Using\u003dxpath, value\u003d//select[@id\u003d\u0027input-sort\u0027] }\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:472)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\r\n\tat pages.ProductPage.selectProductToWishlist(ProductPage.java:93)\r\n\tat stepDefinition.StepDefinition.select_a_product_and_add_to_wishlist(StepDefinition.java:133)\r\n\tat ✽.Then Select a product and add to wishlist(Mycart.feature:24)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1017919600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 30,
  "name": "TC016 Return Product validation",
  "description": "",
  "id": "login-into-application;tc016-return-product-validation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "Navigate to Cart URL",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "User click on My account and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "User fill the Login form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Navigate to order History and return the product",
  "keyword": "And "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "login-into-application;tc016-return-product-validation;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 38,
      "id": "login-into-application;tc016-return-product-validation;;1"
    },
    {
      "cells": [
        "Login",
        "0"
      ],
      "line": 39,
      "id": "login-into-application;tc016-return-product-validation;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 578900,
  "status": "passed"
});
formatter.before({
  "duration": 13610241900,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d89.0.4389.128)\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:01:39.354Z\u0027\nSystem info: host: \u0027DESKTOP-ETLRJL6\u0027, ip: \u0027192.168.1.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x006BE7D3+124883]\n\tOrdinal0 [0x006BE7B1+124849]\n\tGetHandleVerifier [0x00908688+193832]\n\tGetHandleVerifier [0x008FCB71+145937]\n\tGetHandleVerifier [0x008FC7F9+145049]\n\tGetHandleVerifier [0x008FBF7D+142877]\n\tGetHandleVerifier [0x008FB45E+140030]\n\tGetHandleVerifier [0x008FB6E6+140678]\n\tGetHandleVerifier [0x008FB025+138949]\n\tGetHandleVerifier [0x00904679+177433]\n\tGetHandleVerifier [0x008FAFE1+138881]\n\tGetHandleVerifier [0x008FBD62+142338]\n\tGetHandleVerifier [0x008FB45E+140030]\n\tGetHandleVerifier [0x008FB6E6+140678]\n\tGetHandleVerifier [0x008FB025+138949]\n\tGetHandleVerifier [0x00902A0A+170154]\n\tGetHandleVerifier [0x008FAFE1+138881]\n\tGetHandleVerifier [0x008FBD62+142338]\n\tGetHandleVerifier [0x008FB45E+140030]\n\tGetHandleVerifier [0x008FB6E6+140678]\n\tGetHandleVerifier [0x008FB025+138949]\n\tGetHandleVerifier [0x00900D69+162825]\n\tGetHandleVerifier [0x008FAFE1+138881]\n\tGetHandleVerifier [0x008FBD62+142338]\n\tGetHandleVerifier [0x008FB45E+140030]\n\tGetHandleVerifier [0x008FB6E6+140678]\n\tGetHandleVerifier [0x008FB025+138949]\n\tGetHandleVerifier [0x0090017C+159772]\n\tGetHandleVerifier [0x008FAFE1+138881]\n\tGetHandleVerifier [0x008FBD62+142338]\n\tGetHandleVerifier [0x008FB45E+140030]\n\tGetHandleVerifier [0x008FB6E6+140678]\n\tGetHandleVerifier [0x008FB025+138949]\n\tGetHandleVerifier [0x008F76ED+124301]\n\tGetHandleVerifier [0x008FAFE1+138881]\n\tGetHandleVerifier [0x008FAE03+138403]\n\tGetHandleVerifier [0x008FABF7+137879]\n\tGetHandleVerifier [0x00909930+198608]\n\tGetHandleVerifier [0x00945758+443896]\n\tGetHandleVerifier [0x009447FC+439964]\n\tGetHandleVerifier [0x0094154B+426987]\n\tGetHandleVerifier [0x00924FFD+310941]\n\tGetHandleVerifier [0x00925D8E+314414]\n\tGetHandleVerifier [0x00925D19+314297]\n\tGetHandleVerifier [0x009E31EC+1089676]\n\tGetHandleVerifier [0x009E17C9+1082985]\n\tGetHandleVerifier [0x009E13A3+1081923]\n\tGetHandleVerifier [0x00ADD9FD+2115741]\n\tOrdinal0 [0x0080B82E+1488942]\n\tOrdinal0 [0x007A5A7D+1071741]\n\tOrdinal0 [0x007A559B+1070491]\n\tOrdinal0 [0x007A54B1+1070257]\n\tOrdinal0 [0x007DFF53+1310547]\n\tBaseThreadInitThunk [0x7637FA29+25]\n\tRtlGetAppContainerNamedObjectPath [0x778A7A4E+286]\n\tRtlGetAppContainerNamedObjectPath [0x778A7A1E+238]\n\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:123)\r\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\r\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:219)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:142)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat driverfactory.DriverFactory.init_driver(DriverFactory.java:38)\r\n\tat stepDefinition.StepDefinition.launchBrowser(StepDefinition.java:56)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 39,
  "name": "TC016 Return Product validation",
  "description": "",
  "id": "login-into-application;tc016-return-product-validation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "Navigate to Cart URL",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "User click on My account and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "User fill the Login form from given sheetname \"Login\" and rownumber 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Navigate to order History and return the product",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.navigate_to_Cart_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_click_on_My_account_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 47
    },
    {
      "val": "0",
      "offset": 68
    }
  ],
  "location": "StepDefinition.user_fill_the_Login_form_from_given_sheetname_and_rownumber(String,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_should_be_logged_in_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.navigate_to_order_History_and_return_the_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 230500,
  "error_message": "java.lang.NullPointerException: Cannot invoke \"org.openqa.selenium.WebDriver.quit()\" because \"this.driver\" is null\r\n\tat stepDefinition.StepDefinition.quitBrowser(StepDefinition.java:263)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
});