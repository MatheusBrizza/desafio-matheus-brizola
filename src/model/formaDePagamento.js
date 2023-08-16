class FormaDePagamento {

  formaPagamento;
  desconto;

  get getFormaDePagamento() {
    return this.formaPagamento;
  }

  get getDesconto() {
    return this.desconto;
  }

  setFormaDePagamento(fp) {
    this.formaPagamento = fp;
    switch (fp) {
      case 'dinheiro':
        this.desconto = 0.05
        break;
      case 'debito':
        this.desconto = 0
        break;
      case 'credito':
        this.desconto = 0.03
        break;
    }
  }
}

export { FormaDePagamento }