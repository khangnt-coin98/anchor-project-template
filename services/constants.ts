import { AnchorProvider, Program, Wallet } from "@project-serum/anchor";
import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import { AnchorTemplate, IDL } from "../target/types/anchor_template";

export const PROGRAM_ID = new PublicKey("MDqCgAdcFYUTJ9qWhnHYuMK53vk5wRvGzLFMcGoTUpn")
export const CONNECTION: Connection = new Connection("http://127.0.0.1:8899", "confirmed");

export const PROGRAM = new Program(IDL, PROGRAM_ID, new AnchorProvider(
  CONNECTION,
  new Wallet(Keypair.generate()),
  {}
)) as Program<AnchorTemplate>;
