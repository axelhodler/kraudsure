class FundCaseController  {

  /**
   * Constructor
   *
   * @param $log
   */
  constructor(CasesDataService, $log) {
    this.$log = $log;
    this.cases = CasesDataService.loadAllCases();
  }


}
export default FundCaseController;