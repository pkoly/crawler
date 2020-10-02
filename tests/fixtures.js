exports.htmlSnippet = [
    "<div>",
    '<a href="apple.html" title="Apple" />',
    '<a href="orange.html" title="Orange" />',
    '<img src="banana.png" alt="Banana" />',
    '<a href="pear.html" title="Pear" />',
    "</div>",
].join("");

exports.htmlElements = [
    {
        type: "tag",
        name: "a",
        attribs: {
            href: "https://www.apple.com",
        },
    },
    {
        type: "tag",
        name: "a",
        attribs: {
            href: "orange.html",
        },
    },
    {
        type: "tag",
        name: "a",
        attribs: {
            href: "pear.html",
        },
    },
    {
        type: "tag",
        name: "img",
        attribs: {
            src: "banana.png",
        },
    },
];
