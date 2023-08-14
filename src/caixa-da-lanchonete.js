class CaixaDaLanchonete {

    preencherCardapio(codigo, descricao, valor) {
        const cafe = new Cardapio('cafe', 'Café', 'R$3,00');
        const chantily = new Cardapio('chantily', 'Chantily (extra do Café)', 'R$1,50');
        const suco = new Cardapio('suco', 'Suco Natural', 'R$6,20');
        const sanduiche = new Cardapio('sanduiche', 'Sanduíche', 'R$6,50');
        const queijo = new Cardapio('queijo', 'Queijo (extra do Sanduíche)', 'R$2,00');
        const salgado = new Cardapio('salgado', 'Salgado', 'R$7,25')
        const combo1 = new Cardapio('combo1', '1 Suco e 1 Sanduíche', 'R$9,50')
        const combo2 = new Cardapio('combo2', '1 Café e 1 Sanduíche', 'R$7,50')
    }

    calcularValorDaCompra(metodoDePagamento, itens) {
        return "";
    }

}

export { CaixaDaLanchonete };
