const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnElements() {
        return $(`.//h5[text()="Elements"]`);
    }
    get btnInteract() {
        return $(`.//h5[text()="Interactions"]`);
    }



    async chooseBtnElements() {
        await this.btnElements.scrollIntoView({block:'center'})
        await this.btnElements.click();
    }
    async chooseBtnInteract() {
        await this.btnInteract.scrollIntoView({block:'center'})
        await this.btnInteract.click();
    }

    async verivyclickmessage() {
        await this.messageClick().waitForDisplayed(3000)
        await expect(this.messageClick()).toEqual("You have done a dynamic click")
    }

    async open(path) {
        return super.open(path)
    }
}

module.exports = new HomePage();