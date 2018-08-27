describe('testing About page', () => {
  beforeEach(() => {
    // eslint-disable-next-line no-undef
    cy.visit('/about');
  });

  it('should contain a brief description', () => {
    // eslint-disable-next-line no-undef
    cy.contains('h1', 'This is about page');
  });
});
