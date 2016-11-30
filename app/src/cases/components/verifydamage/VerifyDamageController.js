class VerifyDamageController  {

  constructor(CasesDataService, ContractService, $log, $scope) {
    this.$log = $log;
    this.$scope = $scope;
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
        this.approved = true;
        this.$scope.$apply();
    });
  }
}
export default VerifyDamageController;