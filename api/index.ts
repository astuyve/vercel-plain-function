const staticInitTime = Date.now();
let isColdStart = true;
import type {VercelRequest, VercelResponse} from '@vercel/node';

export default function (_request: VercelRequest, response: VercelResponse) {
  let coldStartResult = false;
  if (isColdStart) {
    isColdStart = false;
    coldStartResult = true;
  }
  const handlerRunTime = Date.now();
  const resp = {
    handlerRunTime,
    staticInitTime,
    coldStartResult,
    env: process.env, //Dont do this if you have secrets
    processUptime: process.uptime(),
  }

  response.status(200).json({
    resp 
  });
}
