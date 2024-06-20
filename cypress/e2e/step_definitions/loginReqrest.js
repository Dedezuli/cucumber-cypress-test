import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

let loginDetails = {};
let apiUrl = '';

Given('the login API endpoint is set to {string}', (url) => {
  apiUrl = url;
});

When('a user attempts to login with the following credentials', (dataTable) => {
  dataTable.hashes().forEach(row => {
    loginDetails = {
      email: row.email,
      password: row.password
    };
  });
  cy.api({
    method: 'POST',
    url: apiUrl,
    failOnStatusCode: false,
    body: loginDetails,
  }).as('loginResponse');
});

Then('the login should be successful', () => {
  cy.get('@loginResponse').then((response) => {
    expect(response.status).to.be.equal(200);
  });
});

Then('the response should contain a token', () => {
  cy.get('@loginResponse').then((response) => {
    expect(response.body).to.have.property('token');
    expect(response.body.token).not.to.be.null;
  });
});

Then('the login should fail', () => {
  cy.get('@loginResponse').then((response) => {
    expect(response.status).to.be.equal(400);
  });
});

Then('the response should contain the error {string}', (errorMessage) => {
  cy.get('@loginResponse').then((response) => {
    expect(response.body).to.have.property('error');
    expect(response.body.error).to.be.equal(errorMessage);
  });
});
