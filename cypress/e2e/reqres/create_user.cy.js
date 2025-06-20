describe('POST - Create User with Env API Key', () => {
  it('should create new user', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/users',
      headers: {
        'x-api-key': Cypress.env('api_key')
      },
      body: {
        name: 'morpheus',
        job: 'leader'
      }
    }).then((res) => {
      expect(res.status).to.eq(201);
      expect(res.body).to.include.keys('id', 'createdAt');
    });
  });
});
