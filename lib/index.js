const consolere = require('./connector.node').default

if (!window.console) {
  window.console = {}
}

console.re = consolere
window.re = consolere
window.relog = consolere.log

module.exports = consolere
