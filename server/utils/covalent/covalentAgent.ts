import dotenv from 'dotenv';
dotenv.config();
const { GOLDRUSH_API, OPENAI_API_KEY } = process.env
import { Agent, ZeeWorkflow, LLM } from '@covalenthq/ai-agent-sdk';
import { ApiServices } from './invokeGoldrush';
import { createTools } from './createTools';

const apiKey = GOLDRUSH_API

//covalent

//first instantiate an agent, then implement tooling:


export async function runCovalentAgent(userMessage: string, address: string) {


    const llm = new LLM({
        provider: "OPEN_AI",
        name: "gpt-4o-mini",
        apiKey: OPENAI_API_KEY,
    });

    //run ApiServices to get information:
    const information = await ApiServices(address)


    const agent = new Agent({
        name: "Onramp Assistant",
        model: {
            provider: "OPEN_AI",
            name: "gpt-4o-mini",
        },
        description: "Onramp assistant.",
        instructions: ["You are an onramp cryptocurrency/blockchain assistant, your goal is to guide new users and answer any questions that arise."],
        tools: {

        },
    });
    

    const zee = new ZeeWorkflow({
        description: ` User's question: "${userMessage}". Assist users in understanding cryptocurrency basics, depending on what the user asks.`,
        output: "Provide guidance on whatever the user asks.",
        agents: { agent },
        maxIterations: 2,
    });

    const response = await ZeeWorkflow.run(zee)
    //const response = await agent.run()
    console.log(response)

    return response
}

//note to self, i should try making it seem smarter if i have time. meaning that i'll have a websocket connection between the front end (landing page) and backend, if the user is still on the landing page i'll send messages arbitrarily between every 2-5 minutes.
