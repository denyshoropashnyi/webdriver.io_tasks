'use strict';

const mixins = require('../partials/mixins');
const mainPage = require('../pages/main.page');


describe('dropdown lists check', () => {

    it('should navigate to the Main page of github', () => {
        mixins.setUrl(mainPage.pageUrl);
        browser.pause(2222);
    })

    it('should mouse over Why GitHub on Main page dropdown list', () => {
        mainPage.mainPageLink.moveTo();
        mainPage.whyGitHubDropdownListLink.moveTo();
        browser.pause(1111);
        mixins.checkIfElementDisplayed(mainPage.whyGitHubDropdownList);
        mainPage.mainPageLink.moveTo();
    })

    it('should mouse over Explore on Main page dropdown list', () => {
        mainPage.exploreDropdownListLink.moveTo();
        browser.pause(1111);
        mixins.checkIfElementDisplayed(mainPage.exploreDropdownList);
        mainPage.mainPageLink.moveTo();
    })

    it('should mouse over Pricing on Main page dropdown list', () => {
        mainPage.pricingDropdownListLink.moveTo();
        browser.pause(1111);
        mixins.checkIfElementDisplayed(mainPage.pricingDropdownList);
    })

})