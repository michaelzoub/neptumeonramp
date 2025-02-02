import dotenv from 'dotenv';
dotenv.config();
const { GOLDRUSH_API } = process.env
import { Agent, ZeeWorkflow } from '@covalenthq/ai-agent-sdk';

const apiKey = GOLDRUSH_API

//covalent

//first instantiate an agent, then implement tooling:

const agent = new Agent({
    name: "Onramp Assistant",
    model: {
        provider: "OPEN_AI",
        name: "gpt-4o-mini",
    },
    description: "You are an onramp assistant, your goal is to guide new users and answer any questions that arise.",
    tools: {
        tokenBalances: new TokenBalancesTool(apiKey),
        nftBalances: new NFTBalancesTool(apiKey),
        transactions: new TransactionsTool(apiKey),
    },
});

export async function runCovalentAgent(userMessage: string) {

    const zee = new ZeeWorkflow({
        description: userMessage,
        output: "The goal of this workflow is to answer any initial questions the user has about cryptocurrencies, wallets, blockchains, crypto in general.",
        agents: { agent },
    });

    const response = await ZeeWorkflow.run(zee)
    console.log(response)

    return response
}

//note to self, i should try making it seem smarter if i have time. meaning that i'll have a websocket connection between the front end (landing page) and backend, if the user is still on the landing page i'll send messages arbitrarily between every 2-5 minutes.
