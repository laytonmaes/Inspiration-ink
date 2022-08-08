describe("Random Inspirational Prompts", () => {
  beforeEach( () => {
      cy.visit('http://localhost:3000/random-inspiration')
      cy.intercept(
          "GET",
          "https://random-word-form.herokuapp.com/random/noun",
          { fixture: 'inspirationalWord.json' }
      )
      cy.intercept(
        "GET",
        "https://api.dictionaryapi.dev/api/v2/entries/en/altitude",
        { fixture: 'inspirationalDefinition.json' }
    )
    })

  it("should display a user prompt", () => {
    cy.wait(500)
      cy.get("h2").contains("altitude")
  })

  it("should have two buttons", () => {
      cy.get("button").should("have.length", 2)
      cy.get("button").eq(0).contains("Back to Home")
      cy.get("button").eq(1).contains("Roll Again?")
  })

  it("should roll another fetch if roll again button is clicked", () => {
    cy.intercept(
      "GET",
      "https://random-word-form.herokuapp.com/random/noun",
      { fixture: 'inspirationalWordTwo.json' }
  )
  cy.intercept(
    "GET",
    "https://api.dictionaryapi.dev/api/v2/entries/en/altitude",
    { fixture: 'inspirationalDefinitionTwo.json' }
)
      cy.get("button").eq(1).click()
      cy.get("h2").contains("pickle")
      cy.get("h3").contains("A cucumber preserved in a solution, usually a brine or a vinegar syrup.")
  })
})