const Page = require("./page");
const Link = require("./link");

class Crawler {
    constructor(root, parser) {
        this.root = root;
        this.parser = parser;
    }

    async run() {
        const pages = [];
        const processed = {};
        const queue = [];

        const rootLink = new Link(this.root);
        queue.push(rootLink);

        while (queue.length) {
            const link = queue[0];

            if (!processed[link.url]) {
                try {
                    const elements = await this.parser.parse(link.url);
                    const page = new Page(link.url, this.root, elements);
                    pages.push(page);

                    queue.push.apply(queue, page.internalLinks); // enqueue children nodes
                } catch (e) {
                    console.error(e);
                }
            }

            processed[link.url] = true;
            queue.shift(); // dequeue parent node
        }

        return pages;
    }
}

module.exports = Crawler;
