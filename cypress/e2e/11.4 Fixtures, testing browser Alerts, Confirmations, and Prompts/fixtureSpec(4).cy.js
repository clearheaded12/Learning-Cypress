/// <reference types="cypress" />

import { set } from "../../fixtures/profile.json";

describe(`DemoQA form input`, function () {
  before(function () {
    // cy.fixture(`profile`)   
    //   .its(`set`)
    //   .then(function (data) {
    //     set = data;
    //   });
  });

  beforeEach(function () {
    cy.visit(`/`);
  });

  set.forEach(function (obj) {
    it(`Form filling for ${obj.firstName}`, function () {
      cy.get(`.card:nth-child(2)`).click();
      cy.get(`.element-group:nth-child(2)>div`).click();
      cy.get(`#firstName`)
        .should(`have.text`, ``)
        .type(`${obj.firstName}{enter}`)
        .should(`have.value`, obj.firstName)
        .should(`have.css`, `border-color`, `rgb(40, 167, 69)`);
      cy.get(`#userEmail`)
        .should(`have.text`, ``)
        .type(obj.userEmail)
        .should(`have.value`, obj.userEmail)
        .should(`have.css`, `border-color`, `rgb(40, 167, 69)`);
    });
  });
});
