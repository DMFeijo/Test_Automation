describe('Login', () => {
  beforeEach(() => {
    
    cy.Visitar_url()

  });
  it('Teste de login válido', () => {

    cy.Login()

  })
  it('Teste de login inválido', () => {

    cy.get('#yourUsername').type('admin@automacao.org.br')
    cy.get('#yourPassword').type('senha_erro')
    cy.get('#logginButton').click()
    cy.get('#alert-error')
      .should('be.visible')
      .contains('Error on login, check your user and password!')

  })
  it('Teste de campo obrigatório', () => {

    cy.get('#yourPassword').type('password01')
    cy.get('#logginButton').click()
    cy.get('#alert-error')
      .should('be.visible')
      .contains('Error on login, check your user and password!')

  });
})