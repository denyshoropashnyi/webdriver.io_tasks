'use strict';

class LogInPage {
    get pageUrl() {
        return ('https://github.com/login');
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

    get accountEmail() {
        return ('xikina8739@whmailtop.com');
    }

    get passResetLink() {
        return $('a[href="/password_reset"]');
    }
}

module.exports = new LogInPage();