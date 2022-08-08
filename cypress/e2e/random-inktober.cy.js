describe("Random Inktober Prompts", () => {
  beforeEach( () => {
      cy.visit('http://localhost:3000/random-inktober')
      cy.intercept(
          "GET",
          "http://localhost:3001/api/v1/inktober",
          { fixture: 'inktober.json' }
      )
    })

  it("should display a user prompt", () => {
      cy.get("h2").contains("mindless")
  })

  it("should have two buttons", () => {
      cy.get("button").should("have.length", 2)
      cy.get("button").eq(0).contains("Back to Home")
      cy.get("button").eq(1).contains("Roll Again?")
  })

  it("should roll another fetch if roll again button is clicked", () => {
      cy.intercept(
          "GET",
          "http://localhost:3001/api/v1/inktober",
          { fixture: 'inktoberTwo.json' }
      )
      cy.get("button").eq(1).click()
      cy.get("h2").contains("fear")
  })
})