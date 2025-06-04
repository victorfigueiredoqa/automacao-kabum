# language: pt
Funcionalidade: Gerenciamento de Carrinho de Compras no site Kabum

  Cenário: Efetuar uma compra e remover do carrinho

    Dado que o usuário está logado no marketplace
    E o usuário está na página de um produto
    Quando o usuário clica no botão "Adicionar ao Carrinho"
    Então o produto é adicionado ao carrinho
    E o usuário vê uma mensagem de confirmação "Produto adicionado com sucesso no carrinho"

    Dado que o usuário está na página do carrinho
    Quando o usuário clica no botão "Remover" ao lado do produto
    Então o produto é removido do carrinho
    # E o usuário vê uma mensagem de confirmação "Produto removido do carrinho"
