/// <reference types="Cypress" />
import { faker } from '@faker-js/faker';
import AccountElements from '../elements/AccountElements';

const accountElements = new AccountElements();
const url: string = Cypress.config("baseUrl") ?? "";
const account: {
    name: string;
    lastName: string;
    email: string;
    password: string;
} = {
    name: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password()
};

class LoginPage {
    // Go to the site that will be tested
    accessSite(): void {
        cy.visit(url);
    }

    // Click on the button that accesses the login page of the site
    clickButtonLogin(): void {
        cy.get(accountElements.buttonLogin()).click();
    }

    // CREATE ACCOUNT
    // Fill the email field to be registered
    fillEmailCreateAccount(): void {
        cy.get(accountElements.fieldEmailCreate()).type(account.email);
    }

    // Click in "Create an account" button
    clickButtonCreateAccount(): void {
        cy.get(accountElements.buttonCreate()).click();
    }

    // Fill "firstName" field
    fillFirstName(): void {
        cy.get(accountElements.fieldFirstName()).type(account.name);
    }

    // Fill "lastName" field
    fillLastName(): void {
        cy.get(accountElements.fieldLastName()).type(account.lastName);
    }

    // Fill "password" field to login
    fillPassword(): void {
        cy.get(accountElements.fieldPassword()).type(account.password);
    }

    // Fill field "date of birth"
    fillDateOfBirth(): void {
        const dataAleatoria: Date = faker.date.past();
        const day: number = dataAleatoria.getDate();
        const month: number = dataAleatoria.getMonth() + 1;
        const year: string = dataAleatoria.getFullYear().toString();
        cy.get(accountElements.fieldDay()).select(day, { force: true });
        cy.get(accountElements.fieldMonth()).select(month, { force: true });
        cy.get(accountElements.fieldYear()).select(year, { force: true });
    }

    // Click in "newsletter" button
    clickButtonNewsLetter(): void {
        cy.get(accountElements.buttonNewsLetter()).click();
    }

    // Click in register button
    clickButtonRegister(): void {
        cy.get(accountElements.buttonRegister()).click();
    }

    // Select genre
    selectGenre(): void {
        const randomNumber: number = Math.floor(Math.random() * 2) + 1;
        if (randomNumber === 1) {
            cy.get(accountElements.buttonMaleGenre()).click();
        } else if (randomNumber === 2) {
            cy.get(accountElements.buttonFemaleGenre()).click();
        }
    }

    // Verify if has the success alert on the screen
    verifyAlertSuccess(): void {
        cy.get(accountElements.alertSuccess());
    }

    // Verify if has the danger alert on the screen
    verifyAlertDanger(): void {
        cy.get(accountElements.alertDanger());
    }

    // New email to use in test with blank required field
    fillNewEmailBlankFields(): void {
        cy.get(accountElements.fieldEmailCreate()).type(faker.internet.email());
    }

    // SIGN IN
    // Fill email field to login
    fillSignEmail(): void {
        cy.get(accountElements.fieldSignEmail()).type(account.email);
    }

    // Click in "Sign in" button
    clickButtonSign(): void {
        cy.get(accountElements.buttonSign()).click();
    }

    // Verify URL my account in order to confirm that you have logged in
    verifyUrlLogged(): void {
        cy.url().should('include', 'controller=my-account');
    }

    // Fill password with incorrect password
    fillIncorrectPassword(): void {
        cy.get(accountElements.fieldPassword()).type(faker.internet.password());
    }

    // Fill email with incorrect email
    fillNonExistingEmail(): void {
        cy.get(accountElements.fieldSignEmail()).type(faker.internet.email());
    }

    // MY INFORMATION
    // Access my information tab
    clickMyInformations(): void {
        cy.contains('My personal information').click();
    }

    // Fill field Current password
    fillCurrentPassword(): void {
        cy.get(accountElements.fieldCurrentPassword()).type(account.password);
    }

    // Fill field new password
    fillNewPasswordAndConfirmation(): void {
        const newpasswd: string = faker.internet.password();
        cy.get(accountElements.fieldNewPassword()).type(newpasswd);
        cy.get(accountElements.fieldConfirmPassword()).type(newpasswd);
        account.password = newpasswd;
    }

    // To fill in the "new password" and "confirmation" fields with different values.
    fillDifferentsNewPasswordAndConfirmation(): void {
        cy.get(accountElements.fieldNewPassword()).type(faker.internet.password());
        cy.get(accountElements.fieldConfirmPassword()).type(faker.internet.password());
    }

    // Fill only password confirmation and leave new password empty
    fillOnlyPasswordConfirmation(): void {
        cy.get(accountElements.fieldConfirmPassword()).type(faker.internet.password());
    }

    // Fill only new password and leave new password confirmation empty
    fillOnlyNewPassword(): void {
        cy.get(accountElements.fieldNewPassword()).type(faker.internet.password());
    }

    // Fill field current password with incorrect password
    fillIncorrectCurrentPassword(): void {
        cy.get(accountElements.fieldCurrentPassword()).type(faker.internet.password());
    }

    // Click in save button
    clickButtonSave(): void {
        cy.contains(accountElements.buttonSave()).click();
    }

    // LOGOUT
    // Click sign out button
    clickButtonLogout(): void {
        cy.get(accountElements.buttonLogout()).click();
    }

    // Verify login screen
    verifyScreenLogin(): void {
        cy.url().should('eq', 'http://www.automationpractice.pl/index.php?controller=authentication&back=my-account');
    }

    // FORGOT PASSWORD
    // Verify that the button has the text "Forgot your password?" and click it
    clickForgotPassword(): void {
        cy.get(accountElements.ForgotPassword()).should('contain', 'Forgot your password?').click();
    }

    // Click "Retrieve Password" button
    clickButtonRetrievePassword(): void {
        cy.contains(accountElements.buttonRetrieve()).click();
    }
}

export default LoginPage;
