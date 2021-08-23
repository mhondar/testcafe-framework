# testcafe-framework

Test  Cafe


0- Installation

NodeJS
https://nodejs.org/en/ 

NPM 
Package Manager. It’s installed when install NodeJS

VSCode

Extensions
* TestCafe Snippets: Autocompletamiento de codigo
* TestCafe Test Runner: Runner desde el testfile
* TestLatte: Runner visual en VSCode

TestCafe
https://testcafe.io/ 

npm init
npm install testcafe

1- Crear carpeta tests

2- Crear archivo firstTest.js p

fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/example/");

    test("First Test", async t => {
        await t
            .typeText("#developer-name", "TAU")
            .click("#macos")
            .click("#submit-button");
    });


3- Ejecutar

testcafe firefox tests/firstTest.js
testcafe chrome tests/firstTest.js

4- TestCafe Selector

import { Selector } from 'testcafe';

const developerName = Selector("#developer-name");
const osOption = Selector("#macos");
const submitButton = Selector("#submit-button");

fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/example/");

    test("First Test", async t => {
        await t
            .typeText(developerName, "TAU")
            .click(osOption)
            .click(submitButton);
    });

5- Web Page

fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/");   //url por defecto

    test.page("https://devexpress.github.io/testcafe/example/“).   //redefinition de la url en este test
    ("First Test", async t => {
        await t
            .typeText("#developer-name", "TAU")
            .click("#macos")
            .click("#submit-button");
    });

6- Fixture/Metadata

fixture.meta('version', '1')("First Fixture")
    .page("https://devexpress.github.io/testcafe/");

    test.meta('env','production')
    .page("https://devexpress.github.io/testcafe/example/")
    ("First Test", async t => {
        await t
            .typeText("#developer-name", "TAU")
            .click("#macos")
            .click("#submit-button");
    });

testcafe firefox tests/testMetaScripts.js --test-meta env=production

7- Navigate

fixture("Navigate Example")
    .page("https://devexpress.github.io/testcafe/example/");

    test("Navigate Test", async t => {
        await t
            .navigateTo("http://www.google.com")
    });

8- iFrame

import { Selector } from 'testcafe'

const iframeName= Selector('iframe#mce_0_ifr');
const testArea = Selector('body#tinymce.mce-content-body');

fixture("iFrame Fixture")
    .page("http://the-internet-herokuapp.com/iframe");

    test("iFrame Test", async t => {
        await t
            .switchToIframe(iframeName)
            .click(testArea)
            .pressKey('ctrl+a delete')
            .typeText(testArea, 'Hello from TAU')
            .expect(testArea.innerText).contains('TAU')
            .switchToMainWindow();
    });

9- Dropdown List

import { Selector } from 'testcafe'

const interfaceSelect = Selector('select#preferred-interface');
const interfaceOptions = interfaceSelect.find('option');

fixture("Select element from dropdown list")
    .page("https://devexpress.github.io/testcafe/example/");

    test("select element test", async t => {
        await t
            .click(interfaceSelect)
            .click(interfaceOptions.withText('Both'));
    });

10- Upload File

import { Selector } from 'testcafe'

const fileUpload = Selector('input#file-upload');
const uploadFileButton = Selector('input#file-submit.button');

fixture("File Upload Fixture")
    .page("https://the-internet.herokuapp.com/upload");

    test("File Uload test", async t => {
        await t
            .setFilesToUpload(fileUpload, '../../upload/logo.png')
            .clearUpload(fileUpload)
            .setFilesToUpload(fileUpload, '../../upload/logo.png')
            .click(uploadFileButton);
    });


11- Test Speed 

fixture("Speed Test")
    .page("https://devexpress.github.io/testcafe/example/");

    test("Set Speed Test", async t => {
        await t
            .setTestSpeed(0.01)
            .typeText("#developer-name", "TAU")
            .click("#macos")
            .click("#submit-button");
    });

12- Set Page Timeout

fixture("Page Timeout Test")
    .page("http://devexpress.github.io/testcafe/");

    test("Set Page Timeout Test", async t => {
        await t
            .setPageLoadTimeout(0)
            .navigateTo('http://devexpress.github.io/testcafe/');
    });


13- Drag element

import { Selector } from 'testcafe'

const triedCheckbox = Selector('label').withText('I have tried TestCafe');
const slider = Selector('div#slider');

fixture("Drag")
    .page("https://devexpress.github.io/testcafe/example/");

    test("Drag Test", async t => {
        await t
            .setTestSpeed(0.01)
            .click(triedCheckbox)
            .drag(slider,360,0,{offsetX:10, offsetY:10});
    });


14- Hover element

fixture("Hover")
    .page("https://devexpress.github.io/testcafe/example/");

    test("Hover Test", async t => {
        await t
            .setTestSpeed(0.01)
            .hover('input#populate');
    });


15- Hooks

fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/")
    .beforeEach(async t => {
        await t
            .maximizeWindow()
            .setTestSpeed(0.1)
            .setPageLoadTimeout(0);
    });
    
    test
    .page("https://devexpress.github.io/testcafe/example/")
    ("First Test", async t => {
        await t
            .typeText("#developer-name", "TAU")
            .click("#macos")
            .click("#submit-button");
    });

    test
    .page("https://devexpress.github.io/testcafe/example/")
    ("Second Test", async t => {
        await t
            .typeText("#developer-name", "TAU")
            .click("#macos")
            .click("#submit-button");
    });

16- Assertions

import { Selector } from 'testcafe';

const developerName = Selector("#developer-name");
const osOption = Selector("#macos");
const submitButton = Selector("#submit-button");

fixture("First Fixture with Selector of TestCafe")
    .page("https://devexpress.github.io/testcafe/example/");

    test("First Test with selector", async t => {
        await t
            .expect(developerName.value).eql('', 'input is empty')
            .typeText(developerName, "TAU")
            .expect(developerName.value).eql('TAU', 'input contains "TAU"')
            .click(osOption)
            .click(submitButton);
    });

17- Skip Test

fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/")
    .beforeEach(async t => {
        await t
            .maximizeWindow()
            .setTestSpeed(0.1)
            .setPageLoadTimeout(0);
    });
    
    test.skip
    .page("https://devexpress.github.io/testcafe/example/")
    ("First Test", async t => {
        await t
            .typeText("#developer-name", "TAU")
            .click("#macos")
            .click("#submit-button");
    });

    test
    .page("https://devexpress.github.io/testcafe/example/")
    ("Second Test", async t => {
        await t
            .typeText("#developer-name", "TAU")
            .click("#macos")
            .click("#submit-button");
    });

17- Only Test

fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/")
    .beforeEach(async t => {
        await t
            .maximizeWindow()
            .setTestSpeed(0.1)
            .setPageLoadTimeout(0);
    });
    
    test.only
    .page("https://devexpress.github.io/testcafe/example/")
    ("First Test", async t => {
        await t
            .typeText("#developer-name", "TAU")
            .click("#macos")
            .click("#submit-button");
    });

    test
    .page("https://devexpress.github.io/testcafe/example/")
    ("Second Test", async t => {
        await t
            .typeText("#developer-name", "TAU")
            .click("#macos")
            .click("#submit-button");
    });

18- Client-Side Info

Check a Page URL

import { Selector, ClientFunction } from 'testcafe';

const developerName = Selector("#developer-name");
const osOption = Selector("#macos");
const submitButton = Selector("#submit-button");

const getPageURL = ClientFunction(() => window.location.href);

fixture("First Fixture with Selector of TestCafe")
    .page("https://devexpress.github.io/testcafe/example/");

    test("First Test with selector", async t => {
        await t
            .typeText(developerName, "TAU")
            .click(osOption)
            .click(submitButton)
            .expect(getPageURL()).contains('thank-you');
    });


19- Test Execution

Saber cuavegadores estan habilitados

testcafe --list-browsers

Ejecutar con varios navegadores al mismo tiempo

testcafe chrome,safari,firefox tests/clientFunctionTest.js

Ejecutar con todos los navegadores que testcafe soporta en la maquina local

testcafe all tests/clientFunctionTest.js


20- Run Test in Parallel

Ejecutar 3 instancias en chrome 

testcafe -c 2 chrome tests/HooksTest.js


20- Live Mode. OOOOKKKKK

testcafe chrome tests/firstTest.js -L


21- Filter Tests by Metadata 

testcafe chrome tests/testMetaScripts.js --test-meta env=production


22- Filter Tests by Name 

testcafe chrome tests/HooksTest.js -t "First Test"


23- Headless Mode

Solo para Chrome y Firefox

testcafe chrome:headless tests/HooksTest.js
testcafe firefox:headless tests/HooksTest.js

24- Chromium Device Emulation

testcafe "chrome:emulation:device=iphone X" tests/HooksTest.js


25- Wait


import { Selector } from 'testcafe';

const developerName = Selector("#developer-name");
const osOption = Selector("#macos");
const submitButton = Selector("#submit-button");

fixture("First Fixture with Selector of TestCafe")
    .page("https://devexpress.github.io/testcafe/example/");

    test("First Test with selector", async t => {
        const developerNameElement = await developerName.with({visibilityCheck:true})();
        await t
            .expect(developerNameElement.value).eql('', 'input is empty')
            .typeText(developerName, "TAU")
            .expect(developerName.value).eql('TAU', 'input contains "TAU"')
            .click(osOption)
            .click(submitButton);
    });

26- Debugging

import { Selector } from 'testcafe'

const fileUpload = Selector('input#file-upload');
const uploadFileButton = Selector('input#file-submit.button');

fixture("File Upload Fixture")
    .page("https://the-internet.herokuapp.com/upload");

    test("File Uload test", async t => {
        await t
            .setFilesToUpload(fileUpload, '../../upload/logo.png')
            .clearUpload(fileUpload)
            .setFilesToUpload(fileUpload, '../../upload/logo.png')
            .debug()
            .click(uploadFileButton);
    });

Pasa a debug mode si falla:

testcafe chrome tests/HooksTest.js --debug-on-fail


27- Take Screenshot

fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/")
    .beforeEach(async t => {
        await t
            .maximizeWindow()
            .setTestSpeed(0.1)
            .setPageLoadTimeout(0);
    });
    
    test
    .page("https://devexpress.github.io/testcafe/example/")
    ("First Test", async t => {
        await t
            .typeText("#developer-name", "TAU")
            .click("#macos")
            .click("#submit-button")
            .takeScreenshot();
    });

    test
    .page("https://devexpress.github.io/testcafe/example/")
    ("Second Test", async t => {
        await t
            .typeText("#developer-name", "TAU")
            .click("#macos")
            .takeElementScreenshot("#submit-button")
            .click("#submit-button");
    });


If Fail

testcafe chrome tests/Screenshot.js -s takeOnFails=true


28- Video Recording

Install ffmpeg library

 https://www.npmjs.com/package/@ffmpeg-installer/ffmpeg

npm i @ffmpeg-installer/ffmpeg

Uso

testcafe chrome tests/firstTest.js --video artifacts/videos

Graba Video solo si falla

testcafe chrome tests/firstTest.js --video artifacts/videos --video-options failedOnly=true

28- Page Model

Crear carpeta en el root del proyecto llamada pages
Dentro crear las POM como:

//*********************************************************************

import { Selector,t } from "testcafe";

class HomePage {
    constructor(){
        this.subtitleHeader = Selector('h2').withText('Welcome to our store')
        this.registerLink = Selector('a').withText('Register')
        this.loginLink = Selector('a').withText('Log in')
        this.cartLink = Selector('a').withText('Shopping cart')
        this.currencyList = Selector('select#customerCurrency')
        this.myAccountLink = Selector('a').withText('My account')
        this.logoutLink = Selector('a').withText('Log out')
    }

    get productSearch(){
        return Selector("input[id='small-searchterms']");
    }

    async search(product){
        await t
            .typeText(this.productSearch(),product)
            .wait(3000)
            .pressKey('enter');
    }

    async changeCurrency(currency){
        await t
            .click(this.currencyList)
            .click(Selector('option', {text: currency}));
    }
}
export default new HomePage();

//*********************************************************************

import { Selector,t } from "testcafe";

class RegisterPage {
    constructor(){
        this.genderOption = Selector('#gender-male')
        this.firstName = Selector('#FirstName')
        this.lastName = Selector('#LastName')
        this.dataOfBirthDayList = Selector('select[name="DateOfBirthDay"]')
        this.dataOfBirthMonthList = Selector('select[name="DateOfBirthMonth"]')
        this.dataOfBirthYearList = Selector('select[name="DateOfBirthYear"]')
        this.email = Selector('#Email')
        this.password = Selector('#Password')
        this.confirmPassword = Selector('#ConfirmPassword')
        this.registerButton = Selector('#register-button')
        this.successfullMessage = Selector('div.result').withText('Your registration completed');
    }

    async selectDay(day){
        const dayOption = this.dataOfBirthDayList.find('option');
        await t
            .click(this.dataOfBirthDayList)
            .click(dayOption.withText(day));
    }

    async selectMonth(month){
        const monthOption = this.dataOfBirthMonthList.find('option');
        await t
            .click(this.dataOfBirthMonthList)
            .click(monthOption.withText(month));
    }

    async selectYear(year){
        const yearOption = this.dataOfBirthYearList.find('option');
        await t
            .click(this.dataOfBirthYearList)
            .click(yearOption.withText(year));
    }
}
export default new RegisterPage();

//*********************************************************************

import { Selector } from "testcafe";

class CustomerPage {
    constructor(){
        this.ordersLink = Selector('a').withText('Orders')
        this.noOrdersLabel = Selector('div.no-data').withText('No orders');
    }

}
export default new CustomerPage();

//*********************************************************************

import { Selector } from "testcafe";

class LoginPage {
    constructor(){
        this.emailInput = Selector('#Email')
        this.passwordInput = Selector('#Password')
        this.submitButton = Selector('input.button-1.login-button')
        this.accountHeader = Selector('strong').withText('Returning Customer');
    }
}
export default new LoginPage();

//*********************************************************************

RegistrationTest.js

import { ClientFunction } from "testcafe";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import CustomerPage from "../pages/CustomerPage";

const URL = "https://demo.nopcommerce.com/";
const getURL = ClientFunction(() => window.location.href);
var randomNumber = Math.floor(Math.random() * 10000);
var userEmail = 'mhondar' + randomNumber + '@test.com'

fixture("Registration Fixture")
    .page(URL);

test('Assert Home Page Test', async t => {
    await t
        .expect(getURL()).eql(URL)
        .takeScreenshot()
        .expect(HomePage.subtitleHeader.exists).ok();
});

test('User Registration and Login Test', async t => {
    await t
        .click(HomePage.registerLink)
        .expect(getURL()).contains('register')
        .click(RegisterPage.genderOption)
        .typeText(RegisterPage.firstName,'Mari')
        .typeText(RegisterPage.lastName, 'Hondar');
        await RegisterPage.selectDay('8');
        await RegisterPage.selectMonth('January');
        await RegisterPage.selectYear('1986');
        await t
            .typeText(RegisterPage.email,userEmail)
            .typeText(RegisterPage.password,'123456')
            .typeText(RegisterPage.confirmPassword,'123456')
            .click(RegisterPage.registerButton)
            .expect(RegisterPage.successfullMessage.exists).ok();

});

29- TestCafe Configuration File

crear archivo en el root llamado .testcaferc.json

{
    "browsers": "chrome",
    "src": "test",
    "reporter": "list",
    "screenshots": {
        "path": "report/screenshots",
        "takeOnFails": true,
        "fullPage": true
    },
    "videoPath": "reports/videos",
    "videoOptions": {
        "singleFile": true,
        "failedOnly": true
    },
    "concurrency": 1,
    "selectorTimeout": 3000,
    "assertionTimeout": 1000,
    "pageLoadTimeout": 1000,
    "speed": 0.1
}

en el package.json colocar en script

 "scripts": {
    "test": "testcafe"
  },

ejecutar ahora con npm test

se ejecutara las pruebas acorde a la configuración pero si usamos el comando anterior usado se pisan estas configuraciones.


30- Data Driver Test

Se crea carpeta data y dentro los archivos con datos necesarios

ejemplo

[
    {
        "firstname": "Mari",
        "lastname": "Hondar",
        "birthday": "8",
        "birthmonth": "January",
        "birthyear": "1986",
        "email": "mhondar",
        "password": "123456"
    },
    {
        "firstname": "Adrian",
        "lastname": "Torres",
        "birthday": "6",
        "birthmonth": "Fabruary",
        "birthyear": "1988",
        "email": "adriangrana",
        "password": "123456"
    }
]

se crea en el archivo test 

import { ClientFunction } from "testcafe";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import CustomerPage from "../pages/CustomerPage";

const dataSet = require('../data/data.json');
const URL = "https://demo.nopcommerce.com/";
const getURL = ClientFunction(() => window.location.href);
var randomNumber = Math.floor(Math.random() * 10000);
var userEmail = 'mhondar' + randomNumber + '@test.com'

fixture("Registration Fixture")
    .page(URL);

test('Assert Home Page Test', async t => {
    await t
        .expect(getURL()).eql(URL)
        .takeScreenshot()
        .expect(HomePage.subtitleHeader.exists).ok();
});
dataSet.forEach(data => { 
test('User Registration and Login Test', async t => {
    await t
        .click(HomePage.registerLink)
        .expect(getURL()).contains('register')
        .click(RegisterPage.genderOption)
        .typeText(RegisterPage.firstName,data.firstname)
        .typeText(RegisterPage.lastName, data.lastname);
        await RegisterPage.selectDay(data.birthday);
        await RegisterPage.selectMonth(data.birthmonth);
        await RegisterPage.selectYear(data.birthyear);
        await t
            .typeText(RegisterPage.email,userEmail)
            .typeText(RegisterPage.password,data.password)
            .typeText(RegisterPage.confirmPassword,data.password)
            .click(RegisterPage.registerButton)
            .expect(RegisterPage.successfullMessage.exists).ok()
            .takeScreenshot();

})});

31- Instalar CUCUMBER

npm install --save-dev @cucumber/cucumber

el package.json tender la siguiente información

{
  "name": "testcafetau",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "testcafe"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@ffmpeg-installer/ffmpeg": "^1.1.0",
    "testcafe": "^1.15.3"
  },
  "devDependencies": {
    "cucumber": "^7.0.0-rc.0"
  }
}


31- Crear Features

en el root del proyecto crear carpeta features y dentro la carpeta step_definition. Dentro de features se crean los archivos test.feature

Feature: Registration Feature

              As a visitor a can create a new account by the registration Feature

        Scenario: New User Registration E2E Escenario
            Given I open the registration page
             When I select the gender
              And I enter First Name "Mari"
              And I enter Last Name "Hondar"
              And I select Date of Birth "8"
              And I select Month of Birth "January"
              And I select Year of Birth "1986"
              And I enter email "mhondar@hrh.com"
              And I enter password "123456"
              And I click register button
             Then Successfull Message is displayed


31- Crear cucumber configuration file

en el root del proyecto crear archivo cucumber.js con esta información

module.exports = {
  default: `--format-options '{"snippetInterface": "synchronous"}'`
}


32- Crear step definitions

crear archivos .js con los steps dentro de la carpeta correspondiente y colocar encima

const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

33- Ejecutar cucumber

npx cucumber-js

Se mostraran los snippets para crear los steps definitions

34- Implementar steps definitions

const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");

const URL = "https://demo.nopcommerce.com/";

Given("I open the registration page", async function () {
  
});

When("I select the gender", async function () {
  
});

When("I enter First Name {string}", async function (firstname) {
  
});

When("I enter Last Name {string}", async function (lastname) {
  
});

When("I select Date of Birth {string}", async function (day) {
  
});

When("I select Month of Birth {string}", async function (month) {
  
});

When("I select Year of Birth {string}", async function (year) {
  
});

When("I enter email {string}", async function (email) {
  
});

When("I enter password {string}", async function (password) {
  
});

When("I click register button", async function () {
  
});

Then("Successfull Message is displayed", async function () {
  
});



35- POM adaptacion con cucumber integration

La anterior forma de trabajar las POM no funcionara con cucumber ahora tenemos que generar una nueva clase

const {Selector} = require('testcafe');

function select(selector) {
    return Selector(selector).with({boundTestRun:testController})
}

exports.RegisterPage ={
    GenderButton: function(){
        return select('#gender-male');
    },
    Firstname: function() {
        return select('#FirstName');
    },
    LastName: function() {
        return select('#LastName');
    },
    DateOfBirthDay: function() {
        return select('select[name="DateOfBirthDay"]');
    },
    DateOfBirthMonth: function() {
        return select('select[name="DateOfBirthMonth"]');
    },
    DateOfBirthYear: function() {
        return select('select[name="DateOfBirthYear"]');
    },
    Email: function() {
        return select('#Email');
    },
    Password: function() {
        return select('#Password');
    },
    ConfirmPassword: function() {
        return select('#ConfirmPassword');
    },
    RegisterButton: function() {
        return select('select[#register-button');
    },
    SuccessfullMessage: function() {
        return select('div.result').withText('Your registration completed');
    },
    ListOption: function() {
        return select('option');
    }
}

36- Usar POM en los Steps Definitions

const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");
const registerPage = require('../../pages/RegisterPage.js')

const URL = "https://demo.nopcommerce.com/";

Given("I open the registration page", async function () {
  await testController.navigateTo(URL);
});

When("I select the gender", async function () {
    await testController
        .click(registerPage.RegisterPage.GenderButton());
});

When("I enter First Name {string}", async function (firstname) {
    await testController
    .typeText(registerPage.RegisterPage.Firstname(), firstname);
});

When("I enter Last Name {string}", async function (lastname) {
    await testController
    .typeText(registerPage.RegisterPage.LastName(), lastname);
});

When("I select Date of Birth {string}", async function (day) {
    await testController
    .click(registerPage.RegisterPage.DateOfBirthDay())
    .click(registerPage.RegisterPage.ListOption().withText(day));
});

When("I select Month of Birth {string}", async function (month) {
    await testController
    .click(registerPage.RegisterPage.DateOfBirthMonth())
    .click(registerPage.RegisterPage.ListOption().withText(month));
});

When("I select Year of Birth {string}", async function (year) {
    await testController
    .click(registerPage.RegisterPage.DateOfBirthYear())
    .click(registerPage.RegisterPage.ListOption().withText(year));
});

When("I enter email {string}", async function (email) {
    await testController
    .typeText(registerPage.RegisterPage.Email(), email);
});

When("I enter password {string}", async function (password) {
    await testController
    .typeText(registerPage.RegisterPage.Password(), password);
});

When("I click register button", async function () {
    await testController
    .click(registerPage.RegisterPage.RegisterButton())
});

Then("Successfull Message is displayed", async function () {
    await testController
        .expect(registerPage.RegisterPage.SuccessfullMessage().exists).ok;
});

37- Archivos Support



38- Scenarios Outline

Feature: Registration Feature

              As a visitor I can create a new account by the registration feature

        @e2e
        Scenario Outline: New User Registration E2E Scenario
            Given I open the registration page
             When I select the gender
              And I enter First Name "<firstname>"
              And I enter Last Name "<lastname>"
              And I select Date of Birth "<day>"
              And I select Month of Birth "<month>"
              And I select Year of Birth "<year>"
              And I enter Email "<email>"
              And I enter Password "<password>"
              And I enter Confirm Password "<password>"
              And I click register button
             Then successful message is displayed
        Examples:
                  | firstname | lastname | email              | password | day | month    | year |
                  | moataz    | nabil    | moatazddd@test.com | 123456   | 5   | November | 1983 |
                  | james     | bond     | jamessss@test.com  | 789443   | 6   | July     | 1970 |

39- Tags

./node_modules/.bin/cucumber-js --tags "@e2e"


40- Ejecutar desde el package.json

sustituir 

  "scripts": {
    "test": "cucumber-js --tags '@e2e'"
  },

ejecutar

npm test

41- Cucumber html report


npm i cucumber-html-reporter

crear archivo report-generator.js

var reporter = require('cucumber-html-reporter');
 
var options = {
        theme: 'bootstrap',
        jsonFile: 'reports/report.json',
        output: 'report/cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };
 
reporter.generate(options);

en package.json agregar 

sustituir 

 "scripts": {
    "test": "cucumber-js --tags '@e2e' --format json:reports/report.json"
  },





