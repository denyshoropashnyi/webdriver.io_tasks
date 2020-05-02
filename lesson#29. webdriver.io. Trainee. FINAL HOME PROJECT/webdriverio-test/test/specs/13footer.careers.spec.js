'use strict';

const mixins = require('../partials/mixins');
const mainPage = require('../pages/main.page');
const careersPage = require('../pages/careers.page');


describe('careers labels text check ', () => {

    // it('should return back to previous window', () => {
    //     browser.back();
    //     browser.pause(2222);
    // })

    // it('should click on Main page link and navigate to the Main page of github', () => {
    //     mainPage.mainPageLink.click();
    //     browser.pause(2222);
    // })

    it('should navigate to the Main page of github', () => {
        mixins.setUrl(mainPage.pageUrl);
        browser.pause(2222);
    })

    it('should scroll to the footer', () => {
        mainPage.careersFooterLink.scrollIntoView();
        browser.pause(1111);
    })

    it('should click on Careers footer link', () => {
        mainPage.careersFooterLink.click();
        browser.pause(2222);
    })

    it('should click on Open positions link', () => {
        careersPage.openPositionsLink.click();
        browser.pause(2222);
    })

    it('should should output text from the labels to the terminal', () => {
        console.log(`  
            First label is ${careersPage.firstLabel.getText()}
            Second label is ${careersPage.secondLabel.getText()}
            Third label is ${careersPage.thirdLabel.getText()}
            Fourth label is ${careersPage.fourthLabel.getText()}
            Fifth label is ${careersPage.fifthLabel.getText()}
            Sixth label is ${careersPage.sixthLabel.getText()}
        `)
        browser.pause(1111);
    })

})