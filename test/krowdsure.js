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

  function nowInSeconds() {
    return Math.round(+new Date().getTime() / 1000);
  }

  beforeEach(function() {
    krowd = KrowdSure.deployed();
  });

  it('takes the documenthash as an argument', function() {
    return krowd.content.call().then(function(content) {
      assert.equal(content, 'asdf');
    });
  });

  it('takes the insuredamount as an argument', function() {
    return krowd.insuredAmount.call().then(function(insuredamount) {
      assert.equal(insuredamount, 10000);
    });
  });

  it('requires the address of an oracle to be specified during creation', function() {
    return krowd.oracle.call().then(function(oracle) {
      assert.equal(oracle, oscar);
    });
  });

  it('sets the contract creator as the insured party', function() {
    return krowd.insured.call().then(function(insured) {
      assert.equal(insured, '0x6ad2f06fad39bfa860769c35fc53027ab1952061');
    });
  });

  it('knows when it has to be funded', function() {
    return krowd.toBeFundedUntil.call().then(function(fundedUntil) {
      assert.isAtLeast(fundedUntil.valueOf(), nowInSeconds());
    });
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
