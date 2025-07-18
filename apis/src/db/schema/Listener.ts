// This file is generated by Sim IDX. Do not edit manually.
import { pgEnum, pgTable as table } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core";
import { db, types } from "@duneanalytics/sim-idx";

export const feeAmountEnabled = table("fee_amount_enabled", {
  fee: db.uint24('fee'),
  tickSpacing: db.int24('tick_spacing'),
})

export const ownerChanged = table("owner_changed", {
  oldOwner: db.address('old_owner'),
  newOwner: db.address('new_owner'),
})

export const poolCreated = table("pool_created", {
  token0: db.address('token0'),
  token1: db.address('token1'),
  fee: db.uint24('fee'),
  tickSpacing: db.int24('tick_spacing'),
  pool: db.address('pool'),
})
