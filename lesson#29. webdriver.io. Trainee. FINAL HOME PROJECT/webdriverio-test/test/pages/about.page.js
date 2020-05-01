'use strict';

class AboutPage {

    get openPositionsLink() {
        return $('[href="#positions"]');
    }

}

module.exports = new AboutPage();