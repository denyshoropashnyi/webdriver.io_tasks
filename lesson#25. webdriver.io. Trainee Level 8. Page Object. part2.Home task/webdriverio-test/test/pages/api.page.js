'use strict';

class ApiPage {

    get contributeNavLink() {
        return $('nav [href="#contribute"]');
    }

    get headerNavHelpBtn() {
        return $('header [href="/help.html"]');
    }

    onContributeNavLinkClick() {
        this.contributeNavLink.click();
    }

    onHeaderNavHelpBtnClick() {
        this.headerNavHelpBtn.click();
    }
}

module.exports = new ApiPage();