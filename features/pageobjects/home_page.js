

const Page = require('./page');
const LoginPage = require('./login.page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get logout () {
        return $("//a[.='Log out']");
    }


    get phone () {
        return $("[onclick='byCat(\'phone\')']");
    }

    get laptop(){
        return $("//a[.='Laptops']");
    }

    get monitor () {
        return $("[onclick='byCat(\'monitor\')']");
    }
    get cart (){
        return $("#cartur")
    }
    get add2CartButton(){
        return $(".btn-success")
    }

    get item(){
        return $("#tbodyid > div:nth-of-type(1) .hrefch")
    }

    get accountname (){
        return $('#nameofuser');
    }

    async verifyLoginSuccess(username){
        return await expect(await this.accountname).toHaveTextContaining(username)
    }

    get deleteFirst(){
        return $("#tbodyid > tr:nth-of-type(1) [href='#']")
    }

    index(){
        return super.open('index.html')
    }


    async actionLogout () {
        await this.logout.waitForDisplayed(3000)
        await this.logout.click();
        await LoginPage.modalLogin.waitForDisplayed(3000);
    }

    async openCategorie(cat){
        await this.laptop.click();
        
        // await 
    }
    
    async vaioi5(){
        await browser.pause(2000)
        await this.item.click();
    }

    async addToCart(){
        await this.add2CartButton.click();

    }
    async viewMyCart(){
        await this.cart.click();

    }

    async deleteFirstItem(){
        await this.deleteFirst.click()
    }

}

module.exports = new HomePage();
