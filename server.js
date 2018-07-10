const prerender = require('prerender');
const memoryCache = require('cache');
const server = prerender({
    port: 5000,
    logRequests: true,
    pageLoadTimeout: 100 * 1000,
    waitAfterLastRequest: 250,
    chromeFlags: [
        '--headless',
        // '--no-sandbox',
        '--disable-gpu',
        '--remote-debugging-port=9222',
        // '--hide-scrollbars'
    ]
});
server.use(prerender.sendPrerenderHeader());
server.use(prerender.httpHeaders());
server.use(memoryCache);
server.start();


// const puppeteer = require('puppeteer'),
//       fs = require('fs');
//
// (async () => {
//
//     const host = 'http://lvh.me:3000';
//     const path = '/hofladen/getraenke-weine';
//     const path_save = 'hofladen_getraenke-weine';
//
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto(`${host}${path}`, {
//         timeout: 500000
//     });
//     // saveFile(await page.evaluate(() => new XMLSerializer().serializeToString(document)));
//     await page.pdf({path: `pdf/${path_save}.pdf`, format: 'A4'});
//     await page.screenshot({path: `images/${path_save}.png`});
//     await browser.close();
// })();
//
//
// function saveFile(txt) {
//     fs.writeFile("./images/test.html", txt, function (err) {
//         if (err) {
//             return console.log(err);
//         }
//
//         console.log("The file was saved!");
//     });
// }