var debug = require('debug');
module.exports = debug

if (process.env.NO_TIMESTAMP) {
   debug.formatArgs = function() {
      arguments[0] = this.namespace + " " +
       arguments[0] +  " +" +
       debug.humanize(this.diff);
      return arguments;
   };
}

debug.default = function(namespace) {
   debug.enable(debug.load() || namespace);
}
