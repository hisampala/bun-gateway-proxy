import axios from 'axios';
import { describe, expect, test } from 'bun:test';

import servers from '../src/servers';

const port = 10004
const server = Bun.serve({port,fetch:servers})
describe("Test Request Gateway Users ",  () => {
    test("It should request endpoint for get information users data  success",async ()=>{
        const url =  `http://localhost:${server.port}/users`
        const res = await axios.get(url);
        expect(res.status).toEqual(200)
    })
});
