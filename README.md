# AI Sol Agent

AI Sol Agent is an advanced Web3 chatbot template that enables natural language interactions with the Solana blockchain. Built with Next.js and integrated with LangChain and OpenAI, this template allows developers to create sophisticated blockchain applications with conversational AI capabilities.

## Live Demo

## Features

- **Natural Language Processing:** Interact with Solana blockchain using simple English commands
- **Wallet Integration:** Secure wallet management with private key handling
- **Token Operations:** Create and manage tokens with simple chat commands
- **NFT Creation:** Mint NFTs directly through conversation
- **Balance Checking:** Query SOL balances and token information
- **Transaction Management:** Send SOL and monitor transactions


## Technologies Used

- **Frontend:** Next.js, React.js, TailwindCSS, Framer Motion
- **Blockchain Integration:** @solana/web3.js, solana-agent-kit
- **AI/ML:** LangChain, OpenAI
- **Styling:** TailwindCSS, Tailwind Forms
- **Development:** TypeScript, ESLint
- **Utilities:** bs58 for Base58 encoding/decoding

## Use Cases

- **DeFi Applications:** Manage Solana tokens and transactions through chat
- **NFT Platforms:** Create and manage NFT collections conversationally
- **Wallet Management:** Monitor and manage Solana wallets using natural language
- **Blockchain Education:** Learn Solana operations through interactive chat
- **Token Creation:** Launch new tokens with simple commands

## Installation Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/0xmetaschool/AI-Sol-Agent.git
    ```

2. Navigate to the project directory:
    ```bash
    cd AI-Sol-Agent
    ```
    
3. Use Node.js v22 (ensure you have nvm installed):
    ```bash
    nvm use 22
    ```
    
4. Install dependencies:
    ```bash
    npm i -legacy-peer-deps
    ```

5. Set up environment variables:
    Create a `.env` file in the root directory and add:
    ```env
    OPENAI_API_KEY=your_openai_api_key
    RPC_URL= https://api.devnet.solana.com
    ```

6. Start the development server:
    ```bash
    npm run dev
    ```

7. Open your browser and navigate to `http://localhost:3000`


## Screenshots
<table>
  <tr>
    <td><img src="https://github.com/0xmetaschool/AI-Sol-Agent/blob/main/public/AI-Sol-Agent-web3-template-Landing-Page.png" alt="Screenshot 4" width="400"></td>
    <td><img src="https://github.com/0xmetaschool/AI-Sol-Agent/blob/main/public/AI-Sol-Agent-web3-template-PK.png" alt="Screenshot 1" width="400"></td>
    <td><img src="https://github.com/0xmetaschool/AI-Sol-Agent/blob/main/public/AI-Sol-Agent-web3-template-chat1.png" alt="Screenshot 2" width="400"></td>
      <td><img src="https://github.com/0xmetaschool/AI-Sol-Agent/blob/main/public/AI-Sol-Agent-web3-template-chat2.png" alt="Screenshot 4" width="400"></td>
  </tr>
</table>



## How to Use

1. **Connect Wallet:** Input your Solana private key when prompted
2. **Start Chatting:** Use natural language to interact with the blockchain
3. **Create Tokens:** Type commands like "Create a new token" with parameters
4. **Mint NFTs:** Use "Mint NFT" command with metadata
5. **Send Transactions:** Simply type "Send X SOL to [address]"
6. **Check Balances:** Ask "What's my SOL balance?"

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please open an issue in the GitHub repository.
