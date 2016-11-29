class VerifyDamageController  {

  /**
   * Constructor
   *
   * @param $log
   */
  constructor(CasesDataService, $log) {
    this.$log = $log;
    this.fundpercent = 0;
    this.damages = CasesDataService.loadAllDamages();
    this.selectedDamage = this.damages[0];
  }

  selectDamage(selected) {
    this.selectedDamage = selected;
  }

  back() {
    delete this.selectedDamage;
  }

}
export default VerifyDamageController;