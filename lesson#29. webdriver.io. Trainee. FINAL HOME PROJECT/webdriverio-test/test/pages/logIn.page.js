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
        return ('testAccountForFinalProject');
    }

    get accountPass() {
        return ('TTJsnHNTWe7rJwh');
    }

    get accountEmail() {
        return ('dafimow915@mailop7.com');
    }

    get passResetLink() {
        return $('a[href="/password_reset"]');
    }
}

module.exports = new LogInPage();