'use strict';

const mixins = require('../partials/mixins');
const logInPage = require('../pages/logIn.page');
const passwordResetPage = require('../pages/password_reset.page');


describe('input valid data in email input. Expected result - success', () => {

    it('should return back to the Log in page', () => {
        mixins.setUrl(logInPage.pageUrl);
        browser.pause(2222);
    })

    it('should click on Forgot password link', () => {
        logInPage.passResetLink.click();
        browser.pause(2222);
    })

    it('should enter valid test account email and submit Password reset button', () => {
        passwordResetPage.emailInput.addValue(logInPage.accountEmail);
        browser.pause(1111);
        passwordResetPage.resetPassBtn.click();
        browser.pause(2222);
    })

    it('should expect the user redirect to Password reset Page', () => {
        mixins.checkIfElementDisplayed(passwordResetPage.resetPassSuccessPopup);
        browser.pause(1111);
    })

})