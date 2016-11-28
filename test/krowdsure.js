contract('KrowdSure', function () {
  var krowd;

  beforeEach(function() {
    krowd = KrowdSure.deployed();
  });

  it('takes the documenthash as an argument', function () {
    return krowd.content.call().then(function (content) {
      assert.equal(content, 'asdf');
    });
  });

  it('sets the contract creator as the insured party', function () {
    return krowd.insured.call().then(function (insured) {
      assert.equal(insured, '0x6ad2f06fad39bfa860769c35fc53027ab1952061');
    });
  });
});
