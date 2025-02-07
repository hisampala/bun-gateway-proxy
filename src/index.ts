
import servers from './servers';

const server = Bun.serve({
  port: 3000,
  fetch:servers,
  error: (error) => {
    return new Response(JSON.stringify(error), { status: 502 })
  }
});

console.log(`API Gateway running at http://localhost:${server.port}`);