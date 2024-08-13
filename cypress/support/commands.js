Cypress.Commands.add('pegar_texto', () => {
  return cy.get('.uagb-post__image-position-top > :nth-child(1) > .uagb-post__title > a')
    .then(($el) => $el.text().trim());
});

Cypress.Commands.add('pesquise_texto', (texto) => {
  cy.xpath('//*[@id="ast-desktop-header"]/div[1]/div/div/div/div[3]/div[2]/div/div/a/span[2]').click();
  cy.get('#search-field').type(`${texto}{enter}`);
});

Cypress.Commands.add('verifique_texto_sucesso', (texto) => {
  cy.get('.post-content')
  .should('be.visible')
  .and('include.text', texto)
  .click()

  cy.get('.entry-title')
    .should('include.text', texto);
});

Cypress.Commands.add('verifique_texto_inválido', () => {
  cy.get('.no-results')
    .should('include.text', 'Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras.');
});
