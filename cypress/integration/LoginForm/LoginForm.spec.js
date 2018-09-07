describe('testing loginForm', () => {
  beforeEach(() => {
    // eslint-disable-next-line no-undef
    cy.visit('/login');
  });

  it('displays a very long welcoming msg', () => {
    // eslint-disable-next-line no-undef
    cy.get('.alert.alert-sm.alert-warning').contains('strong', 'Injiza email kugira tukurungikire muri email uruhusha rwo gutangura!');
  });

  it('enters an email and clicks to submit it', () => {
    // eslint-disable-next-line no-undef
    cy.get('.loginFormRow').contains('injiza email').type('grr@gmail.com');
    // eslint-disable-next-line no-undef
    cy.get('.loginFormRow').contains('button', 'Ndungikira').click();
  });

  it('displays a login code msg', () => {
    // eslint-disable-next-line no-undef
    cy.get('.loginCodeFormRow').contains('strong', 'Injiza ibiharuro waronse muri email!');
  });

  it('enters a login code and redirects to isokoranye page', () => {
    // eslint-disable-next-line no-undef
    cy.get('.loginCodeFormRow').contains('fromInlineCode').type('123456');
    // eslint-disable-next-line no-undef
    cy.get('.loginCodeFormRow').contains('button', 'Twagiye').click();
    // eslint-disable-next-line no-undef
    cy.url().should('include', '/isokoranye');
  });
});
