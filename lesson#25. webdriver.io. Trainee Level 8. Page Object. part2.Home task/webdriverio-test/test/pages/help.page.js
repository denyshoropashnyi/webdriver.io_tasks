'use strict';

class HelpPage {

    get pBrowseDocs() {
        return $('//p[text()="Browse Docs"]');
    }

    get headerNavVersionsBtn() {
        return $('nav [href="/docs/versions.html"]');
    }

    isPBrowseDocsDisplayed() {
        let isDisplayed = this.pBrowseDocs.isDisplayed();
        console.log('paragraph Browse Docs is displayed? ' + isDisplayed);
    }

    onHeaderNavVersionsBtnClick() {
        this.headerNavVersionsBtn.click();
    }
}

module.exports = new HelpPage();