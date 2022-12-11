const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const HomePage = require('../pageobjects/home_page');
const pageobjects = {
    login: LoginPage,
    home : HomePage
}

Given(/^I am on the index page$/, async () => {

    await LoginPage.index()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});


Then(/^I get welcome arisss(.*)$/, async (message) => {
    await HomePage.verifyLoginSuccess(message)
});