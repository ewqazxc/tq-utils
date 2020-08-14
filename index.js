if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/tq-utils.min.js');
} else {
  module.exports = require('./dist/tq-utils.js');
}