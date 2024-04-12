import { Keypair, PublicKey, sendAndConfirmTransaction, Transaction } from "@solana/web3.js";
import { CONNECTION, PROGRAM } from "./constants";

export async function increment(
  signer: Keypair,
  dataAccount: PublicKey,
): Promise<string> {
  const transaction = new Transaction()

  const instruction = await PROGRAM.methods.increment().accounts({
    signer: signer.publicKey,
    data: dataAccount
  }).instruction();
  
  transaction.add(instruction);

  return sendAndConfirmTransaction(
    CONNECTION,
    transaction,
    [signer],
    {
      skipPreflight: true
    }
  )
}

