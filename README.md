Automação de Testes - Logar, adicionar e remover produto ao carrinho no site Kabum.   
Este projeto contém um conjunto de testes de automação desenvolvidos com Cypress, Cucumber e Allure para validar as principais funcionalidades de gerenciamento do carrinho de compras da Kabum.  

-> O objetivo principal deste projeto é garantir a estabilidade e o correto funcionamento das seguintes interações no site da Kabum:  

Autenticação de Usuário: Realiza o login no site.  
Adição de Produtos ao Carrinho: Testa o processo de adicionar um item à sacola de compras.  
Remoção de Produtos do Carrinho: Valida a funcionalidade de remover itens previamente adicionados.  
Validação de Mensagens: Verifica a exibição de mensagens de sucesso (ao adicionar) e de status do carrinho (vazio).  

=> Tecnologias Utilizadas  
O projeto utiliza as seguintes ferramentas e bibliotecas:  

Cypress  
Cucumber (via @badeball/cypress-cucumber-preprocessor): Permite escrever testes em linguagem Gherkin (BDD)  
Allure Reporter (via @shelex/cypress-allure-plugin): Gera relatórios de teste interativos e ricos em detalhes, facilitando a análise dos resultados.  
Node.js: Ambiente de tempo de execução JavaScript.  
npm: Gerenciador de pacotes do Node.js.  
Custom Commands (Cypress): Comandos personalizados para encapsular lógicas comuns (como login).  

=> Pré-requisitos  
Antes de executar este projeto, verifique se os seguintes requisitos estão atendidos:  

Node.js (versão 16 ou superior recomendada)  
npm (gerenciador de pacotes)  
Um navegador suportado pelo Cypress (principais navegadores suportam).  

=> Instalação  
Clone este repositório  

Instale as dependências principais:  

=> Rode no gitbash:  

npm install  
Este comando irá instalar todas as dependências listadas no package.json, incluindo Cypress, Cucumber preprocessor e Allure reporter.  

Configuração de Credenciais (Dados Sensíveis)  
Para garantir a segurança das suas credenciais (como a senha de login), elas não são armazenadas diretamente no código ou no controle de versão. Siga os passos abaixo:  

Crie um arquivo chamado cypress.env.json na raiz do seu projeto (no mesmo nível de cypress.config.js).  

Adicione suas credenciais neste arquivo, no formato JSON:  

JSON  

// cypress.env.json  
{  
  "USUARIO_KABUM": "seu_email@exemplo.com",  
  "SENHA_KABUM": "sua_senha"  
}  
Obs.: Substitua pelos seus dados de acesso reais.  

Importante: Certifique-se de que cypress.env.json está incluído no seu arquivo .gitignore para evitar que ele seja versionado no Git.  

.gitignore  
cypress.env.json  

=> Como Rodar os Testes  
Para este projeto, você pode executar os testes Cypress de diferentes maneiras:  

Para rodar os testes e gerar os resultados allure:  
npm run cy:run:allure  

Para gerar relatório HTML a partir do allure:  
npm run allure:generate  

Para abrir relatório em HTML no navegador:  
npm run allure:open  

Ou se optar, pode executar os testes através do comando “npx Cypress open” para executar através da interface gráfico do Cypress.  

=> Observações relevantes:  
1)	Utilizei custom commands para implementar o código de login e apenas referenciá-lo no teste principal.  
2)	Não foi possível executar a última linha do cenário uma vez que o site não apresenta a mensagem prevista. Comentei essa linha no código.  
