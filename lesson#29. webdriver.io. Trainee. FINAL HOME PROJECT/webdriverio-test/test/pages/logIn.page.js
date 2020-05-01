'use strict';

class LogInPage {

    get pageUrl() {
        return ('https://github.com/login');
    }

    get pageHeading() {
        return ($('//h1[text()="Create your account"]'));
    }

    get userNameInput() {
        return $('[id="login_field"]');
    }

    get userPassInput() {
        return $('[id="password"]');
    }

    get signInBtn() {
        return $('input[type="submit"]');
    }

    get accountUsername() {
        return ('testAccountForWebdriverIO');
    }

    get accountPass() {
        return ('GZnVXne46VGJvj4');
    }




}

module.exports = new LogInPage();