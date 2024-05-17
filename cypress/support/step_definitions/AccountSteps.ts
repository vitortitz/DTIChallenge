import AccountPage from '../pageobjects/AccountPage';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const accountPage = new AccountPage();

Given("access the automationpractice website", () => {
    accountPage.accessSite();
});

When("access the login page", () => {
    accountPage.clickButtonLogin();
});

When("must fill in the fields to create a new user", () => {
    accountPage.fillEmailCreateAccount();
    accountPage.clickButtonCreateAccount();
    accountPage.selectGenre();
    accountPage.fillFirstName();
    accountPage.fillLastName();
    accountPage.fillPassword();
    accountPage.fillDateOfBirth();
    accountPage.clickButtonNewsLetter();
    accountPage.clickButtonRegister();
});

Then('verify success alert', () => {
    accountPage.verifyAlertSuccess();
});

/////

When('leave a blank required field', () => {
    accountPage.fillNewEmailBlankFields();
    accountPage.clickButtonCreateAccount();
    accountPage.selectGenre();
    accountPage.fillLastName();
    accountPage.fillPassword();
    accountPage.fillDateOfBirth();
    accountPage.clickButtonNewsLetter();
    accountPage.clickButtonRegister();
});

When('leave empty email field', () => {
    accountPage.clickButtonCreateAccount();
});

Then('verify danger alert', () => {
    accountPage.verifyAlertDanger();
});

////

When('must fill in the email field with an already registered email', () => {
    accountPage.fillEmailCreateAccount();
});

////

When('sign in', () => {
    accountPage.fillSignEmail();
    accountPage.fillPassword();
    accountPage.clickButtonSign();
});

When('access the edit profile tab and change my password', () => {
    accountPage.clickMyInformations();
    accountPage.fillCurrentPassword();
    accountPage.fillNewPasswordAndConfirmation();
    accountPage.clickButtonSave();
});

Then('valid authenticated home page', () => {
    accountPage.verifyUrlLogged();
});

////

When('sign in, leaving the password field blank', () => {
    accountPage.fillSignEmail();
    accountPage.clickButtonSign();
});

////
When('sign in leaving the email field blank', () => {
    accountPage.fillPassword();
    accountPage.clickButtonSign();
});

////
When('sign in with invalid password', () => {
    accountPage.fillSignEmail();
    accountPage.fillIncorrectPassword();
    accountPage.clickButtonSign();
});

////
When('sign in with invalid email', () => {
    accountPage.fillNonExistingEmail();
    accountPage.fillPassword();
    accountPage.clickButtonSign();
});
////

When('access to edit Registration tab and change my password, using differents password and confirmation', () => {
    accountPage.clickMyInformations();
    accountPage.fillCurrentPassword();
    accountPage.fillDifferentsNewPasswordAndConfirmation();
    accountPage.clickButtonSave();
});

////

When('access to edit Registration tab and change my password, using incorrect current password', () => {
    accountPage.clickMyInformations();
    accountPage.fillIncorrectCurrentPassword();
    accountPage.fillNewPasswordAndConfirmation();
    accountPage.clickButtonSave();
});

////

When('access the edit Registration tab and change my password, leaving the new password and confirmation both empty', () => {
    accountPage.clickMyInformations();
    accountPage.fillCurrentPassword();
    accountPage.clickButtonSave();
});

//// 

Given('authenticated user', () => {
    accountPage.accessSite();
    accountPage.clickButtonLogin();
    accountPage.fillSignEmail();
    accountPage.fillPassword();
    accountPage.clickButtonSign();
    accountPage.verifyUrlLogged();
});

When('click sign out button', () => {
    accountPage.clickButtonLogout();
});

Then('verify login screen', () => {
    accountPage.verifyScreenLogin();
});

When('click on forgot my account', () => {
    accountPage.clickForgotPassword();
});

When('fill the email field and click retrieve password', () => {
    accountPage.fillSignEmail();
    accountPage.clickButtonRetrievePassword();
});

When('leave empty email field and click retrieve password', () => {
    accountPage.clickButtonRetrievePassword();
});


When('access to edit Registration tab and change my password, leaving empty new password', () => {
    accountPage.clickMyInformations();
    accountPage.fillCurrentPassword();
    accountPage.fillOnlyPasswordConfirmation();
    accountPage.clickButtonSave();
});

When('access to edit Registration tab and change my password, leaving empty password confirmation', () => {
    accountPage.clickMyInformations();
    accountPage.fillCurrentPassword();
    accountPage.fillOnlyNewPassword();
    accountPage.clickButtonSave();
});
