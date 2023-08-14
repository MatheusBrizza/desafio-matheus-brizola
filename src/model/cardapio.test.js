import { Cardapio } from "./cardapio.js"

describe('Cardapio', () => {
    test("getCodigo deve retornar cafe", () => {
        const resultado = new Cardapio('cafe', 'Café', 'R$3,00');
        expect(resultado.getCodigo).toEqual('cafe');
    })
    
    test("getValor deve retornar R$3,00", () => {
        const resultado = new Cardapio('chantily', 'Chantily', 'R$1,50');
        expect(resultado.getValor).toEqual('R$1,50');
    })

    test("getDescricao deve retornar Sanduíche", () => {
        const resultado = new Cardapio('sanduiche', 'Sanduíche', "R$6,50");
        expect(resultado.descricao).toEqual('Sanduíche');
    })

})