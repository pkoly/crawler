const cheerio = require("cheerio");

const utils = require("./utils");

class Parser {
    /**
     * Initialises class with configuration details
     * @param {Object} config - Parser configuration
     * @param {Function} config.load - function that gets the HTML contents of a given URL
     * @param {String[]} config.tags - HTML tags to extract from the page (e.g. ['a', 'img'])
     */
    constructor(config) {
        this.config = config;
    }

    /**
     * Returns an array of extracted HTML elements
     * @param {String} url - Url pointing to html file to parse
     * @returns {Promise<[]>} Promise object represents an array of extracted HTML elements
     */
    async parse(url) {
        try {
            const content = await this.config.load(url);
            return this.parseContent(content);
        } catch (e) {
            console.error(e);
        }
    }
    /**
     * Returns an array of extracted HTML elements
     * @param {String} content - HTML content to parse
     * @returns {Promise<[]>} Promise object represents an array of extracted HTML elements
     */
    async parseContent(content) {
        const result = [];

        try {
            const $ = await parseHtml(content);

            for (const tag of this.config.tags) {
                const elements = find($, tag).map((element) =>
                    utils.pick(element, ["type", "name", "attribs"])
                );
                result.push.apply(result, elements);
            }
        } catch (e) {
            console.error(e);
        }

        return result;
    }
}

/**
 * Returns a cheerio object
 * @param {String} html - HTML document
 * @returns {*} - cheerio object
 */
function parseHtml(html) {
    return cheerio.load(html);
}

/**
 * Returns an array
 * @param {Object} $ - cheerio object
 * @param {String} tag - tag to extract
 * @returns {Object[]} - list of extracted elements
 */
function find($, tag) {
    return $(tag).toArray();
}

module.exports = Parser;
