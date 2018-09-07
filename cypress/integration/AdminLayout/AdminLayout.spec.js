describe('Testing NavbarSokwe', () => {
  beforeEach(() => {
    // eslint-disable-next-line no-undef
    cy.visit('/admin');
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

  it('should click on Isokoranye link in navbar and redirects to appropriate page', () => {
    // eslint-disable-next-line no-undef
    cy.contains('.nav.nav-pills.navbar-nav', 'Isokoranye').click();
    // eslint-disable-next-line no-undef
    cy.url().should('include', '/isokoranye');
  });

  it('should click on Ibisokozo link in navbar and redirects to appropriate page', () => {
    // eslint-disable-next-line no-undef
    cy.contains('.nav.nav-pills.navbar-nav', 'Ibisokozo').click();
    // eslint-disable-next-line no-undef
    cy.url().should('include', '/admin/ibisokozo');
  });

  it('should click on Users link  in navbar and redirects to appropriate page', () => {
    // eslint-disable-next-line no-undef
    cy.contains('.nav.nav-pills.navbar-nav', 'Users').click();
    // eslint-disable-next-line no-undef
    cy.url().should('include', '/admin/users');
  });

  it('should load a left side navigation with Users link, click on it and redirect to appropriate page', () => {
    // eslint-disable-next-line no-undef
    cy.get('.adminLeftSideNavigation').contains('NavItem', 'Users').click();
    // eslint-disable-next-line no-undef
    cy.url().should('include', '/admin/users');
  });

  it('should load a left side navigation with Ibisokozo link, click on it and redirect to appropriate page', () => {
    // eslint-disable-next-line no-undef
    cy.get('.adminLeftSideNavigation').contains('NavItem', 'Ibisokozo').click();
    // eslint-disable-next-line no-undef
    cy.url().should('include', '/admin/ibisokozo');
  });

  it('should load a left side navigation with Add Igisokozo link, click on it and redirect to appropriate page', () => {
    // eslint-disable-next-line no-undef
    cy.get('.adminLeftSideNavigation').contains('NavItem', 'Add Igisokozo').click();
    // eslint-disable-next-line no-undef
    cy.url().should('include', '/admin/ibisokozo/newSokozo');
  });

  it('should click on logout link in navbar and redirects to home page', () => {
    // eslint-disable-next-line no-undef
    cy.contains('.nav.navbar-nav.navbar-right', 'Logout').click();
    // eslint-disable-next-line no-undef
    cy.url().should('include', '/');
  });
});
