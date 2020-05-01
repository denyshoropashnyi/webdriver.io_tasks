'use strict';

class Mixins {

    setUrl(val) {
        return browser.url(val);
    }

    checkUrl(val) {
        return expect(browser).toHaveUrl(val.pageUrl);
    }

    checkIfElementDisplayed(val) {
        return expect(val).toBeDisplayed();
    }

    setRandomString() {
        return Math.random().toString(36).slice(-10);
    }

}

module.exports = new Mixins();