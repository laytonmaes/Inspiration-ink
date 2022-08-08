describe("Random Mashup Prompts", () => {
    beforeEach( () => {
        cy.visit('http://localhost:3000/random-mashup')
        cy.intercept(
            "GET",
            "http://localhost:3001/api/v1/mashup",
            { fixture: 'mashup.json' }
        )
        cy.intercept(
            "GET",
            "http://localhost:3001/api/v1/mashup",
            { fixture: 'mashupTwo.json' }
        )
      })

    it("should display a user prompt", () => {
        cy.wait(500);
        cy.get("h2").contains("Draw ninja gaidan as power rangers")
    })

    it("should have two buttons", () => {
        cy.get("button").should("have.length", 2)
        cy.get("button").eq(0).contains("Back to Home")
        cy.get("button").eq(1).contains("Roll Again?")
    })

    it("should roll another fetch if roll again button is clicked", () => {
        cy.intercept(
            "GET",
            "http://localhost:3001/api/v1/mashup",
            { fixture: 'mashupThree.json' }
        )
        cy.intercept(
            "GET",
            "http://localhost:3001/api/v1/mashup",
            { fixture: 'mashupFour.json' }
        )
        cy.get("button").eq(1).click()
        cy.wait(500);
        cy.get("h2").contains("Draw ninja gaidan as kamen rider")
    })
})