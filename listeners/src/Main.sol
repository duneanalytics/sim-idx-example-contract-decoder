// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "sim-idx-sol/Simidx.sol";
import "sim-idx-generated/Generated.sol";

contract Triggers is BaseTriggers {
    function triggers() external virtual override {
        Listener listener = new Listener();
        addTriggers(
            ChainIdContract(1, 0x1F98431c8aD98523631AE4a59f267346ea31F984),
            listener.allTriggers()
        );
    }
}

contract Listener is UniswapV3Factory$EmitAllEvents {}