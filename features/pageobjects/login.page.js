

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $("#loginusername");
    }

    get inputPassword () {
        return $('#loginpassword');
    }

    get modalLogin(){
        return $("//a[.='Log in']");
    }

    get btnSubmit () {
        return $("//button[.='Log in']");
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.modalLogin.click();
        await this.inputUsername.waitForDisplayed(3000)
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('index.html');
    }
    index(){
        return super.open('index.html')
    }
}

module.exports = new LoginPage();
