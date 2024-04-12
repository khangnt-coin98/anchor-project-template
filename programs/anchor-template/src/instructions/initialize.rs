use anchor_lang::prelude::*;

use crate::states::data::DataAccount;

#[derive(Accounts)]
#[instruction(data_key: String)]
pub struct InitializeContext<'info> {
  #[account(mut)]
  pub signer: Signer<'info>,

  #[account(
    init,
    seeds = [b"data".as_ref(), data_key.as_bytes()],
    payer = signer,
    space =  std::mem::size_of::<DataAccount>() + 8,
    bump
  )]
  pub data: Account<'info, DataAccount>,

  pub system_program: Program<'info, System>,
}

pub fn initialize<'a, 'b, 'c, 'info>(
  ctx: Context<'a, 'b, 'c, 'info, InitializeContext<'info>>,
  _data_key: String
) -> Result<()> {
  ctx.accounts.data.nonce = ctx.bumps.data;
  Ok(())
}