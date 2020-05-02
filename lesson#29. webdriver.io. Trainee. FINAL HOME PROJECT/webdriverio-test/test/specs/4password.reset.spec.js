'use strict';

const mixins = require('../partials/mixins');
const mainPage = require('../pages/main.page');
const logInPage = require('../pages/logIn.page');
const profilePage = require('../pages/profile.page');
const passwordResetPage = require('../pages/password_reset.page');


describe('sign out and go to Password reset page', () => {

    it('should return back to the Log in page', () => {
        mixins.setUrl(logInPage.pageUrl);
        browser.pause(2222);
    })

    it('should click on Forgot password link', () => {
        logInPage.passResetLink.click();
        browser.pause(2222);
    })

    it('should expect the user redirect to Password reset Page', () => {
        mixins.checkUrl(passwordResetPage);
        browser.pause(1111);
    })

})