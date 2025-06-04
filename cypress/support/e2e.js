
import './commands'
import '@shelex/cypress-allure-plugin';
import 'cypress-wait-until';

Cypress.on('uncaught:exception', (err, runnable) => {

    return false;
});