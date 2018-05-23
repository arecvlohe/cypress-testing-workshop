describe("personal portfolio", function() {
  before(function() {
    cy.visit("https://www.github.com/arecvlohe");

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

describe("site functionality", function() {
  beforeEach(function() {
    cy.visit("https://www.github.com/arecvlohe");

    cy
      .get(".pinned-repo-item a")
      .first()
      .as("firstPinnedRepo");

    cy
      .get("input.form-control.header-search-input.js-site-search-focus")
      .as("search");
  });

  it("should - navigate to pinned repo", function() {
    cy.get("@firstPinnedRepo").click();
    cy.url().should("contain", "reasonml-cheat-sheet");
    cy.get("h1").contains("ReasonML Cheat Sheet");
  });

  it("should - tell user in tooltip to sign in", function() {
    cy.get("@firstPinnedRepo").click();
    cy
      .get(".btn.btn-sm.btn-with-count.tooltipped.tooltipped-n")
      .eq(1)
      .as("stars");

    cy.get("@stars").trigger("mouseover");
    cy.wait(200);
    cy
      .get("@stars")
      .should("have.css", "display")
      .and("match", /block/);
  });
});
