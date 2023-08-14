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
  
}

export { FormaDePagamento }