import { ethers, AlchemyProvider, JsonRpcProvider } from "ethers";
import dotenv from 'dotenv';
dotenv.config();

process.env['NODE_TLS_REJECT_UNAUTHORIZED']='0'
const alchemyAPIKey = process.env.ALCHEMY_API_KEY;
const provider = new AlchemyProvider(null, alchemyAPIKey);
// const provider = ethers.getDefaultProvider("https://geth.ef3aaeddd3281ebe.dyndns.dappnode.io") as JsonRpcProvider;


  provider.send("debug_traceTransaction", 
  ['0xeb373972eee3b089be52dfe50626a4327fe5821ac8758c54f94fb2dc5a7ea2cc', {
    tracer: 'callTracer'
  }]).then(r => console.log(r))