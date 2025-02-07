import { describe, test,expect } from "bun:test";
import server from "../src/index";
import axios from "axios";
describe("Test Request Gateway Comments ",  () => {
    test("It should request endpoint for get information comments data  success",async ()=>{
        const url =  `http://localhost:${server.port}/comments`
        const res = await axios.get(url);
        expect(res.status).toEqual(200)
    })
});
