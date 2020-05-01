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

    checkIfElementHasText(el, val) {
        return expect(el).toHaveText(val);
    }

    setRandomNumbers() {
        return Math.random().toString().slice(-15);
    }

}

module.exports = new Mixins();