'use strict';

const faker = require('faker');
const mixins = require('../partials/mixins');
const mainPage = require('../pages/main.page');
const plansPage = require('../pages/plans.page');
const enteprisePage = require('../pages/enteprise.page');


describe('registration for GitHub Enteprise Cloud check', () => {

    it('should navigate to the Main page of github', () => {
        mixins.setUrl(mainPage.pageUrl);
        browser.pause(2222);
    })

    it('should click on How GitHub Enteprise work button', () => {
        mainPage.howGithubEntepriseWorkBtn.click();
        browser.pause(2222);
    })

    it('should click on Start a free trial button', () => {
        enteprisePage.startFreeTrialBtn.click();
        browser.pause(2222);
    })

    it('should click on Enteprise Cloud button', () => {
        enteprisePage.entepriseCloudBtn.click();
        browser.pause(2222);
    })

    it('should enter username in userNameInput', () => {
        enteprisePage.userNameInput.addValue(faker.name.firstName() + faker.name.lastName());
        browser.pause(1111);
    })

    it('should enter email in userEmailInput', () => {
        enteprisePage.userEmailInput.addValue(faker.internet.email());
        browser.pause(1111);
    })

    it('should enter password in userPassInput', () => {
        enteprisePage.userPassInput.addValue(mixins.setRandomNumbers());
        browser.pause(1111);
    })

    it('should click on Email preferences check box', () => {
        plansPage.emailPreferencesCheckBox.click();
        browser.pause(2222);
    })

})