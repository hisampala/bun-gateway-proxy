import axios from "axios";
import { convertHeader, convertToResponseLike } from "./helper";
import { proxy } from "./proxy.json" with {"type": "json"};
export default async (req:Request)=>{
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
}