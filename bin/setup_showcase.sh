#!/bin/sh

truffle migrate

truffle console <<< "var contract = web3.eth.contract(Chaininsurance.deployed().abi).at(Chaininsurance.deployed().address); contract.deposit.sendTransaction({value: web3.toWei(100, 'ether'), from: web3.eth.coinbase}); contract.fund.sendTransaction({value: web3.toWei(500, 'ether'), from: '0xdF700fD0413ca5772cbF5a588D3080469F2EddA2'});"

truffle serve
