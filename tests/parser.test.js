const Parser = require("../src/parser");

const fixtures = require("./fixtures");
const mockLoad = jest.fn(() => fixtures.htmlSnippet);

test("extracts anchor elements", (done) => {
    const parser = new Parser({
        tags: ["a"],
        load: mockLoad,
    });

    parser.parse("test").then((result) => {
        expect(result.length).toBe(3);
        done();
    });
});

test("extracts img elements", (done) => {
    const parser = new Parser({
        tags: ["img"],
        load: mockLoad,
    });

    parser.parse("img").then((result) => {
        expect(result.length).toBe(1);
        done();
    });
});

test("extracts multiple tags", (done) => {
    const parser = new Parser({
        tags: ["a", "img"],
        load: mockLoad,
    });

    parser.parse("multiple").then((result) => {
        expect(result.length).toBe(4);
        done();
    });
});
