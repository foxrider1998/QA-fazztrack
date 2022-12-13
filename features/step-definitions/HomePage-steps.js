const {
    Given,
    When,
    Then
} = require('@wdio/cucumber-framework');
const homePage = require('../pageobjects/homePage');

const HomePage = require('../pageobjects/homePage');
const SecurePage = require('../pageobjects/secure.page');
const pageobjects = {
    HomePage: HomePage
}

Given(/^I am on the first page$/, async () => {
    await HomePage.open('https://demoqa.com/')
})
When(/^I open elements$/,async ()=>{
    await HomePage.chooseBtnElements()
}) 
When(/^I open interact$/,async ()=>{
    await HomePage.chooseBtnInteract()
}) 

