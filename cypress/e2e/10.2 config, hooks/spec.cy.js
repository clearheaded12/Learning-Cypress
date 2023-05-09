// 10.2 (04/29) Cypress: установка, конфигурация, хуки. Первые тесты (Stan P.)
// https://www.youtube.com/watch?v=ngupMGtIKu0&list=PL6Gtav8N4O7iYmUm6wBjJd8EJ2KFXMPIH&index=53

describe(`Demo-QA, menu-tiles`, () => {
  const expectedMenuItemNames = [
    `Elements`,
    `Forms`,
    `Alerts, Frame & Windows`,
    `Widgets`,
    `Interactions`,
    `Book Store Application`,
  ];

  xit(`Verification menu item names - variant 1`, () => {
    cy.visit(`https://demoqa.com/`);
    cy.get(`.card`)
      .should(`have.length`, expectedMenuItemNames.length)
      .each(($el, idx) => {
        expect($el.text()).to.be.equal(expectedMenuItemNames[idx]);
        // cy.wrap($el.text().should(`have.text`, expectedMenuItemNames[idx]));
      });
  });

  // it(`Verification menu item names - variant 2`, function () {            // .map тут не работал сказано, что map работает не с массивом
  //   cy.visit(`https://demoqa.com/`);
  //   cy.get(`.card`)
  //     .should(`have.length`, expectedMenuItemNames.length)
  //     .then(($els) => {
  //       cy.log(Cypress.$.makeArray($els)).map(($el) => $el.innerText);
  //     });
  // });

  it.skip(`Verification menu item names - variant 2`, function () {
    cy.visit(`https://demoqa.com/`);
    cy.get(`.card`)
      .should(`have.length`, expectedMenuItemNames.length)
      .then(($els) => {
        const itemsArray = Cypress.$.makeArray($els);
        const itemTexts = itemsArray.map(($el) => $el.innerText);
        cy.log(itemTexts);
        expect(itemTexts).to.be.deep.equal(expectedMenuItemNames);
      });
    // .should(`deep.equal`, expectedMenuItemNames)
  });

  xit(`Verification menu-item names - variant 3`, () => {
    cy.visit(`https://demoqa.com`);
    cy.get(`.card`)
      .should(`have.length`, expectedMenuItemNames.length)
      .then(($els) => {
        return Cypress._.map($els, `innerText`);
      })
      .should(`deep.equal`, expectedMenuItemNames);
  });

  it.only(`Form filling`, () => {
    cy.viewport(1920, 1080);
    cy.visit(`https://demoqa.com`);
    cy.get(`.card:nth-child(2)`).click();
    cy.get(`.element-group:nth-child(2)>div`).click();
    cy.get(`#firstName`)
      .should(`have.text`, ``)
      .type(`Stan`) // .type(`Stan{Enter}) тоже сработает
      .should(`have.value`, `Stan`);
    cy.get(`#submit`).click();
    cy.get(`#firstName`).should(`have.css`, `border-color`, `rgb(40, 167, 69)`);
  });
});
