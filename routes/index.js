var express = require('express');
var React = require('react');
var Page = require('../src/Page.jsx');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var props = { message: 'Hello!' }
  var content = React.renderToString(React.createElement(Page, props))
  res.render('index', {
    title: 'My App',
    content: content,
    props: props
  })
});

module.exports = router;
