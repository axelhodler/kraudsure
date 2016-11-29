import FundCaseController from './FundCaseController'

export default {
  name : 'fundCase',
  config : {
    bindings         : { },
    templateUrl      : 'src/cases/components/fundcase/FundCase.html',
    controller       : [ 'CasesDataService', '$log', FundCaseController ]
  }
};