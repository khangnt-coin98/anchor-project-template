use anchor_lang::prelude::*;

#[account]
pub struct DataAccount {
  pub nonce: u8,
  pub count: u64,
}