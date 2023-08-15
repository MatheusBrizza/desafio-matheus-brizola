class FormaDePagamento {
  constructor() {
    //2 atributos: formaDePagamento, desconto;
    }
   
  get getFormaDePagamento() {
    return this.formaDePagamento;
  }

  get getDesconto() {
    return this.desconto;
  }

  formaDePagamento(formaDePagamento) {
    this.formaPagamento = formaDePagamento;

    switch (formaDePagamento) {
      case 'dinheiro':
        this.desconto = 0.05
        break;
      case 'debito':
        this.desconto = 0
        break;
      case 'credito':
        this.desconto = 0.03
    }
    // switch case para casos
  }
}

export { FormaDePagamento }