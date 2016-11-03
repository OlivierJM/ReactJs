var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes.js')
var Raven = require('raven-js')

var sentryKey = '7c640567d546499fbad00ea1f5cc254'
var sentryApp = '111715'
var sentryURL = 'https://'+ sentryKey + 'a@sentry.io/' + sentryApp


Raven.config(sentryURL).install()

ReactDOM.render(routes, document.getElementById('app'));
