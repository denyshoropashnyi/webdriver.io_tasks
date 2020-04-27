'use strictly';

const assert = require('assert');

describe('lesson #14_hometask - Horopashnyi', () => {
    it('1. should navigate to a necessary URL', () => {
        browser.url('https://webdriver.io/docs/api.html');
        browser.pause(2222);
    })

    it('2&3. should open JSONWireProtocolLink in a new tab and navigate to the new tab URL', () => {
        const JSONWireProtocolLink = $('a=JSONWire protocol');
        let JSONWireProtocolLinkHref = JSONWireProtocolLink.getAttribute('href');
        browser.newWindow(JSONWireProtocolLinkHref);
        browser.url(JSONWireProtocolLinkHref);
    })

    it('4. should detect if an element asideLinkToHome is displayed and show result in terminal', () => {
        const asideLinkToHome = $('strong a[href="/SeleniumHQ/selenium/wiki"]');
        let isAsideLinkToHomeDisplayed = asideLinkToHome.isDisplayed();
        console.log('is asideLinkToHome displayed?: ' + isAsideLinkToHomeDisplayed);
        browser.pause(2222);
    })

    it('5. should switch back to the first tab', () => {
        browser.switchWindow('https://webdriver.io/docs/api.html');
        browser.pause(2222);
    })

    it('6. should wait until expected text is strictly equal API Docs', () => {
        browser.waitUntil(() => {
            return $('.postHeaderTitle').getText() === 'API Docs';
        }, 5555, 'expected text to be different after 5.555s');
    });

    it('7. should save screenshot of the elem .postHeaderTitle', () => {
        $('.postHeaderTitle').saveScreenshot('.postHeaderTitle_sreenshot.png');
    });

    it('8. should detect if an element footerTwitterLink is displayed and show result in terminal', () => {
        const footerTwitterLink = $('[href="https://twitter.com/webdriverio"]');
        let isFooterTwitterLinkDisplayed = footerTwitterLink.isDisplayed();
        console.log('is footerTwitterLink displayed?: ' + isFooterTwitterLinkDisplayed);
    })

    it('9. should detect if an element footerTwitterLink is displayed in viewport and show result in terminal', () => {
        const footerTwitterLink = $('[href="https://twitter.com/webdriverio"]');
        let isFooterTwitterLinkDisplayedInViewport = footerTwitterLink.isDisplayedInViewport();
        console.log('is footerTwitterLink displayed in viewport?: ' + isFooterTwitterLinkDisplayedInViewport);
    })

    it('10. should move to an element footerTwitterLink', () => {
        const footerTwitterLink = $('[href="https://twitter.com/webdriverio"]');
        footerTwitterLink.scrollIntoView();
        browser.pause(2222);
    });

    it('11. should detect if an element footerTwitterLink is displayed after scrolling and show result in terminal', () => {
        const footerTwitterLink = $('[href="https://twitter.com/webdriverio"]');
        let isFooterTwitterLinkDisplayedInViewport = footerTwitterLink.isDisplayedInViewport();
        console.log('is footerTwitterLink displayed in viewport?: ' + isFooterTwitterLinkDisplayedInViewport);
    })

    it('12. should detect if an element footerTwitterLink is displayed in viewport after scrolling and show result in terminal', () => {
        const footerTwitterLink = $('[href="https://twitter.com/webdriverio"]');
        let isFooterTwitterLinkDisplayedInViewport = footerTwitterLink.isDisplayedInViewport();
        console.log('is footerTwitterLink displayed in viewport?: ' + isFooterTwitterLinkDisplayedInViewport);
    })

    it('13&14&15. should detect the focus of an element navBlogLink before and after click and show results in terminal', () => {
        const navBlogLink = $('[href="/blog/"]');
        console.log('navBlogLink.isFocused() before click ' + navBlogLink.isFocused());
        browser.pause(2222);
        navBlogLink.click();
        console.log('navBlogLink .isFocused() after click ' + navBlogLink.isFocused());
        browser.pause(2222);
    });
})