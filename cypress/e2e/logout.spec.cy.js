describe('Logout', () => {
  beforeEach(() => {

    cy.Visitar_url()
    cy.Login()

  });
  it('Realizar logout', () => {

    cy.Logout()

  })
})