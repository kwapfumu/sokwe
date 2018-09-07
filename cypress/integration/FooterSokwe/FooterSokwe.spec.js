describe('Testing FooterSokwe', () => {
  beforeEach(() => {
    // eslint-disable-next-line no-undef
    cy.visit('/');
  });

  it('should load a footer with github link, clicks on it and redirects on github page', () => {
    // eslint-disable-next-line no-undef
    cy.get('footer').contains('a', 'pfumu').click();
    // eslint-disable-next-line no-undef
    cy.url().should('include', '/kwapfumu');
  });
});
