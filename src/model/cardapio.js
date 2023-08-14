class Cardapio {
    constructor(codigo, descricao, valor) {
        this.codigo = codigo
        this.descricao = descricao
        this.valor = valor
    }
    
    get getCodigo() {
        return this.codigo
    }

    get getDescricao() {
        return this.descricao
    }

    get getValor() {
        return this.valor
    }
    
}

export { Cardapio };