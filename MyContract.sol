// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract MyContract is Initializable {
    uint256 public constant VERSION = 1;
    uint256 private _value;

    function initialize(uint256 initialValue) public initializer {
        _value = initialValue;
    }

    function getValue() public view returns (uint256) {
        return _value;
    }

    function setValue(uint256 newValue) public {
        _value = newValue;
    }
    function initialize() public {
  //  initialization logic xx}
}


