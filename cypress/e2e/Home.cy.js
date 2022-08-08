describe('Home Page', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })

  it("should have a header displaying the app name", () => {
    cy.get("header").contains("h1", "Inspiration Ink.")
  })

  it("should display 3 buttons for general prompts", () => {
    cy.get(".random-buttons button").should("have.length", 3)
    cy.get(".random-buttons button").eq(0).contains( "Inspirational Word" )
    cy.get(".random-buttons button").eq(1).contains( "Series Mashups" )
    cy.get(".random-buttons button").eq(2).contains( "Random Inktober Word" )
  })

  it("should have 2 user based buttons", () => {
    cy.get(".user-buttons button").should("have.length", 2)
    cy.get(".user-buttons button").eq(0).contains("Random User Prompts")
    cy.get(".user-buttons button").eq(1).contains("Submit Your Own Prompt!")
  })

  it("should be able to navigate to a new page by clicking a button", () => {
    cy.get(".user-buttons button").eq(1).click()
    cy.get("button").eq(0).contains("Back to Home")
  })
})