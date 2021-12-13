"use strict";
class LoginPage {
    // Reusable selector getters that will help us to avoid selector duplicates
    get $loginBtn() {return  $('[id="w-dropdown-toggle-7"]'); };
    get $loginClientsLnk() {return  $('[class="button-with-icon-clients w-dropdown-link"]'); };
    get $usernameTxt() {return  $('[placeholder="Email"]'); };
    get $passwordTxt() {return  $('[placeholder="Password"]'); };
    get $submitBtn() {return $('[type="submit"]'); };
    get $errMsg() {return $('[class="error-message"]'); };

    // Helper method for switching to the new tab in browser
    switchToOpenTab(mainTab) {
        const handles = browser.getWindowHandles();
        console.log(handles);
        browser.waitUntil(() => browser.getWindowHandles().length > 1);
        const popupWindow = browser.getWindowHandles().filter((handle) => handle !== mainTab)[1];
        browser.switchToWindow(popupWindow);
    };
}
module.exports = new LoginPage ();