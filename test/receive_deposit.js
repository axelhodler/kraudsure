contract('Chainsurance: Receive Profis', function(accounts) {

  var alice = accounts[0];
  var carol = accounts[2];
  var chaininsurance;

  function toEth(amount) {
    return web3.fromWei(amount, "ether").toNumber();
  }

  function balanceInEth(account) {
    return toEth(web3.eth.getBalance(account));
  }

  beforeEach(function() {
    chaininsurance = Chaininsurance.deployed();
  });

  it('sends the profits after funding goal reached', function() {
    var ALICE_DEPOSIT = 100;
    var PROBABLE_TX_COST = 0.5;
    var CAROLS_FUNDING = 1000;
    return chaininsurance.deposit.sendTransaction({
      from: alice,
      value: ALICE_DEPOSIT
    }).then(function() {
      var balanceCarolPreFundingReached = balanceInEth(carol) - CAROLS_FUNDING;
      return chaininsurance.fund.sendTransaction({
        from: carol,
        value: web3.toWei(CAROLS_FUNDING, 'ether')
      }).then(function() {
        return chaininsurance.claimDeposit({
          from: carol
        }).then(function() {
          assert.isAbove(balanceInEth(carol), balanceCarolPreFundingReached + ALICE_DEPOSIT - PROBABLE_TX_COST);
          return chaininsurance.depositedAmount.call().then(function(depositedAmount) {
            assert.isBelow(1, depositedAmount.valueOf());
          })
        });
      });
    });
  });

});
