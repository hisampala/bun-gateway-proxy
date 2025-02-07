import axios from 'axios';
import { describe, expect, test } from 'bun:test';

import servers from '../src/servers';

const port = 10002
const server = Bun.serve({port,fetch:servers})
describe("Test Request Gateway IP ",  () => {
    // test("It should request endpoint get information this ip  success",async ()=>{
    //     const url =  `http://localhost:${server.port}/ip`
    //     const res = await axios.get(url);
    //     expect(res.status).toEqual(200)
    // })
});
