describe('GET - List Users', () => {
  it('should return list of users page 2', () => {
    cy.request('/api/users?page=2').then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property('page', 2);
      expect(res.body.data).to.be.an('array').and.have.length(6);
    });
  });
});
