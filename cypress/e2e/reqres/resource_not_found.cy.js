describe('GET - Single <RESOURCE> Not Found', () => {
  it('should return 404 for non-existing resource', () => {
    cy.request({
      method: 'GET',
      url: '/api/unknown/23',
      headers: {
        'x-api-key': Cypress.env('api_key')
      },
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.eq(404);
    });
  });
});
