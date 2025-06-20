describe('GET - Single User Not Found', () => {
  it('should return 404 for non-existing user', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users/23',
      headers: {
        'x-api-key': 'reqres-free-v1'
      },
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.eq(404);
    });
  });
});
