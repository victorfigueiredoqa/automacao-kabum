import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Usuário logado e validado
Given("que o usuário está logado no marketplace", () => {
  cy.login();
});

// Navegar para página de um produto
Given("o usuário está na página de um produto", () => {
  const productUrl = "/produto/227818/";
  cy.visit(productUrl);
  cy.get('.sc-58b2114e-6').should("be.visible");
})

// Clicar no botão para adicionar ao carrinho
When("o usuário clica no botão {string}", () => {
  cy.get('.sc-a24aba34-4 > .sc-50d5e82e-0').should('be.visible').click();
});

// Produto adicionado ao carrinho
Then("o produto é adicionado ao carrinho", () => {
  const seletorContadorCarrinho = "div[aria-label*='itens'] span";
  cy.get(seletorContadorCarrinho)
    .should("be.visible")
    .invoke('text')
    .then(parseInt)
    .should('be.gt', 0);
});

// Mensagem de sucesso apresentada
Then("o usuário vê uma mensagem de confirmação {string}", (mensagemEsperada) => {

  const seletorMensagem = ".toast-notification > span";
  cy.get(seletorMensagem)
    .should("be.visible")
    .and("contain.text", mensagemEsperada);
});

// Acessa página do carrinho
Given("que o usuário está na página do carrinho", () => {
  cy.get('#linkCarrinhoHeader').should('be.visible').click();
  cy.url().should('eq', 'https://www.kabum.com.br/carrinho');
});

// Remover produto
When("o usuário clica no botão {string} ao lado do produto", (buttonText) => {
  cy.get('button')
    .contains('span.hidden.tablet\\:inline-block', buttonText)
    .should('be.visible')
    .click();

  cy.get('.sc-gFqAkR > .border-transparent').should('be.visible').click();
});

// Validação da remoção
Then("o produto é removido do carrinho", () => {
  cy.get('b').should('contain.text', 'O seu carrinho está vazio.');
});




