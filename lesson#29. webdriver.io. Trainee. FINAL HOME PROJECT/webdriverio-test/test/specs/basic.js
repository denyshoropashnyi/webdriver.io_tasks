'use strict';

const mixins = require('../partials/mixins');
const faker = require('faker');
const mainPage = require('../pages/main.page');
const joinPage = require('../pages/join.page');
const logInPage = require('../pages/logIn.page');
const profilePage = require('../pages/profile.page');


describe('lesson #29_final_hometask - Horopashnyi', () => {

    it('should navigate to the main page of github', () => {
        mixins.setUrl(mainPage.pageUrl);
    })

    it('should enter username in userNameInput', () => {
        mainPage.upperUserNameInput.addValue(faker.name.firstName() + faker.name.lastName());
        // browser.pause(2222);
    })

    it('should enter email in userEmailInput', () => {
        mainPage.upperUserEmailInput.addValue(faker.internet.email());
        // browser.pause(2222);
    })

    it('should enter password in userPassInput', () => {
        mainPage.upperUserPassInput.addValue(mixins.setRandomString());
        // browser.pause(2222);
    })

    it('should click on Sign up for Github button', () => {
        mainPage.upperSignUpBtn.click();
        // browser.pause(2222);
    })

    it('should expect the user redirect to Join Page', () => {
        expect(browser).toHaveUrl(joinPage.pageUrl);
    })

    it('should expect hading h1 "Create your account" displayed', () => {
        expect(joinPage.pageHeading).toBeDisplayed();
    })

    it('should return back to the main page of github', () => {
        mixins.setUrl(mainPage.pageUrl);
    })

    it('should enter username in footer userNameInput', () => {
        mainPage.lowerUserNameInput.addValue(faker.name.firstName() + faker.name.lastName());
    })

    it('should enter email in footer userEmailInput', () => {
        mainPage.lowerUserEmailInput.addValue(faker.internet.email());
    })

    it('should enter password in footer userPassInput', () => {
        mainPage.lowerUserPassInput.addValue(mixins.setRandomString());
    })

    it('should click on footer Sign up for Github button', () => {
        mainPage.lowerSignUpBtn.click();
    })

    it('should expect the user redirect to Join Page', () => {
        // expect(browser).toHaveUrl(joinPage.pageUrl);
        mixins.checkUrl(joinPage);
    })

    it('should expect hading h1 "Create your account" displayed', () => {
        // expect(joinPage.pageHeading).toBeDisplayed();
        mixins.checkIfElementDisplayed(joinPage.pageHeading);
    })

    it('should return back to the main page of github', () => {
        mixins.setUrl(mainPage.pageUrl);
    })

    it('should click on Sign in button', () => {
        mainPage.signInBtn.click();
    })

    it('should expect the user redirect to Log in Page', () => {
        mixins.checkUrl(logInPage);
    })

    it('should enter username of test account in userNameInput', () => {
        logInPage.userNameInput.addValue(logInPage.accountUsername);
    })

    it('should enter password of test account in userPassInput', () => {
        logInPage.userPassInput.addValue(logInPage.accountPass);
    })

    it('should click on Sign in button', () => {
        logInPage.signInBtn.click();
        // browser.pause(2222);
    })

    it('should click on drop-down menu button', () => {
        mainPage.dropDownMenuBtn.click();
        // browser.pause(2222);
    })

    it('should click on Your profile link in drop-down menu', () => {
        mainPage.yourProfileLink.click();
        // browser.pause(2222);
    })

    // xit('should expect the user redirect to test profile page', () => {
    //     mixins.checkUrl(profilePage + logInPage.accountUsername);
    // })




})