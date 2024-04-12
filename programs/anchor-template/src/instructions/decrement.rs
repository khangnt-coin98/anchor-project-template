use anchor_lang::prelude::*;

use crate::states::data::DataAccount;

#[derive(Accounts)]
pub struct DecrementContext<'info> {
  #[account(mut)]
  pub signer: Signer<'info>,

  #[account(mut)]
  pub data: Account<'info, DataAccount>,
}

pub fn decrement<'a, 'b, 'c, 'info>(
  ctx: Context<'a, 'b, 'c, 'info, DecrementContext<'info>>,
) -> Result<()> {
  ctx.accounts.data.count -= 1;
  Ok(())
}