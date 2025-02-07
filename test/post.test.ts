import axios from 'axios';
import { describe, expect, test } from 'bun:test';

import servers from '../src/servers';

const port = 10003
const server = Bun.serve({port,fetch:servers})

describe("Test Request Gateway Post ",  () => {
    test("It should request endpoint for get information posts data  success",async ()=>{
        const url =  `http://localhost:${server.port}/posts`
        const res = await axios.get(url);
        expect(res.status).toEqual(200)
    })
});
