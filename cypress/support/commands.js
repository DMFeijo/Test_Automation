// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('Login', () => {

  cy.get('#yourUsername')
    .should('have.value', '')
    .should('be.visible')
    .type('admin@automacao.org.br')
  cy.get('#yourPassword')
    .should('have.value', '')
    .should('be.visible')
    .type('password01')
  cy.get('#logginButton')
    .should('be.visible')
    .click()
  cy.get('h1').contains('Dashboard')

})
Cypress.Commands.add('Visitar_url', () => {

  cy.visit('https://curso-automacao-web-app.herokuapp.com/login')
  cy.get('.card-title').contains('h5', 'Login to Your Account')

})
Cypress.Commands.add('Logout', () => {

  cy.get('.justify-content-between > .bi')
    .should('be.visible')
    .click()
  cy.get('#sidebar')
    .contains('Logout')
    .click()
  cy.url('login')
  cy.get('.card-title')
    .contains('h5', 'Login to Your Account')

})

Cypress.Commands.add('tela_criar_usuario', () => {

  cy.get('.justify-content-between > .bi')
    .should('be.visible')
    .click()
  cy.get('#sidebar')
    .contains('Users')
    .click()
  cy.get('.breadcrumb')
    .contains('User List')
  cy.get('#button-forms-customer-create')
    .should('be.visible')
    .click()
  cy.get('.card-title')
    .contains('User Form')
})