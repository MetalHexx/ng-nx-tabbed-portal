describe('common-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=headercomponent--primary&args=title;'));
  it('should render the component', () => {
    cy.get('metalhexx-header').should('exist');
  });
});