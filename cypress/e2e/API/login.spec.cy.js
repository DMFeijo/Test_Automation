describe('Login API', () => {

    let data;

    before(() => {
        cy.fixture('example').then((tData) => {

            data = tData

        })
    });
    it('Login bem-sucedido', () => {
        cy.request({
            method: 'POST',
            url: 'https://curso-automacao-user-service.herokuapp.com/auth',
            headers: {
                "Content-type": "application/json"
            },
            body: {
                username: data.username,
                password: data.password
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('token')

        })
    })
})