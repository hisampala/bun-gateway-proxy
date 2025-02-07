import axios from 'axios';
import { describe, expect, test } from 'bun:test';

import servers from '../src/servers';

const port = 10001
const server = Bun.serve({port,fetch:servers})
describe("Test Request Gateway Comments ",  () => {
    test("It should request endpoint for get information comments data  success",async ()=>{
        const url =  `http://localhost:${server.port}/comments`
        const res = await axios.get(url);
        expect(res.status).toEqual(200)
    })
});
