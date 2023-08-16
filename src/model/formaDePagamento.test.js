import { FormaDePagamento } from "./formaDePagamento"

describe('FormaDePagamento', () => {
    test("Pagamento em dinheiro deve ter 5% de desconto", () => {
        const forma = new FormaDePagamento()
        forma.setFormaDePagamento('dinheiro')
        expect(forma.getFormaDePagamento).toEqual('dinheiro')
        expect(forma.getDesconto).toEqual(0.05)
    })

    test("Pagamento em débito deve ter 0% de desconto", () => {
        const forma = new FormaDePagamento()
        forma.setFormaDePagamento('debito')
        expect(forma.getDesconto).toEqual(0)
    })

    test("Pagamento em crédito deve ter 3%", () => {
        const forma = new FormaDePagamento()
        forma.setFormaDePagamento('credito')
        expect(forma.getDesconto).toEqual(0.03)
    })
})