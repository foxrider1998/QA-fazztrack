const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const HomePage = require('../pageobjects/home_page');
const pageobjects = {
    login: LoginPage,
    home : HomePage
}


When(/^I choose laptop category$/, async () => {
    await HomePage.openCategorie();
});

When(/^I choose vaio i5$/, async () => {
    await HomePage.vaioi5();
});

When(/^I choose add to cart$/, async () => {
    await HomePage.addToCart();
});

When('I am accepts Alert', async() => {
    await browser.pause(1000);
    await browser.acceptAlert();
    await browser.pause(1000); 
})

When(/^I choose cart$/, async () => {
    await HomePage.viewMyCart();
    await browser.pause(2000);

});

When(/^I delete first item$/, async () => {
    await HomePage.deleteFirstItem();
    await browser.pause(2000);

});

