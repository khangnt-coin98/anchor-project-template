import * as anchor from "@project-serum/anchor";

export interface DataAccount {
  nonce: number;
  count: anchor.BN
}