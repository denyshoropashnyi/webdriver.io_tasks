'use strict';

const mixins = require('../partials/mixins');
const mainPage = require('../pages/main.page');
const explorePage = require('../pages/explore.page');


describe('Topics item in Explore dropdown list check', () => {

    it('should navigate to the Main page of github', () => {
        mixins.setUrl(mainPage.pageUrl);
        browser.pause(2222);
    })

    it('should mouse over Explore on Main page dropwown list', () => {
        mainPage.mainPageLink.moveTo();
        mainPage.exploreDropdownListLink.moveTo();
        browser.pause(1111);
    })

    it('should click on Explore GitHub link in Explore dropdown list', () => {
        mainPage.exploreGithubDropdownListLink.click();
        browser.pause(2222);
    })

    it('should click on Topics nav item', () => {
        explorePage.topicsNavItem.click();
        browser.pause(2222);
    })

    it('should expect heading h1 "Topics" displayed', () => {
        mixins.checkIfElementDisplayed(explorePage.topicsHeading);
    })

})