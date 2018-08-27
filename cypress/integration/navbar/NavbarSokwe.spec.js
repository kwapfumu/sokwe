describe('Testing NavbarSokwe', () => {
  beforeEach(() => {
    // eslint-disable-next-line no-undef
    cy.visit('/');
  });

  it('should load a navbar with a brand name', () => {
    // eslint-disable-next-line no-undef
    cy.contains('Navbar.Brand', 'Sokwe').click();
    // eslint-disable-next-line no-undef
    cy.url().should('include', '/');
  });

  it('should click on About link and redirects to about page', () => {
    // eslint-disable-next-line no-undef
    cy.contains('NavItem', 'About').click();
    // eslint-disable-next-line no-undef
    cy.url().should('include', '/about');
  });

  it('should load a navbar with facebook page link, clicks on it and redirects on fcbk page', () => {
    // eslint-disable-next-line no-undef
    cy.contains('NavItem').should('have.attr', 'href', 'https://www.facebook.com/Sokwe').click();
    // eslint-disable-next-line no-undef
    cy.url().should('include', '/Sokwe');
  });

  it('should click on login link and redirects to login page', () => {
    // eslint-disable-next-line no-undef
    cy.contains('NavItem', 'Login').click();
    // eslint-disable-next-line no-undef
    cy.url().should('include', '/login');
  });
});
