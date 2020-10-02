const Page = require("../src/page");

const fixtures = require("./fixtures");
const testPage = new Page(
    "https://www.example.com/info.html",
    "https://www.example.com/",
    fixtures.htmlElements
);

test("has internal links", () => {
    expect(testPage.internalLinks.length).toBe(2);
});

test("has external links", () => {
    expect(testPage.externalLinks.length).toBe(1);
});

test("has content links", () => {
    expect(testPage.contentLinks.length).toBe(1);
});
