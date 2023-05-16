/// <reference types='cypress'/>

describe(`DemoQA Menu-titles`, function () {
  // https://demoqa.com
  xit(`Filling out Practice Form: dropdawn State`, function () {
    cy.visit(`/automation-practice-form`);
    cy.get(`#state`).click();
    cy.get(`[id^=react-select-3-option]`).then(($els) => {
      const item = Cypress.$.makeArray($els).filter(
        ($el) => $el.innerText == `Rajasthan`
      );
      cy.wrap(item).click({ force: true });
    });
  });

  // primereact.org
  it(`Testing Virtual Scroll Dropdawn`, function () {
    cy.visit(`https://primereact.org/dropdown/`);
    cy.get(`.doc-main .py-3:nth-of-type(8) .p-dropdown`).click();

    function searchForOption(level = 0) {
      if (level > 20) {
        throw new Error(`Exceed max recursion level`);
      }
      cy.get(`.doc-main .py-3:nth-of-type(8) .p-dropdown-label`).then(($el) => {
        const activeOption = $el.text();
        if (activeOption != `Item #10`) {
          cy.wrap($el).type(`{downarrow}`);
          searchForOption(++level);
        }
        cy.wrap($el).click();
      });
    }
    searchForOption();
    cy.get(`.doc-main .py-3:nth-of-type(8) .p-dropdown-label`).should(
      `have.text`,
      `Item #10`
    );
  });
});
