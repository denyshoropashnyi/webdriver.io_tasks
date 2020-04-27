'use strict';

const assert = require('assert');
const docsPage = require('../pages/docs.page');
const apiPage = require('../pages/api.page');
const helpPage = require('../pages/help.page');
const versionsPage = require('../pages/versions.page');

describe('lesson #25_hometask - Horopashnyi', () => {

    it('should navigate to main page', () => {
        browser.url('https://webdriver.io');
    })

    it('should click on header Docs btn', () => {
        docsPage.onHeaderNavDocsBtnClick();
        browser.pause(2222);
    })

    it('should click on header API btn', () => {
        docsPage.onHeaderNavApiBtnClick();
        browser.pause(2222);
    })

    it('should click on contribute link', () => {
        apiPage.onContributeNavLinkClick();
        browser.pause(2222);
    })

    it('should click on header Help btn', () => {
        apiPage.onHeaderNavHelpBtnClick();
        browser.pause(2222);
    })

    it('should detect if paragraph Browse Docs is displayed', () => {
        helpPage.isPBrowseDocsDisplayed();
    })

    it('should click on header Versions btn', () => {
        helpPage.onHeaderNavVersionsBtnClick();
        browser.pause(2222);
    })

    it('should click on aside Past Versions link', () => {
        versionsPage.onAsideNavPastVersionsLinkClick();
        browser.pause(2222);
    })

    it('should click on table V5 Version documention link', () => {
        versionsPage.ontableV5DocumentaionLinkClick();
        browser.pause(2222);
    })
})