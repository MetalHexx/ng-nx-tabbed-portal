describe('common-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=buttoncomponent--primary&args=link;text;'));
  it('should render the component', () => {
    cy.get('metalhexx-button').should('exist');
  });
});