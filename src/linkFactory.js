const Link = require("./link");

const isPageLink = (element) =>
    element.type === "tag" &&
    element.name === "a" &&
    element.attribs.href &&
    !element.attribs.href.startsWith("#") &&
    !element.attribs.href.startsWith("mailto:");

const isExternalUrl = (root, url) =>
    url.startsWith("http") &&
    !url.startsWith(root);

const isExternalLink = (root, element) => isExternalUrl(root, element.attribs.href);
const isExternalContent = (root, element) => isExternalUrl(root, element.attribs.src);

const isContent = (element) =>
    element.type === "tag" &&
    element.name === "img" &&
    element.attribs &&
    element.attribs.src;

const removeLastForwardSlash = (url) => url.startsWith("/") ? url.substring(1) : url;
const prependRoot = (root, url) => url.startsWith(root) ? url : `${root}${url}`;

class LinkFactory {
    constructor(root, elements) {
        this.root = root;
        this.elements = elements;
    }

    build() {
        const links = [];

        Object.keys(this.elements).forEach((key) => {
            const element = this.elements[key];

            if (isPageLink(element)) {
                if (isExternalLink(this.root, element)) {
                    links.push(new Link(element.attribs.href, "external"));
                } else {
                    // isInternalLink
                    const href = removeLastForwardSlash(element.attribs.href);
                    const url = prependRoot(this.root, href);
                    links.push(new Link(url, "internal"));
                }
            } else if (isContent(element)) {
                let url = element.attribs.src;
                if (!isExternalContent(this.root, element)) {
                    const src = removeLastForwardSlash(url);
                    url = prependRoot(this.root, src);
                }
                links.push(new Link(url, "content"));
            }
        });

        return links;
    }
}

module.exports = LinkFactory;
