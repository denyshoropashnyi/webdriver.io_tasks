'use strict';

class VersionsPage {

    get asideNavPastVersionsLink() {
        return $('nav [href="#past-versions"]');
    }

    get tableV5DocumentaionLink() {
        return $('table a[href="https://v5.webdriver.io/"]');
    }

    onAsideNavPastVersionsLinkClick() {
        this.asideNavPastVersionsLink.click();
    }

    ontableV5DocumentaionLinkClick() {
        this.tableV5DocumentaionLink.click();
    }
}

module.exports = new VersionsPage();