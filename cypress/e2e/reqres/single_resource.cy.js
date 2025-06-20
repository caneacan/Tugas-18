describe('GET - Single <RESOURCE>', () => {
  it('should return resource with ID 2', () => {
    cy.request({
      method: 'GET',
      url: '/api/unknown/2',
      headers: {
        'x-api-key': Cypress.env('api_key')
      }
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.data).to.have.property('id', 2);
    });
  });
});
