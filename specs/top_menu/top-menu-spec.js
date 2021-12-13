const TopMenuPage = require('../../page_object/top_menu/top-menu-page');

describe('Login', () => {
    beforeEach(() => {
        browser.url('./');
    });
    it('Should be able to click on any top menu link under Resources', () => {
        //Use the helper method to click on item by text
        TopMenuPage.navigateToResourcesMenuItem('Pricing');
        //Verify the URL
        browser.waitUntil(() => {
            return browser.getUrl().includes('/pricing');
        }, { timeout: 10000, timeoutMsg: '"This is not a pricing page"' })
    });

    it('Should be able to navigate to each page under "Who We Help" drop down', () => {
        //Mouse hover Who we Help link 
        TopMenuPage.$whoWeHelpLnk.waitForDisplayed();
        TopMenuPage.$whoWeHelpLnk.moveTo();
        //Click on Lenders link
        TopMenuPage.$lendersLnk.click();
        //Verify the URL
        browser.waitUntil(() => {
            return browser.getUrl().includes('/for-lenders');
        }, { timeout: 10000, timeoutMsg: 'This is not for-lenders page' });
        //Mouse hover Who we Help link
        TopMenuPage.$whoWeHelpLnk.moveTo();
        //Click on Investors link
        TopMenuPage.$investorsLnk.click();
        //Verify the URL
        browser.waitUntil(() => {
            return browser.getUrl().includes('/investors');
        }, { timeout: 10000, timeoutMsg: 'This is not investors page' });
        //Mouse hover Who we Help link
        TopMenuPage.$whoWeHelpLnk.moveTo();
        //Click on PropTech link
        TopMenuPage.$$PropTechLnk.click();
        //Verify the URL
        browser.waitUntil(() => {
            return browser.getUrl().includes('/proptech');
        }, { timeout: 10000, timeoutMsg: 'This is not a proptech page' });
    });
});