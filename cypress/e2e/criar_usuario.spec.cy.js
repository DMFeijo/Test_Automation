import { faker } from '@faker-js/faker'
describe('Criar usuário', () => {
    beforeEach(() => {

        cy.Visitar_url()
        cy.Login()
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
    });
    it('Preenchimento bem-sucedido do formulário', () => {

        const password = faker.internet.password(10)

        cy.get('#userName1')
            .should('be.visible')
            .click({ force: true })
            .type(faker.name.fullName())
        cy.get('#userName2')
            .should('be.visible')
            .type(faker.internet.email())
        cy.get('#userPassword1')
            .should('be.visible')
            .type(password)
        cy.get('#userPasswordConfirmation')
            .should('be.visible')
            .type(password)
        cy.get('#userRoles')
            .should('be.visible')
            .type('TESTE')

        cy.get('#submit').click()
        cy.get('#alert-success')
            .should('be.visible')
            .contains('User saved succesfully!')

        cy.get('.breadcrumb')
            .should('be.visible')
            .contains('Users')
            .click({force: true})

        cy.get('tbody > :nth-child(4) > :nth-child(1)')
            .should('be.visible')
            .contains(6)

    });
});