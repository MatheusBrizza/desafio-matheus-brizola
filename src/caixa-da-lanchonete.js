import { FormaDePagamento } from "./model/formaDePagamento";
import { Cardapio } from "./model/cardapio";
class CaixaDaLanchonete {

    cardapio = new Cardapio()
    forma = new FormaDePagamento()
    listaCardapio = this.cardapio.preencherCardapio()
    
    prepararCalculo(itens) {
        const arrItem = []
        const arrValor = []
        const arrQuant = []
        const arrPreco = []
        for(var i = 0; i < itens.length; i++) {
            const item = itens[i].split(',')
            arrItem.push(item[0])
            arrQuant.push(item[1])
        }
            console.log(arrQuant)
        
        for(var i = 0; i < arrItem.length; i++) {
            const itemCodigo = arrItem[i]
            this.listaCardapio.forEach(function(listaCardapio){
                if (itemCodigo == listaCardapio.codigo) {
                    arrValor.push(listaCardapio.valor)
                }
            })
        }
        for (i = 0; i < arrItem.length; i++) {
            arrPreco.push(arrValor[i] * arrQuant[i])
        }
        return arrPreco
    }

    arrumarString(valor) {
        const reais = 'R$ '.concat(valor.toFixed(2))
            const resultado = reais.replace('.', ',')
            return resultado
    }

    calcularValorDaCompra(metodoDePagamento, itens) {
        this.forma.setFormaDePagamento(metodoDePagamento)
        const arrValor = this.prepararCalculo(itens)
        var soma = 0,
        i = arrValor.length;

            while( i-- ) {
                soma += parseFloat( arrValor[i], 10 ) || 0; 
            }
        return this.arrumarString(soma)
    }

}

export { CaixaDaLanchonete };
