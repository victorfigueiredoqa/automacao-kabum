Cypress.Commands.add("login", (usuario = Cypress.env("USUARIO_KABUM"), senha = Cypress.env("SENHA_KABUM")) => {
    if (!usuario || !senha) {
        throw new Error("Credenciais USUARIO_KABUM ou SENHA_KABUM não definidas...");
    }

    cy.viewport(1280, 720);
    cy.visit("/");

    // Custom commands para logar e validar usuário logado
    cy.get('#linkLoginHeader').should('be.visible').click();
    cy.get('[data-testid="login-input"]').type(usuario);
    cy.get('[data-testid="password-input"]').type(senha, { log: false });
    cy.get('[data-testid="login-submit-button"]').click();
    cy.get('#linkMinhaContaHeader', { timeout: 20000 }).should('exist');
    cy.get('#linkMinhaContaHeader').contains('Víctor').should('be.visible');
});

Cypress.Commands.add('evidencias_imagens', (name) => {
  cy.screenshot(name).then(() => {
    cy.allure().fileAttachment(`${name}.png`, 'image/png');
  });
});
