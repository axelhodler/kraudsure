contract('KrowdSure', function(accounts) {
  var bob = accounts[1];
  var oscar = accounts[2];
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
    return krowd.funders.call(bob).then(function(bobsFundedAmount) {
      assert.equal(toEth(bobsFundedAmount), 10);
    });
  });

  it('anyone can trigger a refund', function() {
    var bobBalanceInEthPreRefund = balanceInEth(bob);
    return krowd.refund(bob).then(function() {
      assert.equal(balanceInEth(bob), bobBalanceInEthPreRefund + 10);
    });
  });

});
