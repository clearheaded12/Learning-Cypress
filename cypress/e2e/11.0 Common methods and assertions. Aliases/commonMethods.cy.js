describe(`common methods`, () => {
  beforeEach(() => {
    cy.visit(`https://demoqa.com/`);
  });
  it(`verify link1`, () => {
    // cy.pause()
    cy.get(`div.category-cards .card-body`).find(`h5`).should(`have.length`, 6);
    cy.title().should(`eq`, `DEMOQA`);
    cy.log(`This is my first log`);
    cy.get(`div.avatar`).should(`have.css`, `color`, `rgb(1, 160, 224)`);
    cy.get(`div.card-body h5`).contains(`Elements`).click();
    cy.get(`div.main-header`).should(`contain`, `Elements`);
    cy.get(`div.main-header`).should(`be.visible`);
    cy.get(`span.text`).contains(`Text Box`).click();
    cy.get(`input#userName`)
      .should(`have.attr`, `placeholder`, `Full Name`)
      .type(`Maria`)
      .should(`have.value`, `Maria`)
      .clear();
    cy.get(`span.text`).contains(`Check Box`).click();
    cy.get(`div#result`).should(`not.exist`);
    cy.get(`input#tree-node-home`).check({ force: true }).should(`be.checked`);
    cy.get(`div#result`).should(`exist`);
    cy.get(`input#tree-node-home`).uncheck({ force: true });
    cy.get(`div#result`).should(`not.exist`);
  });

  it(`verify select value`, () => {
    cy.get(`div.card-body h5`).contains(`Elements`).click();
    cy.get(`div.header-text`).contains(`Widgets`).click();
    cy.get(`div ul.menu-list li#item-8`).contains(`Select Menu`).click();
    cy.get(`#oldSelectMenu`).select(`Purple`).should(`have.value`, `4`);
  });

  it.only(`method invoke`, () => {
    cy.viewport(1920, 1080);
    cy.visit(`https://openweathermap.org/`);
    cy.get(`li a`)
      .contains(`Marketplace`)
      .invoke(`removeAttr`, `target`)
      .click();
  });
});
