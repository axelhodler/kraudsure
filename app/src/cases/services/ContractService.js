function ContractService() {
  var contract = Chaininsurance.deployed();

  function currentUserAddress() {
    return web3.eth.coinbase;
  }

  function toWei(amount) {
    return web3.toWei(amount, 'ether');
  }

  this.fundedAmount = function() {
    return contract.fundedAmount.call();
  };

  this.deposit = function(amount) {
    return contract.deposit.sendTransaction({
      from: currentUserAddress(),
      value: toWei(amount)
    })
  };

  this.fund = function(amount) {
    return contract.fund.sendTransaction({
      from: currentUserAddress(),
      value: toWei(amount)
    });
  };

  this.issueClaim = function() {
    return contract.issueClaim({
      from: currentUserAddress()
    });
  };

  this.refund = function() {
    return contract.refund();
  };
}

export default [ContractService]