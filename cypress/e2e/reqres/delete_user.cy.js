describe('DELETE - Delete User', () => {
  it('should delete user', () => {
    cy.request({
      method: 'DELETE',
      url: '/api/users/2',
      headers: {
        'x-api-key': Cypress.env('api_key') // ← ambil dari konfigurasi
      }
    }).then((res) => {
      expect(res.status).to.eq(204);
    });
  });
});
