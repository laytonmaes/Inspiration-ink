describe("Random User Prompts", () => {
    beforeEach( () => {
        cy.visit('http://localhost:3000/random-user')
        cy.intercept(
            "GET",
            "http://localhost:3001/api/v1/user",
            { fixture: 'userSubmission.json' }
        )
      })

    it("should display a user prompt", () => {
        cy.get("h2").contains("Draw a New Pokemon")
    })

    it("should have two buttons", () => {
        cy.get("button").should("have.length", 2)
        cy.get("button").eq(0).contains("Back to Home")
        cy.get("button").eq(1).contains("Roll Again?")
    })

    it("should roll another fetch if roll again button is clicked", () => {
        cy.intercept(
            "GET",
            "http://localhost:3001/api/v1/user",
            { fixture: 'userSubmissionTwo.json' }
        )
        cy.get("button").eq(1).click()
        cy.get("h2").contains("Draw a Kingly Manatee")
    })
})