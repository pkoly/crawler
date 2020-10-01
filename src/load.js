const axios = require("axios");

/**
 * Returns the HTML document from a given url
 * @param {String} url - Url pointing to html file to parse
 * @returns {Promise<any>} - Promise object represents an HTML document
 */
async function loadContent(url) {
    const response = await axios.get(url);
    return response.data;
}

module.exports = loadContent;
