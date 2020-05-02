'use strict';

const faker = require('faker');
const mixins = require('../partials/mixins');
const mainPage = require('../pages/main.page');
const joinPage = require('../pages/join.page');


describe('sign in by footer form Sign in and check result', () => {

    it('should return back to the Main page of github', () => {
        mixins.setUrl(mainPage.pageUrl);
        browser.pause(2222);
    })

    it('should enter username in footer userNameInput', () => {
        mainPage.lowerUserNameInput.addValue(faker.name.firstName() + faker.name.lastName());
        browser.pause(1111);
    })

    it('should enter email in footer userEmailInput', () => {
        mainPage.lowerUserEmailInput.addValue(faker.internet.email());
        browser.pause(1111);
    })

    it('should enter password in footer userPassInput', () => {
        mainPage.lowerUserPassInput.addValue(mixins.setRandomNumbers());
        browser.pause(1111);
    })

    it('should click on Sign up button for Sign up for GitHub footer form', () => {
        mainPage.lowerSignUpBtn.click();
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