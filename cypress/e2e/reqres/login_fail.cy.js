describe('POST - Login Unsuccessful', () => {
  it('should fail to login without password', () => {
    cy.request({
      method: 'POST',
      url: '/api/login',
      headers: {
        'x-api-key': Cypress.env('api_key')
      },
      body: {
        email: "peter@klaven"
      },
      failOnStatusCode: false // karena expect 400
    }).then((res) => {
      expect(res.status).to.eq(400);
      expect(res.body).to.have.property('error', 'Missing password');
    });
  });
});
