class Sitemap {
    constructor(pages) {
        this.pages = pages;
    }

    get json() {
        return this.pages.map((page) => {
            return {
                page: page.url,
                links: {
                    internals: page.internalLinks.map((link) => link.url),
                    externals: page.externalLinks.map((link) => link.url),
                    content: page.contentLinks.map((link) => link.url),
                },
            };
        });
    }
}

module.exports = Sitemap;
