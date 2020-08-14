if (process.env.NODE_ENV === 'production') {
  module.exports = require('./lib/tq-utils.min.js');
} else {
  module.exports = require('./lib/tq-utils.js');
}