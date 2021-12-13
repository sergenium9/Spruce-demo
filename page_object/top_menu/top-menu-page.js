"use strict";
class TopMenuPage {
    // Reusable selector getters that will help us to avoid selector duplicates
    get $$resourcesMenuItems() {return  $$('[id="w-dropdown-list-4"] [class="nav-content-wrap"]');};
    get $resourcesLnk() {return $('[id="w-dropdown-toggle-4"]');}
    get $whoWeHelpLnk() {return $('[id="w-dropdown-toggle-3"]');}
    get $lendersLnk() {return $('div=Lenders');}
    get $investorsLnk() {return $('div=Investors');}
    get $$PropTechLnk() {return $('div=PropTech');}
    get $requestDemoLnk() {return  $('[class="button button-gray nav-button w-button"]');};
    get $aboutLnk() {return $('[href="/about-us"]');}

    navigateToResourcesMenuItem(menuItemText) {
        const menuItems = {};
        //Click on Resources link
        this.$resourcesLnk.waitForDisplayed();
        this.$resourcesLnk.moveTo();
        // Wait for at least 3 menu items to become visible
        browser.waitUntil(() => {
            return this.$$resourcesMenuItems.map((elem) => elem.isDisplayed()).length > 2;
        }, 10000, 'Top menu items were not visible');
        // Map all of the items into an object 
        this.$$resourcesMenuItems.forEach(element => {
            menuItems[element.getText()] = element;
        });
        // Click on item by text
        menuItems[menuItemText].click();
    };
};
module.exports = new TopMenuPage ();