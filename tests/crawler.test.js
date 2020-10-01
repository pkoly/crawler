const Crawler = require("../src/crawler");
const Parser = require("../src/parser");

const fixtures = require("./fixtures");
const mockLoad = jest.fn(() => fixtures.htmlSnippet);

const testParser = new Parser({
    tags: ["a", "img"],
    load: mockLoad,
});

test("loads all pages", (done) => {
    new Crawler("https://example.com/", testParser).run().then(() => {
        expect(mockLoad.mock.calls.length).toBe(4);
        done();
    });
});
