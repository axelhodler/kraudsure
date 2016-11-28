pragma solidity ^0.4.2;

contract KrowdSure {
  address public insured;
  string public content;
  uint public insuredAmount;

  function KrowdSure(string _content, uint _insuredAmount) {
    content = _content;
    insuredAmount = _insuredAmount;
    insured = msg.sender;
  }
}
