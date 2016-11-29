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
        name: 'Anna Duke',
        avatar: 'svg-1',
        title: 'Earthquake Cover',
        amount: 3500,
        premium: 420,
        percent: 39
    },
    {
      name: 'Lawrence Ray',
      location: 'Suba, Kenya',
      avatar: 'svg-4',
      title: 'Crop Failure',
      description: 'I want to cover the risk of crop failure on my farm for one year. The worth of the total output is typically 1000.00 EUR.',
      image: 'assets/images/landscape.png',
      amount: 1000,
      premium: 100,
      percent: 50
    },
    {
      name: 'Anonymous User',
      title: 'Bush Fire',
      amount: 2000,
      premium: 350,
      percent: 21
    },
    {
      name: 'Gener Delosreyes',
      avatar: 'svg-3',
      title: 'Sewing Machine',
      amount: 500,
      premium: 8,
      percent: 73
    }
  ];

  var damages = [
    {
        name: 'Robert Delores',
        location: 'Mombasa, Kenya',
        avatar: 'svg-2',
        title: 'Flood Insurance',
        damage: 'My village was flooded. Damage in housing of 1000.00 EUR',
        image: 'assets/images/flood.png',
        amount: 1000
    }
  ];

  return {
    loadAllCases: function() {
        return cases;
    },
    loadAllDamages: function() {
        return damages;
    }
  };
}

export default [CasesDataService];

