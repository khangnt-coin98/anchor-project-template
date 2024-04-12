use solana_program::pubkey::Pubkey;

pub fn find_data_address(program_id: &Pubkey, seed: &[u8]) -> Pubkey {
  Pubkey::find_program_address(&[b"data", seed], program_id).0
}