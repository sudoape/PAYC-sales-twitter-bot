import { BlurIOBasicParser } from "./parsers/blur.io.basic.parser";
import { BlurIOSalesParser } from "./parsers/blur.io.sales.parser";
import { BlurIOSweepParser } from "./parsers/blur.io.sweep.parser";
import { CargoParser } from "./parsers/cargo.parser";
import { LooksRareParser } from "./parsers/looksrare.parser";
import { LooksRareV2Parser } from "./parsers/looksrare.v2.parser";
import { NFTXParser } from "./parsers/nftx.parser";
import { NotLarvaLabsParser } from "./parsers/notlarvalabs.parser";
import { OpenSeaSeaportParser } from "./parsers/opensea.seaport.parser";
import { OpenSeaWyvernParser } from "./parsers/opensea.wyvern.parser";
import { LogParser } from "./parsers/parser.definition";
import { RaribleParser } from "./parsers/rarible.parser";
import { X2Y2Parser } from "./parsers/x2y2.parser";

export const config = {
  // Contract Address ======================================== //
  contract_address: '0x176e0Fe17314DEf59F0F06e976E1b74203be4a55',
  nftx_vault_contract_address: '0xa4009D8Eda6F40f549Dfc10f33F56619b9754C90',
  // Enter the block where your contract has been created
  statistic_initial_block: 13896439,
  //
  // discord_channels: '919681244537716767,968448656221011981',
  // discord_client_id: '1139547496033558561',
  // discord_guild_ids: '880485569652740136,968448656221011978',
  // discord_empty_wallet_gifs: ['https://media.tenor.com/J3mNIbj6A4wAAAAd/empty-shelves-john-travolta.gif', 'https://media.tenor.com/NteLNqDJB2QAAAAd/out-of-stock-this-is-happening.gif'],
  //
  // uncomment the 2 lines above to use local images instead of retrieving images from ipfs for each tweet
  use_local_images: false,
  local_image_path: './token_images/prefix',
  // 
  // this is a configuration for the phunk bid demo extension
  local_bids_image_path: './bids_images/Phunk_',
  // discord_owned_tokens_image_path: 'http://70.34.216.182/token_images/phunk<tokenId>.png',
  // discord_footer_text: 'FLIP!',
  // this is a configuration for the phunk auction house demo extension
  // local_auction_image_path: './auction_images/phunk',
  //
  // Fiat Conversion Currency ================================ //
  // Available Options: ====================================== //
  // usd, aud, gbp, eur, cad, jpy, cny ======================= //
  currency: 'usd',
  // Message ================================================= //
  // Available Parameters: =================================== //
  // <tokenId> ==================== Token ID of transfered NFT //
  // <ethPrice> ================= Value of transactions in eth //
  // <fiatPrice> =============== Value of transactions in fiat //
  // <txHash> =========================== The transaction hash //
  // <from> ===================================== From address //
  // <to> ========================================= To address //
  saleMessage: '🚨 PAYC #<tokenId> was sold for 💰 <ethPrice> (<fiatPrice>)\n\nfrom: <from>\nto: <to>\n\nhttps://etherscan.io/tx/<txHash>\nhttps://blur.io/asset/0x176e0Fe17314DEf59F0F06e976E1b74203be4a55/<tokenId>\nhttps://looksrare.org/collections/0x176e0Fe17314DEf59F0F06e976E1b74203be4a55/<tokenId>\n',
  bidMessage: '🚨 PAYC #<tokenId> received a bid for 💰 <ethPrice> (<fiatPrice>)\n\nfrom: <from>\n\nhttps://etherscan.io/tx/<txHash>\nhttps://blur.io/asset/0x176e0Fe17314DEf59F0F06e976E1b74203be4a55/<tokenId>\nhttps://looksrare.org/collections/0x176e0Fe17314DEf59F0F06e976E1b74203be4a55/<tokenId>\n',
  ownedTokensMessageDiscord: 'Here are the <count> tokens owned by the wallet: `<wallet>`!\n\n-- Indexing in progress, last event indexed: `<last_event>`',
  graphStatisticsMessageDiscord: 'Here is the graph you requested (wallet: `<wallet>)`!\n\n-- Indexing in progress, last event indexed: `<last_event>`',
  userStatisticsMessageDiscord: 'Hey, here are the stats you requested about `<wallet>`!\n\n⏳ It holded a PAYC for the first time <holder_since> days ago.\n💰 It executed <tx_count> transactions involving phunky apes with a total volume of <volume>Ξ.\n🧮 It is currently holding <owned_tokens> tokens.\n\n-- Indexing in progress, last event indexed: `<last_event>`',
  globalStatisticsMessageDiscord: 'Hey, here are the volume per platform (time window: <window>) ! 💰\n\n```<per_platform_stats>```\n— Indexing in progress, last event indexed: `<last_event>`',
  saleMessageDiscord: '[PAYC #<tokenId>](<tweetLink>) was flipped for [<ethPrice> (<fiatPrice>)](<https://etherscan.io/tx/<txHash>>)\n', // from: [<from>](https://notlarvalabs.com/cryptophunks/phunkbox?address=<initialFrom>)\nto: [<to>](https://notlarvalabs.com/cryptophunks/phunkbox?address=<initialTo>)',
  bidMessageDiscord: '[PAYC #<tokenId>](<tweetLink>) has a bid for [<ethPrice> (<fiatPrice>)](<https://etherscan.io/tx/<txHash>>)\n', // from: [<from>](<https://notlarvalabs.com/cryptophunks/phunkbox?address=<initialFrom>>)',
  flywheelMessageDiscord: '🚨 PAYC #<tokenId> has been sold to the auction flywheel for 💰 <ethPrice> (<fiatPrice>)\n\nfrom: <from>\n\nhttps://etherscan.io/tx/<txHash>\nhttps://blur.io/asset/0x176e0Fe17314DEf59F0F06e976E1b74203be4a55/<tokenId>\nhttps://looksrare.org/collections/0x176e0Fe17314DEf59F0F06e976E1b74203be4a55/<tokenId>\n', //https://www.phunks.pro/\n',
  flywheelMessage: '🚨 PAYC #<tokenId> has been sold to the auction flywheel for 💰 <ethPrice> (<fiatPrice>)\n\nfrom: <from>\n\nhttps://etherscan.io/tx/<txHash>\nhttps://blur.io/asset/0x176e0Fe17314DEf59F0F06e976E1b74203be4a55/<tokenId>\nhttps://looksrare.org/collections/0x176e0Fe17314DEf59F0F06e976E1b74203be4a55/<tokenId>\n', //https://www.phunks.pro/\n',
  auctionMessageDiscord: '🚨 PAYC #<tokenId> has been auctioned for 💰 <ethPrice> (<fiatPrice>)\n\nto: <to>\n\nhttps://etherscan.io/tx/<txHash>\nhttps://blur.io/asset/0x176e0Fe17314DEf59F0F06e976E1b74203be4a55/<tokenId>\n<additionalText>\n',
  auctionMessage: '🚨 PAYC #<tokenId> has been auctioned for 💰 <ethPrice> (<fiatPrice>)\n\nto: <to>\n\nhttps://etherscan.io/tx/<txHash>\nhttps://blur.io/asset/0x176e0Fe17314DEf59F0F06e976E1b74203be4a55/<tokenId>\n<additionalText>\n',
  // Prefer ENS over 0x address (Uses more Alchemy requests) = //
  // Available Options: ====================================== //
  // true, false ============================================= //
  ens: true,
  // Include free mints in tweets ============================ //
  // Available Options: ====================================== //
  // true, false ============================================= //
  includeFreeMint: false,
  gifModuleMentionnedUserId: 1540024208255754241, 
  parsers: [
    new BlurIOBasicParser(),
    new BlurIOSalesParser(),
    new BlurIOSweepParser(), // must be the last blurio parsers
    new OpenSeaWyvernParser(),
    new OpenSeaSeaportParser(),
    new LooksRareParser(),
    new LooksRareV2Parser(),
    // new NotLarvaLabsParser(),
    new X2Y2Parser(),
    new RaribleParser(),
    new CargoParser(),
    new NFTXParser(),
  ] as LogParser[],
};
