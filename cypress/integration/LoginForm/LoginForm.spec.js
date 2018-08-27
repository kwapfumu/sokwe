describe('testing loginForm', () => {
  beforeEach(() => {
    // eslint-disable-next-line no-undef
    cy.visit('/login');
  });

  it('displays a very long welcoming msg', () => {
    // eslint-disable-next-line no-undef
    cy.contains('Alert > strong', 'Injiza email kugira tukurungikire muri email uruhusha rwo gutangura!');
  });

  it('requires an email', () => {
    // eslint-disable-next-line no-undef
    // cy.get('[data-test=email]').type('grr@gmail.com');
    // cy.get('[data-test=email]').type('grr@gmail.com');
    // eslint-disable-next-line no-undef
  });

  it('displays a login code msg', () => {

  });
});
