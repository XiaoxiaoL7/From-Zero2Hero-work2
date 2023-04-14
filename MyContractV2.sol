// MyContractV2.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract MyContractV2 is Initializable {
    uint256 public constant VERSION = 2;
    uint256 private _value;

    function initialize(uint256 initialValue) public initializer {
        _value = initialValue * 2; // 修改初始化逻辑
    }

    function getValue() public view returns (uint256) {
        return _value;
    }

    function setValue(uint256 newValue) public {
        _value = newValue * 2; // 修改 set 函数逻辑
    }
}
