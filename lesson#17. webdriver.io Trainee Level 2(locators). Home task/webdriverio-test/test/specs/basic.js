'use strict';

const assert = require('assert');

describe('lesson #17_hometask - Horopashnyi', () => {
    it('should navigate to a necessary URL', () => {
        browser.url('https://webdriver.io/docs/api.html');
    })

    it('should have the right css selectors in .navGroups and .post', () => {
        const h3Introduction = $('h3=Introduction');
        console.log('css expected Introduction. Result: ' + h3Introduction.getText()); //true

        const apiDocsLink = $('[class="navItem"][href*="/docs/api.html"]');
        console.log('css expected API Docs. Result: ' + apiDocsLink.getText()); //true

        const h3Protocols = $('h3=Protocols');
        console.log('css expected Protocols. Result: ' + h3Protocols.getText()); //true

        const webDriverProtocolLink = $('[class="navItem"][href="/docs/api/webdriver.html"]');
        console.log('css expected Webdriver Protocol. Result: ' + webDriverProtocolLink.getText()); //true

        const appiumNavLink = $('[class="navItem"][href="/docs/api/appium.html"]');
        console.log('css expected Appium. Result: ' + appiumNavLink.getText()); //true

        const jsonWireProtocolLink = $('[class="navItem"][href="/docs/api/jsonwp.html"]');
        console.log('css expected JSON Wire Protocol. Result: ' + jsonWireProtocolLink.getText()); //true

        const jsonWireMobileProtocolLink = $('[class="navItem"][href="/docs/api/mjsonwp.html"]');
        console.log('css expected Mobile JSON Wire Protocol. Result: ' + jsonWireMobileProtocolLink.getText()); //true

        const chromiumLink = $('[class="navItem"][href="/docs/api/chromium.html"]');
        console.log('css expected Chromium. Result: ' + chromiumLink.getText()); //true

        const sauceLabsLink = $('[class="navItem"][href="/docs/api/saucelabs.html"]');
        console.log('css expected Sauce Labs. Result: ' + sauceLabsLink.getText()); //true

        const seleniumStandaloneLink = $('[class="navItem"][href="/docs/api/selenium.html"]');
        console.log('css expected Selenium Standalone. Result: ' + seleniumStandaloneLink.getText()); //true

        const appiumLink = $('a[href="http://appium.io"]');
        console.log('css expected Appium. Result: ' + appiumLink.getText()); //true

        const legacyDocWebsitesLink = $('blockquote a[href="versions.html"]');
        console.log('css expected legacy docs websites. Result: ' + legacyDocWebsitesLink.getText()); //true

        const firstParagraphAfterExamples = $('p*=Each command documentation usually comes');
        console.log('css expected Each command documentation usually comes... Result: ' + firstParagraphAfterExamples.getText()); //true
    })

    it('should have the right css selectors in #footer', () => {
        const h5Docs = $('h5=Docs');
        console.log('css expected Docs. Result: ' + h5Docs.getText()); //true

        const footerGettingStartedLink = $('[id="footer"] [href="/docs/gettingstarted.html"]');
        console.log('css expected Getting Started. Result: ' + footerGettingStartedLink.getText()); //true

        const footerApiReferenceLink = $('[id="footer"] a[href="/docs/api.html"]');
        console.log('css expected API Reference. Result: ' + footerApiReferenceLink.getText()); //true

        const footerContributeLink = $('[id="footer"] a[href="/docs/contribute.html"]');
        console.log('css expected Contribute. Result: ' + footerContributeLink.getText()); //true

        const footerHelpLink = $('[id="footer"] a[href="/help.html"]');
        console.log('css expected Help. Result: ' + footerHelpLink.getText()); //true

        const h5Community = $('h5=Community');
        console.log('css expected Community. Result: ' + h5Community.getText()); //true

        const footerStackOverflowLink = $('[id="footer"] a[href="https://stackoverflow.com/questions/tagged/webdriver-io"]');
        console.log('css expected Stack Overflow. Result: ' + footerStackOverflowLink.getText()); //true

        const footerSupportChatLink = $('[id="footer"] a[href="https://gitter.im/webdriverio/webdriverio"]');
        console.log('css expected Support Chat. Result: ' + footerSupportChatLink.getText()); //true

        const footerSlackLink = $('[id="footer"] a[href*="https://seleniumhq.slack.com/join/shared_invite/en"]');
        console.log('css expected Slack. Result: ' + footerSlackLink.getText()); //true

        const footerTwitterLink = $('[id="footer"] a[href="https://twitter.com/webdriverio"]');
        console.log('css expected Twitter. Result: ' + footerTwitterLink.getText()); //true

        const h5More = $('h5=More');
        console.log('css expected More. Result: ' + h5More.getText()); //true

        const footerBlogLink = $('[id="footer"] a[href="/blog"]');
        console.log('css expected Blog. Result: ' + footerBlogLink.getText()); //true

        const footerGitHubLink = $('[id="footer"] a[href="https://github.com/webdriverio/webdriverio"]');
        console.log('css expected GitHub. Result: ' + footerGitHubLink.getText()); //true

        const footerStarCounterLink = $('[id="footer"] span');
        console.log('css expected <span></span>. Result: ' + footerStarCounterLink.getHTML()); //true
    })

    it('should have the right x-path selectors in .navGroups and .post', () => {
        const h3Introduction = $('//h3[text()="Introduction"]');
        console.log('x-path expected Introduction. Result: ' + h3Introduction.getText()); //true

        const apiDocsLink = $('//li/a[text()="API Docs"]');
        console.log('x-path expected API Docs. Result: ' + apiDocsLink.getText()); //true

        const h3Protocols = $('//h3[text()="Protocols"]');
        console.log('x-path expected Protocols. Result: ' + h3Protocols.getText()); //true

        const webDriverProtocolLink = $('//li/a[text()="Webdriver Protocol"]');
        console.log('x-path expected Webdriver Protocol. Result: ' + webDriverProtocolLink.getText()); //true

        const appiumNavLink = $('//li/a[text()="Appium"]');
        console.log('x-path expected Appium. Result: ' + appiumNavLink.getText()); //true

        const jsonWireProtocolLink = $('//li/a[text()="JSON Wire Protocol"]');
        console.log('x-path expected JSON Wire Protocol. Result: ' + jsonWireProtocolLink.getText()); //true

        const jsonWireMobileProtocolLink = $('//li/a[text()="Mobile JSON Wire Protocol"]');
        console.log('x-path expected Mobile JSON Wire Protocol. Result: ' + jsonWireMobileProtocolLink.getText()); //true

        const chromiumLink = $('//li/a[text()="Chromium"]');
        console.log('x-path expected Chromium. Result: ' + chromiumLink.getText()); //true

        const sauceLabsLink = $('//li/a[text()="Sauce Labs"]');
        console.log('x-path expected Sauce Labs. Result: ' + sauceLabsLink.getText()); //true

        const seleniumStandaloneLink = $('//li/a[text()="Selenium Standalone"]');
        console.log('x-path expected Selenium Standalone. Result: ' + seleniumStandaloneLink.getText()); //true

        const appiumLink = $('//p/a[text()="Appium"]');
        console.log('x-path expected Appium. Result: ' + appiumLink.getText()); //true

        const legacyDocWebsitesLink = $('//p/a[text()="legacy docs websites"]');
        console.log('x-path expected legacy docs websites. Result: ' + legacyDocWebsitesLink.getText()); //true

        const firstParagraphAfterExamples = $('//p[contains(text(), "Each command documentation usually comes")]');
        console.log('x-path expected Each command documentation usually comes... Result: ' + firstParagraphAfterExamples.getText()); //true
    })

    it('should have the right x-path selectors in #footer', () => {
        const h5Docs = $('//h5[text()="Docs"]');
        console.log('x-path expected Docs. Result: ' + h5Docs.getText()); //true

        const footerGettingStartedLink = $('//div/a[text()="Getting Started"]');
        console.log('x-path expected Getting Started. Result: ' + footerGettingStartedLink.getText()); //true

        const footerApiReferenceLink = $('//div/a[text()="API Reference"]');
        console.log('x-path expected API Reference. Result: ' + footerApiReferenceLink.getText()); //true

        const footerContributeLink = $('//div/a[text()="Contribute"]');
        console.log('x-path expected Contribute. Result: ' + footerContributeLink.getText()); //true

        const footerHelpLink = $('//div/a[text()="Help"]');
        console.log('x-path expected Help. Result: ' + footerHelpLink.getText()); //true

        const h5Community = $('//h5[text()="Community"]');
        console.log('x-path expected Community. Result: ' + h5Community.getText()); //true

        const footerStackOverflowLink = $('//div/a[text()="Stack Overflow"]');
        console.log('x-path expected Stack Overflow. Result: ' + footerStackOverflowLink.getText()); //true

        const footerSupportChatLink = $('//div/a[text()="Support Chat"]');
        console.log('x-path expected Support Chat. Result: ' + footerSupportChatLink.getText()); //true

        const footerSlackLink = $('//div/a[text()="Slack"]');
        console.log('x-path expected Slack. Result: ' + footerSlackLink.getText()); //true

        const footerTwitterLink = $('//div/a[text()="Twitter"]');
        console.log('x-path expected Twitter. Result: ' + footerTwitterLink.getText()); //true

        const h5More = $('//h5[text()="More"]');
        console.log('x-path expected More. Result: ' + h5More.getText()); //true

        const footerBlogLink = $('//div/a[text()="Blog"]');
        console.log('x-path expected Blog. Result: ' + footerBlogLink.getText()); //true

        const footerGitHubLink = $('//div/a[text()="GitHub"]');
        console.log('x-path expected GitHub. Result: ' + footerGitHubLink.getText()); //true

        const footerStarCounterLink = $('//footer//span');
        console.log('x-path expected <span></span>. Result: ' + footerStarCounterLink.getHTML()); //true
    })
})