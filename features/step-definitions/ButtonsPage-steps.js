const {
    Given,
    When,
    Then
} = require('@wdio/cucumber-framework');

const ButtonPage = require('../pageobjects/ButtonsPage');
const SecurePage = require('../pageobjects/secure.page');
const pageobjects = {
    ButtonPage: ButtonPage
}
When(/^I choose click$/, async () => {
    await ButtonPage.actionBtnClick();
    await ButtonPage.verivyclickmessage();
})

When(/^I choose double click$/, async () => {
    await ButtonPage.actionBtnDoubleClick();
    await ButtonPage.verivyDoubleClickMessage();
})

When(/^I choose right click$/, async () => {
    await ButtonPage.actionBtnRightClick();
    await ButtonPage.verivyRightClickMessage();
})