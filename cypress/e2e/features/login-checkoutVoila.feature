Feature: Login and Checkout

    Feature Login page will work depending on the user credentials.

    Background:
        Given I am on the login page

    Scenario: Login and Checkout with Valid Credentials
        When I enter valid username and password
        When I click the login button
        Then I should be redirected to the home page
        When I add a product to the cart
        When I click the checkout button
        When I enter the shipping details
        When I click the submit button
        Then I should see the confirmation page

    Scenario: Login with Invalid Credentials
        When I enter invalid username and password
        When I click the login button
        Then I should see an error message

    # Scenario: Checkout without Adding Product to the Cart
    #      When I click the checkout button
    #     Then I should see an error message

    # Scenario: Checkout without Entering Shipping Details
    #     When I click the checkout button
    #     When I do not enter any shipping details
    #     When I click the submit button
    #     Then I should see an error message