contract('KrowdSure', function () {
  it('takes the documenthash as an argument', function () {
    var krowd = KrowdSure.deployed();

    return krowd.content.call().then(function (content) {
      assert.equal(content, 'asdf');
    });
  });
});
