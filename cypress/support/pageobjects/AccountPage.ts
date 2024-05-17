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
    // Ir para o site que será testado
    accessSite(): void {
        cy.visit(url);
    }

    // Click on the button that accesses the login page of the site
    // Clique no botão que acessa a página de login do site
    clickButtonLogin(): void {
        cy.get(accountElements.buttonLogin()).click();
    }

    //--------------------------------------------------------------------------               CREATE ACCOUNT           --------------------------------------------------//
    //--------------------------------------------------------------------------                CRIAR CONTA             --------------------------------------------------//
    // Fill the email field to be registered
    // Preencha o campo de e-mail para se cadastrar
    fillEmailCreateAccount(): void {
        cy.get(accountElements.fieldEmailCreate()).type(account.email);
    }

    // Click in "Create an account" button
    // Clique no botão "Criar uma conta"
    clickButtonCreateAccount(): void {
        cy.get(accountElements.buttonCreate()).click();
    }

    // Fill "firstName" field
    // Preencha o campo "firstName"
    fillFirstName(): void {
        cy.get(accountElements.fieldFirstName()).type(account.name);
    }

    // Fill "lastName" field
    // Preencha o campo "lastName"
    fillLastName(): void {
        cy.get(accountElements.fieldLastName()).type(account.lastName);
    }

    // Fill "password" field to login
    // Preencha o campo "password" para fazer login
    fillPassword(): void {
        cy.get(accountElements.fieldPassword()).type(account.password);
    }

    // Fill field "date of birth"
    // Preencha o campo "data de nascimento"

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
    // Clique no botão "newsletter"
    clickButtonNewsLetter(): void {
        cy.get(accountElements.buttonNewsLetter()).click();
    }

    // Click in register button
    // Clique no botão de registro
    clickButtonRegister(): void {
        cy.get(accountElements.buttonRegister()).click();
    }

    // Select genre
    // Selecione o gênero  
    selectGenre(): void {
        const randomNumber: number = Math.floor(Math.random() * 2) + 1;
        if (randomNumber === 1) {
            cy.get(accountElements.buttonMaleGenre()).click();
        } else if (randomNumber === 2) {
            cy.get(accountElements.buttonFemaleGenre()).click();
        }
    }

    // Verify if has the success alert on the screen
    // Verifique se há o alerta de sucesso na tela
    verifyAlertSuccess(): void {
        cy.get(accountElements.alertSuccess());
    }

    // Verify if has the danger alert on the screen
    // Verifique se há o alerta de perigo na tela
    verifyAlertDanger(): void {
        cy.get(accountElements.alertDanger());
    }

    // New email to use in test with blank required field
    // Novo e-mail para usar no teste com campo obrigatório em branco
    fillNewEmailBlankFields(): void {
        cy.get(accountElements.fieldEmailCreate()).type(faker.internet.email());
    }

    //--------------------------------------------------------------------------               SIGN IN                  --------------------------------------------------//
    //--------------------------------------------------------------------------                LOGIN                   --------------------------------------------------//

    // Fill email field to login
    // Preencha o campo de e-mail para fazer login
    fillSignEmail(): void {
        cy.get(accountElements.fieldSignEmail()).type(account.email);
    }

    // Click in "Sign in" button
    // Clique no botão "Entrar"
    clickButtonSign(): void {
        cy.get(accountElements.buttonSign()).click();
    }

    // Verify URL my account in order to confirm that you have logged in
    // Verifique a URL "minha conta" para confirmar que você fez login
    verifyUrlLogged(): void {
        cy.url().should('include', 'controller=my-account');
    }

    // Fill password with incorrect password
    // Preencha a senha com uma senha incorreta
    fillIncorrectPassword(): void {
        cy.get(accountElements.fieldPassword()).type(faker.internet.password());
    }

    // Fill email with incorrect email
    fillNonExistingEmail(): void {
        cy.get(accountElements.fieldSignEmail()).type(faker.internet.email());
    }

    //--------------------------------------------------------------------------            MY INFORMATIONS             --------------------------------------------------//
    //--------------------------------------------------------------------------           MINHAS INFORMAÇÕES           --------------------------------------------------//

    // Access my information tab
    // Preencha o e-mail com um e-mail incorreto
    clickMyInformations(): void {
        cy.contains('My personal information').click();
    }

    // Fill field Current password
    // Preencha o campo de senha atual
    fillCurrentPassword(): void {
        cy.get(accountElements.fieldCurrentPassword()).type(account.password);
    }

    // Fill field new password
    // Preencha o campo de nova senha
    fillNewPasswordAndConfirmation(): void {
        const newpasswd: string = faker.internet.password();
        cy.get(accountElements.fieldNewPassword()).type(newpasswd);
        cy.get(accountElements.fieldConfirmPassword()).type(newpasswd);
        account.password = newpasswd;
    }

    // To fill in the "new password" and "confirmation" fields with different values.
    // Preencher os campos "nova senha" e "confirmação" com valores diferentes.
    fillDifferentsNewPasswordAndConfirmation(): void {
        cy.get(accountElements.fieldNewPassword()).type(faker.internet.password());
        cy.get(accountElements.fieldConfirmPassword()).type(faker.internet.password());
    }

    // Fill only password confirmation and leave new password empty
    // Preencha apenas a confirmação de senha e deixe a nova senha em branco
    fillOnlyPasswordConfirmation(): void {
        cy.get(accountElements.fieldConfirmPassword()).type(faker.internet.password());
    }
    // Fill only new password and leave new password confirmation empty
    // Preencha apenas a nova senha e deixe a confirmação de senha em branco
    fillOnlyNewPassword(): void {
        cy.get(accountElements.fieldNewPassword()).type(faker.internet.password());
    }
    // Fill field current password with incorrect password
    // Preencha o campo de senha atual com uma senha incorreta
    fillIncorrectCurrentPassword(): void {
        cy.get(accountElements.fieldCurrentPassword()).type(faker.internet.password());
    }

    // Click in save button
    // Clique no botão de salvar
    clickButtonSave(): void {
        cy.contains(accountElements.buttonSave()).click();
    }

    //--------------------------------------------------------------------------                 LOGOUT                 --------------------------------------------------//
    //--------------------------------------------------------------------------               "DESLOGAR"               --------------------------------------------------//

    // Click sign out button
    // Clique no botão de sair
    clickButtonLogout(): void {
        cy.get(accountElements.buttonLogout()).click();
    }

    // Verify login screen
    // Verifique a tela de login
    verifyScreenLogin(): void {
        cy.url().should('eq', 'http://www.automationpractice.pl/index.php?controller=authentication&back=my-account');
    }

    //--------------------------------------------------------------------------             FORGOT PASSWORD             --------------------------------------------------//
    //--------------------------------------------------------------------------             ESQUECEU SENHA             --------------------------------------------------//

    // Verify that the button has the text "Forgot your password?" and click it
    // Verifique se o botão tem o texto "Esqueceu sua senha?" e clique nele
    clickForgotPassword(): void {
        cy.get(accountElements.ForgotPassword()).should('contain', 'Forgot your password?').click();
    }

    // Click "Retrieve Password" button
    // Clique no botão Recuperar Senha
    clickButtonRetrievePassword(): void {
        cy.contains(accountElements.buttonRetrieve()).click();
    }
}

export default LoginPage;
