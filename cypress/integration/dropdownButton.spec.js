describe("The dropdown button ", () => {
    beforeEach(() => cy.portfolioInit());

    it("when clicked should make hidden rows visible", () => {
        cy.get("#technology-dropdown")
            .click({ force: true });
        
        cy.get(".hidden-technology-row div")
            .should("be.visible");
    });

    it("when clicked twice should make hidden rows invisible", () => {
        cy.get("#technology-dropdown")
            .click({ force: true })         
            .click({ force: true });            

        cy.get(".hidden-technology-row.unhidden div")
            .should("not.be.visible");
    });
});