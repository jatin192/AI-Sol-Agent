import { NextApiRequest, NextApiResponse } from 'next';
import { SolanaAgent } from '@/services/solanaAgent';
import Cors from 'cors';

// Initialize CORS middleware
const cors = Cors({
  methods: ['POST', 'OPTIONS'],
});

// Helper method to run middleware
function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: Function) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

// Create a map to store agent instances for different private keys
const agentInstances = new Map<string, SolanaAgent>();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Run the CORS middleware
  await runMiddleware(req, res, cors);

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ status: 'error', message: 'Method not allowed' });
  }

  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ status: 'error', message: 'Message is required' });
    }

    const privateKeyBase58 = req.headers['x-private-key'] as string;
    if (!privateKeyBase58) {
      return res.status(400).json({ status: 'error', message: 'Private key is required' });
    }

    // Get or create agent instance for this private key
    let agent = agentInstances.get(privateKeyBase58);
    if (!agent) {
      try {
        agent = new SolanaAgent();
        await agent.initialize(privateKeyBase58);
        agentInstances.set(privateKeyBase58, agent);
      } catch (initError) {
        console.error('Agent initialization error:', initError);
        return res.status(500).json({ 
          status: 'error', 
          message: 'Failed to initialize Solana agent' 
        });
      }
    }

    const response = await agent.processMessage(message);
    return res.status(200).json({ status: 'success', response });
  } catch (error) {
    console.error('Chat API error:', error);
    return res.status(500).json({ 
      status: 'error', 
      message: error instanceof Error ? error.message : 'Internal server error'
    });
  }
}
