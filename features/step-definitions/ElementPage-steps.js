const {
    Given,
    When,
    Then
} = require('@wdio/cucumber-framework');

const ElementsPage = require('../pageobjects/ElementsPage');
const SecurePage = require('../pageobjects/secure.page');
const pageobjects = {
    ElementsPage: ElementsPage
}
When(/^I choose buttons$/, async () => {
    await ElementsPage.actionBtnClick("Buttons");
})
When(/^I choose interactions$/, async () => {
    await ElementsPage.actionbtnInteract();
})
