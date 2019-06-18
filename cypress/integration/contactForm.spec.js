describe("The contact form ", () => {
    beforeEach(() => cy.portfolioInit());

    describe("should be disabled ", () => {
        it("given empty data", () => {
            cy.get("#submit")
                .should("be.disabled");
        });

        it("given filled data, but invalid email", () => {
            cy.get("#name")
            .type("Somebody", { force: true });
        
            cy.get("#email")
                .type("invalidEmail");

            cy.get("#subject")
                .type("Hey just saw your portfolio");

            cy.get("#message")
                .type("Hey, what's up.");

            cy.get("#submit")
                .should("be.disabled");
        });
    });

    it("should be enabled given valid data", () => {
        cy.get("#name")
            .type("Somebody", { force: true });
        
        cy.get("#email")
            .type("validEmail@gmail.com");

        cy.get("#subject")
            .type("Hey just saw your portfolio");

        cy.get("#message")
            .type("Hey, what's up.");

        cy.get("#submit")
            .should("not.be.disabled");
    });
});