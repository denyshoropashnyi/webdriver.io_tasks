'use strict';

class PlansPage {
    get joinForFreeBtn() {
        return $('a[data-ga-click="Pricing topcarousel, click, text:Join for free; card:Free; ref_page:Pricing"]');
    }

    get userNameInput() {
        return $('[id="user_login"]');
    }

    get userEmailInput() {
        return $('[id="user_email"]');
    }

    get userPassInput() {
        return $('[id="user_password"]');
    }

    get emailPreferencesCheckBox() {
        return $('[id="all_emails"]');
    }
}

module.exports = new PlansPage();