import * as anchor from "@project-serum/anchor";

import { Keypair, PublicKey, Transaction, sendAndConfirmTransaction } from "@solana/web3.js";
import { CONNECTION, PROGRAM } from "./constants";

export async function initialize(
  signer: Keypair,
  dataAccount: PublicKey,
  dataKey: string
): Promise<string> {
  const transaction = new Transaction()

  const instruction = await PROGRAM.methods.initialize(dataKey)
    .accounts({
      signer: signer.publicKey,
      data: dataAccount,
      systemProgram: anchor.web3.SystemProgram.programId
    })
    .instruction();
  
  transaction.add(instruction);

  return sendAndConfirmTransaction(
    CONNECTION,
    transaction,
    [signer],
    {
      skipPreflight: false
    }
  )
}
