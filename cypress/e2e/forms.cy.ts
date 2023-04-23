const fillAllInputs = () => {
    cy.get('[type="text"]').type('Ilya');
    cy.get('[data-testid="dateOfBirth"]').type('1991-06-08');
    //cy.get('[data-testid="country-select"]').select('Russia');
    //cy.get('#checkPersonal').check();
};
  
describe('Form Page', () => {
    beforeEach(() => cy.visit('http://localhost:3500/main'));
    it('create a card and store it on page change', () => {
        
        //cy.get('._MyBtn_j8hnp_2').click();
        //cy.get('[href="/"]').click();
        cy.get('[href="/form"]').click();
        fillAllInputs();
        cy.contains('Submit').click() 
        cy.contains(/This field is required/i);
    });
    //it('validate Form name input', () => {
    //cy.get('[href="/form"]').click();
    //cy.visit('http://localhost:3500/form');
    //cy.get('[type="text"]').type('123');
    //cy.get('._MyBtn_j8hnp_2').click();
    //cy.contains(/should be > 3/i);
    //cy.get('[type="text"]').clear();
    //cy.get('[type="text"]').type('Ilya');
    //cy.contains('.form-container', /Form/i);
    //});
});
  