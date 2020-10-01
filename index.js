const Crawler = require("./src/crawler");
const Parser = require("./src/parser");
const load = require("./src/load");

const parser = new Parser({
    tags: ["a", "img"],
    load: load,
});

new Crawler("https://buildit.wiprodigital.com/", parser).run();
