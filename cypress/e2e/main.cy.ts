/// <reference types="cypress" />
// @ts-check
import 'cypress-file-upload';

describe('All Test Cases', () => {

    it('Shows Cards', () => {
        cy.visit('http://localhost:3500/');
        cy.contains(/Rick/i);
        cy.contains(/Morty/i);

    });

    it('Checks Search component', () => {
        // Given
        cy.visit('/');
        // When
        cy.get('.searchTerm').type('zz');
        
        // Then 
        cy.get('[data-testid="card-container"]').first().contains('Izzy');
        cy.contains(/Izzy/i).click();
        cy.contains(/Animal/i);
        cy.get('[data-testid="modalCloseBtn"]').click();
        cy.contains(/Pizza/i);

    });
    
    it('Shows Form Page Error', () => {
        //show label--error
        // Start with
        cy.visit('http://localhost:3500/');
        cy.contains(/Form/i).click();
        cy.contains(/Submit/i).click();
        cy.get('.label--error').contains('This field is required');

    });

    it('checks Form component', () => {
        // Start with
        cy.visit('http://localhost:3500/');
        cy.contains(/Form/i).click();
        cy.get('input[name="name"]').type('Ilya');
        cy.get('input[name="dateOfBirth"]').type('2020-05-12');
        cy.get('select').select('Male');
        cy.get('input[name="agreeToTerms"]').click();
        cy.get('input[name="favoriteColor"]').first().click();
        cy.get('[type="file"]').attachFile('./avatar.jpeg');
        cy.get('[type="submit"]').click();
        // Finally
        cy.get('.card').first().contains('Ilya');
        
    });

    it('shows About Page', () => {
        cy.visit('http://localhost:3500/');
        cy.contains(/About/i).click();
        cy.contains(/This is About page/i);
    });

    it('shows not found and home button sends to home', () => {
        cy.visit('http://localhost:3500/lolkek');
        cy.contains(/This is Not Found/i);
    });

    it('Does not do much!', () => {
        expect(true).to.equal(true)
    });

});

