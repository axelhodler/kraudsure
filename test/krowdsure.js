contract('KrowdSure', function () {
  it('takes the documenthash as an argument', function () {
    var krowd = KrowdSure.deployed();

    return krowd.content.call().then(function (content) {
      assert.equal(content, 'asdf');
    });
  });
  it('sets the contract creator as the insured party', function () {
    var krowd = KrowdSure.deployed();

    return krowd.insured.call().then(function (insured) {
      assert.equal(insured, '0x6ad2f06fad39bfa860769c35fc53027ab1952061');
    });
  });
});
