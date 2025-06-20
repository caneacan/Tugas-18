describe('PUT - Update User', () => {
  it('should update user with PUT', () => {
    cy.request({
      method: 'PUT',
      url: '/api/users/2',
      headers: {
        'x-api-key': Cypress.env('api_key')
      },
      body: {
        name: 'morpheus',
        job: 'zion resident'
      }
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.include.keys('name', 'job', 'updatedAt');
      expect(res.body.name).to.eq('morpheus');
      expect(res.body.job).to.eq('zion resident');
    });
  });
});
