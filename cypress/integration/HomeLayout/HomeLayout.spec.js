
describe('Testing HomeLayout', () => {
  beforeEach(() => {
    // eslint-disable-next-line no-undef
    cy.visit('/');
  });

  it('should load a video background', () => {
    // eslint-disable-next-line no-undef
    cy.get('video[id=background-video]').should('be.visible');
  });
});
