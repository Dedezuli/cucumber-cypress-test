Feature: Login API

  The Login API will authenticate users based on their credentials.

  Background:
    Given the login API endpoint is set to "https://reqres.in/api/login"

  Scenario: Success Login
    When a user attempts to login with the following credentials
      | email               | password   |
      | eve.holt@reqres.in  | cityslicka |
    Then the login should be successful
    And the response should contain a token

  Scenario: Missing Password
    When a user attempts to login with the following credentials
      | email               | password |
      | eve.holt@reqres.in  |          |
    Then the login should fail
    And the response should contain the error "Missing password"

  Scenario: Missing Email
    When a user attempts to login with the following credentials
      | email | password   |
      |       | cityslicka |
    Then the login should fail
    And the response should contain the error "Missing email or username"

  Scenario: Incorrect Email
    When a user attempts to login with the following credentials
      | email                   | password   |
      | incorrect.email@reqres.in | cityslicka |
    Then the login should fail
    And the response should contain the error "user not found"

  Scenario: Incorrect Password
    When a user attempts to login with the following credentials
      | email               | password    |
      | eve.holt@reqres.in  | wrongpassword |
    Then the login should fail
    And the response should contain the error "user not found"
