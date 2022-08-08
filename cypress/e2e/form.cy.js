describe('Home Page', () => {
    beforeEach( () => {
      cy.visit('http://localhost:3000/user-submit')
      cy.intercept(
        "POST",
        "http://localhost:3001/api/v1/user", 
        {prompt: "redraw your old art",
        userPrompts:["redraw your old art"]
    })
    })

    it("should have an input field that can be updated", () => {
        cy.get("input").should("have.value", "" )
        cy.get("input").type("draw a walrus")
        cy.get("input").should("have.value", "draw a walrus" )
    })

    it("should be able to submit prompt and recieve a success message.", () => {
        cy.get("input").type("draw a walrus")
        cy.get("input").should("have.value", "draw a walrus" )
        cy.get("button").eq(1).click()
        cy.get("p").contains("Success!")
    }) 

    it("should fail if there is nothing to submit", () => {
        cy.get("button").eq(1).click()
        cy.get("p").contains("Please write a prompt before submitting.")
    })
    it("should display an error if there is an error with submission", () => {
        cy.intercept(
            "POST",
            "http://localhost:3001/api/v1/user", 
            {statusCode: 500})
        cy.get("input").type("draw a walrus")
        cy.get("input").should("have.value", "draw a walrus" )
        cy.get("button").eq(1).click()
        cy.get("p").contains("I'm sorry, that didn't work. Please try again.")
    })
})