const DemoPage = require('../../page_object/request_demo/request-demo-page');
const TopMenuPage = require('../../page_object/top_menu/top-menu-page')
const faker = require('faker')

describe('Login', () => {
    beforeEach(() => {
        browser.url('./');
    });
    it('Should be able to fill out the request form', () => {
        //Declare data with Faker
        let name = faker.name.firstName();
        let lastName = faker.name.lastName();
        let email = faker.internet.email();
        let company = faker.company.companyName();
        //Fill out the form
        TopMenuPage.$requestDemoLnk.waitForDisplayed();
        TopMenuPage.$requestDemoLnk.click();
        DemoPage.$nameTxt.setValue(name);
        DemoPage.$lastNameTxt.setValue(lastName);
        DemoPage.$emailTxt.setValue(email);
        DemoPage.$companyNameTxt.setValue(company);
        DemoPage.$describeYourCompanyLnk.click();
        DemoPage.$zeroToTwentyFiveTransactionsLnk.click();
        DemoPage.$productLnk.click();
        DemoPage.$fullServiceLnk.click();
        DemoPage.$companyBasedLnk.click();
        DemoPage.$alabamaLnk.click();
        DemoPage.$howDidYouHearAboutSpruce.click();
        DemoPage.$googleSearchLnk.click();
        //Click Submit button (not going to click to not disturb Spruce :)
    });
});