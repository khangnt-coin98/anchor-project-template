pub mod error;
pub mod instructions;
pub mod libraries;
pub mod states;
pub mod util;

use anchor_lang::prelude::*;
use instructions::*;

declare_id!("MDqCgAdcFYUTJ9qWhnHYuMK53vk5wRvGzLFMcGoTUpn");

#[program]
pub mod anchor_template {
  
  use super::*;
  
  use instructions::initialize::InitializeContext;

  pub fn initialize<'a, 'b, 'c, 'info>(
    ctx: Context<'a, 'b, 'c, 'info, InitializeContext<'info>>,
    data_key: String
  ) -> Result<()> {
    instructions::initialize(ctx, data_key)
  }

  pub fn increment<'a, 'b, 'c, 'info>(
    ctx: Context<'a, 'b, 'c, 'info, IncrementContext<'info>>
  ) -> Result<()> {
    instructions::increment(ctx)
  }

  pub fn decrement<'a, 'b, 'c, 'info>(
    ctx: Context<'a, 'b, 'c, 'info, DecrementContext<'info>>
  ) -> Result<()> {
    instructions::decrement(ctx)
  }
}