const glob = require('glob');
const path = require('path');

const config = require('../../config.json');
const app = require('./app.js');
const error = require('./error.js');



glob.sync(`.${config.folders.routes}/**/*.js`).forEach((filename) => {
  const abspath = path.join("../..", filename);
  require(abspath);
});

app.use(function(req, res, next) {
  error.report(res, 404);
})

app.use(function(err, req, res, next) {
  console.error(err.stack);
  error.report(res, 500);
})

app.listen(config.port, () => {
  console.log(`[server] ⚡ Running at http://localhost:${config.port}`);
})