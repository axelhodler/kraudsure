class FundCaseController  {

  constructor(CasesDataService, ContractService, $log) {
    this.$log = $log;
    this.fundpercent = 0;
    this.cases = CasesDataService.loadAllCases();
    this.fundedAmount = ContractService.fundedAmount();
    this.contractService = ContractService;
  }

  selectCase(selected) {
    this.fundpercent = 0;
    this.selectedCase = selected;
  }

  back() {
    delete this.selectedCase;
  }

  fund() {
    this.contractService.fund();
  }
}
export default FundCaseController;