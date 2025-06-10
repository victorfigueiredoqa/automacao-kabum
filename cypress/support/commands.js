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
    cy.get('#linkMinhaContaHeader > .flex', { timeout: 10000 })
        .should('contain.text', 'Víctor');
});
