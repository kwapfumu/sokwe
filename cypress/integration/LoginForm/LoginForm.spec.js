describe('testing loginForm', () => {
  beforeEach(() => {
    // eslint-disable-next-line no-undef
    cy.visit('/login');
  });

  it('displays a very long welcoming msg', () => {
    // eslint-disable-next-line no-undef
    cy.get('.alert.alert-sm.alert-warning').contains('strong', 'Injiza email kugira tukurungikire muri email uruhusha rwo gutangura!');
  });

  it('enters an email, clicks to submit it, displays a login code msg, enters a login code and redirects to isokoranye page', () => {
    // eslint-disable-next-line no-undef
    cy.get('.loginFormRow.row').within(() => {
      // eslint-disable-next-line no-undef
      cy.get('input').type('grr@gmail.com');
      // eslint-disable-next-line no-undef
      cy.contains('button', 'Ndungikira').click();
    });
    // eslint-disable-next-line no-undef
    cy.get('.alert.alert-sm.alert-warning').contains('strong', 'Injiza ibiharuro waronse muri email!');
    // eslint-disable-next-line no-undef
    cy.get('.loginCodeFormRow.row').within(() => {
      // eslint-disable-next-line no-undef
      cy.get('input').type('123456');
      // eslint-disable-next-line no-undef
      cy.contains('button', 'Twagiye').click();
    });
    // eslint-disable-next-line no-undef
    // cy.url().should('include', '/isokoranye');
  });
});
