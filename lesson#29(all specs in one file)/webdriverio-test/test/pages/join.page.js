'use strict';

class JoinPage {
    get pageUrl() {
        return ('https://github.com/join');
    }

    get pageHeading() {
        return ($('//h1[text()="Create your account"]'));
    }
}

module.exports = new JoinPage();