/**
 * Users DataService
 * Uses embedded, hard-coded data model; acts asynchronously to simulate
 * remote data service call(s).
 *
 * @returns {{loadAll: Function}}
 * @constructor
 */
function CasesDataService() {
  var cases = [
    {
      name: 'Gener Delosreyes',
      avatar: 'svg-3',
      title: 'Sewing Machine',
      amount: 500,
      premium: 5,
    },
    {
      name: 'Lawrence Ray',
      avatar: 'svg-4',
      title: 'Crop Failure',
      description: 'I want to cover the risk of crop failure on my farm for one year. The worth of the total output is typically $1000.',
      amount: 1000,
      premium: 100
    }
  ];

  return {
    loadAllCases: function() {
      return cases;
    }
  };
}

export default [CasesDataService];

