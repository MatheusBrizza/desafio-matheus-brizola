import { FormaDePagamento } from "./model/formaDePagamento";
import { Cardapio } from "./model/cardapio";
class CaixaDaLanchonete {

    preencherCardapio() {
        const cafe = new Cardapio('cafe', 'Café', '3.00');
        const chantily = new Cardapio('chantily', 'Chantily (extra do Café)', '1.50');
        const suco = new Cardapio('suco', 'Suco Natural', '6.20');
        const sanduiche = new Cardapio('sanduiche', 'Sanduíche', '6.50');
        const queijo = new Cardapio('queijo', 'Queijo (extra do Sanduíche)', '2.00');
        const salgado = new Cardapio('salgado', 'Salgado', '7.25')
        const combo1 = new Cardapio('combo1', '1 Suco e 1 Sanduíche', '9.50')
        const combo2 = new Cardapio('combo2', '1 Café e 1 Sanduíche', '7.50')
    }

    calcularValorDaCompra(metodoDePagamento, itens) {
        const item = this.cafe.getCodigo
        metodoDePagamento = new FormaDePagamento('debito').pagamento(cafe.getValor)
        return item;
    }

}

export { CaixaDaLanchonete };
