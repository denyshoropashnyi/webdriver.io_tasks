'use strict';

const faker = require('faker');
const mixins = require('../partials/mixins');
const mainPage = require('../pages/main.page');
const plansPage = require('../pages/plans.page');


describe('reqistration form Join for free check', () => {

    it('should navigate to the Main page of github', () => {
        mixins.setUrl(mainPage.pageUrl);
        browser.pause(2222);
    })

    it('should mouse over Pricing on Main page dropdown list', () => {
        mainPage.mainPageLink.moveTo();
        mainPage.pricingDropdownListLink.moveTo();
        browser.pause(1111);
        mixins.checkIfElementDisplayed(mainPage.pricingDropdownList);
    })

    it('should click on Plans item in Pricing dropdown list', () => {
        mainPage.pricingPlansItem.click();
        browser.pause(2222);
    })

    it('should click on join for free button', () => {
        plansPage.joinForFreeBtn.click();
        browser.pause(2222);
    })

    it('should enter username in userNameInput', () => {
        plansPage.userNameInput.addValue(faker.name.firstName() + faker.name.lastName());
        browser.pause(1111);
    })

    it('should enter email in userEmailInput', () => {
        plansPage.userEmailInput.addValue(faker.internet.email());
        browser.pause(1111);
    })

    it('should enter password in userPassInput', () => {
        plansPage.userPassInput.addValue(mixins.setRandomNumbers());
        browser.pause(1111);
    })

    it('should click on Email preferences check box', () => {
        plansPage.emailPreferencesCheckBox.click();
        browser.pause(1111);
    })

})