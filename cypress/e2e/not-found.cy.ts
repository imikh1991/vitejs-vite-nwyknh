describe('Not found Page', () => {
    it('shows not found and home button sends to home', () => {
        cy.visit('http://localhost:3500/lolkek');
        cy.contains(/This is Not Found/i);
    });
});
  