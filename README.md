<h1>Twitter NFT sales bot</h1>

## Description

Tweets real-time NFT sales for ERC721 Smart contracts

In order to use this you’ll need to apply for Elevated access via the Twitter Developer Portal. You can learn more [here](https://developer.twitter.com/en/docs/twitter-api/getting-started/about-twitter-api#v2-access-leve).

## Installation

```bash
$ npm install
```

1. Create `.env` file & add contents from `example.env` -- Add your API credentials.
2. Edit the `src/config.ts` file to add your smart contract & customize the tweet parameters.
3. Edit `src/erc721sales.service.ts` to customize for your use (Experienced users only & not a requirement).
4. Build & Deploy `npm run build`
5. Feel free to reach out on twitter

## Use local images

If you want to improve performances, you may want to use local images, to do so, simply
set the following variables in the configuration:

```
  use_local_images: true,
  local_image_path: './token_images/tokens',
```

The `local_image_path` will be suffixed with the token number, ie, here, it will seek for an image
named `./token_images/tokens0034.png` if the token #34 is sold.

## Plugins / extendability

You can create custom interactions by implementing custom extensions by extending the `BaseService` base
class, an example is provided in  the `extensions/phunks.bid.extension.service.ts`. Once implemented, you can activate an extension by importing it in the `AppModule` service providers, ie:

```
@Module({
  imports: [HttpModule],
  controllers: [],
  providers: [
    Erc721SalesService, 
    PhunksBidService,
  ],
})
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Running with PM2
`pm2` is a process manager that can be used to ensure your app will restart after a crash or host machine reboot.  
This is useful if the bot is running on a service which doesn't handle auto-restarting, like a VM or your own machine.  
Install it with:  
```bash
$ npm install pm2@latest -g
```
Then start the bot e.g. in production mode, with:
```bash
$ pm2 start npm --name "twitter-bot" -- run start:prod
```

To set up booting the bot with your system:
1. Run `pm2 startup`. Then copy the output of this command and run it.
2. Save the current process list with `pm2 save`.

## Created by

The phunk community to serve the NFT space.

## License

Created using [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.
Nest is [MIT licensed](LICENSE).
