import { describe, test,expect } from "bun:test";
import server from "../src/index";
import axios from "axios";
describe("Test Request Gateway IP ",  () => {
    test("It should request endpoint get information this ip  success",async ()=>{
        const url =  `http://localhost:${server.port}/ip`
        const res = await axios.get(url);
        expect(res.status).toEqual(200)
    })
});
