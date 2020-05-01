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
        return $('[data-experiment="homepage_signup_flow"] button[type="submit"]');
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




    setMainUrl(val) {
        return browser.url(val);
    }

    setUsername() {
        const generateRandomString = (length = 6) => Math.random().toString(20).substr(2, 6);
    }
}

module.exports = new MainPage();