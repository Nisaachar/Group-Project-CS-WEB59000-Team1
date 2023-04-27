describe("Login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/Login");
  });

  it("displays the login form", () => {
    cy.contains("h2", "Login");
    cy.get('input[name="username"]').should("be.visible");
    cy.get('input[name="password"]').should("be.visible");
    cy.contains("button", "Log In").should("be.visible");
  });

  it("allows a user to log in successfully", () => {
    cy.get('input[name="username"]').type("Suchir Naik");
    cy.get('input[name="password"]').type("welcome@123");
    cy.contains("button", "Log In").click();
    cy.url().should("include", "/Home");
  });

  it("Wrong credentials do not allow the user to login to Home Page", () => {
    cy.get('input[name="username"]').type("Wrong name");
    cy.get('input[name="password"]').type("wrongpassword");
    cy.contains("button", "Log In").click();
    cy.url().should("include", "/Login");
    cy.get(".error").should("be.visible");
  });
});
