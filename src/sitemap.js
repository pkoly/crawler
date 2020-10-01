const uniq = require('lodash.uniq');

class Sitemap {
    constructor(pages) {
        this.pages = pages;
    }

    get json() {
        return this.pages.map((page) => {
            return {
                page: page.url,
                links: {
                    internals: uniq(page.internalLinks.map(link => link.url)).sort(),
                    externals: uniq(page.externalLinks.map((link) => link.url)).sort(),
                    content: uniq(page.contentLinks.map((link) => link.url)).sort(),
                },
            };
        });
    }
}

module.exports = Sitemap;
