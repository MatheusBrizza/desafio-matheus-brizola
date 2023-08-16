import { FormaDePagamento } from "./model/formaDePagamento";
import { Cardapio } from "./model/cardapio";
class CaixaDaLanchonete {

    cardapio = new Cardapio()
    cardapioCodigos = new Cardapio()
    forma = new FormaDePagamento()
    listaCardapio = this.cardapio.preencherCardapio()
    listaCodigos = this.cardapio.preencherCodigos()

    prepararQuantidades(itens) {
        const arrQuantidades = []
        for (var i = 0; i < itens.length; i++) {
            const item = itens[i].split(',')
            arrQuantidades.push(item[1])
        }
        return arrQuantidades
    }

    prepararCodigos(itens) {
        const arrCodigos = []
        for (var i = 0; i < itens.length; i++) {
            const item = itens[i].split(',')
            arrCodigos.push(item[0])
        }
        return arrCodigos
    }

    prepararCalculoValores(arrCodigos, arrQuantidades) {
        const arrValores = []
        const arrPrecos = []

        for (var i = 0; i < arrCodigos.length; i++) {
            const itemCodigo = arrCodigos[i]
            this.listaCardapio.forEach(function (listaCardapio) {
                if (itemCodigo == listaCardapio.codigo) {
                    arrValores.push(listaCardapio.valor)
                }
            })
        }
        for (i = 0; i < arrCodigos.length; i++) {
            arrPrecos.push(arrValores[i] * arrQuantidades[i])
        }
        return arrPrecos
    }

    arrumarString(valor) {
        const reais = 'R$ '.concat(valor.toFixed(2))
        const resultado = reais.replace('.', ',')
        return resultado
    }

    calcularValorDaCompra(metodoDePagamento, itens) {
        this.forma.setFormaDePagamento(metodoDePagamento)
        const desconto = this.forma.getDesconto
        const arrQuantidades = this.prepararQuantidades(itens)
        const arrCodigos = this.prepararCodigos(itens)
        const arrValores = this.prepararCalculoValores(arrCodigos, arrQuantidades)

        for (i = 0; i < arrQuantidades.length; i++) {
            if (arrQuantidades[i] <= 0) {
                return 'Quantidade inválida!'
            }
        }

        if (arrCodigos.length == 0) {
            return 'Não há itens no carrinho de compra!'
        }

        if (this.forma.getFormaDePagamento !== 'debito'
            && this.forma.getFormaDePagamento !== 'credito'
            && this.forma.getFormaDePagamento !== 'dinheiro') {
            return 'Forma de pagamento inválida!'
        }

        for (i = 0; i < arrCodigos.length; i++) {
            if (!this.listaCodigos.includes(arrCodigos[i])) {
                return 'Item inválido!'
            }
        }

        for (i = 0; i < arrCodigos.length; i++) {
            if (arrCodigos[i] == 'chantily') {
                for (var j = 0; j < arrCodigos.length; j++) {
                    if (!arrCodigos.includes('cafe')) {
                        return 'Item extra não pode ser pedido sem o principal'
                    }
                }
            }
        }

        for (i = 0; i < arrCodigos.length; i++) {
            if (arrCodigos[i] == 'queijo') {
                for (var j = 0; j < arrCodigos.length; j++) {
                    if (!arrCodigos.includes('sanduiche')) {
                        return 'Item extra não pode ser pedido sem o principal'
                    }
                }
            }
        }

        var soma = 0,
            i = arrValores.length

        while (i--) {
            soma += parseFloat(arrValores[i], 10) || 0
        }

        if (metodoDePagamento == 'dinheiro') {
            soma = soma - (soma * desconto)
        }
        if (metodoDePagamento == 'credito') {
            soma = soma + (soma * desconto)
        }
        return this.arrumarString(soma)
    }
}

export { CaixaDaLanchonete };
