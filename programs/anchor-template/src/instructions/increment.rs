use anchor_lang::prelude::*;

use crate::states::data::DataAccount;

#[derive(Accounts)]
pub struct IncrementContext<'info> {
  #[account(mut)]
  pub signer: Signer<'info>,
  
  #[account(mut)]
  pub data: Account<'info, DataAccount>,
}

pub fn increment<'a, 'b, 'c, 'info>(
  ctx: Context<'a, 'b, 'c, 'info, IncrementContext<'info>>,
) -> Result<()> {
  ctx.accounts.data.count += 1;
  Ok(())
}