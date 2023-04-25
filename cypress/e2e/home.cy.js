describe("Home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/Home");
  });
  it("checks if Visa Application Progress button is working", () => {
    cy.contains("Visa Information").click();
    cy.url().should("include", "/Visa");
  });

  it("checks if Progress button is working", () => {
    cy.contains("Progress").click();
    cy.url().should("include", "/Progress");
  });

  it("checks if SOP button is working", () => {
    cy.contains("SOP").click();
    cy.url().should("include", "/SOP");
  });

  it("checks if Home button is working", () => {
    cy.contains("Home").click();
    cy.url().should("include", "/Home");
  });

  it("checks if University Information button is working", () => {
    cy.contains("University Information").click();
    cy.url().should("include", "/UniInfo");
  });
 
  
});