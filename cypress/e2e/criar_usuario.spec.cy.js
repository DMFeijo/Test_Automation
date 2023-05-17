import { faker } from '@faker-js/faker'
describe('Criar usuário', () => {
    beforeEach(() => {

        cy.Visitar_url()
        cy.Login()
        cy.tela_criar_usuario()

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
            .click({ force: true })

        cy.get('tbody > :nth-child(3) > :nth-child(1)')
            .should('be.visible')
            .contains(3)

    });
    it('Campos obrigatórios vazios', () => {

        cy.get('#submit').click()

        cy.get('#userName1')
            .should('have.value', '')
        cy.get(':nth-child(2) > .invalid-feedback')
            .should('be.visible')
            .contains('Please, enter user Name!')
        cy.get('#userName2')
            .should('have.value', '')
        cy.get(':nth-child(3) > .invalid-feedback')
            .should('be.visible')
            .contains('Please, enter user Name!')
        cy.get('#userPassword1')
            .should('have.value', '')
        cy.get(':nth-child(4) > .invalid-feedback')
            .should('be.visible')
            .contains('Please enter a valid Password (min 10 chars)!')
        cy.get('#userPasswordConfirmation')
            .should('have.value', '')
        cy.get(':nth-child(5) > .invalid-feedback')
            .should('be.visible')
            .contains('Please enter a valid Password Confirmation (min 10 chars)!')
        cy.get('#userRoles')
            .should('have.value', '')
        cy.get(':nth-child(6) > .invalid-feedback')
            .should('be.visible')
            .contains('Please, enter user Roles!')

        cy.get('#alert-error')
            .should('be.visible')
            .contains('Error on user recording!')

    });
    it.only('Realizar cadastro com formato de senha inválido', () => {

        cy.get('#userName1')
            .should('be.visible')
            .click({ force: true })
            .type(faker.name.fullName())

        cy.get('#userName2')
            .should('be.visible')
            .type(faker.internet.email())

        cy.get('#userPassword1')
            .should('be.visible')
            .type(12345)

        cy.get('#userPasswordConfirmation')
            .should('be.visible')
            .type(12345)

        cy.get('#userRoles')
            .should('be.visible')
            .type('TESTE')

        cy.get('#submit').click()

        cy.get(':nth-child(4) > .invalid-feedback')
            .should('be.visible')
            .contains('Please enter a valid Password (min 10 chars)!')

        cy.get(':nth-child(5) > .invalid-feedback')
            .should('be.visible')
            .contains('Please enter a valid Password Confirmation (min 10 chars)!')

    });
});