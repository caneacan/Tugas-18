describe('GET - Delayed Response', () => {
  it('should return users with delay', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users?delay=3',
      headers: {
        'x-api-key': 'reqres-free-v1' // langsung hardcode, bisa juga dari Cypress.env()
      }
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.data).to.be.an('array');
    });
  });
});
