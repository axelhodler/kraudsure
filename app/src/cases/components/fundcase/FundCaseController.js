class FundCaseController  {

  /**
   * Constructor
   *
   * @param $log
   */
  constructor(CasesDataService, $log) {
    this.$log = $log;
    this.fundpercent = 0;
    this.cases = CasesDataService.loadAllCases();
  }

  selectCase(selected) {
    this.fundpercent = 0;
    this.selectedCase = selected;
  }

  back() {
    delete this.selectedCase;
  }

}
export default FundCaseController;