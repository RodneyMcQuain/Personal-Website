Cypress.Commands.add('portfolioInit', () => {
    cy.fixture("pathes")
        .then(pathes => cy.visit(pathes.visitPath));
});