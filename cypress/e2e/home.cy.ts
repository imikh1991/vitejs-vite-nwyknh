/// <reference types="Cypress" />

describe('Home', () => {
    before(() => {
        cy.visit('http://localhost:3500/main');
    });
    it('Can change pages and see different content', () => {
        //cy.get('[data-testid="card-container"]').click();
        //cy.contains(/Rick Sanchez/i);
        cy.contains('Rick').click() 
        cy.contains(/Rick Sanchez/i);
        cy.get('[data-testid="modalCloseBtn"]').click();
        cy.contains('Morty').click() 
        cy.contains(/Morty Smith/i);
        cy.get('[data-testid="modalCloseBtn"]').click();
    });
});
  