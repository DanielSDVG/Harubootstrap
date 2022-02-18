const app = require('./app.js');



const statusMessages = {
  404: 'Page not found',
  500: 'Internal server error'
}

const report = function(res, status) {
  res.status(status);
  res.render("error", {
    htmlTitle: `Error ${status}`,
    status: status,
    message: statusMessages[status]
  })
}

exports.report = report;