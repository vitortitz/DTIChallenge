Feature: Login
    I as a user would like to register and manage my account

  Scenario: Create Account successfully
    Given access the automationpractice website
    When access the login page
    And must fill in the fields to create a new user
    Then verify success alert

  Scenario: Block account creation with blank email
    Given access the automationpractice website
    When access the login page
    And leave empty email field
    Then verify danger alert

  Scenario: Block account creation with blank required fields
    Given access the automationpractice website
    When access the login page
    And leave a blank required field
    Then verify danger alert

  Scenario: Block account creation with Email already registered
    Given access the automationpractice website
    When access the login page
    And must fill in the email field with an already registered email
    Then verify danger alert

  Scenario: Log in successfully
    Given access the automationpractice website
    When access the login page
    And sign in
    Then valid authenticated home page

  Scenario: Block login with blank password field
    Given access the automationpractice website
    When access the login page
    And sign in, leaving the password field blank
    Then verify danger alert

  Scenario: Block login with blank email field
    Given access the automationpractice website
    When access the login page
    And sign in leaving the email field blank
    Then verify danger alert

  Scenario: Block login with incorrect email
    Given access the automationpractice website
    When access the login page
    And sign in with invalid email
    Then verify danger alert

  Scenario: Block login with incorrect password
    Given access the automationpractice website
    When access the login page
    And sign in with invalid password
    Then verify danger alert

  Scenario: Logout
    Given authenticated user
    When click sign out button
    Then verify login screen

  Scenario: Change account password
    Given authenticated user
    When access the edit profile tab and change my password
    Then verify success alert

  Scenario: Block change account password with new password and different confirmation
    Given authenticated user
    When access to edit Registration tab and change my password, using differents password and confirmation
    Then verify danger alert
    #In this scenario, an improvement to be made, is to leave the new password and confirmation fields as required fields, since you are changing password without entering a new one.

  Scenario: Block change account password with new password and confirmation both empty
    Given authenticated user
    When access the edit Registration tab and change my password, leaving the new password and confirmation both empty
    Then verify danger alert

  Scenario: Block change account password with blank new password
    Given authenticated user
    When access to edit Registration tab and change my password, leaving empty new password
    Then verify danger alert

  Scenario: Block change account password with blank confirmation password
    Given authenticated user
    When access to edit Registration tab and change my password, leaving empty password confirmation
    Then verify danger alert

  Scenario: Block change account password with incorrect current password
    Given authenticated user
    When access to edit Registration tab and change my password, using incorrect current password
    Then verify danger alert

  Scenario: Retrieve an account
    Given access the automationpractice website
    When access the login page
    And click on forgot my account
    And fill the email field and click retrieve password
    Then verify success alert

  Scenario: Block retrieve an account with empty email field
    Given access the automationpractice website
    When access the login page
    And click on forgot my account
    And leave empty email field and click retrieve password
    Then verify danger alert
