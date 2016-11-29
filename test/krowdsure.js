contract('KrowdSure', function(accounts) {
  var bob = accounts[1];
  var krowd;

  function toEth(amount) {
    return web3.fromWei(amount, "ether").toNumber();
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

  it('sets the contract creator as the insured party', function() {
    return krowd.insured.call().then(function(insured) {
      assert.equal(insured, '0x6ad2f06fad39bfa860769c35fc53027ab1952061');
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
});
