describe('about', () => {
    it('load about page by click', () => {
        cy.visit('http://localhost:3500');
        cy.get('[href="/about"]').click();
        cy.contains(/This is About page/i);
    });
});
  