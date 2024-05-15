const staticInitTime = Date.now();
let isColdStart = true;
export const dynamic = 'force-dynamic'; // static by default, unless reading the request
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
    processUptime: process.uptime(),
  }

  response.status(200).json(resp);
}
