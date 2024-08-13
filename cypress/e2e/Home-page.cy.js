describe('Cenários para a barra de pesquisa', () => {
  beforeEach(() => {
   //Visitar o portal
    cy.visit('/')
  })


  // @sucesso
  it('Deve capturar o texto e usá-lo em uma busca, depois verificar o resultado', () => {
    cy.pegar_texto().then((texto) => {
      cy.pesquise_texto(texto)
      cy.verifique_texto_sucesso(texto)
    })
    })

  // @inválido
    it('Verificar a página quando não encontra resultados', () => {
      const textoEspecifico = 'Não-deverá-encontrar-nenhum-resultado'
      cy.pesquise_texto(textoEspecifico)
      cy.verifique_texto_inválido()
    })

});

