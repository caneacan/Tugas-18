describe('GET - List <RESOURCE>', () => {
  it('should return list of resources', () => {
    cy.request({
      method: 'GET',
      url: '/api/unknown',
      headers: {
        'x-api-key': Cypress.env('api_key')
      }
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.data).to.be.an('array');
    });
  });
});
