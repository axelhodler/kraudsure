class FundCaseController  {

  constructor(CasesDataService, ContractService, $log, $scope) {
    this.$log = $log;
    this.$scope = $scope;
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
    this.contractService.fund(this.fundamount).then(() => {
      this.selectedCase.percent = 100;
      this.$scope.$apply();
    });
  }
}
export default FundCaseController;