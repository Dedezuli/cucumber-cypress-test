Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I am on the login page', () => {
  cy.viewport('macbook-15')
  cy.visit('/account/login');
});

When('I enter valid username and password', () => {
  cy.get('#loginInputName').type('bovexo8500@hrisland.com');
  cy.get('#loginInputEmail').type('abcde123');
});

When('I click the login button', () => {
  cy.get('#customer_login > div.row > div.col-auto.mr-auto > div > button').click();
});

Then('I should be redirected to the home page', () => {
  cy.url().should('include', '/account');
});

When('I add a product to the cart', () => {
  cy.get('#main-menu > div > div > nav > ul > li:nth-child(4) > a > span').click();
  cy.get('#shopify-section-collection-template-boost-pfs-filter > div.boost-pfs-filter-wrapper > div:nth-child(1) > div.boost-pfs-filter-right-col > div.boost-pfs-filter-products.boost-pfs-filter-product-item-equal-height-auto.boost-pfs-filter-product-item-label-type-rectangle.boost-pfs-filter-product-item-show-details-false.boost-pfs-filter-product-item-layout-no-border.boost-pfs-filter-product-item-label-top_left.boost-pfs-filter-product-item-text-alignment-center.bc-al-style1 > div:nth-child(1) > div > div.boost-pfs-filter-product-bottom > div > a.boost-pfs-filter-product-item-title').click();
  cy.contains('+ Keranjang').click();
});

When('I click the checkout button', () => {
  cy.wait(1000)
  cy.get('#modalAddToCartProduct > div > div > div.modal-body > div.tt-modal-addtocart.desctope > div > div:nth-child(2) > a:nth-child(4)').click()
});

When('I enter the shipping details', () => {
  cy.get('#TextField1').clear().type('Dede')
  cy.get('#TextField2').clear().type('zuliana')
  cy.get('#TextField3').clear().type('Dede Zuliana - Candidate QA')
  cy.get('#TextField4').clear().type('district')
  cy.get('#TextField5').clear().type('City')
  cy.get('#Select2').select('Bali')
  cy.get('#TextField6').clear().type('10420')
  cy.get('#TextField7').clear().type('083820932701')
});

When('I click the submit button', () => {
  cy.contains('Lanjutkan ke pengiriman').click();
});

When('I enter invalid username and password', () => {
  cy.get('#loginInputName').type('example@hrisland.com');
  cy.get('#loginInputEmail').type('abcde123');
});

Then('I should see the confirmation page', () => {
  cy.get('#app > div > div > div > div:nth-child(1) > div > aside > div.RTcqB > div > div > div > section > div.nfgb6p0 > div._1x41w3p1._1fragem1a._1fragem4._1x41w3p8 > div._1x41w3pa > div > div > strong')
  .should('contain','Rp3.800.000,00');
});

Then('I should see an error message', () => {
  cy.get('.errors').should('be.visible').and('contain','Email atau sandi salah.');
});

Then('I should remain on the login page', () => {
  cy.url().should('include', '/login');
});
