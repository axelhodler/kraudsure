# Preparation

## Provide deposit for insurance

```
Chaininsurance.deployed().deposit.sendTransaction({
  value: web3.toWei(100, 'ether'),
  from: web3.eth.coinbase
});
```
