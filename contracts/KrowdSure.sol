pragma solidity ^0.4.2;

contract KrowdSure {
  address public insured;
  string public content;

  function KrowdSure(string _content) {
    content = _content;
    insured = msg.sender;
  }
}
