'use strict';

const faker = require('faker');
const mixins = require('../partials/mixins');
const logInPage = require('../pages/logIn.page');
const passwordResetPage = require('../pages/password_reset.page');


describe('input invalid data in email input. Expected result - failure', () => {

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

    it('should submit empty input of Password reset input and close Reset password error pop-up', () => {
        passwordResetPage.resetPassBtn.click();
        browser.pause(2222);
        mixins.checkIfElementDisplayed(passwordResetPage.resetPassErrorPopup);
        passwordResetPage.closeErrorMesageBtn.click();
        browser.pause(1111);
    })

    it('should enter and submit empty space string of Password reset input and close Reset password error pop-up', () => {
        passwordResetPage.emailInput.addValue(' ');
        browser.pause(1111);
        passwordResetPage.resetPassBtn.click();
        browser.pause(2222);
        mixins.checkIfElementDisplayed(passwordResetPage.resetPassErrorPopup);
        passwordResetPage.closeErrorMesageBtn.click();
        browser.pause(2222);
    })

    it('should enter and submit numbers of Password reset input and close Reset password error pop-up', () => {
        passwordResetPage.emailInput.addValue(mixins.setRandomNumbers());
        browser.pause(1111);
        passwordResetPage.resetPassBtn.click();
        browser.pause(2222);
        mixins.checkIfElementDisplayed(passwordResetPage.resetPassErrorPopup);
        passwordResetPage.closeErrorMesageBtn.click();
        browser.pause(2222);
    })

    it('should enter and submit string of Password reset input and close Reset password error pop-up', () => {
        passwordResetPage.emailInput.addValue(faker.name.lastName());
        browser.pause(1111);
        passwordResetPage.resetPassBtn.click();
        browser.pause(2222);
        mixins.checkIfElementDisplayed(passwordResetPage.resetPassErrorPopup);
        passwordResetPage.closeErrorMesageBtn.click();
        browser.pause(2222);
    })

})