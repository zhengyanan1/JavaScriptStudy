const getTemperature = require("./getTemperature")

jest.mock("./getJSON")
const getJSON = require("./getJSON")
const { default: test } = require("node:test")

getJSON.mockResolvedValue(0)


describe("getTemperature()", ()=>{
    test("Invoke the correct API", async ()=>{
        let expectedUrl = "www.baidu.com"
        let t = await getTemperature(expectedUrl)
        expect(getJSON).toHaveBeenCalledWith(expectedUrl)
    })
})