import shelljs from 'shelljs';

const exec = (cluster: string) => {
  const keypair = __dirname + "/anchor_template-keypair.json"
  shelljs.exec(`anchor deploy --provider.cluster ${cluster} --program-keypair ${keypair}`)
}

exec("localnet")