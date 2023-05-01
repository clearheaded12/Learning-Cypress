describe(`second test`, () => {
  beforeEach(() => {
    cy.visit(`https://demoqa.com/`);
  });

  it(`verify link1`, () => {
    cy.get(`div.category-cards .card-body h5`).contains(`Elements`).click();
    cy.get(`#item-0 span`).contains(`Text Box`).click();
    cy.get(`#userName`).type(`Maria`);
  });
});
