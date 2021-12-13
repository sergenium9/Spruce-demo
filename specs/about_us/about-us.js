const TopMenuPage = require('../../page_object/top_menu/top-menu-page');
const AboutUsPage = require('../../page_object/about_us/about-us');
const { expect } = require('chai');

describe('AboutUs', () => {
    beforeEach(() => {
        browser.url('./')
    });
    it('should be able to see a list of states on AboutUs page', () => {
        //Click on AboutUs link
        TopMenuPage.$aboutLnk.waitForDisplayed();
        TopMenuPage.$aboutLnk.click();
        //Scroll down to office locations
        AboutUsPage.$locationsList.scrollIntoView();
        //Wait untill at least 4 locations are displayed 
        browser.waitUntil(() => {
            return AboutUsPage.$$statesItems.map((elem) => elem.waitForDisplayed()).length > 3;
        }, 10000, '4 items were not displayed');
        //Create an array with expected values inside 
        const expectedStates = ['Texas', 'Nevada', 'New York', 'California']
        //Verify that we get expected data
        AboutUsPage.$$statesItems.forEach(element => {
            expect(expectedStates).to.contain(element.getText())
        });
    });
});