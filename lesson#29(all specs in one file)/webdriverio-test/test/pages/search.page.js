'use strict';

class SearchPage {
    get typescriptFilterListLink() {
        return $('a[href="/search?l=TypeScript&q=webdriverio&type=Repositories"]');
    }

    get firstSearchResultLink() {
        return $('//ul[contains(@class,"repo-list")]//a[1]');
    }
}

module.exports = new SearchPage();