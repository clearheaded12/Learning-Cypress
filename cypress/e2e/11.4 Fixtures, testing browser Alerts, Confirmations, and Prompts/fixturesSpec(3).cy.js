/// <reference types="cypress" />

describe(`fixtures`, function () {
  before(function () {
    cy.fixture(`formData`).as(`data`);
    cy.fixture(`example`).as(`example`);
  });

  beforeEach(function () {
    cy.visit(`/`);
  });

  it(`Form filling`, function () {
    cy.get(`@data`).then(function (formData) {
      cy.get(`@example`).then(function (example) {
        cy.get(`.card:nth-child(2)`).click();
        cy.get(`.element-group:nth-child(2)>div`).click();
        cy.get(`#firstName`)
          .should(`have.text`, ``)
          .type(`${formData.firstName}{enter}`)
          .should(`have.value`, formData.firstName)
          .should(`have.css`, `border-color`, `rgb(40, 167, 69)`);
        cy.get(`#userEmail`)
          .should(`have.text`, ``)
          .type(example.email)
          .should(`have.value`, example.email)
          .should(`have.css`, `border-color`, `rgb(40, 167, 69)`);
      });
    });
  });
});

// 1:12 конец объяснения 1 способа(через this)
// 1:19 конец объяснения 2 способа(через переменную)
// 1:30 конец объяснения 3 способа(через as)
// 1:49 конец объяснения 4 способа(через import)
