// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "sim-idx-sol/Simidx.sol";
import "sim-idx-generated/Generated.sol";

contract Triggers is BaseTriggers {
    function triggers() external virtual override {
        UniswapV3FactoryDecoder decoder = new UniswapV3FactoryDecoder();
        addTriggers(chainContract(Chains.Ethereum, 0x1F98431c8aD98523631AE4a59f267346ea31F984), decoder.allTriggers());
    }
}

contract UniswapV3FactoryDecoder is UniswapV3Factory$EmitAllEvents {}
