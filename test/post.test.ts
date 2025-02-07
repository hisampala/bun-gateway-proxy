import { describe, test,expect } from "bun:test";
import server from "../src/index";
import axios from "axios";
describe("Test Request Gateway Post ",  () => {
    test("It should request endpoint for get information posts data  success",async ()=>{
        const url =  `http://localhost:${server.port}/posts`
        const res = await axios.get(url);
        expect(res.status).toEqual(200)
    })
});
