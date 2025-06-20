describe('GET - Single User', () => {
  it('should return user with ID 2', () => {
    cy.request({
      method: 'GET',
      url: '/api/users/2',
      headers: {
        'x-api-key': Cypress.env('api_key')
      }
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.data).to.have.property('id', 2);
    });
  });
});
