'use strict';

const assert = require('assert');

describe('lesson #9_hometask - Horopashnyi', () => {
    // navigate to a necessary URL
    browser.url('https://webdriver.io');

    it('should get some html elements and display it attributes in terminal', () => {
        // locate link with text 'API' in .slidingNav>.nav-site .nav-site-internal>.siteNavGroupActive .siteNavItemActive
        const apiNavLink = $('a=API');

        // on apiNavLink click
        apiNavLink.click();

        //get url of apiNavLink and display it in terminal
        const apiNavLinkUrl = apiNavLink.getUrl();
        console.log('url of apiNavLinkUrl = ' + apiNavLinkUrl);

        // locate heading h1 .postHeaderTitle and dispay it text in terminal
        const apiDocsHeading = $('.postHeaderTitle');
        console.log('text of apiDocsHeading = ' + apiDocsHeading.getText());

        // locate link with the text 'JSONWire protocol' and dispay it href in terminal
        const JSONWireProtocolLink = $('a=JSONWire protocol');
        let attr = JSONWireProtocolLink.getAttribute('href');
        console.log('JSONWireProtocolLink href = ' + attr);
    });

    it('should set val in input and after it add another val', () => {
        // locate input #search_input_react and set val
        let searchInput = $('#search_input_react');
        searchInput.setValue('test is ');
        browser.pause(1000);

        //add val to input above and after it pause the browser for 5s
        searchInput.addValue('DONE!');
        browser.pause(5000);
    })
})