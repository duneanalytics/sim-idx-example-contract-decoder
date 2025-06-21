
import { pgEnum, pgTable as table } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core";
import { simDb, simTypes } from "sim-idx";

export const feeAmountEnabled = table("fee_amount_enabled", {
  fee: simDb.uint24('fee'),
  tickSpacing: simDb.int24('tick_spacing'),
})

export const ownerChanged = table("owner_changed", {
  oldOwner: simDb.address('old_owner'),
  newOwner: simDb.address('new_owner'),
})

export const poolCreated = table("pool_created", {
  token0: simDb.address('token0'),
  token1: simDb.address('token1'),
  fee: simDb.uint24('fee'),
  tickSpacing: simDb.int24('tick_spacing'),
  pool: simDb.address('pool'),
})
