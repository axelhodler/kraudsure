module.exports = function(deployer) {
  var ONE_SECOND = 1;
  deployer.deploy(KrowdSure,
    'asdf',
    10000,
    '0xd35bb587f9936d701603523858c9e2ddf18012bf',
    Math.round(+new Date() / 1000) + ONE_SECOND);
};
