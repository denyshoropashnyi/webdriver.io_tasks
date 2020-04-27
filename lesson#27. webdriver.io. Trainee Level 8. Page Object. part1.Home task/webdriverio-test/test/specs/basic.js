'use strict';

const assert = require('assert');
const mainPage = require('../pages/main.page');

describe('lesson #27_hometask - Horopashnyi', () => {
    it('should click on link Docs in header', () => {
        browser.url('https://webdriver.io');
        browser.pause(2222);
        mainPage.onElemClick();
        browser.pause(2222);
    })
})