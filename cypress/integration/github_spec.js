describe("personal portfolio", function() {
  before(function() {
    cy.visit("/arecvlohe");

    cy
      .get("li.vcard-detail.pt-1.css-truncate.css-truncate-target")
      .eq(2)
      .invoke("text")
      .as("signInToView");
  });

  it("should - render the number of repos I have", function() {
    cy
      .get("a.UnderlineNav-item[title=Repositories] > span.Counter")
      .contains("106");
  });

  it("should - not render the users email when not logged in", function() {
    expect(this.signInToView.trim()).to.eq("Sign in to view email");
  });

  it("should - pin the most popular repo", function() {
    cy.get(".octicon-star").should("have.length", 6);

    cy
      .get(".octicon-star")
      .parent()
      .first()
      .invoke("text")
      .should("contain", 8);

    cy
      .get(".octicon-star")
      .parent()
      .last()
      .invoke("text")
      .should("contain", 5);
  });
});
