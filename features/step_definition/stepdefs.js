const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const registerPage = require('../../pages/RegisterPage.js');

const URL = 'https://demo.nopcommerce.com/';

Given('I open the registration page', async function () {
  await testController.navigateTo(URL);
});

When('I select the gender', async function () {
    await testController
        .click(registerPage.RegisterPage.GenderButton());
});

When('I enter First Name {string}', async function (firstname) {
    await testController
    .typeText(registerPage.RegisterPage.Firstname(), firstname);
});

When('I enter Last Name {string}', async function (lastname) {
    await testController
    .typeText(registerPage.RegisterPage.LastName(), lastname);
});

When('I select Date of Birth {string}', async function (day) {
    await testController
    .click(registerPage.RegisterPage.DateOfBirthDay())
    .click(registerPage.RegisterPage.ListOption().withText(day));
});

When('I select Month of Birth {string}', async function (month) {
    await testController
    .click(registerPage.RegisterPage.DateOfBirthMonth())
    .click(registerPage.RegisterPage.ListOption().withText(month));
});

When('I select Year of Birth {string}', async function (year) {
    await testController
    .click(registerPage.RegisterPage.DateOfBirthYear())
    .click(registerPage.RegisterPage.ListOption().withText(year));
});

When('I enter Email {string}', async function (email) {
    await testController
    .typeText(registerPage.RegisterPage.Email(), email);
});

When('I enter Password {string}', async function (password) {
    await testController
    .typeText(registerPage.RegisterPage.Password(), password);
});

When('I enter Confirm Password {string}', async function (password) {
    await testController
    .typeText(registerPage.RegisterPage.ConfirmPassword(), password);
  });

When('I click register button', async function () {
    await testController
    .click(registerPage.RegisterPage.RegisterButton())
  });

Then('Successfull Message is displayed', async function () {
    await testController
        .expect(registerPage.RegisterPage.SuccessfullMessage().exists).ok;
});
