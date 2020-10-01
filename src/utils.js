/**
 * Creates an object composed of the picked object properties.
 * @param {Object} obj - Source object
 * @param {String[]} props - Properties to pick
 * @returns {Object} - new object
 */
function pick(obj, props) {
    return Object.keys(obj)
        .filter((key) => props.indexOf(key) >= 0)
        .reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
}

module.exports = {
    pick: pick,
};
