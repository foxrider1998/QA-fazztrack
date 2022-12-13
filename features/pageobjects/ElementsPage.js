const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class ElementsPage extends Page {
    /**
     * define selectors using getter methods
     */
    btnOnElements(_btn) {

        return $(`//span[.='${_btn}']`);
    }

   


    async actionBtnClick(btnName) {
        await this.btnOnElements(btnName).click();
        
    }

    async actionbtnInteract(btnName) {
        // await this.btnInteract().scrollIntoView();
        await this.btnInteract().click();
    }

}

module.exports = new ElementsPage();