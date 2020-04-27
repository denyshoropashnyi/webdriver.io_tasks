'use strict';

class MainPage {
    get headerDocsLink() {
        return $('header [href="/docs/gettingstarted.html"]');
    }

    onElemClick() {
        this.headerDocsLink.click();
    }
}

module.exports = new MainPage();