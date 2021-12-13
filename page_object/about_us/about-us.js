"use strict";
class AboutUsPage {
    // Reusable selector getters that will help us to avoid selector duplicates
    get $locationsList() {return  $('[class="offices-column w-row"]');};
    get $$statesItems() {return $$('.address-div h4');}
}
module.exports = new AboutUsPage ();