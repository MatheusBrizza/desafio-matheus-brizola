import { Cardapio } from "./cardapio.js"

describe('Cardapio', () => {
    test("deve retornar um cardápio válido", () => {
        const resultado = new Cardapio('cafe', 'Café', 'R$3,00');
        expect(resultado.getCodigo).toEqual('cafe');
        expect(resultado.getDescricao).toEqual('Café');
        expect(resultado.getValor).toEqual('R$3,00');
    })
    
})