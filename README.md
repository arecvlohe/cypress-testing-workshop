# Cypress Testing Framework Workshop

## Part 0 - Testing Philosophy

Testing is an art as much as a science. It's incremental and builds upon itself. Don't strive for 100% testing but rather use testing as a means to buffer and prevent breaking current functionality. Allow tests to help with building functionality. If it's hard to test then there is a level of complexity in your application that may introduce inconsistent behavior.

## Part 1 - Setup

Get up and running with cypress testing framework.

1.  Create a folder
1.  Create a basic yarn project in folder: `cd <FOLDER_NAME> && yarn init -y`
1.  Install cypress: `yarn add --dev cypress`
1.  Open up cypress: `npx cypress open`
1.  Create a command in `package.json`: `yarn cypress:open`
1.  Read through the

## Part 2 - API

Let's take a look at assertions: https://docs.cypress.io/guides/references/assertions.html#BDD-Assertions

API assertions to test out:

1.  `.to.have.length(value)`
1.  `.should('have.value', value)`
1.  `.should('not.exist')`
1.  `.to.equal(value)`
1.  `.css(field, value)`
1.  `.to.have.text(value)`

## Part 3 - Aliases

Use aliases to reference DOM elements for use later: https://docs.cypress.io/guides/core-concepts/variables-and-aliases.html#

Example: `cy.get(selector).as('value')` then `cy.get('@value')`

1.  Refactor code to use aliases

## Part 4 - Create a Suite of Tests

Use `describe` and `it` clauses to create a suite of tests that test the functionality of the site.

## Part 5 - Authenticated vs Unauthenticated States

Test the authenticated vs unauthenticated states of the application.

## Part 6 - Commands and ENV vars

Use cypress commands to reduce boilerplate: https://docs.cypress.io/api/cypress-api/custom-commands.html#Syntax

1.  `Cypress.env(var)`
1.  `Cypress.Commands.add()`

Refactor code from previous part and create commands from them.

## Part 7 - Deploy

Deploy the application using CircleCI: https://docs.cypress.io/guides/guides/continuous-integration.html#CircleCI

1.  Create repository on github
1.  Add CircleCI through github marketplace
1.  Add CircleCI config file to project
1.  Run cypress project to retrieve record key and projectId
1.  Add env variables to CircleCI project settings
1.  Add projectId to `cypress.json`
1.  Build project and see it pass
