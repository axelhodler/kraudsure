contract('ChainInsurance', function(accounts) {
  var alice = accounts[0];
  var bob = accounts[1];
  var oscar = accounts[2];
  var dave = accounts[3];
  var chaininsurance;
  var TRANSACTION_COST = 0.5;

  function toEth(amount) {
    return web3.fromWei(amount, "ether").toNumber();
  }

  function balanceInEth(account) {
    return toEth(web3.eth.getBalance(account));
  }

  beforeEach(function() {
    chaininsurance = Chaininsurance.deployed();
  });

  it('allows users to provide a deposit', function() {
    var DEPOSIT = 50;
    return chaininsurance.deposit.sendTransaction({
      from: alice,
      value: web3.toWei(DEPOSIT, 'ether')
    }).then(function() {
      return chaininsurance.depositedAmount.call().then(function(depositedAmount) {
        assert.equal(toEth(depositedAmount), DEPOSIT);
      });
    });
  });

  it('lets users fund', function() {
    return chaininsurance.fund.sendTransaction({
      from: bob,
      value: web3.toWei(10, 'ether')
    });
  });

  it('increases fundedAmount on funding', function() {
    return chaininsurance.fundedAmount.call().then(function(amount) {
      assert.equal(toEth(amount), 10);
    });
  });

  it('keeps track of the individual contributions', function() {
    return chaininsurance.fund.sendTransaction({
      from: dave,
      value: web3.toWei(20, 'ether')
    }).then(function() {
      return chaininsurance.funders.call(dave).then(function(davesFundedAmount) {
        assert.equal(toEth(davesFundedAmount), 20);
      });
    });
  });

  it('anyone can trigger a refund', function() {
    var bobBalanceInEthPreRefund = balanceInEth(bob);
    return chaininsurance.refund(bob).then(function() {
      assert.equal(balanceInEth(bob), bobBalanceInEthPreRefund + 10);
    });
  });

  it('will not refund the same user twice', function() {
    var bobBalanceInEthPreRefund = balanceInEth(bob);
    return chaininsurance.refund(bob).then(function() {
      assert.equal(balanceInEth(bob), bobBalanceInEthPreRefund);
    });
  });

  it('does not allow the insured to trigger the claim transaction', function() {
    var aliceBalanceInEthPreRefund = balanceInEth(alice);
    return chaininsurance.issueClaim().then(function() {
      assert.isAbove(balanceInEth(alice), aliceBalanceInEthPreRefund - TRANSACTION_COST);
    });
  });

  it('only the oracle can trigger the claim transaction', function() {
    var aliceBalanceInEthPreRefund = balanceInEth(alice);
    return chaininsurance.issueClaim({from: oscar}).then(function() {
      assert.isAbove(balanceInEth(alice), aliceBalanceInEthPreRefund + 20 - TRANSACTION_COST);
    });
  });
});
