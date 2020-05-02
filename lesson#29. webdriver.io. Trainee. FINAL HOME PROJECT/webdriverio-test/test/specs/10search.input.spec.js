'use strict';

const mixins = require('../partials/mixins');
const mainPage = require('../pages/main.page');
const searchPage = require('../pages/search.page');


describe('search input and its result check', () => {

    it('should navigate to the Main page of github', () => {
        mixins.setUrl(mainPage.pageUrl);
        browser.pause(2222);
    })

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

})