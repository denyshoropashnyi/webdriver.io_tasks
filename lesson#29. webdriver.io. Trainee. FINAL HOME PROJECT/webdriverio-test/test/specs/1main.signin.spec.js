'use strict';

const faker = require('faker');
const mixins = require('../partials/mixins');
const mainPage = require('../pages/main.page');
const joinPage = require('../pages/join.page');


describe('sign in by main form Sign in and check result', () => {

    it('should navigate to the Main page of github', () => {
        mixins.setUrl(mainPage.pageUrl);
        browser.pause(2222);
    })

    it('should enter username in userNameInput', () => {
        mainPage.upperUserNameInput.addValue(faker.name.firstName() + faker.name.lastName());
        browser.pause(1111);
    })

    it('should enter email in userEmailInput', () => {
        mainPage.upperUserEmailInput.addValue(faker.internet.email());
        browser.pause(1111);
    })

    it('should enter password in userPassInput', () => {
        mainPage.upperUserPassInput.addValue(mixins.setRandomNumbers());
        browser.pause(1111);
    })

    it('should click on Sign up button for Sign up for GitHub upper form', () => {
        mainPage.upperSignUpBtn.click();
        browser.pause(2222);
    })

    it('should expect the user redirect to Join Page', () => {
        mixins.checkUrl(joinPage);
        browser.pause(1111);
    })

    it('should expect heading h1 "Create your account" displayed', () => {
        mixins.checkIfElementDisplayed(joinPage.pageHeading);
        browser.pause(1111);
    })

})