'use strict';

class MainPage {

    get pageUrl() {
        return ('https://github.com/');
    }

    get upperUserNameInput() {
        return $('[id="user[login]"]');
    }

    get upperUserEmailInput() {
        return $('[id="user[email]"]');
    }

    get upperUserPassInput() {
        return $('[id="user[password]"]');
    }

    get upperSignUpBtn() {
        return $('[data-ga-click="Signup, Attempt, location:home hero"]');
        // return $('[data-experiment="homepage_signup_flow"] button[type="submit"]');
    }

    get lowerUserNameInput() {
        return $('[id="user[login]-footer"]');
    }

    get lowerUserEmailInput() {
        return $('[id="user[email]-footer"]');
    }

    get lowerUserPassInput() {
        return $('[id="user[password]-footer"]');
    }

    get lowerSignUpBtn() {
        return $('[aria-label="Sign up"] button[type="submit"]');
    }

    get signInBtn() {
        return $('a[href="/login"]');
    }


    get dropDownMenuBtn() {
        return $('[aria-label="View profile and more"]');
    }

    get yourProfileLink() {
        return $('a[data-ga-click="Header, go to profile, text:your profile"]');
    }

    get whyGitHubDropdownListLink() {
        return $('//summary[contains(text(), "Why GitHub")]');
    }

    get whyGitHubDropdownList() {
        return $('a[href="/features"][data-ga-click="(Logged out) Header, go to Features"]');
    }

    get exploreDropdownListLink() {
        return $('//summary[contains(text(), "Explore")]');
    }

    get exploreDropdownList() {
        return $('a[href="/topics"][data-ga-click="(Logged out) Header, go to Topics"]');
    }

    get pricingDropdownListLink() {
        return $('//summary[contains(text(), "Pricing")]');
    }

    get pricingDropdownList() {
        return $('a[href="/pricing"][data-ga-click="(Logged out) Header, go to Pricing"]');
    }

    get pricingPlansItem() {
        return $('a[data-ga-click="(Logged out) Header, go to Pricing"]');
    }

    get exploreGithubDropdownListLink() {
        return $('a[href="/explore"]');
    }

    get searchInput() {
        return $('input[placeholder="Search GitHub"]');
    }

    get mainPageLink() {
        return $('a[href="https://github.com/"]');
    }


    get howGithubEntepriseWorkBtn() {
        return $('a[href="/enterprise"][data-ga-click="Home Enterprise, click, text:Learn how GitHub Enterprise works"]');
    }

    get careersFooterLink() {
        return $('a[href="/about/careers"]');
    }






    // setMainUrl(val) {
    //     return browser.url(val);
    // }

    // setUsername() {
    //     const generateRandomString = (length = 6) => Math.random().toString(20).substr(2, 6);
    // }
}

module.exports = new MainPage();