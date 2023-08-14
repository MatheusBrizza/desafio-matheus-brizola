import { Cardapio } from "./cardapio.js"

describe('Cardapio', () => {

    const validaTeste = (codigo, descricao, valor) => {
        const resultado = new Cardapio(codigo, descricao, valor);
        
        expect(resultado.replace("\xa0", " ")).toEqual(resultado);
    }

    test.each([
        ['cafe', 'Cafe', '3', []]
    ])('compra %p em %p deve resultar em %p', (_, formaDePagamento, resultadoEsperado, itens) =>
        validaTeste('cafe', 'cafe', '3'));
})