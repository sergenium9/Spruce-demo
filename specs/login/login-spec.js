const LoginPage = require('../../page_object/login/login-page')
const { expect } = require("chai");

describe('Login', () => {
   it('should not be able to login as a client with none matching credentials', () => {
       browser.url('./');
       // Declare and assign username and password consts
       const username = 'YourUsername';
       const password = 'YourPassword';
       // Click on login button and select Clients
       LoginPage.$loginBtn.waitForDisplayed();
       LoginPage.$loginBtn.click();
       LoginPage.$loginClientsLnk.click();
       //Switch to the open tab
       LoginPage.switchToOpenTab();
       //Type in username and password
       LoginPage.$usernameTxt.setValue(username);
       LoginPage.$passwordTxt.setValue(password);
       //Click Login button
       LoginPage.$submitBtn.click();
       //Verify the error message
       const errorMsg = LoginPage.$errMsg.getText();
       expect(errorMsg).to.equal('Invalid Email or password.')
   });
});
