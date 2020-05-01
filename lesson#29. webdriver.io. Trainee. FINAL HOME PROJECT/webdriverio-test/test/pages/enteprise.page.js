'use strict';

class EnteprisePage {

    get startFreeTrialBtn() {
        return $('[class="clearfix"] a[href="/organizations/enterprise_plan"]');
    }

    get entepriseCloudBtn() {
        return $('//a[@href="https://github.com/join?source=enterprise-plan-cloud"]');
    }

    get entepriseServerBtn() {
        return $('//a[@href="https://enterprise.github.com/trial?source=pricing-card-enterprise"]');
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


    get contactNameInput() {
        return $('[id="contact_request_name"]');
    }

    get contactCompanyInput() {
        return $('[id="contact_request_organization_name"]');
    }

    get contactEmailInput() {
        return $('[id="contact_request_email"]');
    }

    get contactPhoneInput() {
        return $('[id="contact_request_phone"]');
    }

    get notSureYetRadioBtn() {
        return $('[id="contact_request_instance_type_not_sure"]');
    }

    get answerYesAboutOtherQuestion() {
        return $('[id="questions_yes"]');
    }

    get otherQuestionTextArea() {
        return $('[id="questions-list"]');
    }

    get contactAgreementCheckBox() {
        return $('[id="contact_request_agreed_to_terms"]');
    }

    get homePageLink() {
        return $('a[href="/"]');
    }
}

module.exports = new EnteprisePage();