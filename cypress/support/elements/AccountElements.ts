class AccountElements {
    buttonLogin = (): string => { return '.login'; }
    ForgotPassword = (): string => { return '.lost_password > a'; }
    buttonSign = (): string => { return '#SubmitLogin > span'; }
    buttonCreate = (): string => { return '#SubmitCreate > span'; }
    buttonNewsLetter = (): string => { return '#newsletter'; }
    buttonRegister = (): string => { return '#submitAccount > span'; }
    buttonMaleGenre = (): string => { return '#id_gender1'; }
    buttonFemaleGenre = (): string => { return '#id_gender2'; }
    buttonMyInformation = (): string => { return 'My personal information'; }
    buttonSave = (): string => { return 'Save'; }
    buttonLogout = (): string => { return '.logout'; }
    buttonRetrieve = (): string => { return 'Retrieve Password'; }

    fieldEmailCreate = (): string => { return '#email_create'; }
    fieldSignEmail = (): string => { return '#email'; }
    fieldPassword = (): string => { return '#passwd'; }
    fieldFirstName = (): string => { return '#customer_firstname'; }
    fieldLastName = (): string => { return '#customer_lastname'; }
    fieldDay = (): string => { return '#days'; }
    fieldMonth = (): string => { return '#months'; }
    fieldYear = (): string => { return '#years'; }
    fieldCurrentPassword = (): string => { return '#old_passwd'; }
    fieldNewPassword = (): string => { return '#passwd'; }
    fieldConfirmPassword = (): string => { return '#confirmation'; }

    alertSuccess = (): string => { return '.alert-success'; }
    alertDanger = (): string => { return '.alert-danger'; }

    urlMyAccount = (): string => { return 'controller=my-account'; }
}

export default AccountElements;
