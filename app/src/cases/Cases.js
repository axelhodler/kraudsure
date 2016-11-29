// Load the custom app ES6 modules

import CasesDataService from 'src/cases/services/CasesDataService';
import ContractService from 'src/cases/services/ContractService';

import NewCase from 'src/cases/components/newcase/NewCase';
import FundCase from 'src/cases/components/fundcase/FundCase';
import VerifyDamage from 'src/cases/components/verifydamage/VerifyDamage';

export default angular
  .module("cases", ['ngMaterial'])

  .component(NewCase.name, NewCase.config)
  .component(FundCase.name, FundCase.config)
  .component(VerifyDamage.name, VerifyDamage.config)

  .service("CasesDataService", CasesDataService)
  .service("ContractService", ContractService);
