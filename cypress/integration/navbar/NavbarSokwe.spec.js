describe('Testing NavbarSokwe', () => {
  beforeEach(() => {
    // eslint-disable-next-line no-undef
    cy.visit('/');
  });

  it('should load a navbar with a brand name', () => {
    // eslint-disable-next-line no-undef
    cy.get('.navbar-header').contains('Sokwe').click();
    // eslint-disable-next-line no-undef
    cy.url().should('include', '/');
  });

  it('should click on About link and redirects to about page', () => {
    // eslint-disable-next-line no-undef
    cy.contains('#homeNavbar > ul.nav.nav-pills.navbar-nav', 'About').click();
    // eslint-disable-next-line no-undef
    cy.url().should('include', '/about');
  });

  it('should load a navbar with facebook page link, clicks on it and redirects on fcbk page', () => {
    // eslint-disable-next-line no-undef
    cy.get('#homeNavbar > ul.nav.navbar-nav.navbar-right > li:nth-child(1) > a').should('have.attr', 'href', 'https://www.facebook.com/Sokwe').click();
    // eslint-disable-next-line no-undef
    cy.url().should('include', '/Sokwe');
  });

  it('should click on login link and redirects to login page', () => {
    // eslint-disable-next-line no-undef
    cy.get('.nav.navbar-nav.navbar-right').contains('a', 'Login').click();
    // eslint-disable-next-line no-undef
    cy.url().should('include', '/login');
  });
});
