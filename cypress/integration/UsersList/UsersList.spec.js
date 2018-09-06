describe('Testing NavbarSokwe', () => {
  beforeEach(() => {
    // eslint-disable-next-line no-undef
    cy.visit('/admin/users');
  });

  // rpt admin tests
  it('loads a list of users', () => {
    // eslint-disable-next-line no-undef
    cy.contains('ListGroupItem').should('be.visible');
  });
});
