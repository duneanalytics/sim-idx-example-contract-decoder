# Sim IDX: Contract Decoder Template

This repository contains the template for a Sim IDX app designed to decode and index data directly from smart contract function calls and emitted events.

## Getting Started

```bash
sim init --template=contract-decoder
```

This will scaffold a new Sim IDX app in your current directory, pre-configured with the example of decoding Uniswap's V3 Factory contract.

For a complete, step-by-step guide on how to customize this template to decode a different contract, please refer to our [official documentation](https://docs.sim.dune.com/idx/guides/decode-any-contract).

[**View the Full Contract Decoder Guide**](https://docs.sim.dune.com/idx/guides/decode-any-contract)

## Use Cases

This pattern is especially powerful for:

-   **Price Oracles:** Capturing real-time price data from functions like Uniswap's V3 Factory contract.
-   **Marketplaces:** Decoding the results of complex order fulfillments, like `fulfillAdvancedOrder` on OpenSea's Seaport protocol.
-   **DeFi Protocols:** Extracting detailed user state (e.g., health factor, collateral) from functions that return complex objects.
