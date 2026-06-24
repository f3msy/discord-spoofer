![Discord Platform Spoofer](./images/image.png)
# Discord Platform Spoofer

Spoof multiple Discord platform sessions simultaneously using `discord.js-selfbot-v13`.

## Features

* Spoof as:
  * Discord VR (Meta Quest 3)
  * Discord Embedded (PS5)
  * Discord Android
  * Discord Client (Desktop)
  * Discord (Web)

* Custom User-Agent for each session
* Automatic login to all configured platforms
* Simple configuration file

## Installation

```bash
npm install discord.js-selfbot-v13 fs
```

## Configuration

A simple `config.json` file:

```json
{
  "token": "your-token",
  "status": "online", // you can view all status types in types.json
  "devices": {
    "Discord VR": { "name": "Meta Quest 3", "spoof": true },
    "Discord Embedded": { "name": "PS5", "spoof": true },
    "Discord Android": { "name": "sdk_gphone64_x86_64, sdk_gphone64_x86_64", "spoof": true },
    "Discord Client": { "name": "Desktop", "spoof": true },
    "Discord": { "name": "Web", "spoof": true }
  }
}
```

Replace `token` with your Discord account token.

## Usage

```bash
npm i
# replace "your-token" with your actual Discord token
node -e "require('fs').writeFileSync('config.json', JSON.stringify({ ...JSON.parse(require('fs').readFileSync('config.json', 'utf8')), token: 'your-token' }, null, 2))"
node index.js
```

## Example Output

```text
spoofed as Discord Embedded on PS5 | username
spoofed as Discord Android on sdk_gphone64_x86_64, sdk_gphone64_x86_64 | username
spoofed as Discord on Web | username
spoofed as Discord VR on Meta Quest 3 | username
spoofed as Discord Client on Desktop | username
```

## Source

[index.js](./index.js)
[config.json](./config.json)

## Disclaimer

This project uses a selfbot library and may violate Discord's Terms of Service. Use at your own risk. Account limitations, restrictions, or bans may occur as a result of using selfbots or modified clients.
