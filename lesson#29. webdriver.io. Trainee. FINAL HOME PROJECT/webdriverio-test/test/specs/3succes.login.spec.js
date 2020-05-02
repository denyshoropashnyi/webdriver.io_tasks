'use strict';

const mixins = require('../partials/mixins');
const mainPage = require('../pages/main.page');
const logInPage = require('../pages/logIn.page');
const profilePage = require('../pages/profile.page');


describe('log in in by form Log in and check result', () => {

    it('should return back to the Main page of github', () => {
        mixins.setUrl(mainPage.pageUrl);
        browser.pause(2222);
    })

    it('should click on Sign in button', () => {
        mainPage.signInBtn.click();
        browser.pause(2222);
    })

    it('should expect the user redirect to Log in Page', () => {
        mixins.checkUrl(logInPage);
        browser.pause(1111);
    })

    it('should enter username of test account in userNameInput', () => {
        logInPage.userNameInput.addValue(logInPage.accountUsername);
        browser.pause(1111);
    })

    it('should enter password of test account in userPassInput', () => {
        logInPage.userPassInput.addValue(logInPage.accountPass);
        browser.pause(1111);
    })

    it('should click on Sign in button', () => {
        logInPage.signInBtn.click();
        browser.pause(2222);
    })

    it('should click on drop-down menu button', () => {
        mainPage.dropDownMenuBtn.click();
        browser.pause(2222);
    })

    it('should click on Your profile link in drop-down menu', () => {
        mainPage.yourProfileLink.click();
        browser.pause(2222);
    })

    it('should expect the user redirect to test profile page', () => {
        expect(browser).toHaveUrl((mainPage.pageUrl + logInPage.accountUsername));
        mixins.checkIfElementHasText(profilePage.accountNickname, logInPage.accountUsername);
        browser.pause(2222);
    })

})