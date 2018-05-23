describe("unauthenticaiton", function() {
  before(function() {
    cy.visit("https://www.meetup.com/");
  });

  it("should - render the page in an unauthenticated state", function() {
    cy.get("a.button.button--primary.text--bold").should("contain", "Sign Up");
  });
});

describe("authenticated", function() {
  beforeEach(function() {
    cy.visit("https://secure.meetup.com/login/");
    cy.get("input#email").type("adam.recvlohe@gmail.com");
    cy.get("input#password").type("Native101");
    cy.get("input.button.primary").click();
  });

  it("should - authenticate the user and allow them to navigate to their profile", function() {
    cy.get("span#headerAvatar").click();
    cy
      .get("ul#nav-account-links li")
      .first()
      .click();
    cy.get("span.memName.fn").should("contain", "Adam Recvlohe");
  });
});
