import { Keypair, PublicKey, sendAndConfirmTransaction, Transaction } from "@solana/web3.js";
import { CONNECTION, PROGRAM } from "./constants";
import { DataAccount } from "./interfaces";

export async function decrement(
  signer: Keypair,
  dataAccount: PublicKey,
): Promise<string> {
  const transaction = new Transaction()

  const instruction = await PROGRAM.methods.decrement().accounts({
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

export function findDataAccountData(dataKey: PublicKey): Promise<DataAccount> {
  return PROGRAM.account.dataAccount.fetch(dataKey);
}