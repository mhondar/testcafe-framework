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