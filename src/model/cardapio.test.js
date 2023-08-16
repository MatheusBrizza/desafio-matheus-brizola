import { Cardapio } from "./cardapio.js"

describe('Cardapio', () => {
    test("deve preencher cardápio", () => {
        const resultado = new Cardapio();
        const cardapio = resultado.preencherCardapio()
        expect(cardapio[0]).toEqual({ "codigo": "cafe", "descricao": "Café", "valor": "3.00" });
    })

    test("deve selecionar código café", () => {
        const resultado = new Cardapio();
        const cardapio = resultado.preencherCardapio()
        expect(cardapio[0].codigo).toEqual("cafe");
    })
})