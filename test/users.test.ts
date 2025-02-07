import { describe, test,expect } from "bun:test";
import server from "../src/index";
import axios from "axios";
describe("Test Request Gateway Users ",  () => {
    test("It should request endpoint for get information users data  success",async ()=>{
        const url =  `http://localhost:${server.port}/users`
        const res = await axios.get(url);
        expect(res.status).toEqual(200)
    })
});
