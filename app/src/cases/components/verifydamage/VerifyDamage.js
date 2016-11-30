import VerifyDamageController from './VerifyDamageController'

export default {
  name : 'verifyDamage',
  config : {
    bindings         : { },
    templateUrl      : 'src/cases/components/verifydamage/VerifyDamage.html',
    controller       : [ 'CasesDataService', 'ContractService', '$log', '$scope', VerifyDamageController ]
  }
};