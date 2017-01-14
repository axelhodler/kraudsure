module.exports = function(deployer) {
  var ONE_SECOND = 1;
  deployer.deploy(Chaininsurance,
    'insurance for x',
    1000,
    '0x354990de9386772900C6B257EC0b8dCC5AF8BFba',
    Math.round(+new Date() / 1000) + ONE_SECOND);
};
