describe('common-ui', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=cardcomponent--primary&args=title;url;')
  );
  it('should render the component', () => {
    cy.get('metalhexx-card').should('exist');
  });
});
