class Cardapio {
    preencherCardapio() {
        const lista = []
        lista.push({ codigo: 'cafe', descricao: 'Café', valor: '3.00' })
        lista.push({ codigo: 'chantily', descricao: 'Chantily (extra do Café)', valor: '1.50' })
        lista.push({ codigo: 'suco', descricao: 'Suco Natural', valor: '6.20' })
        lista.push({ codigo: 'sanduiche', descricao: 'Sanduíche', valor: '6.50' })
        lista.push({ codigo: 'queijo', descricao: 'Queijo (extra do Sanduíche)', valor: '2.00' })
        lista.push({ codigo: 'salgado', descricao: 'Salgado', valor: '7.25' })
        lista.push({ codigo: 'combo1', descricao: '1 Suco e 1 Sanduíche', valor: '9.50' })
        lista.push({ codigo: 'combo2', descricao: '1 Café e 1 Sanduíche', valor: '7.50' })
        return lista
    }

    preencherCodigos() {
        const lista = []
        lista.push('cafe')
        lista.push('chantily')
        lista.push('suco')
        lista.push('sanduiche')
        lista.push('queijo')
        lista.push('salgado')
        lista.push('combo1')
        lista.push('combo2')
        return lista
    }
}

export { Cardapio };