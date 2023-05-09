/// <reference types="cypress" />

// describe(тест-сьют)
// it(тест-кейс)
describe(`first test`, () => {
  beforeEach(() => {
    cy.visit(`https://example.cypress.io/`);
  });
  it(`verify link`, () => {
    cy.contains(`next`).click();
    cy.url().should(`include`, `/commands/traversal`);
    cy.get(`div.container h1`).should(`have.text`, `Traversal`);
  });

  it.skip(`verify link2`, () => {
    cy.contains(`assert`).click();
    // cy.url().should(`include`, `/commands/assertions`);
  });

  it(`verify link3`, () => {
    cy.get(`a[href="/commands/actions"]`).contains(`select`).click();
    cy.url().should(`include`, `/commands/actions`);
  });
});
