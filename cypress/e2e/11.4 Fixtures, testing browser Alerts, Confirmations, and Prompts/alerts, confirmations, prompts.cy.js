/// <reference types='cypress'/>

describe(`DemoQA Alert window`, function () {
  beforeEach(function () {
    cy.visit(`/alerts`);
  });

  // alert
  xit(`Verification of the alert window`, function () {
    cy.get(`#alertButton`).click();
    cy.on(`window:alert`, function (str) {
      expect(str).to.equal(`You clicked a button`);
    });
  });

  // confirm(нажатие на Ок)
  xit(`Verification of the confirm window`, function () {
    cy.get(`#confirmButton`).click();
    cy.on(`window:confirm`, function (str) {
      expect(str).to.equal(`Do you confirm action?`);
    });
    cy.get(`#confirmResult`)
      .should(`contain`, `Ok`)
      .and(`contain`, `You selected `);
  });

  // confirm(нажатие на Cancel)
  xit(`Verification window confirm`, function () {
    cy.get(`#confirmButton`).click();
    cy.on(`window:confirm`, function () {
      return false;
    });
    cy.get(`#confirmResult`)
      .should(`contain`, `Cancel`)
      .and(`contain`, `You selected `);
  });

  // promt
  it(`Verification of the prompt window`, function () {
    cy.window().then((inputData) => {
      cy.get(`#promtButton`).click();
      cy.stub(inputData, `prompt`).returns(`JavaScript`);
    });
    cy.get(`#promptResult`)
      .should(`contain`, `JavaScript`)
      .and(`contain`, `You entered `);
  });
});
