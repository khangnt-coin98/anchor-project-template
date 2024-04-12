import * as anchor from "@project-serum/anchor";
import fs from "fs";

import { publicKey } from "@project-serum/anchor/dist/cjs/utils";
import { PublicKey } from "@solana/web3.js";
import os from "os";

import { initialize } from "../services/inititalize";
import { PROGRAM } from "../services/constants";
import { increment } from "../services/increment";
import { decrement, findDataAccountData } from "../services/decrement";

describe("Test", () => {
  const home = require("os").homedir();
  const seeds = fs.readFileSync(home+ "/.config/solana/id.json");
  const defaultWallet = anchor.web3.Keypair.fromSecretKey(Uint8Array.from(JSON.parse(seeds.toString())));

  it("Is initialized!", async () => {
    const randomString = Math.random().toString(36).substring(7);
    const dataAccount = findDataAccount(PROGRAM.programId, randomString);
    await initialize(defaultWallet, dataAccount, randomString);
    
    await increment(defaultWallet, dataAccount)
    await decrement(defaultWallet, dataAccount)

    const dataAccountData = await findDataAccountData(dataAccount);
    console.log(" ---> dataAccountData: ", dataAccountData)
  });
});

function findDataAccount(program: PublicKey, dataKey: string): PublicKey {
  return publicKey.findProgramAddressSync([Buffer.from("data"), Buffer.from(dataKey)], program)[0];
}
