
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/adamwatt/Desktop/JavaScriptProjects/Portfolio/Portfolio-Project/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/adamwatt/Desktop/JavaScriptProjects/Portfolio/Portfolio-Project/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/adamwatt/Desktop/JavaScriptProjects/Portfolio/Portfolio-Project/src/pages/index.js"))
}

