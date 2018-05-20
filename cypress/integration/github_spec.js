describe("personal portfolio", function() {
  before(function() {
    cy.visit("/arecvlohe");
  });

  it("should - render the number of repos I have", function() {
    cy
      .get("a.UnderlineNav-item[title=Repositories] > span.Counter")
      .contains("105");
  });
});
