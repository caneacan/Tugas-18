describe('PATCH - Update User', () => {
  it('should update user with PATCH', () => {
    cy.request({
      method: 'PATCH',
      url: 'https://reqres.in/api/users/2',
      headers: {
        'x-api-key': 'reqres-free-v1'
      },
      body: {
        name: 'neo'
      }
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.include.keys('name', 'updatedAt');
      expect(res.body.name).to.eq('neo');
    });
  });
});
