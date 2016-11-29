pragma solidity ^0.4.2;

contract KrowdSure {
  mapping (address => uint) public funders;
  address public insured;
  address public oracle;
  string public content;
  uint public insuredAmount;
  uint public fundedAmount;

  function KrowdSure(string _content, uint _insuredAmount, address _oracle) {
    content = _content;
    insuredAmount = _insuredAmount;
    oracle = _oracle;
    insured = msg.sender;
  }

  function fund() payable {
    fundedAmount += msg.value;
    funders[msg.sender] += msg.value;
  }

}
