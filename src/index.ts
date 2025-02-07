import axios from "axios";
import { convertHeader, convertToResponseLike } from "./helper";
import { proxy } from "./proxy.json" with {"type": "json"};
const server = Bun.serve({
  port: 3333,
  async fetch(req) {
    const url = new URL(req.url);
    const proxyTable: Map<string, string> = new Map(proxy.map(({ path, endpoint }) => [path, endpoint]));
    for (const [path, target] of proxyTable.entries()) {
      if (url.pathname.startsWith(path)) {
        const targetUrl = target + url.pathname.replace(path, "") + url.search;
        const res = await axios(targetUrl, {
          method: req.method,
          headers: convertHeader(req.headers)
        });
        const { body, headers, status, statusText } = await convertToResponseLike(res)
        return new Response(body, { status: status, headers,statusText })
      }
    }
    const data = JSON.stringify({messages:"Not Found"})
    return new Response(data, { status: 404 });
  },
  error: (error) => {
    return new Response(JSON.stringify(error), { status: 502 })
  }
});

console.log(`API Gateway running at http://localhost:${server.port}`);
export default server