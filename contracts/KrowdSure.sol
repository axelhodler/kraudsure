pragma solidity ^0.4.2;

contract KrowdSure {
  mapping (address => uint) public funders;
  address public insured;
  address public oracle;
  string public content;
  uint public insuredAmount;
  uint public fundedAmount;
  uint public toBeFundedUntil;
  uint public depositedAmount;

  function KrowdSure(string _content, uint _insuredAmount, address _oracle, uint _toBeFundedUntil) {
    toBeFundedUntil = _toBeFundedUntil;
    content = _content;
    insuredAmount = _insuredAmount;
    oracle = _oracle;
    insured = msg.sender;
  }

  function fund() payable {
    fundedAmount += msg.value;
    funders[msg.sender] += msg.value;
  }

  function deposit() payable {
    depositedAmount += msg.value;
  }

  function issueClaim() {
    if (!insured.send(fundedAmount)) {
      throw;
    }
  }

  function refund(address user) {
    if (user.send(funders[user])) {
      fundedAmount -= funders[user];
      funders[user] = 0;
    } else {
      throw;
    }
  }
}
