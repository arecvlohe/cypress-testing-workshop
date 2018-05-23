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
    cy.login();
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
