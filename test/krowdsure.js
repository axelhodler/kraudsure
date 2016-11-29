contract('KrowdSure', function(accounts) {
  var bob = accounts[1];
  var oscar = accounts[2];
  var dave = accounts[3];
  var krowd;

  function toEth(amount) {
    return web3.fromWei(amount, "ether").toNumber();
  }

  function balanceInEth(account) {
    return toEth(web3.eth.getBalance(account));
  }

  beforeEach(function() {
    krowd = KrowdSure.deployed();
  });

  it('lets users fund', function() {
    return krowd.fund.sendTransaction({
      from: bob,
      value: web3.toWei(10, 'ether')
    });
  });

  it('increases fundedAmount on funding', function() {
    return krowd.fundedAmount.call().then(function(amount) {
      assert.equal(toEth(amount), 10);
    });
  });

  it('keeps track of the individual contributions', function() {
    return krowd.fund.sendTransaction({
      from: dave,
      value: web3.toWei(20, 'ether')
    }).then(function() {
      return krowd.funders.call(dave).then(function(davesFundedAmount) {
        assert.equal(toEth(davesFundedAmount), 20);
      });
    });
  });

  it('anyone can trigger a refund', function() {
    var bobBalanceInEthPreRefund = balanceInEth(bob);
    return krowd.refund(bob).then(function() {
      assert.equal(balanceInEth(bob), bobBalanceInEthPreRefund + 10);
    });
  });

});
