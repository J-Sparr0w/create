function getHTML(name) {
    return htmlBoiler=`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${name}</title>
        <link rel="stylesheet" href="styles.css" />
        <script src="./main.js" defer></script>
      </head>
      <body></body>
    </html>
    `
}

const cssBoiler = `
*,*::after,*::before{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

html,
body{
    height: 100%;
    width: 100%;
}`

const jsBoiler=`console.log("index.js is working")`

exports.cssBoiler= cssBoiler;
exports.jsBoiler=jsBoiler;
exports.getHTML = getHTML;