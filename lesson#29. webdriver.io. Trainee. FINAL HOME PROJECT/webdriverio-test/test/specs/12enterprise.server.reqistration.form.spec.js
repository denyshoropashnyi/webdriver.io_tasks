'use strict';

const faker = require('faker');
const mixins = require('../partials/mixins');
const mainPage = require('../pages/main.page');
const enteprisePage = require('../pages/enteprise.page');


describe('registration for GitHub Enteprise Server check', () => {

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

    it('should click on Enteprise Server button', () => {
        enteprisePage.entepriseServerBtn.click();
        browser.pause(2222);
    })

    it('should enter Contact request name in contactNameInput', () => {
        enteprisePage.contactNameInput.addValue(faker.name.firstName() + faker.name.lastName());
        browser.pause(1111);
    })

    it('should enter Contact Company in contactCompanyInput', () => {
        enteprisePage.contactCompanyInput.addValue(faker.company.companyName());
        browser.pause(1111);
    })

    it('should enter Contact work email in contactEmailInput', () => {
        enteprisePage.contactEmailInput.addValue(faker.internet.email());
        browser.pause(1111);
    })

    it('should enter Contact phone number in contactPhoneInput', () => {
        enteprisePage.contactPhoneInput.addValue(faker.phone.phoneNumber());
        browser.pause(1111);
    })

    it('should click on Not sure yet radio button in Choose your installation type', () => {
        enteprisePage.notSureYetRadioBtn.click();
        browser.pause(2222);
    })

    it('should click on Yes radio button in Other questions', () => {
        enteprisePage.answerYesAboutOtherQuestion.click();
        browser.pause(2222);
    })

    it('should enter some random words in Other question Text area', () => {
        enteprisePage.otherQuestionTextArea.addValue(faker.random.words(44));
        browser.pause(1111);
    })

    it('should accept term of use', () => {
        enteprisePage.contactAgreementCheckBox.click();
        browser.pause(2222);
    })

})