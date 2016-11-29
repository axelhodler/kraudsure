class VerifyDamageController  {

  constructor(CasesDataService, ContractService, $log) {
    this.$log = $log;
    this.contractService = ContractService;
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

  approve() {
    this.contractService.issueClaim().then(() => {
    });
  }
}
export default VerifyDamageController;