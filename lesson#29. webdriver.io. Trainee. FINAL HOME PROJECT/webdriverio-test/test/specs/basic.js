'use strict';

const mixins = require('../partials/mixins');
const faker = require('faker');
const mainPage = require('../pages/main.page');
const joinPage = require('../pages/join.page');
const logInPage = require('../pages/logIn.page');
const profilePage = require('../pages/profile.page');
const passwordResetPage = require('../pages/password_reset.page');
const plansPage = require('../pages/plans.page');
const explorePage = require('../pages/explore.page');
const searchPage = require('../pages/search.page');
const enteprisePage = require('../pages/enteprise.page');
const aboutPage = require('../pages/about.page');


describe('lesson #29_final_hometask - Horopashnyi', () => {

    //the first test case start

    it('should navigate to the Main page of github', () => {
        mixins.setUrl(mainPage.pageUrl);
        browser.pause(2222);
    })

    it('should enter username in userNameInput', () => {
        mainPage.upperUserNameInput.addValue(faker.name.firstName() + faker.name.lastName());
    })

    it('should enter email in userEmailInput', () => {
        mainPage.upperUserEmailInput.addValue(faker.internet.email());
    })

    it('should enter password in userPassInput', () => {
        mainPage.upperUserPassInput.addValue(mixins.setRandomNumbers());
    })

    it('should click on Sign up button for Sign up for GitHub upper form', () => {
        browser.pause(1111);
        mainPage.upperSignUpBtn.click();
        browser.pause(1111);
    })

    it('should expect the user redirect to Join Page', () => {
        mixins.checkUrl(joinPage);
    })

    it('should expect heading h1 "Create your account" displayed', () => {
        mixins.checkIfElementDisplayed(joinPage.pageHeading);
    })

    //the first test case end


    //the second test case start

    it('should return back to the Main page of github', () => {
        mixins.setUrl(mainPage.pageUrl);
        browser.pause(2222);
    })

    it('should enter username in footer userNameInput', () => {
        mainPage.lowerUserNameInput.addValue(faker.name.firstName() + faker.name.lastName());
    })

    it('should enter email in footer userEmailInput', () => {
        mainPage.lowerUserEmailInput.addValue(faker.internet.email());
    })

    it('should enter password in footer userPassInput', () => {
        mainPage.lowerUserPassInput.addValue(mixins.setRandomNumbers());
    })

    it('should click on Sign up button for Sign up for GitHub footer form', () => {
        browser.pause(1111);
        mainPage.lowerSignUpBtn.click();
        browser.pause(1111);
    })

    it('should expect the user redirect to Join Page', () => {
        mixins.checkUrl(joinPage);
    })

    it('should expect heading h1 "Create your account" displayed', () => {
        mixins.checkIfElementDisplayed(joinPage.pageHeading);
    })

    //the second test case end


    //the third test case start

    it('should return back to the Main page of github', () => {
        mixins.setUrl(mainPage.pageUrl);
        browser.pause(2222);
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
        browser.pause(1111);
        logInPage.signInBtn.click();
        browser.pause(1111);
    })


    it('should click on drop-down menu button', () => {
        mainPage.dropDownMenuBtn.click();
        browser.pause(1111);
    })

    it('should click on Your profile link in drop-down menu', () => {
        mainPage.yourProfileLink.click();
        browser.pause(1111);
    })

    it('should expect the user redirect to test profile page', () => {
        expect(browser).toHaveUrl((mainPage.pageUrl + logInPage.accountUsername));
        mixins.checkIfElementHasText(profilePage.accountNickname, logInPage.accountUsername);
    })

    //the third test case end


    //the fourth test case start

    it('should return back to the Log in page', () => {
        mixins.setUrl(logInPage.pageUrl);
        browser.pause(2222);
    })

    it('should click on Your profile link in drop-down menu', () => {
        profilePage.viewProfileLink.click();
        browser.pause(2222);
    })

    it('should click on Sign out button in drop-down menu', () => {
        profilePage.signOutBtn.click();
        browser.pause(2222);
    })

    it('should click on Sign in button', () => {
        mainPage.signInBtn.click();
        browser.pause(2222);
    })

    it('should click on Forgot password link', () => {
        logInPage.passResetLink.click();
        browser.pause(2222);
    })

    it('should expect the user redirect to Password reset Page', () => {
        mixins.checkUrl(passwordResetPage);
        browser.pause(2222);
    })

    //the fourth test case end


    //the fifth test case start


    it('should submit empty input of Password reset input and close Reset password error pop-up', () => {
        passwordResetPage.resetPassBtn.click();
        browser.pause(1111);
        mixins.checkIfElementDisplayed(passwordResetPage.resetPassErrorPopup);
        passwordResetPage.closeErrorMesageBtn.click();
        browser.pause(1111);
    })

    it('should enter and submit empty space string of Password reset input and close Reset password error pop-up', () => {
        passwordResetPage.emailInput.addValue(' ');
        browser.pause(1111);
        passwordResetPage.resetPassBtn.click();
        browser.pause(1111);
        mixins.checkIfElementDisplayed(passwordResetPage.resetPassErrorPopup);
        passwordResetPage.closeErrorMesageBtn.click();
        browser.pause(1111);
    })

    it('should enter and submit numbers of Password reset input and close Reset password error pop-up', () => {
        passwordResetPage.emailInput.addValue(mixins.setRandomNumbers());
        browser.pause(1111);
        passwordResetPage.resetPassBtn.click();
        browser.pause(1111);
        mixins.checkIfElementDisplayed(passwordResetPage.resetPassErrorPopup);
        passwordResetPage.closeErrorMesageBtn.click();
        browser.pause(1111);
    })

    it('should enter and submit string of Password reset input and close Reset password error pop-up', () => {
        passwordResetPage.emailInput.addValue(faker.name.lastName());
        browser.pause(1111);
        passwordResetPage.resetPassBtn.click();
        browser.pause(1111);
        mixins.checkIfElementDisplayed(passwordResetPage.resetPassErrorPopup);
        passwordResetPage.closeErrorMesageBtn.click();
        browser.pause(1111);
    })

    //the fifth test case end


    //the sixth test case start

    it('should enter valid test account email and submit Password reset button', () => {
        passwordResetPage.emailInput.addValue(logInPage.accountEmail);
        browser.pause(1111);
        passwordResetPage.resetPassBtn.click();
        browser.pause(1111);
    })

    it('should expect the user redirect to Password reset Page', () => {
        mixins.checkIfElementDisplayed(passwordResetPage.resetPassSuccessPopup);
        browser.pause(1111);
    })

    //the sixth test case end


    //the seventh test case start

    it('should click on Main page link and navigate to the Main page of github', () => {
        mainPage.mainPageLink.click();
        browser.pause(2222);
    })

    it('should mouse over Why GitHub on Main page dropwown list', () => {
        mainPage.mainPageLink.moveTo();

        mainPage.whyGitHubDropdownListLink.moveTo();
        browser.pause(1111);
        mixins.checkIfElementDisplayed(mainPage.whyGitHubDropdownList);
        mainPage.mainPageLink.moveTo();
    })

    it('should mouse over Explore on Main page dropwown list', () => {
        mainPage.exploreDropdownListLink.moveTo();
        browser.pause(1111);
        mixins.checkIfElementDisplayed(mainPage.exploreDropdownList);
        mainPage.mainPageLink.moveTo();
    })

    it('should mouse over Pricing on Main page dropwown list', () => {
        mainPage.pricingDropdownListLink.moveTo();
        browser.pause(1111);
        mixins.checkIfElementDisplayed(mainPage.pricingDropdownList);
    })

    //the seventh test case end


    //the eighth test case start

    it('should click on Plans item in Pricing dropdown list', () => {
        mainPage.pricingPlansItem.click();
        browser.pause(1111);
    })

    it('should click on join for free button', () => {
        plansPage.joinForFreeBtn.click();
        browser.pause(1111);
    })

    it('should enter username in userNameInput', () => {
        plansPage.userNameInput.addValue(faker.name.firstName() + faker.name.lastName());
    })

    it('should enter email in userEmailInput', () => {
        plansPage.userEmailInput.addValue(faker.internet.email());
    })

    it('should enter password in userPassInput', () => {
        plansPage.userPassInput.addValue(mixins.setRandomNumbers());
    })

    it('should click on Email preferences check box', () => {
        plansPage.emailPreferencesCheckBox.click();
        browser.pause(1111);
    })

    //the eighth test case end


    //the ninth test case start

    it('should mouse over Explore on Main page dropwown list', () => {
        mainPage.exploreDropdownListLink.moveTo();
        browser.pause(1111);
    })

    it('should click on Explore GitHub link in Explore dropdown list', () => {
        mainPage.exploreGithubDropdownListLink.click();
        browser.pause(1111);
    })

    it('should click on Topics nav item', () => {
        explorePage.topicsNavItem.click();
        browser.pause(1111);
    })

    it('should expect heading h1 "Topics" displayed', () => {
        mixins.checkIfElementDisplayed(explorePage.topicsHeading);
    })

    //the ninth test case end


    //the tenth test case start

    it('should enter "webdriverio" in searchInput and press enter key', () => {
        mainPage.searchInput.setValue('webdriverio');
        browser.keys('\uE007')
        browser.pause(1111);
    })

    it('should click on Typescript filter list link', () => {
        searchPage.typescriptFilterListLink.click();
        browser.pause(1111);
    })

    it('should click on first link in search result list', () => {
        searchPage.firstSearchResultLink.click();
        browser.pause(1111);
    })

    it('should check if url contains "webdriverio"', () => {
        expect(browser).toHaveUrl('webdriverio', {
            'containing': true
        });
    })

    //the tenth test case end


    //the eleventh test case start

    it('should click on Main page link and navigate to the Main page of github', () => {
        mainPage.mainPageLink.click();
        browser.pause(1111);
    })

    it('should click on How GitHub Enteprise work button', () => {
        mainPage.howGithubEntepriseWorkBtn.click();
        browser.pause(1111);
    })

    it('should click on Start a free trial button', () => {
        enteprisePage.startFreeTrialBtn.click();
        browser.pause(1111);
    })

    it('should click on Enteprise Cloud button', () => {
        enteprisePage.entepriseCloudBtn.click();
        browser.pause(1111);
    })

    it('should enter username in userNameInput', () => {
        enteprisePage.userNameInput.addValue(faker.name.firstName() + faker.name.lastName());
    })

    it('should enter email in userEmailInput', () => {
        enteprisePage.userEmailInput.addValue(faker.internet.email());
    })

    it('should enter password in userPassInput', () => {
        enteprisePage.userPassInput.addValue(mixins.setRandomNumbers());
    })

    it('should click on Email preferences check box', () => {
        plansPage.emailPreferencesCheckBox.click();
        browser.pause(1111);
    })

    //the eleventh test case end


    //the twelfth test case start

    it('should return back to previous window', () => {
        browser.back();
    })

    it('should click on Enteprise Server button', () => {
        enteprisePage.entepriseServerBtn.click();
        browser.pause(1111);
    })

    it('should enter Contact request name in contactNameInput', () => {
        enteprisePage.contactNameInput.addValue(faker.name.firstName() + faker.name.lastName());
    })

    it('should enter Contact Company in contactCompanyInput', () => {
        enteprisePage.contactCompanyInput.addValue(faker.company.companyName());
    })

    it('should enter Contact work email in contactEmailInput', () => {
        enteprisePage.contactEmailInput.addValue(faker.internet.email());
    })

    it('should enter Contact phone number in contactPhoneInput', () => {
        enteprisePage.contactPhoneInput.addValue(faker.phone.phoneNumber());
    })

    it('should click on Not sure yet radio button in Choose your installation type', () => {
        enteprisePage.notSureYetRadioBtn.click();
    })

    it('should click on Yes radio button in Other questions', () => {
        enteprisePage.answerYesAboutOtherQuestion.click();
    })

    it('should enter some random words in Other question Text area', () => {
        enteprisePage.otherQuestionTextArea.addValue(faker.random.words(44));
    })

    it('should accept term of use', () => {
        enteprisePage.contactAgreementCheckBox.click();
        browser.pause(2222);
    })

    //the twelfth test case end


    //the thirteenth test case start

    it('should return back to previous window', () => {
        browser.back();
        browser.pause(2222);
    })

    it('should click on Main page link and navigate to the Main page of github', () => {
        mainPage.mainPageLink.click();
        browser.pause(2222);
    })

    it('should click on Careers footer link', () => {
        mainPage.careersFooterLink.click();
        browser.pause(2222);
    })

    it('should click on Open positions link', () => {
        aboutPage.openPositionsLink.click();
        browser.pause(2222);
    })


    //the thirteenth test case end

})