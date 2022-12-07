const { Given, When, Then } = require('@wdio/cucumber-framework');

const HomePage = require('../pageobjects/home_page');
const pageobjects = {
    home : HomePage
}

When(/^I logout$/, async () => {
    await HomePage.actionLogout()
});

