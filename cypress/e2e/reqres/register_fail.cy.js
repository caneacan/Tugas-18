describe('POST - Register Unsuccessful', () => {
  it('should fail to register without password', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/register',
      headers: {
        'x-api-key': 'reqres-free-v1'
      },
      body: {
        email: "sydney@fife"
      },
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.eq(400);
      expect(res.body).to.have.property('error', 'Missing password');
    });
  });
});
