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

    elementDrag(){
        return $(`#draggable`)
    }
    elementDrop(){
        return $(`#droppable`)
    }
    
    droppedText(){
        return $(`#simpleDropContainer p`)
    }


    async actionBtnClick(btnName) {
        await this.btnOnElements(btnName).waitForClickable();
        await this.btnOnElements(btnName).click();
    }

    async actionbtnInteract() {
        await this.btnInteract().scrollIntoView({ block: 'center', inline: 'center' });
        await this.btnInteract().click();
    }

    async dragingAndDrop(){
   
        await this.elementDrag().scrollIntoView({ block: 'center', inline: 'center' })
        await this.elementDrag().dragAndDrop( await this.elementDrop())
        // await browser.pause(5000)
    }

    async verifyDroped(){
        expect(await this.droppedText().getText()).toEqual("Dropped!")
    }
}

module.exports = new ElementsPage();