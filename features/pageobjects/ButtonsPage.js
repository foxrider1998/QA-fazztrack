const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class ButtonPage extends Page {
    /**
     * define selectors using getter methods
     */
     btnDoubleClick() {
        return $('#doubleClickBtn');
    }

     btnClickMe() {
        return $(`//button[.='Click Me']`);
    }

     btnRightClick() {
        return $('#rightClickBtn');
    }

     get messageClick(){
        return $(`#dynamicClickMessage`);
    }
    get messageRightClick(){
        return $(`#rightClickMessage`);
    }
    get messageDoubleClick(){
        return $(`#doubleClickMessage`);
    }

    async actionBtnClick() {
        await this.btnClickMe().scrollIntoView({ block: 'center', inline: 'center' });
        await this.btnClickMe().click();
    }
    async verivyclickmessage(){
         expect(await this.messageClick.getText()).toEqual("You have done a dynamic click")
    }


    async actionBtnDoubleClick() {
        await this.btnDoubleClick().doubleClick();
    }
    async verivyDoubleClickMessage(){
       await this.messageDoubleClick.scrollIntoView({ block: 'center', inline: 'center' });
         expect(await this.messageDoubleClick.getText()).toEqual("You have done a double click")
    }


    async actionBtnRightClick() {
        await this.btnRightClick().click({button: 'right'});
    }
    async verivyRightClickMessage(){
         expect(await this.messageRightClick.getText()).toEqual("You have done a right click")
    }

}

module.exports = new ButtonPage();