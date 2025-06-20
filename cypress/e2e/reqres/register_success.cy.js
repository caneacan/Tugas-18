describe('POST - Register Successful', () => {
  it('should register user successfully', () => {
    cy.request({
      method: 'POST',
      url: '/api/register',
      headers: {
        'x-api-key': Cypress.env('api_key')
      },
      body: {
        email: "eve.holt@reqres.in",
        password: "pistol"
      }
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property('token');
    });
  });
});
