contract('ChainInsurance', function(accounts) {

  var oscar = accounts[2];

  function nowInSeconds() {
    return Math.round(+new Date().getTime() / 1000);
  }

  beforeEach(function() {
    chaininsurance = Chaininsurance.deployed();
  });

  it('takes the documenthash as an argument', function() {
    return chaininsurance.content.call().then(function(content) {
      assert.equal(content, 'asdf');
    });
  });

  it('takes the insuredamount as an argument', function() {
    return chaininsurance.insuredAmount.call().then(function(insuredamount) {
      assert.equal(insuredamount, 10000);
    });
  });

  it('requires the address of an oracle to be specified during creation', function() {
    return chaininsurance.oracle.call().then(function(oracle) {
      assert.equal(oracle, oscar);
    });
  });

  it('sets the contract creator as the insured party', function() {
    return chaininsurance.insured.call().then(function(insured) {
      assert.equal(insured, '0x6ad2f06fad39bfa860769c35fc53027ab1952061');
    });
  });

  it('knows when it has to be funded', function() {
    return chaininsurance.toBeFundedUntil.call().then(function(fundedUntil) {
      assert.isAtLeast(fundedUntil.valueOf(), nowInSeconds());
    });
  });


});
