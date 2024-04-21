const http = require("http");
const pageCountMap = new Map();
pageCountMap.set("home", 0);
pageCountMap.set("about", 0);
pageCountMap.set("other", 0);


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        const title = "Main page";
        const mainText = "Welcome to my website";
        const simplePageTemplate = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>${title}</title>
            </head>
            <body>
                <h1>${mainText}</h1>
            </body>
            </html>
            `;
        res.writeHead(200, {
            'Content-type': 'text/html; charset=UTF=8',
        });
        res.end(simplePageTemplate);
        pageCountMap.set("home", pageCountMap.get("home") + 1);
    } else if (req.url === '/about') {
        const title = "About page";
        const mainText = "Welcome to about page";
        const simplePageTemplate = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>${title}</title>
            </head>
            <body>
                <h1>${mainText}</h1>
                <a href="/">To main page</a>
            </body>
            </html>
            `;
        res.writeHead(200, {
            'Content-type': 'text/html; charset=UTF=8',
        });
        res.end(simplePageTemplate);
        pageCountMap.set("about", pageCountMap.get("about") + 1);
    } else {
        const title = "Page not found";
        const mainText = "Page not found. 404!";
        const simplePageTemplate = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>${title}</title>
            </head>
            <body>
                <h1>${mainText}</h1>
            </body>
            </html>
            `;
        res.writeHead(404, {
            'Content-type': 'text/html; charset=UTF=8',
        });
        res.end(simplePageTemplate);
        pageCountMap.set("other", pageCountMap.get("other") + 1);
    }
    console.log(pageCountMap);
});

const port = 3000;

server.listen(port, () => {
    console.log(`Server launch on ${port} port`);
})
