'use strict';

class DocsPage {

    get headerNavDocsBtn() {
        return $('header [href="/docs/gettingstarted.html"]');
    }

    get headerNavApiBtn() {
        return $('nav [href="/docs/api.html"]');
    }

    onHeaderNavDocsBtnClick() {
        this.headerNavDocsBtn.click();
    }

    onHeaderNavApiBtnClick() {
        this.headerNavApiBtn.click();
    }
}

module.exports = new DocsPage();