const LinksFactory = require("./linkFactory");

class Page {
    constructor(url, domain, elements) {
        this.url = url;
        this.domain = domain;
        this.links = new LinksFactory(this.domain, elements).build();
    }

    get internalLinks() {
        return this.links.filter((link) => link.type === "internal");
    }

    get externalLinks() {
        return this.links.filter((link) => link.type === "external");
    }

    get contentLinks() {
        return this.links.filter((link) => link.type === "content");
    }
}

module.exports = Page;
