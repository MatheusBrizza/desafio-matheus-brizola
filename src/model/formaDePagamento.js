class FormaDePagamento {
    constructor() {
      this.pagamentoStrategy = {
        debito: new DebitoStrategy(),
        credito: new CreditoStrategy(),
        dinheiro: new DinheiroStrategy(),
      };
      this.currentPagamentoStrategy = null;
    }
   
    get getCurrentPagamentoStrategy() {
        return this.currentPagamentoStrategy;
    }
  
    set setPagamentoStrategy(strategy) {
      this.currentPagamentoStrategy = this.pagamentoStrategy[strategy];
    }
  
    pagamento(valor) {
        if (!this.currentPagamentoStrategy) {
            console.log('Forma de pagamento inválida.');
            return;
        }
      
        if (this.currentPagamentoStrategy instanceof DinheiroStrategy) {
            valor *= 0.95;
        } else if (this.currentPagamentoStrategy instanceof CreditoStrategy) {
            valor *= 1.03;
        }
        return valor;
    }
}

export { FormaDePagamento }