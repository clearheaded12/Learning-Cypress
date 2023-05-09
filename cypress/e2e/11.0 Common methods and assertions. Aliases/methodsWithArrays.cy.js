/// <reference types="cypress" />

describe(`Arrays`, () => {
  beforeEach(function () {
    cy.viewport(1920, 1080);
    cy.visit(`https://openweathermap.org/`);
    cy.get(`#desktop-menu a[href="/guide"]`).invoke(`text`).as(`menuGuide`);
  });

  it(`verify menu Search`, () => {
    cy.get(`.search-container > input`).type(`New York`, { force: true });
    cy.get(`button[type="submit"]`).click({ force: true });
    cy.get(`ul.search-dropdown-menu li`).each(($el, index) => {
      let text = $el.text();
      if (text.includes(`New York City, US`)) {
        cy.wrap($el).click();
      }
    });
  });

  it(`verify menu Guide`, function () {
    cy.get(`#desktop-menu a[href="/guide"]`).click();
    cy.get(`h1.breadcrumb-title`).should(`have.text`, this.menuGuide);
  });
});
