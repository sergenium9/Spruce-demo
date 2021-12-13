"use strict";
class DemoPage {
    // Reusable selector getters that will help us to avoid selector duplicates
    get $nameTxt() {return $('[name="first-name"]');}
    get $lastNameTxt() {return $('[name="last-name"]');}
    get $emailTxt() {return $('[name="Email"]');}
    get $companyNameTxt() {return $('[name="Company-Name"]');}
    get $describeYourCompanyLnk() {return $('[name="Which-best-describes-your-company"]');}
    get $zeroToTwentyFiveTransactionsLnk() {return $('[value="0-25 transactions per month in 1 state"]');}
    get $productLnk() {return $('[id="Which-product-would-you-like-to-learn-more-about"]');}
    get $fullServiceLnk() {return $('[value="Spruce: Full service"]');}
    get $companyBasedLnk() {return $('[id="Where-is-your-company-based"]');}
    get $alabamaLnk() {return $('[value="Alabama"]');}
    get $howDidYouHearAboutSpruce() {return $('[id="How-did-you-first-hear-about-Spruce"]');}
    get $googleSearchLnk() {return $('[value="Google Search"]');}
}
module.exports = new DemoPage ();