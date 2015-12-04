webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(3);

	__webpack_require__(4);

	var _d = __webpack_require__(13);

	var _d2 = _interopRequireDefault(_d);

	var _c = __webpack_require__(14);

	var _c2 = _interopRequireDefault(_c);

	var _shell_panel = __webpack_require__(15);

	var _shell_panel2 = _interopRequireDefault(_shell_panel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = (function (_React$Component) {
	  _inherits(App, _React$Component);

	  function App(props) {
	    _classCallCheck(this, App);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));
	  }

	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'container-fluid' },
	        _react2.default.createElement(
	          'nav',
	          { className: 'navbar navbar-inverse navbar-fixed-top' },
	          _react2.default.createElement(
	            'div',
	            { className: 'navbar-header' },
	            _react2.default.createElement(
	              'a',
	              { className: 'navbar-brand', href: '#' },
	              'Journerl'
	            )
	          )
	        ),
	        _react2.default.createElement(_shell_panel2.default, { ref: 'shellPanel' })
	      );
	    }
	  }]);

	  return App;
	})(_react2.default.Component);

	_react2.default.render(_react2.default.createElement(App, null), document.getElementById('main-container'));

/***/ },
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./bootstrap.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./bootstrap.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "/*!\n * Bootstrap v3.3.5 (http://getbootstrap.com)\n * Copyright 2011-2015 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\nhtml {\n  font-family: sans-serif;\n  -webkit-text-size-adjust: 100%;\n      -ms-text-size-adjust: 100%;\n}\nbody {\n  margin: 0;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline;\n}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n[hidden],\ntemplate {\n  display: none;\n}\na {\n  background-color: transparent;\n}\na:active,\na:hover {\n  outline: 0;\n}\nabbr[title] {\n  border-bottom: 1px dotted;\n}\nb,\nstrong {\n  font-weight: bold;\n}\ndfn {\n  font-style: italic;\n}\nh1 {\n  margin: .67em 0;\n  font-size: 2em;\n}\nmark {\n  color: #000;\n  background: #ff0;\n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\nsup {\n  top: -.5em;\n}\nsub {\n  bottom: -.25em;\n}\nimg {\n  border: 0;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\nfigure {\n  margin: 1em 40px;\n}\nhr {\n  height: 0;\n  -webkit-box-sizing: content-box;\n     -moz-box-sizing: content-box;\n          box-sizing: content-box;\n}\npre {\n  overflow: auto;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0;\n  font: inherit;\n  color: inherit;\n}\nbutton {\n  overflow: visible;\n}\nbutton,\nselect {\n  text-transform: none;\n}\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer;\n}\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\ninput {\n  line-height: normal;\n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 0;\n}\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\ninput[type=\"search\"] {\n  -webkit-box-sizing: content-box;\n     -moz-box-sizing: content-box;\n          box-sizing: content-box;\n  -webkit-appearance: textfield;\n}\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\nfieldset {\n  padding: .35em .625em .75em;\n  margin: 0 2px;\n  border: 1px solid #c0c0c0;\n}\nlegend {\n  padding: 0;\n  border: 0;\n}\ntextarea {\n  overflow: auto;\n}\noptgroup {\n  font-weight: bold;\n}\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\ntd,\nth {\n  padding: 0;\n}\n/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */\n@media print {\n  *,\n  *:before,\n  *:after {\n    color: #000 !important;\n    text-shadow: none !important;\n    background: transparent !important;\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n  }\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n  a[href]:after {\n    content: \" (\" attr(href) \")\";\n  }\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\";\n  }\n  a[href^=\"#\"]:after,\n  a[href^=\"javascript:\"]:after {\n    content: \"\";\n  }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n\n    page-break-inside: avoid;\n  }\n  thead {\n    display: table-header-group;\n  }\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n  img {\n    max-width: 100% !important;\n  }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n  .navbar {\n    display: none;\n  }\n  .btn > .caret,\n  .dropup > .btn > .caret {\n    border-top-color: #000 !important;\n  }\n  .label {\n    border: 1px solid #000;\n  }\n  .table {\n    border-collapse: collapse !important;\n  }\n  .table td,\n  .table th {\n    background-color: #fff !important;\n  }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important;\n  }\n}\n@font-face {\n  font-family: 'Glyphicons Halflings';\n\n  src: url(" + __webpack_require__(7) + ");\n  src: url(" + __webpack_require__(7) + "?#iefix) format('embedded-opentype'), url(" + __webpack_require__(8) + ") format('woff2'), url(" + __webpack_require__(9) + ") format('woff'), url(" + __webpack_require__(10) + ") format('truetype'), url(" + __webpack_require__(11) + "#glyphicons_halflingsregular) format('svg');\n}\n.glyphicon {\n  position: relative;\n  top: 1px;\n  display: inline-block;\n  font-family: 'Glyphicons Halflings';\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.glyphicon-asterisk:before {\n  content: \"*\";\n}\n.glyphicon-plus:before {\n  content: \"+\";\n}\n.glyphicon-euro:before,\n.glyphicon-eur:before {\n  content: \"\\20AC\";\n}\n.glyphicon-minus:before {\n  content: \"\\2212\";\n}\n.glyphicon-cloud:before {\n  content: \"\\2601\";\n}\n.glyphicon-envelope:before {\n  content: \"\\2709\";\n}\n.glyphicon-pencil:before {\n  content: \"\\270F\";\n}\n.glyphicon-glass:before {\n  content: \"\\E001\";\n}\n.glyphicon-music:before {\n  content: \"\\E002\";\n}\n.glyphicon-search:before {\n  content: \"\\E003\";\n}\n.glyphicon-heart:before {\n  content: \"\\E005\";\n}\n.glyphicon-star:before {\n  content: \"\\E006\";\n}\n.glyphicon-star-empty:before {\n  content: \"\\E007\";\n}\n.glyphicon-user:before {\n  content: \"\\E008\";\n}\n.glyphicon-film:before {\n  content: \"\\E009\";\n}\n.glyphicon-th-large:before {\n  content: \"\\E010\";\n}\n.glyphicon-th:before {\n  content: \"\\E011\";\n}\n.glyphicon-th-list:before {\n  content: \"\\E012\";\n}\n.glyphicon-ok:before {\n  content: \"\\E013\";\n}\n.glyphicon-remove:before {\n  content: \"\\E014\";\n}\n.glyphicon-zoom-in:before {\n  content: \"\\E015\";\n}\n.glyphicon-zoom-out:before {\n  content: \"\\E016\";\n}\n.glyphicon-off:before {\n  content: \"\\E017\";\n}\n.glyphicon-signal:before {\n  content: \"\\E018\";\n}\n.glyphicon-cog:before {\n  content: \"\\E019\";\n}\n.glyphicon-trash:before {\n  content: \"\\E020\";\n}\n.glyphicon-home:before {\n  content: \"\\E021\";\n}\n.glyphicon-file:before {\n  content: \"\\E022\";\n}\n.glyphicon-time:before {\n  content: \"\\E023\";\n}\n.glyphicon-road:before {\n  content: \"\\E024\";\n}\n.glyphicon-download-alt:before {\n  content: \"\\E025\";\n}\n.glyphicon-download:before {\n  content: \"\\E026\";\n}\n.glyphicon-upload:before {\n  content: \"\\E027\";\n}\n.glyphicon-inbox:before {\n  content: \"\\E028\";\n}\n.glyphicon-play-circle:before {\n  content: \"\\E029\";\n}\n.glyphicon-repeat:before {\n  content: \"\\E030\";\n}\n.glyphicon-refresh:before {\n  content: \"\\E031\";\n}\n.glyphicon-list-alt:before {\n  content: \"\\E032\";\n}\n.glyphicon-lock:before {\n  content: \"\\E033\";\n}\n.glyphicon-flag:before {\n  content: \"\\E034\";\n}\n.glyphicon-headphones:before {\n  content: \"\\E035\";\n}\n.glyphicon-volume-off:before {\n  content: \"\\E036\";\n}\n.glyphicon-volume-down:before {\n  content: \"\\E037\";\n}\n.glyphicon-volume-up:before {\n  content: \"\\E038\";\n}\n.glyphicon-qrcode:before {\n  content: \"\\E039\";\n}\n.glyphicon-barcode:before {\n  content: \"\\E040\";\n}\n.glyphicon-tag:before {\n  content: \"\\E041\";\n}\n.glyphicon-tags:before {\n  content: \"\\E042\";\n}\n.glyphicon-book:before {\n  content: \"\\E043\";\n}\n.glyphicon-bookmark:before {\n  content: \"\\E044\";\n}\n.glyphicon-print:before {\n  content: \"\\E045\";\n}\n.glyphicon-camera:before {\n  content: \"\\E046\";\n}\n.glyphicon-font:before {\n  content: \"\\E047\";\n}\n.glyphicon-bold:before {\n  content: \"\\E048\";\n}\n.glyphicon-italic:before {\n  content: \"\\E049\";\n}\n.glyphicon-text-height:before {\n  content: \"\\E050\";\n}\n.glyphicon-text-width:before {\n  content: \"\\E051\";\n}\n.glyphicon-align-left:before {\n  content: \"\\E052\";\n}\n.glyphicon-align-center:before {\n  content: \"\\E053\";\n}\n.glyphicon-align-right:before {\n  content: \"\\E054\";\n}\n.glyphicon-align-justify:before {\n  content: \"\\E055\";\n}\n.glyphicon-list:before {\n  content: \"\\E056\";\n}\n.glyphicon-indent-left:before {\n  content: \"\\E057\";\n}\n.glyphicon-indent-right:before {\n  content: \"\\E058\";\n}\n.glyphicon-facetime-video:before {\n  content: \"\\E059\";\n}\n.glyphicon-picture:before {\n  content: \"\\E060\";\n}\n.glyphicon-map-marker:before {\n  content: \"\\E062\";\n}\n.glyphicon-adjust:before {\n  content: \"\\E063\";\n}\n.glyphicon-tint:before {\n  content: \"\\E064\";\n}\n.glyphicon-edit:before {\n  content: \"\\E065\";\n}\n.glyphicon-share:before {\n  content: \"\\E066\";\n}\n.glyphicon-check:before {\n  content: \"\\E067\";\n}\n.glyphicon-move:before {\n  content: \"\\E068\";\n}\n.glyphicon-step-backward:before {\n  content: \"\\E069\";\n}\n.glyphicon-fast-backward:before {\n  content: \"\\E070\";\n}\n.glyphicon-backward:before {\n  content: \"\\E071\";\n}\n.glyphicon-play:before {\n  content: \"\\E072\";\n}\n.glyphicon-pause:before {\n  content: \"\\E073\";\n}\n.glyphicon-stop:before {\n  content: \"\\E074\";\n}\n.glyphicon-forward:before {\n  content: \"\\E075\";\n}\n.glyphicon-fast-forward:before {\n  content: \"\\E076\";\n}\n.glyphicon-step-forward:before {\n  content: \"\\E077\";\n}\n.glyphicon-eject:before {\n  content: \"\\E078\";\n}\n.glyphicon-chevron-left:before {\n  content: \"\\E079\";\n}\n.glyphicon-chevron-right:before {\n  content: \"\\E080\";\n}\n.glyphicon-plus-sign:before {\n  content: \"\\E081\";\n}\n.glyphicon-minus-sign:before {\n  content: \"\\E082\";\n}\n.glyphicon-remove-sign:before {\n  content: \"\\E083\";\n}\n.glyphicon-ok-sign:before {\n  content: \"\\E084\";\n}\n.glyphicon-question-sign:before {\n  content: \"\\E085\";\n}\n.glyphicon-info-sign:before {\n  content: \"\\E086\";\n}\n.glyphicon-screenshot:before {\n  content: \"\\E087\";\n}\n.glyphicon-remove-circle:before {\n  content: \"\\E088\";\n}\n.glyphicon-ok-circle:before {\n  content: \"\\E089\";\n}\n.glyphicon-ban-circle:before {\n  content: \"\\E090\";\n}\n.glyphicon-arrow-left:before {\n  content: \"\\E091\";\n}\n.glyphicon-arrow-right:before {\n  content: \"\\E092\";\n}\n.glyphicon-arrow-up:before {\n  content: \"\\E093\";\n}\n.glyphicon-arrow-down:before {\n  content: \"\\E094\";\n}\n.glyphicon-share-alt:before {\n  content: \"\\E095\";\n}\n.glyphicon-resize-full:before {\n  content: \"\\E096\";\n}\n.glyphicon-resize-small:before {\n  content: \"\\E097\";\n}\n.glyphicon-exclamation-sign:before {\n  content: \"\\E101\";\n}\n.glyphicon-gift:before {\n  content: \"\\E102\";\n}\n.glyphicon-leaf:before {\n  content: \"\\E103\";\n}\n.glyphicon-fire:before {\n  content: \"\\E104\";\n}\n.glyphicon-eye-open:before {\n  content: \"\\E105\";\n}\n.glyphicon-eye-close:before {\n  content: \"\\E106\";\n}\n.glyphicon-warning-sign:before {\n  content: \"\\E107\";\n}\n.glyphicon-plane:before {\n  content: \"\\E108\";\n}\n.glyphicon-calendar:before {\n  content: \"\\E109\";\n}\n.glyphicon-random:before {\n  content: \"\\E110\";\n}\n.glyphicon-comment:before {\n  content: \"\\E111\";\n}\n.glyphicon-magnet:before {\n  content: \"\\E112\";\n}\n.glyphicon-chevron-up:before {\n  content: \"\\E113\";\n}\n.glyphicon-chevron-down:before {\n  content: \"\\E114\";\n}\n.glyphicon-retweet:before {\n  content: \"\\E115\";\n}\n.glyphicon-shopping-cart:before {\n  content: \"\\E116\";\n}\n.glyphicon-folder-close:before {\n  content: \"\\E117\";\n}\n.glyphicon-folder-open:before {\n  content: \"\\E118\";\n}\n.glyphicon-resize-vertical:before {\n  content: \"\\E119\";\n}\n.glyphicon-resize-horizontal:before {\n  content: \"\\E120\";\n}\n.glyphicon-hdd:before {\n  content: \"\\E121\";\n}\n.glyphicon-bullhorn:before {\n  content: \"\\E122\";\n}\n.glyphicon-bell:before {\n  content: \"\\E123\";\n}\n.glyphicon-certificate:before {\n  content: \"\\E124\";\n}\n.glyphicon-thumbs-up:before {\n  content: \"\\E125\";\n}\n.glyphicon-thumbs-down:before {\n  content: \"\\E126\";\n}\n.glyphicon-hand-right:before {\n  content: \"\\E127\";\n}\n.glyphicon-hand-left:before {\n  content: \"\\E128\";\n}\n.glyphicon-hand-up:before {\n  content: \"\\E129\";\n}\n.glyphicon-hand-down:before {\n  content: \"\\E130\";\n}\n.glyphicon-circle-arrow-right:before {\n  content: \"\\E131\";\n}\n.glyphicon-circle-arrow-left:before {\n  content: \"\\E132\";\n}\n.glyphicon-circle-arrow-up:before {\n  content: \"\\E133\";\n}\n.glyphicon-circle-arrow-down:before {\n  content: \"\\E134\";\n}\n.glyphicon-globe:before {\n  content: \"\\E135\";\n}\n.glyphicon-wrench:before {\n  content: \"\\E136\";\n}\n.glyphicon-tasks:before {\n  content: \"\\E137\";\n}\n.glyphicon-filter:before {\n  content: \"\\E138\";\n}\n.glyphicon-briefcase:before {\n  content: \"\\E139\";\n}\n.glyphicon-fullscreen:before {\n  content: \"\\E140\";\n}\n.glyphicon-dashboard:before {\n  content: \"\\E141\";\n}\n.glyphicon-paperclip:before {\n  content: \"\\E142\";\n}\n.glyphicon-heart-empty:before {\n  content: \"\\E143\";\n}\n.glyphicon-link:before {\n  content: \"\\E144\";\n}\n.glyphicon-phone:before {\n  content: \"\\E145\";\n}\n.glyphicon-pushpin:before {\n  content: \"\\E146\";\n}\n.glyphicon-usd:before {\n  content: \"\\E148\";\n}\n.glyphicon-gbp:before {\n  content: \"\\E149\";\n}\n.glyphicon-sort:before {\n  content: \"\\E150\";\n}\n.glyphicon-sort-by-alphabet:before {\n  content: \"\\E151\";\n}\n.glyphicon-sort-by-alphabet-alt:before {\n  content: \"\\E152\";\n}\n.glyphicon-sort-by-order:before {\n  content: \"\\E153\";\n}\n.glyphicon-sort-by-order-alt:before {\n  content: \"\\E154\";\n}\n.glyphicon-sort-by-attributes:before {\n  content: \"\\E155\";\n}\n.glyphicon-sort-by-attributes-alt:before {\n  content: \"\\E156\";\n}\n.glyphicon-unchecked:before {\n  content: \"\\E157\";\n}\n.glyphicon-expand:before {\n  content: \"\\E158\";\n}\n.glyphicon-collapse-down:before {\n  content: \"\\E159\";\n}\n.glyphicon-collapse-up:before {\n  content: \"\\E160\";\n}\n.glyphicon-log-in:before {\n  content: \"\\E161\";\n}\n.glyphicon-flash:before {\n  content: \"\\E162\";\n}\n.glyphicon-log-out:before {\n  content: \"\\E163\";\n}\n.glyphicon-new-window:before {\n  content: \"\\E164\";\n}\n.glyphicon-record:before {\n  content: \"\\E165\";\n}\n.glyphicon-save:before {\n  content: \"\\E166\";\n}\n.glyphicon-open:before {\n  content: \"\\E167\";\n}\n.glyphicon-saved:before {\n  content: \"\\E168\";\n}\n.glyphicon-import:before {\n  content: \"\\E169\";\n}\n.glyphicon-export:before {\n  content: \"\\E170\";\n}\n.glyphicon-send:before {\n  content: \"\\E171\";\n}\n.glyphicon-floppy-disk:before {\n  content: \"\\E172\";\n}\n.glyphicon-floppy-saved:before {\n  content: \"\\E173\";\n}\n.glyphicon-floppy-remove:before {\n  content: \"\\E174\";\n}\n.glyphicon-floppy-save:before {\n  content: \"\\E175\";\n}\n.glyphicon-floppy-open:before {\n  content: \"\\E176\";\n}\n.glyphicon-credit-card:before {\n  content: \"\\E177\";\n}\n.glyphicon-transfer:before {\n  content: \"\\E178\";\n}\n.glyphicon-cutlery:before {\n  content: \"\\E179\";\n}\n.glyphicon-header:before {\n  content: \"\\E180\";\n}\n.glyphicon-compressed:before {\n  content: \"\\E181\";\n}\n.glyphicon-earphone:before {\n  content: \"\\E182\";\n}\n.glyphicon-phone-alt:before {\n  content: \"\\E183\";\n}\n.glyphicon-tower:before {\n  content: \"\\E184\";\n}\n.glyphicon-stats:before {\n  content: \"\\E185\";\n}\n.glyphicon-sd-video:before {\n  content: \"\\E186\";\n}\n.glyphicon-hd-video:before {\n  content: \"\\E187\";\n}\n.glyphicon-subtitles:before {\n  content: \"\\E188\";\n}\n.glyphicon-sound-stereo:before {\n  content: \"\\E189\";\n}\n.glyphicon-sound-dolby:before {\n  content: \"\\E190\";\n}\n.glyphicon-sound-5-1:before {\n  content: \"\\E191\";\n}\n.glyphicon-sound-6-1:before {\n  content: \"\\E192\";\n}\n.glyphicon-sound-7-1:before {\n  content: \"\\E193\";\n}\n.glyphicon-copyright-mark:before {\n  content: \"\\E194\";\n}\n.glyphicon-registration-mark:before {\n  content: \"\\E195\";\n}\n.glyphicon-cloud-download:before {\n  content: \"\\E197\";\n}\n.glyphicon-cloud-upload:before {\n  content: \"\\E198\";\n}\n.glyphicon-tree-conifer:before {\n  content: \"\\E199\";\n}\n.glyphicon-tree-deciduous:before {\n  content: \"\\E200\";\n}\n.glyphicon-cd:before {\n  content: \"\\E201\";\n}\n.glyphicon-save-file:before {\n  content: \"\\E202\";\n}\n.glyphicon-open-file:before {\n  content: \"\\E203\";\n}\n.glyphicon-level-up:before {\n  content: \"\\E204\";\n}\n.glyphicon-copy:before {\n  content: \"\\E205\";\n}\n.glyphicon-paste:before {\n  content: \"\\E206\";\n}\n.glyphicon-alert:before {\n  content: \"\\E209\";\n}\n.glyphicon-equalizer:before {\n  content: \"\\E210\";\n}\n.glyphicon-king:before {\n  content: \"\\E211\";\n}\n.glyphicon-queen:before {\n  content: \"\\E212\";\n}\n.glyphicon-pawn:before {\n  content: \"\\E213\";\n}\n.glyphicon-bishop:before {\n  content: \"\\E214\";\n}\n.glyphicon-knight:before {\n  content: \"\\E215\";\n}\n.glyphicon-baby-formula:before {\n  content: \"\\E216\";\n}\n.glyphicon-tent:before {\n  content: \"\\26FA\";\n}\n.glyphicon-blackboard:before {\n  content: \"\\E218\";\n}\n.glyphicon-bed:before {\n  content: \"\\E219\";\n}\n.glyphicon-apple:before {\n  content: \"\\F8FF\";\n}\n.glyphicon-erase:before {\n  content: \"\\E221\";\n}\n.glyphicon-hourglass:before {\n  content: \"\\231B\";\n}\n.glyphicon-lamp:before {\n  content: \"\\E223\";\n}\n.glyphicon-duplicate:before {\n  content: \"\\E224\";\n}\n.glyphicon-piggy-bank:before {\n  content: \"\\E225\";\n}\n.glyphicon-scissors:before {\n  content: \"\\E226\";\n}\n.glyphicon-bitcoin:before {\n  content: \"\\E227\";\n}\n.glyphicon-btc:before {\n  content: \"\\E227\";\n}\n.glyphicon-xbt:before {\n  content: \"\\E227\";\n}\n.glyphicon-yen:before {\n  content: \"\\A5\";\n}\n.glyphicon-jpy:before {\n  content: \"\\A5\";\n}\n.glyphicon-ruble:before {\n  content: \"\\20BD\";\n}\n.glyphicon-rub:before {\n  content: \"\\20BD\";\n}\n.glyphicon-scale:before {\n  content: \"\\E230\";\n}\n.glyphicon-ice-lolly:before {\n  content: \"\\E231\";\n}\n.glyphicon-ice-lolly-tasted:before {\n  content: \"\\E232\";\n}\n.glyphicon-education:before {\n  content: \"\\E233\";\n}\n.glyphicon-option-horizontal:before {\n  content: \"\\E234\";\n}\n.glyphicon-option-vertical:before {\n  content: \"\\E235\";\n}\n.glyphicon-menu-hamburger:before {\n  content: \"\\E236\";\n}\n.glyphicon-modal-window:before {\n  content: \"\\E237\";\n}\n.glyphicon-oil:before {\n  content: \"\\E238\";\n}\n.glyphicon-grain:before {\n  content: \"\\E239\";\n}\n.glyphicon-sunglasses:before {\n  content: \"\\E240\";\n}\n.glyphicon-text-size:before {\n  content: \"\\E241\";\n}\n.glyphicon-text-color:before {\n  content: \"\\E242\";\n}\n.glyphicon-text-background:before {\n  content: \"\\E243\";\n}\n.glyphicon-object-align-top:before {\n  content: \"\\E244\";\n}\n.glyphicon-object-align-bottom:before {\n  content: \"\\E245\";\n}\n.glyphicon-object-align-horizontal:before {\n  content: \"\\E246\";\n}\n.glyphicon-object-align-left:before {\n  content: \"\\E247\";\n}\n.glyphicon-object-align-vertical:before {\n  content: \"\\E248\";\n}\n.glyphicon-object-align-right:before {\n  content: \"\\E249\";\n}\n.glyphicon-triangle-right:before {\n  content: \"\\E250\";\n}\n.glyphicon-triangle-left:before {\n  content: \"\\E251\";\n}\n.glyphicon-triangle-bottom:before {\n  content: \"\\E252\";\n}\n.glyphicon-triangle-top:before {\n  content: \"\\E253\";\n}\n.glyphicon-console:before {\n  content: \"\\E254\";\n}\n.glyphicon-superscript:before {\n  content: \"\\E255\";\n}\n.glyphicon-subscript:before {\n  content: \"\\E256\";\n}\n.glyphicon-menu-left:before {\n  content: \"\\E257\";\n}\n.glyphicon-menu-right:before {\n  content: \"\\E258\";\n}\n.glyphicon-menu-down:before {\n  content: \"\\E259\";\n}\n.glyphicon-menu-up:before {\n  content: \"\\E260\";\n}\n* {\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n}\n*:before,\n*:after {\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n}\nhtml {\n  font-size: 10px;\n\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\nbody {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #333;\n  background-color: #fff;\n}\ninput,\nbutton,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\na {\n  color: #337ab7;\n  text-decoration: none;\n}\na:hover,\na:focus {\n  color: #23527c;\n  text-decoration: underline;\n}\na:focus {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\nfigure {\n  margin: 0;\n}\nimg {\n  vertical-align: middle;\n}\n.img-responsive,\n.thumbnail > img,\n.thumbnail a > img,\n.carousel-inner > .item > img,\n.carousel-inner > .item > a > img {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n.img-rounded {\n  border-radius: 6px;\n}\n.img-thumbnail {\n  display: inline-block;\n  max-width: 100%;\n  height: auto;\n  padding: 4px;\n  line-height: 1.42857143;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  -webkit-transition: all .2s ease-in-out;\n       -o-transition: all .2s ease-in-out;\n          transition: all .2s ease-in-out;\n}\n.img-circle {\n  border-radius: 50%;\n}\nhr {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border: 0;\n  border-top: 1px solid #eee;\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.sr-only-focusable:active,\n.sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\n[role=\"button\"] {\n  cursor: pointer;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6 {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit;\n}\nh1 small,\nh2 small,\nh3 small,\nh4 small,\nh5 small,\nh6 small,\n.h1 small,\n.h2 small,\n.h3 small,\n.h4 small,\n.h5 small,\n.h6 small,\nh1 .small,\nh2 .small,\nh3 .small,\nh4 .small,\nh5 .small,\nh6 .small,\n.h1 .small,\n.h2 .small,\n.h3 .small,\n.h4 .small,\n.h5 .small,\n.h6 .small {\n  font-weight: normal;\n  line-height: 1;\n  color: #777;\n}\nh1,\n.h1,\nh2,\n.h2,\nh3,\n.h3 {\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\nh1 small,\n.h1 small,\nh2 small,\n.h2 small,\nh3 small,\n.h3 small,\nh1 .small,\n.h1 .small,\nh2 .small,\n.h2 .small,\nh3 .small,\n.h3 .small {\n  font-size: 65%;\n}\nh4,\n.h4,\nh5,\n.h5,\nh6,\n.h6 {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\nh4 small,\n.h4 small,\nh5 small,\n.h5 small,\nh6 small,\n.h6 small,\nh4 .small,\n.h4 .small,\nh5 .small,\n.h5 .small,\nh6 .small,\n.h6 .small {\n  font-size: 75%;\n}\nh1,\n.h1 {\n  font-size: 36px;\n}\nh2,\n.h2 {\n  font-size: 30px;\n}\nh3,\n.h3 {\n  font-size: 24px;\n}\nh4,\n.h4 {\n  font-size: 18px;\n}\nh5,\n.h5 {\n  font-size: 14px;\n}\nh6,\n.h6 {\n  font-size: 12px;\n}\np {\n  margin: 0 0 10px;\n}\n.lead {\n  margin-bottom: 20px;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 1.4;\n}\n@media (min-width: 768px) {\n  .lead {\n    font-size: 21px;\n  }\n}\nsmall,\n.small {\n  font-size: 85%;\n}\nmark,\n.mark {\n  padding: .2em;\n  background-color: #fcf8e3;\n}\n.text-left {\n  text-align: left;\n}\n.text-right {\n  text-align: right;\n}\n.text-center {\n  text-align: center;\n}\n.text-justify {\n  text-align: justify;\n}\n.text-nowrap {\n  white-space: nowrap;\n}\n.text-lowercase {\n  text-transform: lowercase;\n}\n.text-uppercase {\n  text-transform: uppercase;\n}\n.text-capitalize {\n  text-transform: capitalize;\n}\n.text-muted {\n  color: #777;\n}\n.text-primary {\n  color: #337ab7;\n}\na.text-primary:hover,\na.text-primary:focus {\n  color: #286090;\n}\n.text-success {\n  color: #3c763d;\n}\na.text-success:hover,\na.text-success:focus {\n  color: #2b542c;\n}\n.text-info {\n  color: #31708f;\n}\na.text-info:hover,\na.text-info:focus {\n  color: #245269;\n}\n.text-warning {\n  color: #8a6d3b;\n}\na.text-warning:hover,\na.text-warning:focus {\n  color: #66512c;\n}\n.text-danger {\n  color: #a94442;\n}\na.text-danger:hover,\na.text-danger:focus {\n  color: #843534;\n}\n.bg-primary {\n  color: #fff;\n  background-color: #337ab7;\n}\na.bg-primary:hover,\na.bg-primary:focus {\n  background-color: #286090;\n}\n.bg-success {\n  background-color: #dff0d8;\n}\na.bg-success:hover,\na.bg-success:focus {\n  background-color: #c1e2b3;\n}\n.bg-info {\n  background-color: #d9edf7;\n}\na.bg-info:hover,\na.bg-info:focus {\n  background-color: #afd9ee;\n}\n.bg-warning {\n  background-color: #fcf8e3;\n}\na.bg-warning:hover,\na.bg-warning:focus {\n  background-color: #f7ecb5;\n}\n.bg-danger {\n  background-color: #f2dede;\n}\na.bg-danger:hover,\na.bg-danger:focus {\n  background-color: #e4b9b9;\n}\n.page-header {\n  padding-bottom: 9px;\n  margin: 40px 0 20px;\n  border-bottom: 1px solid #eee;\n}\nul,\nol {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\nul ul,\nol ul,\nul ol,\nol ol {\n  margin-bottom: 0;\n}\n.list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n.list-inline {\n  padding-left: 0;\n  margin-left: -5px;\n  list-style: none;\n}\n.list-inline > li {\n  display: inline-block;\n  padding-right: 5px;\n  padding-left: 5px;\n}\ndl {\n  margin-top: 0;\n  margin-bottom: 20px;\n}\ndt,\ndd {\n  line-height: 1.42857143;\n}\ndt {\n  font-weight: bold;\n}\ndd {\n  margin-left: 0;\n}\n@media (min-width: 768px) {\n  .dl-horizontal dt {\n    float: left;\n    width: 160px;\n    overflow: hidden;\n    clear: left;\n    text-align: right;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .dl-horizontal dd {\n    margin-left: 180px;\n  }\n}\nabbr[title],\nabbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted #777;\n}\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase;\n}\nblockquote {\n  padding: 10px 20px;\n  margin: 0 0 20px;\n  font-size: 17.5px;\n  border-left: 5px solid #eee;\n}\nblockquote p:last-child,\nblockquote ul:last-child,\nblockquote ol:last-child {\n  margin-bottom: 0;\n}\nblockquote footer,\nblockquote small,\nblockquote .small {\n  display: block;\n  font-size: 80%;\n  line-height: 1.42857143;\n  color: #777;\n}\nblockquote footer:before,\nblockquote small:before,\nblockquote .small:before {\n  content: '\\2014   \\A0';\n}\n.blockquote-reverse,\nblockquote.pull-right {\n  padding-right: 15px;\n  padding-left: 0;\n  text-align: right;\n  border-right: 5px solid #eee;\n  border-left: 0;\n}\n.blockquote-reverse footer:before,\nblockquote.pull-right footer:before,\n.blockquote-reverse small:before,\nblockquote.pull-right small:before,\n.blockquote-reverse .small:before,\nblockquote.pull-right .small:before {\n  content: '';\n}\n.blockquote-reverse footer:after,\nblockquote.pull-right footer:after,\n.blockquote-reverse small:after,\nblockquote.pull-right small:after,\n.blockquote-reverse .small:after,\nblockquote.pull-right .small:after {\n  content: '\\A0   \\2014';\n}\naddress {\n  margin-bottom: 20px;\n  font-style: normal;\n  line-height: 1.42857143;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace;\n}\ncode {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #c7254e;\n  background-color: #f9f2f4;\n  border-radius: 4px;\n}\nkbd {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #fff;\n  background-color: #333;\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .25);\n          box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .25);\n}\nkbd kbd {\n  padding: 0;\n  font-size: 100%;\n  font-weight: bold;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\npre {\n  display: block;\n  padding: 9.5px;\n  margin: 0 0 10px;\n  font-size: 13px;\n  line-height: 1.42857143;\n  color: #333;\n  word-break: break-all;\n  word-wrap: break-word;\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\npre code {\n  padding: 0;\n  font-size: inherit;\n  color: inherit;\n  white-space: pre-wrap;\n  background-color: transparent;\n  border-radius: 0;\n}\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll;\n}\n.container {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (min-width: 768px) {\n  .container {\n    width: 750px;\n  }\n}\n@media (min-width: 992px) {\n  .container {\n    width: 970px;\n  }\n}\n@media (min-width: 1200px) {\n  .container {\n    width: 1170px;\n  }\n}\n.container-fluid {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n.row {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left;\n}\n.col-xs-12 {\n  width: 100%;\n}\n.col-xs-11 {\n  width: 91.66666667%;\n}\n.col-xs-10 {\n  width: 83.33333333%;\n}\n.col-xs-9 {\n  width: 75%;\n}\n.col-xs-8 {\n  width: 66.66666667%;\n}\n.col-xs-7 {\n  width: 58.33333333%;\n}\n.col-xs-6 {\n  width: 50%;\n}\n.col-xs-5 {\n  width: 41.66666667%;\n}\n.col-xs-4 {\n  width: 33.33333333%;\n}\n.col-xs-3 {\n  width: 25%;\n}\n.col-xs-2 {\n  width: 16.66666667%;\n}\n.col-xs-1 {\n  width: 8.33333333%;\n}\n.col-xs-pull-12 {\n  right: 100%;\n}\n.col-xs-pull-11 {\n  right: 91.66666667%;\n}\n.col-xs-pull-10 {\n  right: 83.33333333%;\n}\n.col-xs-pull-9 {\n  right: 75%;\n}\n.col-xs-pull-8 {\n  right: 66.66666667%;\n}\n.col-xs-pull-7 {\n  right: 58.33333333%;\n}\n.col-xs-pull-6 {\n  right: 50%;\n}\n.col-xs-pull-5 {\n  right: 41.66666667%;\n}\n.col-xs-pull-4 {\n  right: 33.33333333%;\n}\n.col-xs-pull-3 {\n  right: 25%;\n}\n.col-xs-pull-2 {\n  right: 16.66666667%;\n}\n.col-xs-pull-1 {\n  right: 8.33333333%;\n}\n.col-xs-pull-0 {\n  right: auto;\n}\n.col-xs-push-12 {\n  left: 100%;\n}\n.col-xs-push-11 {\n  left: 91.66666667%;\n}\n.col-xs-push-10 {\n  left: 83.33333333%;\n}\n.col-xs-push-9 {\n  left: 75%;\n}\n.col-xs-push-8 {\n  left: 66.66666667%;\n}\n.col-xs-push-7 {\n  left: 58.33333333%;\n}\n.col-xs-push-6 {\n  left: 50%;\n}\n.col-xs-push-5 {\n  left: 41.66666667%;\n}\n.col-xs-push-4 {\n  left: 33.33333333%;\n}\n.col-xs-push-3 {\n  left: 25%;\n}\n.col-xs-push-2 {\n  left: 16.66666667%;\n}\n.col-xs-push-1 {\n  left: 8.33333333%;\n}\n.col-xs-push-0 {\n  left: auto;\n}\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n.col-xs-offset-11 {\n  margin-left: 91.66666667%;\n}\n.col-xs-offset-10 {\n  margin-left: 83.33333333%;\n}\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n.col-xs-offset-8 {\n  margin-left: 66.66666667%;\n}\n.col-xs-offset-7 {\n  margin-left: 58.33333333%;\n}\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n.col-xs-offset-5 {\n  margin-left: 41.66666667%;\n}\n.col-xs-offset-4 {\n  margin-left: 33.33333333%;\n}\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n.col-xs-offset-2 {\n  margin-left: 16.66666667%;\n}\n.col-xs-offset-1 {\n  margin-left: 8.33333333%;\n}\n.col-xs-offset-0 {\n  margin-left: 0;\n}\n@media (min-width: 768px) {\n  .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\n    float: left;\n  }\n  .col-sm-12 {\n    width: 100%;\n  }\n  .col-sm-11 {\n    width: 91.66666667%;\n  }\n  .col-sm-10 {\n    width: 83.33333333%;\n  }\n  .col-sm-9 {\n    width: 75%;\n  }\n  .col-sm-8 {\n    width: 66.66666667%;\n  }\n  .col-sm-7 {\n    width: 58.33333333%;\n  }\n  .col-sm-6 {\n    width: 50%;\n  }\n  .col-sm-5 {\n    width: 41.66666667%;\n  }\n  .col-sm-4 {\n    width: 33.33333333%;\n  }\n  .col-sm-3 {\n    width: 25%;\n  }\n  .col-sm-2 {\n    width: 16.66666667%;\n  }\n  .col-sm-1 {\n    width: 8.33333333%;\n  }\n  .col-sm-pull-12 {\n    right: 100%;\n  }\n  .col-sm-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-sm-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-sm-pull-9 {\n    right: 75%;\n  }\n  .col-sm-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-sm-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-sm-pull-6 {\n    right: 50%;\n  }\n  .col-sm-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-sm-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-sm-pull-3 {\n    right: 25%;\n  }\n  .col-sm-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-sm-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-sm-pull-0 {\n    right: auto;\n  }\n  .col-sm-push-12 {\n    left: 100%;\n  }\n  .col-sm-push-11 {\n    left: 91.66666667%;\n  }\n  .col-sm-push-10 {\n    left: 83.33333333%;\n  }\n  .col-sm-push-9 {\n    left: 75%;\n  }\n  .col-sm-push-8 {\n    left: 66.66666667%;\n  }\n  .col-sm-push-7 {\n    left: 58.33333333%;\n  }\n  .col-sm-push-6 {\n    left: 50%;\n  }\n  .col-sm-push-5 {\n    left: 41.66666667%;\n  }\n  .col-sm-push-4 {\n    left: 33.33333333%;\n  }\n  .col-sm-push-3 {\n    left: 25%;\n  }\n  .col-sm-push-2 {\n    left: 16.66666667%;\n  }\n  .col-sm-push-1 {\n    left: 8.33333333%;\n  }\n  .col-sm-push-0 {\n    left: auto;\n  }\n  .col-sm-offset-12 {\n    margin-left: 100%;\n  }\n  .col-sm-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-sm-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-sm-offset-9 {\n    margin-left: 75%;\n  }\n  .col-sm-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-sm-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-sm-offset-6 {\n    margin-left: 50%;\n  }\n  .col-sm-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-sm-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-sm-offset-3 {\n    margin-left: 25%;\n  }\n  .col-sm-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-sm-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-sm-offset-0 {\n    margin-left: 0;\n  }\n}\n@media (min-width: 992px) {\n  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {\n    float: left;\n  }\n  .col-md-12 {\n    width: 100%;\n  }\n  .col-md-11 {\n    width: 91.66666667%;\n  }\n  .col-md-10 {\n    width: 83.33333333%;\n  }\n  .col-md-9 {\n    width: 75%;\n  }\n  .col-md-8 {\n    width: 66.66666667%;\n  }\n  .col-md-7 {\n    width: 58.33333333%;\n  }\n  .col-md-6 {\n    width: 50%;\n  }\n  .col-md-5 {\n    width: 41.66666667%;\n  }\n  .col-md-4 {\n    width: 33.33333333%;\n  }\n  .col-md-3 {\n    width: 25%;\n  }\n  .col-md-2 {\n    width: 16.66666667%;\n  }\n  .col-md-1 {\n    width: 8.33333333%;\n  }\n  .col-md-pull-12 {\n    right: 100%;\n  }\n  .col-md-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-md-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-md-pull-9 {\n    right: 75%;\n  }\n  .col-md-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-md-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-md-pull-6 {\n    right: 50%;\n  }\n  .col-md-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-md-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-md-pull-3 {\n    right: 25%;\n  }\n  .col-md-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-md-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-md-pull-0 {\n    right: auto;\n  }\n  .col-md-push-12 {\n    left: 100%;\n  }\n  .col-md-push-11 {\n    left: 91.66666667%;\n  }\n  .col-md-push-10 {\n    left: 83.33333333%;\n  }\n  .col-md-push-9 {\n    left: 75%;\n  }\n  .col-md-push-8 {\n    left: 66.66666667%;\n  }\n  .col-md-push-7 {\n    left: 58.33333333%;\n  }\n  .col-md-push-6 {\n    left: 50%;\n  }\n  .col-md-push-5 {\n    left: 41.66666667%;\n  }\n  .col-md-push-4 {\n    left: 33.33333333%;\n  }\n  .col-md-push-3 {\n    left: 25%;\n  }\n  .col-md-push-2 {\n    left: 16.66666667%;\n  }\n  .col-md-push-1 {\n    left: 8.33333333%;\n  }\n  .col-md-push-0 {\n    left: auto;\n  }\n  .col-md-offset-12 {\n    margin-left: 100%;\n  }\n  .col-md-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-md-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-md-offset-9 {\n    margin-left: 75%;\n  }\n  .col-md-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-md-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-md-offset-6 {\n    margin-left: 50%;\n  }\n  .col-md-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-md-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-md-offset-3 {\n    margin-left: 25%;\n  }\n  .col-md-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-md-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-md-offset-0 {\n    margin-left: 0;\n  }\n}\n@media (min-width: 1200px) {\n  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {\n    float: left;\n  }\n  .col-lg-12 {\n    width: 100%;\n  }\n  .col-lg-11 {\n    width: 91.66666667%;\n  }\n  .col-lg-10 {\n    width: 83.33333333%;\n  }\n  .col-lg-9 {\n    width: 75%;\n  }\n  .col-lg-8 {\n    width: 66.66666667%;\n  }\n  .col-lg-7 {\n    width: 58.33333333%;\n  }\n  .col-lg-6 {\n    width: 50%;\n  }\n  .col-lg-5 {\n    width: 41.66666667%;\n  }\n  .col-lg-4 {\n    width: 33.33333333%;\n  }\n  .col-lg-3 {\n    width: 25%;\n  }\n  .col-lg-2 {\n    width: 16.66666667%;\n  }\n  .col-lg-1 {\n    width: 8.33333333%;\n  }\n  .col-lg-pull-12 {\n    right: 100%;\n  }\n  .col-lg-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-lg-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-lg-pull-9 {\n    right: 75%;\n  }\n  .col-lg-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-lg-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-lg-pull-6 {\n    right: 50%;\n  }\n  .col-lg-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-lg-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-lg-pull-3 {\n    right: 25%;\n  }\n  .col-lg-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-lg-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-lg-pull-0 {\n    right: auto;\n  }\n  .col-lg-push-12 {\n    left: 100%;\n  }\n  .col-lg-push-11 {\n    left: 91.66666667%;\n  }\n  .col-lg-push-10 {\n    left: 83.33333333%;\n  }\n  .col-lg-push-9 {\n    left: 75%;\n  }\n  .col-lg-push-8 {\n    left: 66.66666667%;\n  }\n  .col-lg-push-7 {\n    left: 58.33333333%;\n  }\n  .col-lg-push-6 {\n    left: 50%;\n  }\n  .col-lg-push-5 {\n    left: 41.66666667%;\n  }\n  .col-lg-push-4 {\n    left: 33.33333333%;\n  }\n  .col-lg-push-3 {\n    left: 25%;\n  }\n  .col-lg-push-2 {\n    left: 16.66666667%;\n  }\n  .col-lg-push-1 {\n    left: 8.33333333%;\n  }\n  .col-lg-push-0 {\n    left: auto;\n  }\n  .col-lg-offset-12 {\n    margin-left: 100%;\n  }\n  .col-lg-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-lg-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-lg-offset-9 {\n    margin-left: 75%;\n  }\n  .col-lg-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-lg-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-lg-offset-6 {\n    margin-left: 50%;\n  }\n  .col-lg-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-lg-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-lg-offset-3 {\n    margin-left: 25%;\n  }\n  .col-lg-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-lg-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-lg-offset-0 {\n    margin-left: 0;\n  }\n}\ntable {\n  background-color: transparent;\n}\ncaption {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  color: #777;\n  text-align: left;\n}\nth {\n  text-align: left;\n}\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px;\n}\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n  padding: 8px;\n  line-height: 1.42857143;\n  vertical-align: top;\n  border-top: 1px solid #ddd;\n}\n.table > thead > tr > th {\n  vertical-align: bottom;\n  border-bottom: 2px solid #ddd;\n}\n.table > caption + thead > tr:first-child > th,\n.table > colgroup + thead > tr:first-child > th,\n.table > thead:first-child > tr:first-child > th,\n.table > caption + thead > tr:first-child > td,\n.table > colgroup + thead > tr:first-child > td,\n.table > thead:first-child > tr:first-child > td {\n  border-top: 0;\n}\n.table > tbody + tbody {\n  border-top: 2px solid #ddd;\n}\n.table .table {\n  background-color: #fff;\n}\n.table-condensed > thead > tr > th,\n.table-condensed > tbody > tr > th,\n.table-condensed > tfoot > tr > th,\n.table-condensed > thead > tr > td,\n.table-condensed > tbody > tr > td,\n.table-condensed > tfoot > tr > td {\n  padding: 5px;\n}\n.table-bordered {\n  border: 1px solid #ddd;\n}\n.table-bordered > thead > tr > th,\n.table-bordered > tbody > tr > th,\n.table-bordered > tfoot > tr > th,\n.table-bordered > thead > tr > td,\n.table-bordered > tbody > tr > td,\n.table-bordered > tfoot > tr > td {\n  border: 1px solid #ddd;\n}\n.table-bordered > thead > tr > th,\n.table-bordered > thead > tr > td {\n  border-bottom-width: 2px;\n}\n.table-striped > tbody > tr:nth-of-type(odd) {\n  background-color: #f9f9f9;\n}\n.table-hover > tbody > tr:hover {\n  background-color: #f5f5f5;\n}\ntable col[class*=\"col-\"] {\n  position: static;\n  display: table-column;\n  float: none;\n}\ntable td[class*=\"col-\"],\ntable th[class*=\"col-\"] {\n  position: static;\n  display: table-cell;\n  float: none;\n}\n.table > thead > tr > td.active,\n.table > tbody > tr > td.active,\n.table > tfoot > tr > td.active,\n.table > thead > tr > th.active,\n.table > tbody > tr > th.active,\n.table > tfoot > tr > th.active,\n.table > thead > tr.active > td,\n.table > tbody > tr.active > td,\n.table > tfoot > tr.active > td,\n.table > thead > tr.active > th,\n.table > tbody > tr.active > th,\n.table > tfoot > tr.active > th {\n  background-color: #f5f5f5;\n}\n.table-hover > tbody > tr > td.active:hover,\n.table-hover > tbody > tr > th.active:hover,\n.table-hover > tbody > tr.active:hover > td,\n.table-hover > tbody > tr:hover > .active,\n.table-hover > tbody > tr.active:hover > th {\n  background-color: #e8e8e8;\n}\n.table > thead > tr > td.success,\n.table > tbody > tr > td.success,\n.table > tfoot > tr > td.success,\n.table > thead > tr > th.success,\n.table > tbody > tr > th.success,\n.table > tfoot > tr > th.success,\n.table > thead > tr.success > td,\n.table > tbody > tr.success > td,\n.table > tfoot > tr.success > td,\n.table > thead > tr.success > th,\n.table > tbody > tr.success > th,\n.table > tfoot > tr.success > th {\n  background-color: #dff0d8;\n}\n.table-hover > tbody > tr > td.success:hover,\n.table-hover > tbody > tr > th.success:hover,\n.table-hover > tbody > tr.success:hover > td,\n.table-hover > tbody > tr:hover > .success,\n.table-hover > tbody > tr.success:hover > th {\n  background-color: #d0e9c6;\n}\n.table > thead > tr > td.info,\n.table > tbody > tr > td.info,\n.table > tfoot > tr > td.info,\n.table > thead > tr > th.info,\n.table > tbody > tr > th.info,\n.table > tfoot > tr > th.info,\n.table > thead > tr.info > td,\n.table > tbody > tr.info > td,\n.table > tfoot > tr.info > td,\n.table > thead > tr.info > th,\n.table > tbody > tr.info > th,\n.table > tfoot > tr.info > th {\n  background-color: #d9edf7;\n}\n.table-hover > tbody > tr > td.info:hover,\n.table-hover > tbody > tr > th.info:hover,\n.table-hover > tbody > tr.info:hover > td,\n.table-hover > tbody > tr:hover > .info,\n.table-hover > tbody > tr.info:hover > th {\n  background-color: #c4e3f3;\n}\n.table > thead > tr > td.warning,\n.table > tbody > tr > td.warning,\n.table > tfoot > tr > td.warning,\n.table > thead > tr > th.warning,\n.table > tbody > tr > th.warning,\n.table > tfoot > tr > th.warning,\n.table > thead > tr.warning > td,\n.table > tbody > tr.warning > td,\n.table > tfoot > tr.warning > td,\n.table > thead > tr.warning > th,\n.table > tbody > tr.warning > th,\n.table > tfoot > tr.warning > th {\n  background-color: #fcf8e3;\n}\n.table-hover > tbody > tr > td.warning:hover,\n.table-hover > tbody > tr > th.warning:hover,\n.table-hover > tbody > tr.warning:hover > td,\n.table-hover > tbody > tr:hover > .warning,\n.table-hover > tbody > tr.warning:hover > th {\n  background-color: #faf2cc;\n}\n.table > thead > tr > td.danger,\n.table > tbody > tr > td.danger,\n.table > tfoot > tr > td.danger,\n.table > thead > tr > th.danger,\n.table > tbody > tr > th.danger,\n.table > tfoot > tr > th.danger,\n.table > thead > tr.danger > td,\n.table > tbody > tr.danger > td,\n.table > tfoot > tr.danger > td,\n.table > thead > tr.danger > th,\n.table > tbody > tr.danger > th,\n.table > tfoot > tr.danger > th {\n  background-color: #f2dede;\n}\n.table-hover > tbody > tr > td.danger:hover,\n.table-hover > tbody > tr > th.danger:hover,\n.table-hover > tbody > tr.danger:hover > td,\n.table-hover > tbody > tr:hover > .danger,\n.table-hover > tbody > tr.danger:hover > th {\n  background-color: #ebcccc;\n}\n.table-responsive {\n  min-height: .01%;\n  overflow-x: auto;\n}\n@media screen and (max-width: 767px) {\n  .table-responsive {\n    width: 100%;\n    margin-bottom: 15px;\n    overflow-y: hidden;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    border: 1px solid #ddd;\n  }\n  .table-responsive > .table {\n    margin-bottom: 0;\n  }\n  .table-responsive > .table > thead > tr > th,\n  .table-responsive > .table > tbody > tr > th,\n  .table-responsive > .table > tfoot > tr > th,\n  .table-responsive > .table > thead > tr > td,\n  .table-responsive > .table > tbody > tr > td,\n  .table-responsive > .table > tfoot > tr > td {\n    white-space: nowrap;\n  }\n  .table-responsive > .table-bordered {\n    border: 0;\n  }\n  .table-responsive > .table-bordered > thead > tr > th:first-child,\n  .table-responsive > .table-bordered > tbody > tr > th:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n  .table-responsive > .table-bordered > thead > tr > td:first-child,\n  .table-responsive > .table-bordered > tbody > tr > td:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n    border-left: 0;\n  }\n  .table-responsive > .table-bordered > thead > tr > th:last-child,\n  .table-responsive > .table-bordered > tbody > tr > th:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n  .table-responsive > .table-bordered > thead > tr > td:last-child,\n  .table-responsive > .table-bordered > tbody > tr > td:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n    border-right: 0;\n  }\n  .table-responsive > .table-bordered > tbody > tr:last-child > th,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > th,\n  .table-responsive > .table-bordered > tbody > tr:last-child > td,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > td {\n    border-bottom: 0;\n  }\n}\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 20px;\n  font-size: 21px;\n  line-height: inherit;\n  color: #333;\n  border: 0;\n  border-bottom: 1px solid #e5e5e5;\n}\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\ninput[type=\"search\"] {\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n}\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  margin: 4px 0 0;\n  margin-top: 1px \\9;\n  line-height: normal;\n}\ninput[type=\"file\"] {\n  display: block;\n}\ninput[type=\"range\"] {\n  display: block;\n  width: 100%;\n}\nselect[multiple],\nselect[size] {\n  height: auto;\n}\ninput[type=\"file\"]:focus,\ninput[type=\"radio\"]:focus,\ninput[type=\"checkbox\"]:focus {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\noutput {\n  display: block;\n  padding-top: 7px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555;\n}\n.form-control {\n  display: block;\n  width: 100%;\n  height: 34px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n  -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;\n       -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n          transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n}\n.form-control:focus {\n  border-color: #66afe9;\n  outline: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);\n          box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);\n}\n.form-control::-moz-placeholder {\n  color: #999;\n  opacity: 1;\n}\n.form-control:-ms-input-placeholder {\n  color: #999;\n}\n.form-control::-webkit-input-placeholder {\n  color: #999;\n}\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  background-color: #eee;\n  opacity: 1;\n}\n.form-control[disabled],\nfieldset[disabled] .form-control {\n  cursor: not-allowed;\n}\ntextarea.form-control {\n  height: auto;\n}\ninput[type=\"search\"] {\n  -webkit-appearance: none;\n}\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=\"date\"].form-control,\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].form-control {\n    line-height: 34px;\n  }\n  input[type=\"date\"].input-sm,\n  input[type=\"time\"].input-sm,\n  input[type=\"datetime-local\"].input-sm,\n  input[type=\"month\"].input-sm,\n  .input-group-sm input[type=\"date\"],\n  .input-group-sm input[type=\"time\"],\n  .input-group-sm input[type=\"datetime-local\"],\n  .input-group-sm input[type=\"month\"] {\n    line-height: 30px;\n  }\n  input[type=\"date\"].input-lg,\n  input[type=\"time\"].input-lg,\n  input[type=\"datetime-local\"].input-lg,\n  input[type=\"month\"].input-lg,\n  .input-group-lg input[type=\"date\"],\n  .input-group-lg input[type=\"time\"],\n  .input-group-lg input[type=\"datetime-local\"],\n  .input-group-lg input[type=\"month\"] {\n    line-height: 46px;\n  }\n}\n.form-group {\n  margin-bottom: 15px;\n}\n.radio,\n.checkbox {\n  position: relative;\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.radio label,\n.checkbox label {\n  min-height: 20px;\n  padding-left: 20px;\n  margin-bottom: 0;\n  font-weight: normal;\n  cursor: pointer;\n}\n.radio input[type=\"radio\"],\n.radio-inline input[type=\"radio\"],\n.checkbox input[type=\"checkbox\"],\n.checkbox-inline input[type=\"checkbox\"] {\n  position: absolute;\n  margin-top: 4px \\9;\n  margin-left: -20px;\n}\n.radio + .radio,\n.checkbox + .checkbox {\n  margin-top: -5px;\n}\n.radio-inline,\n.checkbox-inline {\n  position: relative;\n  display: inline-block;\n  padding-left: 20px;\n  margin-bottom: 0;\n  font-weight: normal;\n  vertical-align: middle;\n  cursor: pointer;\n}\n.radio-inline + .radio-inline,\n.checkbox-inline + .checkbox-inline {\n  margin-top: 0;\n  margin-left: 10px;\n}\ninput[type=\"radio\"][disabled],\ninput[type=\"checkbox\"][disabled],\ninput[type=\"radio\"].disabled,\ninput[type=\"checkbox\"].disabled,\nfieldset[disabled] input[type=\"radio\"],\nfieldset[disabled] input[type=\"checkbox\"] {\n  cursor: not-allowed;\n}\n.radio-inline.disabled,\n.checkbox-inline.disabled,\nfieldset[disabled] .radio-inline,\nfieldset[disabled] .checkbox-inline {\n  cursor: not-allowed;\n}\n.radio.disabled label,\n.checkbox.disabled label,\nfieldset[disabled] .radio label,\nfieldset[disabled] .checkbox label {\n  cursor: not-allowed;\n}\n.form-control-static {\n  min-height: 34px;\n  padding-top: 7px;\n  padding-bottom: 7px;\n  margin-bottom: 0;\n}\n.form-control-static.input-lg,\n.form-control-static.input-sm {\n  padding-right: 0;\n  padding-left: 0;\n}\n.input-sm {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\nselect.input-sm {\n  height: 30px;\n  line-height: 30px;\n}\ntextarea.input-sm,\nselect[multiple].input-sm {\n  height: auto;\n}\n.form-group-sm .form-control {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n.form-group-sm select.form-control {\n  height: 30px;\n  line-height: 30px;\n}\n.form-group-sm textarea.form-control,\n.form-group-sm select[multiple].form-control {\n  height: auto;\n}\n.form-group-sm .form-control-static {\n  height: 30px;\n  min-height: 32px;\n  padding: 6px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.input-lg {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\nselect.input-lg {\n  height: 46px;\n  line-height: 46px;\n}\ntextarea.input-lg,\nselect[multiple].input-lg {\n  height: auto;\n}\n.form-group-lg .form-control {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\n.form-group-lg select.form-control {\n  height: 46px;\n  line-height: 46px;\n}\n.form-group-lg textarea.form-control,\n.form-group-lg select[multiple].form-control {\n  height: auto;\n}\n.form-group-lg .form-control-static {\n  height: 46px;\n  min-height: 38px;\n  padding: 11px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n}\n.has-feedback {\n  position: relative;\n}\n.has-feedback .form-control {\n  padding-right: 42.5px;\n}\n.form-control-feedback {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  pointer-events: none;\n}\n.input-lg + .form-control-feedback,\n.input-group-lg + .form-control-feedback,\n.form-group-lg .form-control + .form-control-feedback {\n  width: 46px;\n  height: 46px;\n  line-height: 46px;\n}\n.input-sm + .form-control-feedback,\n.input-group-sm + .form-control-feedback,\n.form-group-sm .form-control + .form-control-feedback {\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n}\n.has-success .help-block,\n.has-success .control-label,\n.has-success .radio,\n.has-success .checkbox,\n.has-success .radio-inline,\n.has-success .checkbox-inline,\n.has-success.radio label,\n.has-success.checkbox label,\n.has-success.radio-inline label,\n.has-success.checkbox-inline label {\n  color: #3c763d;\n}\n.has-success .form-control {\n  border-color: #3c763d;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n}\n.has-success .form-control:focus {\n  border-color: #2b542c;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168;\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168;\n}\n.has-success .input-group-addon {\n  color: #3c763d;\n  background-color: #dff0d8;\n  border-color: #3c763d;\n}\n.has-success .form-control-feedback {\n  color: #3c763d;\n}\n.has-warning .help-block,\n.has-warning .control-label,\n.has-warning .radio,\n.has-warning .checkbox,\n.has-warning .radio-inline,\n.has-warning .checkbox-inline,\n.has-warning.radio label,\n.has-warning.checkbox label,\n.has-warning.radio-inline label,\n.has-warning.checkbox-inline label {\n  color: #8a6d3b;\n}\n.has-warning .form-control {\n  border-color: #8a6d3b;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n}\n.has-warning .form-control:focus {\n  border-color: #66512c;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #c0a16b;\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #c0a16b;\n}\n.has-warning .input-group-addon {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #8a6d3b;\n}\n.has-warning .form-control-feedback {\n  color: #8a6d3b;\n}\n.has-error .help-block,\n.has-error .control-label,\n.has-error .radio,\n.has-error .checkbox,\n.has-error .radio-inline,\n.has-error .checkbox-inline,\n.has-error.radio label,\n.has-error.checkbox label,\n.has-error.radio-inline label,\n.has-error.checkbox-inline label {\n  color: #a94442;\n}\n.has-error .form-control {\n  border-color: #a94442;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n}\n.has-error .form-control:focus {\n  border-color: #843534;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483;\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483;\n}\n.has-error .input-group-addon {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #a94442;\n}\n.has-error .form-control-feedback {\n  color: #a94442;\n}\n.has-feedback label ~ .form-control-feedback {\n  top: 25px;\n}\n.has-feedback label.sr-only ~ .form-control-feedback {\n  top: 0;\n}\n.help-block {\n  display: block;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  color: #737373;\n}\n@media (min-width: 768px) {\n  .form-inline .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .form-inline .form-control-static {\n    display: inline-block;\n  }\n  .form-inline .input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n  .form-inline .input-group .input-group-addon,\n  .form-inline .input-group .input-group-btn,\n  .form-inline .input-group .form-control {\n    width: auto;\n  }\n  .form-inline .input-group > .form-control {\n    width: 100%;\n  }\n  .form-inline .control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .radio,\n  .form-inline .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .radio label,\n  .form-inline .checkbox label {\n    padding-left: 0;\n  }\n  .form-inline .radio input[type=\"radio\"],\n  .form-inline .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0;\n  }\n  .form-inline .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n.form-horizontal .radio,\n.form-horizontal .checkbox,\n.form-horizontal .radio-inline,\n.form-horizontal .checkbox-inline {\n  padding-top: 7px;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.form-horizontal .radio,\n.form-horizontal .checkbox {\n  min-height: 27px;\n}\n.form-horizontal .form-group {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n@media (min-width: 768px) {\n  .form-horizontal .control-label {\n    padding-top: 7px;\n    margin-bottom: 0;\n    text-align: right;\n  }\n}\n.form-horizontal .has-feedback .form-control-feedback {\n  right: 15px;\n}\n@media (min-width: 768px) {\n  .form-horizontal .form-group-lg .control-label {\n    padding-top: 14.333333px;\n    font-size: 18px;\n  }\n}\n@media (min-width: 768px) {\n  .form-horizontal .form-group-sm .control-label {\n    padding-top: 6px;\n    font-size: 12px;\n  }\n}\n.btn {\n  display: inline-block;\n  padding: 6px 12px;\n  margin-bottom: 0;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.btn:focus,\n.btn:active:focus,\n.btn.active:focus,\n.btn.focus,\n.btn:active.focus,\n.btn.active.focus {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n.btn:hover,\n.btn:focus,\n.btn.focus {\n  color: #333;\n  text-decoration: none;\n}\n.btn:active,\n.btn.active {\n  background-image: none;\n  outline: 0;\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n          box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n}\n.btn.disabled,\n.btn[disabled],\nfieldset[disabled] .btn {\n  cursor: not-allowed;\n  filter: alpha(opacity=65);\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  opacity: .65;\n}\na.btn.disabled,\nfieldset[disabled] a.btn {\n  pointer-events: none;\n}\n.btn-default {\n  color: #333;\n  background-color: #fff;\n  border-color: #ccc;\n}\n.btn-default:focus,\n.btn-default.focus {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #8c8c8c;\n}\n.btn-default:hover {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n.btn-default:active,\n.btn-default.active,\n.open > .dropdown-toggle.btn-default {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n.btn-default:active:hover,\n.btn-default.active:hover,\n.open > .dropdown-toggle.btn-default:hover,\n.btn-default:active:focus,\n.btn-default.active:focus,\n.open > .dropdown-toggle.btn-default:focus,\n.btn-default:active.focus,\n.btn-default.active.focus,\n.open > .dropdown-toggle.btn-default.focus {\n  color: #333;\n  background-color: #d4d4d4;\n  border-color: #8c8c8c;\n}\n.btn-default:active,\n.btn-default.active,\n.open > .dropdown-toggle.btn-default {\n  background-image: none;\n}\n.btn-default.disabled,\n.btn-default[disabled],\nfieldset[disabled] .btn-default,\n.btn-default.disabled:hover,\n.btn-default[disabled]:hover,\nfieldset[disabled] .btn-default:hover,\n.btn-default.disabled:focus,\n.btn-default[disabled]:focus,\nfieldset[disabled] .btn-default:focus,\n.btn-default.disabled.focus,\n.btn-default[disabled].focus,\nfieldset[disabled] .btn-default.focus,\n.btn-default.disabled:active,\n.btn-default[disabled]:active,\nfieldset[disabled] .btn-default:active,\n.btn-default.disabled.active,\n.btn-default[disabled].active,\nfieldset[disabled] .btn-default.active {\n  background-color: #fff;\n  border-color: #ccc;\n}\n.btn-default .badge {\n  color: #fff;\n  background-color: #333;\n}\n.btn-primary {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #2e6da4;\n}\n.btn-primary:focus,\n.btn-primary.focus {\n  color: #fff;\n  background-color: #286090;\n  border-color: #122b40;\n}\n.btn-primary:hover {\n  color: #fff;\n  background-color: #286090;\n  border-color: #204d74;\n}\n.btn-primary:active,\n.btn-primary.active,\n.open > .dropdown-toggle.btn-primary {\n  color: #fff;\n  background-color: #286090;\n  border-color: #204d74;\n}\n.btn-primary:active:hover,\n.btn-primary.active:hover,\n.open > .dropdown-toggle.btn-primary:hover,\n.btn-primary:active:focus,\n.btn-primary.active:focus,\n.open > .dropdown-toggle.btn-primary:focus,\n.btn-primary:active.focus,\n.btn-primary.active.focus,\n.open > .dropdown-toggle.btn-primary.focus {\n  color: #fff;\n  background-color: #204d74;\n  border-color: #122b40;\n}\n.btn-primary:active,\n.btn-primary.active,\n.open > .dropdown-toggle.btn-primary {\n  background-image: none;\n}\n.btn-primary.disabled,\n.btn-primary[disabled],\nfieldset[disabled] .btn-primary,\n.btn-primary.disabled:hover,\n.btn-primary[disabled]:hover,\nfieldset[disabled] .btn-primary:hover,\n.btn-primary.disabled:focus,\n.btn-primary[disabled]:focus,\nfieldset[disabled] .btn-primary:focus,\n.btn-primary.disabled.focus,\n.btn-primary[disabled].focus,\nfieldset[disabled] .btn-primary.focus,\n.btn-primary.disabled:active,\n.btn-primary[disabled]:active,\nfieldset[disabled] .btn-primary:active,\n.btn-primary.disabled.active,\n.btn-primary[disabled].active,\nfieldset[disabled] .btn-primary.active {\n  background-color: #337ab7;\n  border-color: #2e6da4;\n}\n.btn-primary .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n.btn-success {\n  color: #fff;\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n.btn-success:focus,\n.btn-success.focus {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #255625;\n}\n.btn-success:hover {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #398439;\n}\n.btn-success:active,\n.btn-success.active,\n.open > .dropdown-toggle.btn-success {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #398439;\n}\n.btn-success:active:hover,\n.btn-success.active:hover,\n.open > .dropdown-toggle.btn-success:hover,\n.btn-success:active:focus,\n.btn-success.active:focus,\n.open > .dropdown-toggle.btn-success:focus,\n.btn-success:active.focus,\n.btn-success.active.focus,\n.open > .dropdown-toggle.btn-success.focus {\n  color: #fff;\n  background-color: #398439;\n  border-color: #255625;\n}\n.btn-success:active,\n.btn-success.active,\n.open > .dropdown-toggle.btn-success {\n  background-image: none;\n}\n.btn-success.disabled,\n.btn-success[disabled],\nfieldset[disabled] .btn-success,\n.btn-success.disabled:hover,\n.btn-success[disabled]:hover,\nfieldset[disabled] .btn-success:hover,\n.btn-success.disabled:focus,\n.btn-success[disabled]:focus,\nfieldset[disabled] .btn-success:focus,\n.btn-success.disabled.focus,\n.btn-success[disabled].focus,\nfieldset[disabled] .btn-success.focus,\n.btn-success.disabled:active,\n.btn-success[disabled]:active,\nfieldset[disabled] .btn-success:active,\n.btn-success.disabled.active,\n.btn-success[disabled].active,\nfieldset[disabled] .btn-success.active {\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n.btn-success .badge {\n  color: #5cb85c;\n  background-color: #fff;\n}\n.btn-info {\n  color: #fff;\n  background-color: #5bc0de;\n  border-color: #46b8da;\n}\n.btn-info:focus,\n.btn-info.focus {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #1b6d85;\n}\n.btn-info:hover {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #269abc;\n}\n.btn-info:active,\n.btn-info.active,\n.open > .dropdown-toggle.btn-info {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #269abc;\n}\n.btn-info:active:hover,\n.btn-info.active:hover,\n.open > .dropdown-toggle.btn-info:hover,\n.btn-info:active:focus,\n.btn-info.active:focus,\n.open > .dropdown-toggle.btn-info:focus,\n.btn-info:active.focus,\n.btn-info.active.focus,\n.open > .dropdown-toggle.btn-info.focus {\n  color: #fff;\n  background-color: #269abc;\n  border-color: #1b6d85;\n}\n.btn-info:active,\n.btn-info.active,\n.open > .dropdown-toggle.btn-info {\n  background-image: none;\n}\n.btn-info.disabled,\n.btn-info[disabled],\nfieldset[disabled] .btn-info,\n.btn-info.disabled:hover,\n.btn-info[disabled]:hover,\nfieldset[disabled] .btn-info:hover,\n.btn-info.disabled:focus,\n.btn-info[disabled]:focus,\nfieldset[disabled] .btn-info:focus,\n.btn-info.disabled.focus,\n.btn-info[disabled].focus,\nfieldset[disabled] .btn-info.focus,\n.btn-info.disabled:active,\n.btn-info[disabled]:active,\nfieldset[disabled] .btn-info:active,\n.btn-info.disabled.active,\n.btn-info[disabled].active,\nfieldset[disabled] .btn-info.active {\n  background-color: #5bc0de;\n  border-color: #46b8da;\n}\n.btn-info .badge {\n  color: #5bc0de;\n  background-color: #fff;\n}\n.btn-warning {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #eea236;\n}\n.btn-warning:focus,\n.btn-warning.focus {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #985f0d;\n}\n.btn-warning:hover {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #d58512;\n}\n.btn-warning:active,\n.btn-warning.active,\n.open > .dropdown-toggle.btn-warning {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #d58512;\n}\n.btn-warning:active:hover,\n.btn-warning.active:hover,\n.open > .dropdown-toggle.btn-warning:hover,\n.btn-warning:active:focus,\n.btn-warning.active:focus,\n.open > .dropdown-toggle.btn-warning:focus,\n.btn-warning:active.focus,\n.btn-warning.active.focus,\n.open > .dropdown-toggle.btn-warning.focus {\n  color: #fff;\n  background-color: #d58512;\n  border-color: #985f0d;\n}\n.btn-warning:active,\n.btn-warning.active,\n.open > .dropdown-toggle.btn-warning {\n  background-image: none;\n}\n.btn-warning.disabled,\n.btn-warning[disabled],\nfieldset[disabled] .btn-warning,\n.btn-warning.disabled:hover,\n.btn-warning[disabled]:hover,\nfieldset[disabled] .btn-warning:hover,\n.btn-warning.disabled:focus,\n.btn-warning[disabled]:focus,\nfieldset[disabled] .btn-warning:focus,\n.btn-warning.disabled.focus,\n.btn-warning[disabled].focus,\nfieldset[disabled] .btn-warning.focus,\n.btn-warning.disabled:active,\n.btn-warning[disabled]:active,\nfieldset[disabled] .btn-warning:active,\n.btn-warning.disabled.active,\n.btn-warning[disabled].active,\nfieldset[disabled] .btn-warning.active {\n  background-color: #f0ad4e;\n  border-color: #eea236;\n}\n.btn-warning .badge {\n  color: #f0ad4e;\n  background-color: #fff;\n}\n.btn-danger {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d43f3a;\n}\n.btn-danger:focus,\n.btn-danger.focus {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #761c19;\n}\n.btn-danger:hover {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #ac2925;\n}\n.btn-danger:active,\n.btn-danger.active,\n.open > .dropdown-toggle.btn-danger {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #ac2925;\n}\n.btn-danger:active:hover,\n.btn-danger.active:hover,\n.open > .dropdown-toggle.btn-danger:hover,\n.btn-danger:active:focus,\n.btn-danger.active:focus,\n.open > .dropdown-toggle.btn-danger:focus,\n.btn-danger:active.focus,\n.btn-danger.active.focus,\n.open > .dropdown-toggle.btn-danger.focus {\n  color: #fff;\n  background-color: #ac2925;\n  border-color: #761c19;\n}\n.btn-danger:active,\n.btn-danger.active,\n.open > .dropdown-toggle.btn-danger {\n  background-image: none;\n}\n.btn-danger.disabled,\n.btn-danger[disabled],\nfieldset[disabled] .btn-danger,\n.btn-danger.disabled:hover,\n.btn-danger[disabled]:hover,\nfieldset[disabled] .btn-danger:hover,\n.btn-danger.disabled:focus,\n.btn-danger[disabled]:focus,\nfieldset[disabled] .btn-danger:focus,\n.btn-danger.disabled.focus,\n.btn-danger[disabled].focus,\nfieldset[disabled] .btn-danger.focus,\n.btn-danger.disabled:active,\n.btn-danger[disabled]:active,\nfieldset[disabled] .btn-danger:active,\n.btn-danger.disabled.active,\n.btn-danger[disabled].active,\nfieldset[disabled] .btn-danger.active {\n  background-color: #d9534f;\n  border-color: #d43f3a;\n}\n.btn-danger .badge {\n  color: #d9534f;\n  background-color: #fff;\n}\n.btn-link {\n  font-weight: normal;\n  color: #337ab7;\n  border-radius: 0;\n}\n.btn-link,\n.btn-link:active,\n.btn-link.active,\n.btn-link[disabled],\nfieldset[disabled] .btn-link {\n  background-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.btn-link,\n.btn-link:hover,\n.btn-link:focus,\n.btn-link:active {\n  border-color: transparent;\n}\n.btn-link:hover,\n.btn-link:focus {\n  color: #23527c;\n  text-decoration: underline;\n  background-color: transparent;\n}\n.btn-link[disabled]:hover,\nfieldset[disabled] .btn-link:hover,\n.btn-link[disabled]:focus,\nfieldset[disabled] .btn-link:focus {\n  color: #777;\n  text-decoration: none;\n}\n.btn-lg,\n.btn-group-lg > .btn {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\n.btn-sm,\n.btn-group-sm > .btn {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n.btn-xs,\n.btn-group-xs > .btn {\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n.btn-block {\n  display: block;\n  width: 100%;\n}\n.btn-block + .btn-block {\n  margin-top: 5px;\n}\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%;\n}\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity .15s linear;\n       -o-transition: opacity .15s linear;\n          transition: opacity .15s linear;\n}\n.fade.in {\n  opacity: 1;\n}\n.collapse {\n  display: none;\n}\n.collapse.in {\n  display: block;\n}\ntr.collapse.in {\n  display: table-row;\n}\ntbody.collapse.in {\n  display: table-row-group;\n}\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  -webkit-transition-timing-function: ease;\n       -o-transition-timing-function: ease;\n          transition-timing-function: ease;\n  -webkit-transition-duration: .35s;\n       -o-transition-duration: .35s;\n          transition-duration: .35s;\n  -webkit-transition-property: height, visibility;\n       -o-transition-property: height, visibility;\n          transition-property: height, visibility;\n}\n.caret {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 4px dashed;\n  border-top: 4px solid \\9;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent;\n}\n.dropup,\n.dropdown {\n  position: relative;\n}\n.dropdown-toggle:focus {\n  outline: 0;\n}\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  font-size: 14px;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  -webkit-background-clip: padding-box;\n          background-clip: padding-box;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, .15);\n  border-radius: 4px;\n  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\n          box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\n}\n.dropdown-menu.pull-right {\n  right: 0;\n  left: auto;\n}\n.dropdown-menu .divider {\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n.dropdown-menu > li > a {\n  display: block;\n  padding: 3px 20px;\n  clear: both;\n  font-weight: normal;\n  line-height: 1.42857143;\n  color: #333;\n  white-space: nowrap;\n}\n.dropdown-menu > li > a:hover,\n.dropdown-menu > li > a:focus {\n  color: #262626;\n  text-decoration: none;\n  background-color: #f5f5f5;\n}\n.dropdown-menu > .active > a,\n.dropdown-menu > .active > a:hover,\n.dropdown-menu > .active > a:focus {\n  color: #fff;\n  text-decoration: none;\n  background-color: #337ab7;\n  outline: 0;\n}\n.dropdown-menu > .disabled > a,\n.dropdown-menu > .disabled > a:hover,\n.dropdown-menu > .disabled > a:focus {\n  color: #777;\n}\n.dropdown-menu > .disabled > a:hover,\n.dropdown-menu > .disabled > a:focus {\n  text-decoration: none;\n  cursor: not-allowed;\n  background-color: transparent;\n  background-image: none;\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\n}\n.open > .dropdown-menu {\n  display: block;\n}\n.open > a {\n  outline: 0;\n}\n.dropdown-menu-right {\n  right: 0;\n  left: auto;\n}\n.dropdown-menu-left {\n  right: auto;\n  left: 0;\n}\n.dropdown-header {\n  display: block;\n  padding: 3px 20px;\n  font-size: 12px;\n  line-height: 1.42857143;\n  color: #777;\n  white-space: nowrap;\n}\n.dropdown-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 990;\n}\n.pull-right > .dropdown-menu {\n  right: 0;\n  left: auto;\n}\n.dropup .caret,\n.navbar-fixed-bottom .dropdown .caret {\n  content: \"\";\n  border-top: 0;\n  border-bottom: 4px dashed;\n  border-bottom: 4px solid \\9;\n}\n.dropup .dropdown-menu,\n.navbar-fixed-bottom .dropdown .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-bottom: 2px;\n}\n@media (min-width: 768px) {\n  .navbar-right .dropdown-menu {\n    right: 0;\n    left: auto;\n  }\n  .navbar-right .dropdown-menu-left {\n    right: auto;\n    left: 0;\n  }\n}\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n.btn-group > .btn,\n.btn-group-vertical > .btn {\n  position: relative;\n  float: left;\n}\n.btn-group > .btn:hover,\n.btn-group-vertical > .btn:hover,\n.btn-group > .btn:focus,\n.btn-group-vertical > .btn:focus,\n.btn-group > .btn:active,\n.btn-group-vertical > .btn:active,\n.btn-group > .btn.active,\n.btn-group-vertical > .btn.active {\n  z-index: 2;\n}\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group {\n  margin-left: -1px;\n}\n.btn-toolbar {\n  margin-left: -5px;\n}\n.btn-toolbar .btn,\n.btn-toolbar .btn-group,\n.btn-toolbar .input-group {\n  float: left;\n}\n.btn-toolbar > .btn,\n.btn-toolbar > .btn-group,\n.btn-toolbar > .input-group {\n  margin-left: 5px;\n}\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0;\n}\n.btn-group > .btn:first-child {\n  margin-left: 0;\n}\n.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.btn-group > .btn:last-child:not(:first-child),\n.btn-group > .dropdown-toggle:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group > .btn-group {\n  float: left;\n}\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group .dropdown-toggle:active,\n.btn-group.open .dropdown-toggle {\n  outline: 0;\n}\n.btn-group > .btn + .dropdown-toggle {\n  padding-right: 8px;\n  padding-left: 8px;\n}\n.btn-group > .btn-lg + .dropdown-toggle {\n  padding-right: 12px;\n  padding-left: 12px;\n}\n.btn-group.open .dropdown-toggle {\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n          box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n}\n.btn-group.open .dropdown-toggle.btn-link {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.btn .caret {\n  margin-left: 0;\n}\n.btn-lg .caret {\n  border-width: 5px 5px 0;\n  border-bottom-width: 0;\n}\n.dropup .btn-lg .caret {\n  border-width: 0 5px 5px;\n}\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group,\n.btn-group-vertical > .btn-group > .btn {\n  display: block;\n  float: none;\n  width: 100%;\n  max-width: 100%;\n}\n.btn-group-vertical > .btn-group > .btn {\n  float: none;\n}\n.btn-group-vertical > .btn + .btn,\n.btn-group-vertical > .btn + .btn-group,\n.btn-group-vertical > .btn-group + .btn,\n.btn-group-vertical > .btn-group + .btn-group {\n  margin-top: -1px;\n  margin-left: 0;\n}\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n.btn-group-vertical > .btn:first-child:not(:last-child) {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn:last-child:not(:first-child) {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: 4px;\n}\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.btn-group-justified {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  border-collapse: separate;\n}\n.btn-group-justified > .btn,\n.btn-group-justified > .btn-group {\n  display: table-cell;\n  float: none;\n  width: 1%;\n}\n.btn-group-justified > .btn-group .btn {\n  width: 100%;\n}\n.btn-group-justified > .btn-group .dropdown-menu {\n  left: auto;\n}\n[data-toggle=\"buttons\"] > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n.input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate;\n}\n.input-group[class*=\"col-\"] {\n  float: none;\n  padding-right: 0;\n  padding-left: 0;\n}\n.input-group .form-control {\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 100%;\n  margin-bottom: 0;\n}\n.input-group-lg > .form-control,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .btn {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\nselect.input-group-lg > .form-control,\nselect.input-group-lg > .input-group-addon,\nselect.input-group-lg > .input-group-btn > .btn {\n  height: 46px;\n  line-height: 46px;\n}\ntextarea.input-group-lg > .form-control,\ntextarea.input-group-lg > .input-group-addon,\ntextarea.input-group-lg > .input-group-btn > .btn,\nselect[multiple].input-group-lg > .form-control,\nselect[multiple].input-group-lg > .input-group-addon,\nselect[multiple].input-group-lg > .input-group-btn > .btn {\n  height: auto;\n}\n.input-group-sm > .form-control,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\nselect.input-group-sm > .form-control,\nselect.input-group-sm > .input-group-addon,\nselect.input-group-sm > .input-group-btn > .btn {\n  height: 30px;\n  line-height: 30px;\n}\ntextarea.input-group-sm > .form-control,\ntextarea.input-group-sm > .input-group-addon,\ntextarea.input-group-sm > .input-group-btn > .btn,\nselect[multiple].input-group-sm > .form-control,\nselect[multiple].input-group-sm > .input-group-addon,\nselect[multiple].input-group-sm > .input-group-btn > .btn {\n  height: auto;\n}\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: table-cell;\n}\n.input-group-addon:not(:first-child):not(:last-child),\n.input-group-btn:not(:first-child):not(:last-child),\n.input-group .form-control:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n.input-group-addon,\n.input-group-btn {\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle;\n}\n.input-group-addon {\n  padding: 6px 12px;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1;\n  color: #555;\n  text-align: center;\n  background-color: #eee;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n.input-group-addon.input-sm {\n  padding: 5px 10px;\n  font-size: 12px;\n  border-radius: 3px;\n}\n.input-group-addon.input-lg {\n  padding: 10px 16px;\n  font-size: 18px;\n  border-radius: 6px;\n}\n.input-group-addon input[type=\"radio\"],\n.input-group-addon input[type=\"checkbox\"] {\n  margin-top: 0;\n}\n.input-group .form-control:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group > .btn,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group-addon:first-child {\n  border-right: 0;\n}\n.input-group .form-control:last-child,\n.input-group-addon:last-child,\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group > .btn,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child),\n.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.input-group-addon:last-child {\n  border-left: 0;\n}\n.input-group-btn {\n  position: relative;\n  font-size: 0;\n  white-space: nowrap;\n}\n.input-group-btn > .btn {\n  position: relative;\n}\n.input-group-btn > .btn + .btn {\n  margin-left: -1px;\n}\n.input-group-btn > .btn:hover,\n.input-group-btn > .btn:focus,\n.input-group-btn > .btn:active {\n  z-index: 2;\n}\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group {\n  margin-right: -1px;\n}\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group {\n  z-index: 2;\n  margin-left: -1px;\n}\n.nav {\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.nav > li {\n  position: relative;\n  display: block;\n}\n.nav > li > a {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n}\n.nav > li > a:hover,\n.nav > li > a:focus {\n  text-decoration: none;\n  background-color: #eee;\n}\n.nav > li.disabled > a {\n  color: #777;\n}\n.nav > li.disabled > a:hover,\n.nav > li.disabled > a:focus {\n  color: #777;\n  text-decoration: none;\n  cursor: not-allowed;\n  background-color: transparent;\n}\n.nav .open > a,\n.nav .open > a:hover,\n.nav .open > a:focus {\n  background-color: #eee;\n  border-color: #337ab7;\n}\n.nav .nav-divider {\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n.nav > li > a > img {\n  max-width: none;\n}\n.nav-tabs {\n  border-bottom: 1px solid #ddd;\n}\n.nav-tabs > li {\n  float: left;\n  margin-bottom: -1px;\n}\n.nav-tabs > li > a {\n  margin-right: 2px;\n  line-height: 1.42857143;\n  border: 1px solid transparent;\n  border-radius: 4px 4px 0 0;\n}\n.nav-tabs > li > a:hover {\n  border-color: #eee #eee #ddd;\n}\n.nav-tabs > li.active > a,\n.nav-tabs > li.active > a:hover,\n.nav-tabs > li.active > a:focus {\n  color: #555;\n  cursor: default;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-bottom-color: transparent;\n}\n.nav-tabs.nav-justified {\n  width: 100%;\n  border-bottom: 0;\n}\n.nav-tabs.nav-justified > li {\n  float: none;\n}\n.nav-tabs.nav-justified > li > a {\n  margin-bottom: 5px;\n  text-align: center;\n}\n.nav-tabs.nav-justified > .dropdown .dropdown-menu {\n  top: auto;\n  left: auto;\n}\n@media (min-width: 768px) {\n  .nav-tabs.nav-justified > li {\n    display: table-cell;\n    width: 1%;\n  }\n  .nav-tabs.nav-justified > li > a {\n    margin-bottom: 0;\n  }\n}\n.nav-tabs.nav-justified > li > a {\n  margin-right: 0;\n  border-radius: 4px;\n}\n.nav-tabs.nav-justified > .active > a,\n.nav-tabs.nav-justified > .active > a:hover,\n.nav-tabs.nav-justified > .active > a:focus {\n  border: 1px solid #ddd;\n}\n@media (min-width: 768px) {\n  .nav-tabs.nav-justified > li > a {\n    border-bottom: 1px solid #ddd;\n    border-radius: 4px 4px 0 0;\n  }\n  .nav-tabs.nav-justified > .active > a,\n  .nav-tabs.nav-justified > .active > a:hover,\n  .nav-tabs.nav-justified > .active > a:focus {\n    border-bottom-color: #fff;\n  }\n}\n.nav-pills > li {\n  float: left;\n}\n.nav-pills > li > a {\n  border-radius: 4px;\n}\n.nav-pills > li + li {\n  margin-left: 2px;\n}\n.nav-pills > li.active > a,\n.nav-pills > li.active > a:hover,\n.nav-pills > li.active > a:focus {\n  color: #fff;\n  background-color: #337ab7;\n}\n.nav-stacked > li {\n  float: none;\n}\n.nav-stacked > li + li {\n  margin-top: 2px;\n  margin-left: 0;\n}\n.nav-justified {\n  width: 100%;\n}\n.nav-justified > li {\n  float: none;\n}\n.nav-justified > li > a {\n  margin-bottom: 5px;\n  text-align: center;\n}\n.nav-justified > .dropdown .dropdown-menu {\n  top: auto;\n  left: auto;\n}\n@media (min-width: 768px) {\n  .nav-justified > li {\n    display: table-cell;\n    width: 1%;\n  }\n  .nav-justified > li > a {\n    margin-bottom: 0;\n  }\n}\n.nav-tabs-justified {\n  border-bottom: 0;\n}\n.nav-tabs-justified > li > a {\n  margin-right: 0;\n  border-radius: 4px;\n}\n.nav-tabs-justified > .active > a,\n.nav-tabs-justified > .active > a:hover,\n.nav-tabs-justified > .active > a:focus {\n  border: 1px solid #ddd;\n}\n@media (min-width: 768px) {\n  .nav-tabs-justified > li > a {\n    border-bottom: 1px solid #ddd;\n    border-radius: 4px 4px 0 0;\n  }\n  .nav-tabs-justified > .active > a,\n  .nav-tabs-justified > .active > a:hover,\n  .nav-tabs-justified > .active > a:focus {\n    border-bottom-color: #fff;\n  }\n}\n.tab-content > .tab-pane {\n  display: none;\n}\n.tab-content > .active {\n  display: block;\n}\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.navbar {\n  position: relative;\n  min-height: 50px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n}\n@media (min-width: 768px) {\n  .navbar {\n    border-radius: 4px;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-header {\n    float: left;\n  }\n}\n.navbar-collapse {\n  padding-right: 15px;\n  padding-left: 15px;\n  overflow-x: visible;\n  -webkit-overflow-scrolling: touch;\n  border-top: 1px solid transparent;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1);\n          box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1);\n}\n.navbar-collapse.in {\n  overflow-y: auto;\n}\n@media (min-width: 768px) {\n  .navbar-collapse {\n    width: auto;\n    border-top: 0;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n  }\n  .navbar-collapse.collapse {\n    display: block !important;\n    height: auto !important;\n    padding-bottom: 0;\n    overflow: visible !important;\n  }\n  .navbar-collapse.in {\n    overflow-y: visible;\n  }\n  .navbar-fixed-top .navbar-collapse,\n  .navbar-static-top .navbar-collapse,\n  .navbar-fixed-bottom .navbar-collapse {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n.navbar-fixed-top .navbar-collapse,\n.navbar-fixed-bottom .navbar-collapse {\n  max-height: 340px;\n}\n@media (max-device-width: 480px) and (orientation: landscape) {\n  .navbar-fixed-top .navbar-collapse,\n  .navbar-fixed-bottom .navbar-collapse {\n    max-height: 200px;\n  }\n}\n.container > .navbar-header,\n.container-fluid > .navbar-header,\n.container > .navbar-collapse,\n.container-fluid > .navbar-collapse {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n@media (min-width: 768px) {\n  .container > .navbar-header,\n  .container-fluid > .navbar-header,\n  .container > .navbar-collapse,\n  .container-fluid > .navbar-collapse {\n    margin-right: 0;\n    margin-left: 0;\n  }\n}\n.navbar-static-top {\n  z-index: 1000;\n  border-width: 0 0 1px;\n}\n@media (min-width: 768px) {\n  .navbar-static-top {\n    border-radius: 0;\n  }\n}\n.navbar-fixed-top,\n.navbar-fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n@media (min-width: 768px) {\n  .navbar-fixed-top,\n  .navbar-fixed-bottom {\n    border-radius: 0;\n  }\n}\n.navbar-fixed-top {\n  top: 0;\n  border-width: 0 0 1px;\n}\n.navbar-fixed-bottom {\n  bottom: 0;\n  margin-bottom: 0;\n  border-width: 1px 0 0;\n}\n.navbar-brand {\n  float: left;\n  height: 50px;\n  padding: 15px 15px;\n  font-size: 18px;\n  line-height: 20px;\n}\n.navbar-brand:hover,\n.navbar-brand:focus {\n  text-decoration: none;\n}\n.navbar-brand > img {\n  display: block;\n}\n@media (min-width: 768px) {\n  .navbar > .container .navbar-brand,\n  .navbar > .container-fluid .navbar-brand {\n    margin-left: -15px;\n  }\n}\n.navbar-toggle {\n  position: relative;\n  float: right;\n  padding: 9px 10px;\n  margin-top: 8px;\n  margin-right: 15px;\n  margin-bottom: 8px;\n  background-color: transparent;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.navbar-toggle:focus {\n  outline: 0;\n}\n.navbar-toggle .icon-bar {\n  display: block;\n  width: 22px;\n  height: 2px;\n  border-radius: 1px;\n}\n.navbar-toggle .icon-bar + .icon-bar {\n  margin-top: 4px;\n}\n@media (min-width: 768px) {\n  .navbar-toggle {\n    display: none;\n  }\n}\n.navbar-nav {\n  margin: 7.5px -15px;\n}\n.navbar-nav > li > a {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  line-height: 20px;\n}\n@media (max-width: 767px) {\n  .navbar-nav .open .dropdown-menu {\n    position: static;\n    float: none;\n    width: auto;\n    margin-top: 0;\n    background-color: transparent;\n    border: 0;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n  }\n  .navbar-nav .open .dropdown-menu > li > a,\n  .navbar-nav .open .dropdown-menu .dropdown-header {\n    padding: 5px 15px 5px 25px;\n  }\n  .navbar-nav .open .dropdown-menu > li > a {\n    line-height: 20px;\n  }\n  .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-nav .open .dropdown-menu > li > a:focus {\n    background-image: none;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-nav {\n    float: left;\n    margin: 0;\n  }\n  .navbar-nav > li {\n    float: left;\n  }\n  .navbar-nav > li > a {\n    padding-top: 15px;\n    padding-bottom: 15px;\n  }\n}\n.navbar-form {\n  padding: 10px 15px;\n  margin-top: 8px;\n  margin-right: -15px;\n  margin-bottom: 8px;\n  margin-left: -15px;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 1px 0 rgba(255, 255, 255, .1);\n          box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 1px 0 rgba(255, 255, 255, .1);\n}\n@media (min-width: 768px) {\n  .navbar-form .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .navbar-form .form-control-static {\n    display: inline-block;\n  }\n  .navbar-form .input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n  .navbar-form .input-group .input-group-addon,\n  .navbar-form .input-group .input-group-btn,\n  .navbar-form .input-group .form-control {\n    width: auto;\n  }\n  .navbar-form .input-group > .form-control {\n    width: 100%;\n  }\n  .navbar-form .control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .radio,\n  .navbar-form .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .radio label,\n  .navbar-form .checkbox label {\n    padding-left: 0;\n  }\n  .navbar-form .radio input[type=\"radio\"],\n  .navbar-form .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0;\n  }\n  .navbar-form .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n@media (max-width: 767px) {\n  .navbar-form .form-group {\n    margin-bottom: 5px;\n  }\n  .navbar-form .form-group:last-child {\n    margin-bottom: 0;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-form {\n    width: auto;\n    padding-top: 0;\n    padding-bottom: 0;\n    margin-right: 0;\n    margin-left: 0;\n    border: 0;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n  }\n}\n.navbar-nav > li > .dropdown-menu {\n  margin-top: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {\n  margin-bottom: 0;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.navbar-btn {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n.navbar-btn.btn-sm {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.navbar-btn.btn-xs {\n  margin-top: 14px;\n  margin-bottom: 14px;\n}\n.navbar-text {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n@media (min-width: 768px) {\n  .navbar-text {\n    float: left;\n    margin-right: 15px;\n    margin-left: 15px;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-left {\n    float: left !important;\n  }\n  .navbar-right {\n    float: right !important;\n    margin-right: -15px;\n  }\n  .navbar-right ~ .navbar-right {\n    margin-right: 0;\n  }\n}\n.navbar-default {\n  background-color: #f8f8f8;\n  border-color: #e7e7e7;\n}\n.navbar-default .navbar-brand {\n  color: #777;\n}\n.navbar-default .navbar-brand:hover,\n.navbar-default .navbar-brand:focus {\n  color: #5e5e5e;\n  background-color: transparent;\n}\n.navbar-default .navbar-text {\n  color: #777;\n}\n.navbar-default .navbar-nav > li > a {\n  color: #777;\n}\n.navbar-default .navbar-nav > li > a:hover,\n.navbar-default .navbar-nav > li > a:focus {\n  color: #333;\n  background-color: transparent;\n}\n.navbar-default .navbar-nav > .active > a,\n.navbar-default .navbar-nav > .active > a:hover,\n.navbar-default .navbar-nav > .active > a:focus {\n  color: #555;\n  background-color: #e7e7e7;\n}\n.navbar-default .navbar-nav > .disabled > a,\n.navbar-default .navbar-nav > .disabled > a:hover,\n.navbar-default .navbar-nav > .disabled > a:focus {\n  color: #ccc;\n  background-color: transparent;\n}\n.navbar-default .navbar-toggle {\n  border-color: #ddd;\n}\n.navbar-default .navbar-toggle:hover,\n.navbar-default .navbar-toggle:focus {\n  background-color: #ddd;\n}\n.navbar-default .navbar-toggle .icon-bar {\n  background-color: #888;\n}\n.navbar-default .navbar-collapse,\n.navbar-default .navbar-form {\n  border-color: #e7e7e7;\n}\n.navbar-default .navbar-nav > .open > a,\n.navbar-default .navbar-nav > .open > a:hover,\n.navbar-default .navbar-nav > .open > a:focus {\n  color: #555;\n  background-color: #e7e7e7;\n}\n@media (max-width: 767px) {\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a {\n    color: #777;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #333;\n    background-color: transparent;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #555;\n    background-color: #e7e7e7;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #ccc;\n    background-color: transparent;\n  }\n}\n.navbar-default .navbar-link {\n  color: #777;\n}\n.navbar-default .navbar-link:hover {\n  color: #333;\n}\n.navbar-default .btn-link {\n  color: #777;\n}\n.navbar-default .btn-link:hover,\n.navbar-default .btn-link:focus {\n  color: #333;\n}\n.navbar-default .btn-link[disabled]:hover,\nfieldset[disabled] .navbar-default .btn-link:hover,\n.navbar-default .btn-link[disabled]:focus,\nfieldset[disabled] .navbar-default .btn-link:focus {\n  color: #ccc;\n}\n.navbar-inverse {\n  background-color: #222;\n  border-color: #080808;\n}\n.navbar-inverse .navbar-brand {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-brand:hover,\n.navbar-inverse .navbar-brand:focus {\n  color: #fff;\n  background-color: transparent;\n}\n.navbar-inverse .navbar-text {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-nav > li > a {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-nav > li > a:hover,\n.navbar-inverse .navbar-nav > li > a:focus {\n  color: #fff;\n  background-color: transparent;\n}\n.navbar-inverse .navbar-nav > .active > a,\n.navbar-inverse .navbar-nav > .active > a:hover,\n.navbar-inverse .navbar-nav > .active > a:focus {\n  color: #fff;\n  background-color: #080808;\n}\n.navbar-inverse .navbar-nav > .disabled > a,\n.navbar-inverse .navbar-nav > .disabled > a:hover,\n.navbar-inverse .navbar-nav > .disabled > a:focus {\n  color: #444;\n  background-color: transparent;\n}\n.navbar-inverse .navbar-toggle {\n  border-color: #333;\n}\n.navbar-inverse .navbar-toggle:hover,\n.navbar-inverse .navbar-toggle:focus {\n  background-color: #333;\n}\n.navbar-inverse .navbar-toggle .icon-bar {\n  background-color: #fff;\n}\n.navbar-inverse .navbar-collapse,\n.navbar-inverse .navbar-form {\n  border-color: #101010;\n}\n.navbar-inverse .navbar-nav > .open > a,\n.navbar-inverse .navbar-nav > .open > a:hover,\n.navbar-inverse .navbar-nav > .open > a:focus {\n  color: #fff;\n  background-color: #080808;\n}\n@media (max-width: 767px) {\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {\n    border-color: #080808;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu .divider {\n    background-color: #080808;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {\n    color: #9d9d9d;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #fff;\n    background-color: transparent;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #fff;\n    background-color: #080808;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #444;\n    background-color: transparent;\n  }\n}\n.navbar-inverse .navbar-link {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-link:hover {\n  color: #fff;\n}\n.navbar-inverse .btn-link {\n  color: #9d9d9d;\n}\n.navbar-inverse .btn-link:hover,\n.navbar-inverse .btn-link:focus {\n  color: #fff;\n}\n.navbar-inverse .btn-link[disabled]:hover,\nfieldset[disabled] .navbar-inverse .btn-link:hover,\n.navbar-inverse .btn-link[disabled]:focus,\nfieldset[disabled] .navbar-inverse .btn-link:focus {\n  color: #444;\n}\n.breadcrumb {\n  padding: 8px 15px;\n  margin-bottom: 20px;\n  list-style: none;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n}\n.breadcrumb > li {\n  display: inline-block;\n}\n.breadcrumb > li + li:before {\n  padding: 0 5px;\n  color: #ccc;\n  content: \"/\\A0\";\n}\n.breadcrumb > .active {\n  color: #777;\n}\n.pagination {\n  display: inline-block;\n  padding-left: 0;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.pagination > li {\n  display: inline;\n}\n.pagination > li > a,\n.pagination > li > span {\n  position: relative;\n  float: left;\n  padding: 6px 12px;\n  margin-left: -1px;\n  line-height: 1.42857143;\n  color: #337ab7;\n  text-decoration: none;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n.pagination > li:first-child > a,\n.pagination > li:first-child > span {\n  margin-left: 0;\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.pagination > li:last-child > a,\n.pagination > li:last-child > span {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n.pagination > li > a:hover,\n.pagination > li > span:hover,\n.pagination > li > a:focus,\n.pagination > li > span:focus {\n  z-index: 3;\n  color: #23527c;\n  background-color: #eee;\n  border-color: #ddd;\n}\n.pagination > .active > a,\n.pagination > .active > span,\n.pagination > .active > a:hover,\n.pagination > .active > span:hover,\n.pagination > .active > a:focus,\n.pagination > .active > span:focus {\n  z-index: 2;\n  color: #fff;\n  cursor: default;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n.pagination > .disabled > span,\n.pagination > .disabled > span:hover,\n.pagination > .disabled > span:focus,\n.pagination > .disabled > a,\n.pagination > .disabled > a:hover,\n.pagination > .disabled > a:focus {\n  color: #777;\n  cursor: not-allowed;\n  background-color: #fff;\n  border-color: #ddd;\n}\n.pagination-lg > li > a,\n.pagination-lg > li > span {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n}\n.pagination-lg > li:first-child > a,\n.pagination-lg > li:first-child > span {\n  border-top-left-radius: 6px;\n  border-bottom-left-radius: 6px;\n}\n.pagination-lg > li:last-child > a,\n.pagination-lg > li:last-child > span {\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n.pagination-sm > li > a,\n.pagination-sm > li > span {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.pagination-sm > li:first-child > a,\n.pagination-sm > li:first-child > span {\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.pagination-sm > li:last-child > a,\n.pagination-sm > li:last-child > span {\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n.pager {\n  padding-left: 0;\n  margin: 20px 0;\n  text-align: center;\n  list-style: none;\n}\n.pager li {\n  display: inline;\n}\n.pager li > a,\n.pager li > span {\n  display: inline-block;\n  padding: 5px 14px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 15px;\n}\n.pager li > a:hover,\n.pager li > a:focus {\n  text-decoration: none;\n  background-color: #eee;\n}\n.pager .next > a,\n.pager .next > span {\n  float: right;\n}\n.pager .previous > a,\n.pager .previous > span {\n  float: left;\n}\n.pager .disabled > a,\n.pager .disabled > a:hover,\n.pager .disabled > a:focus,\n.pager .disabled > span {\n  color: #777;\n  cursor: not-allowed;\n  background-color: #fff;\n}\n.label {\n  display: inline;\n  padding: .2em .6em .3em;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em;\n}\na.label:hover,\na.label:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n.label:empty {\n  display: none;\n}\n.btn .label {\n  position: relative;\n  top: -1px;\n}\n.label-default {\n  background-color: #777;\n}\n.label-default[href]:hover,\n.label-default[href]:focus {\n  background-color: #5e5e5e;\n}\n.label-primary {\n  background-color: #337ab7;\n}\n.label-primary[href]:hover,\n.label-primary[href]:focus {\n  background-color: #286090;\n}\n.label-success {\n  background-color: #5cb85c;\n}\n.label-success[href]:hover,\n.label-success[href]:focus {\n  background-color: #449d44;\n}\n.label-info {\n  background-color: #5bc0de;\n}\n.label-info[href]:hover,\n.label-info[href]:focus {\n  background-color: #31b0d5;\n}\n.label-warning {\n  background-color: #f0ad4e;\n}\n.label-warning[href]:hover,\n.label-warning[href]:focus {\n  background-color: #ec971f;\n}\n.label-danger {\n  background-color: #d9534f;\n}\n.label-danger[href]:hover,\n.label-danger[href]:focus {\n  background-color: #c9302c;\n}\n.badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  background-color: #777;\n  border-radius: 10px;\n}\n.badge:empty {\n  display: none;\n}\n.btn .badge {\n  position: relative;\n  top: -1px;\n}\n.btn-xs .badge,\n.btn-group-xs > .btn .badge {\n  top: 0;\n  padding: 1px 5px;\n}\na.badge:hover,\na.badge:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n.list-group-item.active > .badge,\n.nav-pills > .active > a > .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n.list-group-item > .badge {\n  float: right;\n}\n.list-group-item > .badge + .badge {\n  margin-right: 5px;\n}\n.nav-pills > li > a > .badge {\n  margin-left: 3px;\n}\n.jumbotron {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  margin-bottom: 30px;\n  color: inherit;\n  background-color: #eee;\n}\n.jumbotron h1,\n.jumbotron .h1 {\n  color: inherit;\n}\n.jumbotron p {\n  margin-bottom: 15px;\n  font-size: 21px;\n  font-weight: 200;\n}\n.jumbotron > hr {\n  border-top-color: #d5d5d5;\n}\n.container .jumbotron,\n.container-fluid .jumbotron {\n  border-radius: 6px;\n}\n.jumbotron .container {\n  max-width: 100%;\n}\n@media screen and (min-width: 768px) {\n  .jumbotron {\n    padding-top: 48px;\n    padding-bottom: 48px;\n  }\n  .container .jumbotron,\n  .container-fluid .jumbotron {\n    padding-right: 60px;\n    padding-left: 60px;\n  }\n  .jumbotron h1,\n  .jumbotron .h1 {\n    font-size: 63px;\n  }\n}\n.thumbnail {\n  display: block;\n  padding: 4px;\n  margin-bottom: 20px;\n  line-height: 1.42857143;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  -webkit-transition: border .2s ease-in-out;\n       -o-transition: border .2s ease-in-out;\n          transition: border .2s ease-in-out;\n}\n.thumbnail > img,\n.thumbnail a > img {\n  margin-right: auto;\n  margin-left: auto;\n}\na.thumbnail:hover,\na.thumbnail:focus,\na.thumbnail.active {\n  border-color: #337ab7;\n}\n.thumbnail .caption {\n  padding: 9px;\n  color: #333;\n}\n.alert {\n  padding: 15px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.alert h4 {\n  margin-top: 0;\n  color: inherit;\n}\n.alert .alert-link {\n  font-weight: bold;\n}\n.alert > p,\n.alert > ul {\n  margin-bottom: 0;\n}\n.alert > p + p {\n  margin-top: 5px;\n}\n.alert-dismissable,\n.alert-dismissible {\n  padding-right: 35px;\n}\n.alert-dismissable .close,\n.alert-dismissible .close {\n  position: relative;\n  top: -2px;\n  right: -21px;\n  color: inherit;\n}\n.alert-success {\n  color: #3c763d;\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n}\n.alert-success hr {\n  border-top-color: #c9e2b3;\n}\n.alert-success .alert-link {\n  color: #2b542c;\n}\n.alert-info {\n  color: #31708f;\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n}\n.alert-info hr {\n  border-top-color: #a6e1ec;\n}\n.alert-info .alert-link {\n  color: #245269;\n}\n.alert-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n}\n.alert-warning hr {\n  border-top-color: #f7e1b5;\n}\n.alert-warning .alert-link {\n  color: #66512c;\n}\n.alert-danger {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #ebccd1;\n}\n.alert-danger hr {\n  border-top-color: #e4b9c0;\n}\n.alert-danger .alert-link {\n  color: #843534;\n}\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n@-o-keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n.progress {\n  height: 20px;\n  margin-bottom: 20px;\n  overflow: hidden;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);\n          box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);\n}\n.progress-bar {\n  float: left;\n  width: 0;\n  height: 100%;\n  font-size: 12px;\n  line-height: 20px;\n  color: #fff;\n  text-align: center;\n  background-color: #337ab7;\n  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);\n          box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);\n  -webkit-transition: width .6s ease;\n       -o-transition: width .6s ease;\n          transition: width .6s ease;\n}\n.progress-striped .progress-bar,\n.progress-bar-striped {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  -webkit-background-size: 40px 40px;\n          background-size: 40px 40px;\n}\n.progress.active .progress-bar,\n.progress-bar.active {\n  -webkit-animation: progress-bar-stripes 2s linear infinite;\n       -o-animation: progress-bar-stripes 2s linear infinite;\n          animation: progress-bar-stripes 2s linear infinite;\n}\n.progress-bar-success {\n  background-color: #5cb85c;\n}\n.progress-striped .progress-bar-success {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n.progress-bar-info {\n  background-color: #5bc0de;\n}\n.progress-striped .progress-bar-info {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n.progress-bar-warning {\n  background-color: #f0ad4e;\n}\n.progress-striped .progress-bar-warning {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n.progress-bar-danger {\n  background-color: #d9534f;\n}\n.progress-striped .progress-bar-danger {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n.media {\n  margin-top: 15px;\n}\n.media:first-child {\n  margin-top: 0;\n}\n.media,\n.media-body {\n  overflow: hidden;\n  zoom: 1;\n}\n.media-body {\n  width: 10000px;\n}\n.media-object {\n  display: block;\n}\n.media-object.img-thumbnail {\n  max-width: none;\n}\n.media-right,\n.media > .pull-right {\n  padding-left: 10px;\n}\n.media-left,\n.media > .pull-left {\n  padding-right: 10px;\n}\n.media-left,\n.media-right,\n.media-body {\n  display: table-cell;\n  vertical-align: top;\n}\n.media-middle {\n  vertical-align: middle;\n}\n.media-bottom {\n  vertical-align: bottom;\n}\n.media-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.media-list {\n  padding-left: 0;\n  list-style: none;\n}\n.list-group {\n  padding-left: 0;\n  margin-bottom: 20px;\n}\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n.list-group-item:first-child {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.list-group-item:last-child {\n  margin-bottom: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\na.list-group-item,\nbutton.list-group-item {\n  color: #555;\n}\na.list-group-item .list-group-item-heading,\nbutton.list-group-item .list-group-item-heading {\n  color: #333;\n}\na.list-group-item:hover,\nbutton.list-group-item:hover,\na.list-group-item:focus,\nbutton.list-group-item:focus {\n  color: #555;\n  text-decoration: none;\n  background-color: #f5f5f5;\n}\nbutton.list-group-item {\n  width: 100%;\n  text-align: left;\n}\n.list-group-item.disabled,\n.list-group-item.disabled:hover,\n.list-group-item.disabled:focus {\n  color: #777;\n  cursor: not-allowed;\n  background-color: #eee;\n}\n.list-group-item.disabled .list-group-item-heading,\n.list-group-item.disabled:hover .list-group-item-heading,\n.list-group-item.disabled:focus .list-group-item-heading {\n  color: inherit;\n}\n.list-group-item.disabled .list-group-item-text,\n.list-group-item.disabled:hover .list-group-item-text,\n.list-group-item.disabled:focus .list-group-item-text {\n  color: #777;\n}\n.list-group-item.active,\n.list-group-item.active:hover,\n.list-group-item.active:focus {\n  z-index: 2;\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n.list-group-item.active .list-group-item-heading,\n.list-group-item.active:hover .list-group-item-heading,\n.list-group-item.active:focus .list-group-item-heading,\n.list-group-item.active .list-group-item-heading > small,\n.list-group-item.active:hover .list-group-item-heading > small,\n.list-group-item.active:focus .list-group-item-heading > small,\n.list-group-item.active .list-group-item-heading > .small,\n.list-group-item.active:hover .list-group-item-heading > .small,\n.list-group-item.active:focus .list-group-item-heading > .small {\n  color: inherit;\n}\n.list-group-item.active .list-group-item-text,\n.list-group-item.active:hover .list-group-item-text,\n.list-group-item.active:focus .list-group-item-text {\n  color: #c7ddef;\n}\n.list-group-item-success {\n  color: #3c763d;\n  background-color: #dff0d8;\n}\na.list-group-item-success,\nbutton.list-group-item-success {\n  color: #3c763d;\n}\na.list-group-item-success .list-group-item-heading,\nbutton.list-group-item-success .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-success:hover,\nbutton.list-group-item-success:hover,\na.list-group-item-success:focus,\nbutton.list-group-item-success:focus {\n  color: #3c763d;\n  background-color: #d0e9c6;\n}\na.list-group-item-success.active,\nbutton.list-group-item-success.active,\na.list-group-item-success.active:hover,\nbutton.list-group-item-success.active:hover,\na.list-group-item-success.active:focus,\nbutton.list-group-item-success.active:focus {\n  color: #fff;\n  background-color: #3c763d;\n  border-color: #3c763d;\n}\n.list-group-item-info {\n  color: #31708f;\n  background-color: #d9edf7;\n}\na.list-group-item-info,\nbutton.list-group-item-info {\n  color: #31708f;\n}\na.list-group-item-info .list-group-item-heading,\nbutton.list-group-item-info .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-info:hover,\nbutton.list-group-item-info:hover,\na.list-group-item-info:focus,\nbutton.list-group-item-info:focus {\n  color: #31708f;\n  background-color: #c4e3f3;\n}\na.list-group-item-info.active,\nbutton.list-group-item-info.active,\na.list-group-item-info.active:hover,\nbutton.list-group-item-info.active:hover,\na.list-group-item-info.active:focus,\nbutton.list-group-item-info.active:focus {\n  color: #fff;\n  background-color: #31708f;\n  border-color: #31708f;\n}\n.list-group-item-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n}\na.list-group-item-warning,\nbutton.list-group-item-warning {\n  color: #8a6d3b;\n}\na.list-group-item-warning .list-group-item-heading,\nbutton.list-group-item-warning .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-warning:hover,\nbutton.list-group-item-warning:hover,\na.list-group-item-warning:focus,\nbutton.list-group-item-warning:focus {\n  color: #8a6d3b;\n  background-color: #faf2cc;\n}\na.list-group-item-warning.active,\nbutton.list-group-item-warning.active,\na.list-group-item-warning.active:hover,\nbutton.list-group-item-warning.active:hover,\na.list-group-item-warning.active:focus,\nbutton.list-group-item-warning.active:focus {\n  color: #fff;\n  background-color: #8a6d3b;\n  border-color: #8a6d3b;\n}\n.list-group-item-danger {\n  color: #a94442;\n  background-color: #f2dede;\n}\na.list-group-item-danger,\nbutton.list-group-item-danger {\n  color: #a94442;\n}\na.list-group-item-danger .list-group-item-heading,\nbutton.list-group-item-danger .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-danger:hover,\nbutton.list-group-item-danger:hover,\na.list-group-item-danger:focus,\nbutton.list-group-item-danger:focus {\n  color: #a94442;\n  background-color: #ebcccc;\n}\na.list-group-item-danger.active,\nbutton.list-group-item-danger.active,\na.list-group-item-danger.active:hover,\nbutton.list-group-item-danger.active:hover,\na.list-group-item-danger.active:focus,\nbutton.list-group-item-danger.active:focus {\n  color: #fff;\n  background-color: #a94442;\n  border-color: #a94442;\n}\n.list-group-item-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.list-group-item-text {\n  margin-bottom: 0;\n  line-height: 1.3;\n}\n.panel {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\n          box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\n}\n.panel-body {\n  padding: 15px;\n}\n.panel-heading {\n  padding: 10px 15px;\n  border-bottom: 1px solid transparent;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.panel-heading > .dropdown .dropdown-toggle {\n  color: inherit;\n}\n.panel-title {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 16px;\n  color: inherit;\n}\n.panel-title > a,\n.panel-title > small,\n.panel-title > .small,\n.panel-title > small > a,\n.panel-title > .small > a {\n  color: inherit;\n}\n.panel-footer {\n  padding: 10px 15px;\n  background-color: #f5f5f5;\n  border-top: 1px solid #ddd;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel > .list-group,\n.panel > .panel-collapse > .list-group {\n  margin-bottom: 0;\n}\n.panel > .list-group .list-group-item,\n.panel > .panel-collapse > .list-group .list-group-item {\n  border-width: 1px 0;\n  border-radius: 0;\n}\n.panel > .list-group:first-child .list-group-item:first-child,\n.panel > .panel-collapse > .list-group:first-child .list-group-item:first-child {\n  border-top: 0;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.panel > .list-group:last-child .list-group-item:last-child,\n.panel > .panel-collapse > .list-group:last-child .list-group-item:last-child {\n  border-bottom: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel > .panel-heading + .panel-collapse > .list-group .list-group-item:first-child {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.panel-heading + .list-group .list-group-item:first-child {\n  border-top-width: 0;\n}\n.list-group + .panel-footer {\n  border-top-width: 0;\n}\n.panel > .table,\n.panel > .table-responsive > .table,\n.panel > .panel-collapse > .table {\n  margin-bottom: 0;\n}\n.panel > .table caption,\n.panel > .table-responsive > .table caption,\n.panel > .panel-collapse > .table caption {\n  padding-right: 15px;\n  padding-left: 15px;\n}\n.panel > .table:first-child,\n.panel > .table-responsive:first-child > .table:first-child {\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child {\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child td:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n.panel > .table:first-child > thead:first-child > tr:first-child th:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {\n  border-top-left-radius: 3px;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child td:last-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n.panel > .table:first-child > thead:first-child > tr:first-child th:last-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {\n  border-top-right-radius: 3px;\n}\n.panel > .table:last-child,\n.panel > .table-responsive:last-child > .table:last-child {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {\n  border-bottom-left-radius: 3px;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {\n  border-bottom-right-radius: 3px;\n}\n.panel > .panel-body + .table,\n.panel > .panel-body + .table-responsive,\n.panel > .table + .panel-body,\n.panel > .table-responsive + .panel-body {\n  border-top: 1px solid #ddd;\n}\n.panel > .table > tbody:first-child > tr:first-child th,\n.panel > .table > tbody:first-child > tr:first-child td {\n  border-top: 0;\n}\n.panel > .table-bordered,\n.panel > .table-responsive > .table-bordered {\n  border: 0;\n}\n.panel > .table-bordered > thead > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > thead > tr > th:first-child,\n.panel > .table-bordered > tbody > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,\n.panel > .table-bordered > tfoot > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n.panel > .table-bordered > thead > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > thead > tr > td:first-child,\n.panel > .table-bordered > tbody > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,\n.panel > .table-bordered > tfoot > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n  border-left: 0;\n}\n.panel > .table-bordered > thead > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > thead > tr > th:last-child,\n.panel > .table-bordered > tbody > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,\n.panel > .table-bordered > tfoot > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n.panel > .table-bordered > thead > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > thead > tr > td:last-child,\n.panel > .table-bordered > tbody > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,\n.panel > .table-bordered > tfoot > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n  border-right: 0;\n}\n.panel > .table-bordered > thead > tr:first-child > td,\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > td,\n.panel > .table-bordered > tbody > tr:first-child > td,\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,\n.panel > .table-bordered > thead > tr:first-child > th,\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > th,\n.panel > .table-bordered > tbody > tr:first-child > th,\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > th {\n  border-bottom: 0;\n}\n.panel > .table-bordered > tbody > tr:last-child > td,\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,\n.panel > .table-bordered > tfoot > tr:last-child > td,\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,\n.panel > .table-bordered > tbody > tr:last-child > th,\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,\n.panel > .table-bordered > tfoot > tr:last-child > th,\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {\n  border-bottom: 0;\n}\n.panel > .table-responsive {\n  margin-bottom: 0;\n  border: 0;\n}\n.panel-group {\n  margin-bottom: 20px;\n}\n.panel-group .panel {\n  margin-bottom: 0;\n  border-radius: 4px;\n}\n.panel-group .panel + .panel {\n  margin-top: 5px;\n}\n.panel-group .panel-heading {\n  border-bottom: 0;\n}\n.panel-group .panel-heading + .panel-collapse > .panel-body,\n.panel-group .panel-heading + .panel-collapse > .list-group {\n  border-top: 1px solid #ddd;\n}\n.panel-group .panel-footer {\n  border-top: 0;\n}\n.panel-group .panel-footer + .panel-collapse .panel-body {\n  border-bottom: 1px solid #ddd;\n}\n.panel-default {\n  border-color: #ddd;\n}\n.panel-default > .panel-heading {\n  color: #333;\n  background-color: #f5f5f5;\n  border-color: #ddd;\n}\n.panel-default > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #ddd;\n}\n.panel-default > .panel-heading .badge {\n  color: #f5f5f5;\n  background-color: #333;\n}\n.panel-default > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #ddd;\n}\n.panel-primary {\n  border-color: #337ab7;\n}\n.panel-primary > .panel-heading {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n.panel-primary > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #337ab7;\n}\n.panel-primary > .panel-heading .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n.panel-primary > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #337ab7;\n}\n.panel-success {\n  border-color: #d6e9c6;\n}\n.panel-success > .panel-heading {\n  color: #3c763d;\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n}\n.panel-success > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #d6e9c6;\n}\n.panel-success > .panel-heading .badge {\n  color: #dff0d8;\n  background-color: #3c763d;\n}\n.panel-success > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #d6e9c6;\n}\n.panel-info {\n  border-color: #bce8f1;\n}\n.panel-info > .panel-heading {\n  color: #31708f;\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n}\n.panel-info > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #bce8f1;\n}\n.panel-info > .panel-heading .badge {\n  color: #d9edf7;\n  background-color: #31708f;\n}\n.panel-info > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #bce8f1;\n}\n.panel-warning {\n  border-color: #faebcc;\n}\n.panel-warning > .panel-heading {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n}\n.panel-warning > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #faebcc;\n}\n.panel-warning > .panel-heading .badge {\n  color: #fcf8e3;\n  background-color: #8a6d3b;\n}\n.panel-warning > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #faebcc;\n}\n.panel-danger {\n  border-color: #ebccd1;\n}\n.panel-danger > .panel-heading {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #ebccd1;\n}\n.panel-danger > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #ebccd1;\n}\n.panel-danger > .panel-heading .badge {\n  color: #f2dede;\n  background-color: #a94442;\n}\n.panel-danger > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #ebccd1;\n}\n.embed-responsive {\n  position: relative;\n  display: block;\n  height: 0;\n  padding: 0;\n  overflow: hidden;\n}\n.embed-responsive .embed-responsive-item,\n.embed-responsive iframe,\n.embed-responsive embed,\n.embed-responsive object,\n.embed-responsive video {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n.embed-responsive-16by9 {\n  padding-bottom: 56.25%;\n}\n.embed-responsive-4by3 {\n  padding-bottom: 75%;\n}\n.well {\n  min-height: 20px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border: 1px solid #e3e3e3;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);\n}\n.well blockquote {\n  border-color: #ddd;\n  border-color: rgba(0, 0, 0, .15);\n}\n.well-lg {\n  padding: 24px;\n  border-radius: 6px;\n}\n.well-sm {\n  padding: 9px;\n  border-radius: 3px;\n}\n.close {\n  float: right;\n  font-size: 21px;\n  font-weight: bold;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  filter: alpha(opacity=20);\n  opacity: .2;\n}\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n  filter: alpha(opacity=50);\n  opacity: .5;\n}\nbutton.close {\n  -webkit-appearance: none;\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n}\n.modal-open {\n  overflow: hidden;\n}\n.modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n}\n.modal.fade .modal-dialog {\n  -webkit-transition: -webkit-transform .3s ease-out;\n       -o-transition:      -o-transform .3s ease-out;\n          transition:         transform .3s ease-out;\n  -webkit-transform: translate(0, -25%);\n      -ms-transform: translate(0, -25%);\n       -o-transform: translate(0, -25%);\n          transform: translate(0, -25%);\n}\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n      -ms-transform: translate(0, 0);\n       -o-transform: translate(0, 0);\n          transform: translate(0, 0);\n}\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px;\n}\n.modal-content {\n  position: relative;\n  background-color: #fff;\n  -webkit-background-clip: padding-box;\n          background-clip: padding-box;\n  border: 1px solid #999;\n  border: 1px solid rgba(0, 0, 0, .2);\n  border-radius: 6px;\n  outline: 0;\n  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, .5);\n          box-shadow: 0 3px 9px rgba(0, 0, 0, .5);\n}\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000;\n}\n.modal-backdrop.fade {\n  filter: alpha(opacity=0);\n  opacity: 0;\n}\n.modal-backdrop.in {\n  filter: alpha(opacity=50);\n  opacity: .5;\n}\n.modal-header {\n  min-height: 16.42857143px;\n  padding: 15px;\n  border-bottom: 1px solid #e5e5e5;\n}\n.modal-header .close {\n  margin-top: -2px;\n}\n.modal-title {\n  margin: 0;\n  line-height: 1.42857143;\n}\n.modal-body {\n  position: relative;\n  padding: 15px;\n}\n.modal-footer {\n  padding: 15px;\n  text-align: right;\n  border-top: 1px solid #e5e5e5;\n}\n.modal-footer .btn + .btn {\n  margin-bottom: 0;\n  margin-left: 5px;\n}\n.modal-footer .btn-group .btn + .btn {\n  margin-left: -1px;\n}\n.modal-footer .btn-block + .btn-block {\n  margin-left: 0;\n}\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n@media (min-width: 768px) {\n  .modal-dialog {\n    width: 600px;\n    margin: 30px auto;\n  }\n  .modal-content {\n    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, .5);\n            box-shadow: 0 5px 15px rgba(0, 0, 0, .5);\n  }\n  .modal-sm {\n    width: 300px;\n  }\n}\n@media (min-width: 992px) {\n  .modal-lg {\n    width: 900px;\n  }\n}\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  white-space: normal;\n  filter: alpha(opacity=0);\n  opacity: 0;\n\n  line-break: auto;\n}\n.tooltip.in {\n  filter: alpha(opacity=90);\n  opacity: .9;\n}\n.tooltip.top {\n  padding: 5px 0;\n  margin-top: -3px;\n}\n.tooltip.right {\n  padding: 0 5px;\n  margin-left: 3px;\n}\n.tooltip.bottom {\n  padding: 5px 0;\n  margin-top: 3px;\n}\n.tooltip.left {\n  padding: 0 5px;\n  margin-left: -3px;\n}\n.tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 4px;\n}\n.tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.tooltip.top .tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n.tooltip.top-left .tooltip-arrow {\n  right: 5px;\n  bottom: 0;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n.tooltip.top-right .tooltip-arrow {\n  bottom: 0;\n  left: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n.tooltip.right .tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000;\n}\n.tooltip.left .tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000;\n}\n.tooltip.bottom .tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n.tooltip.bottom-left .tooltip-arrow {\n  top: 0;\n  right: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n.tooltip.bottom-right .tooltip-arrow {\n  top: 0;\n  left: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: none;\n  max-width: 276px;\n  padding: 1px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  white-space: normal;\n  background-color: #fff;\n  -webkit-background-clip: padding-box;\n          background-clip: padding-box;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, .2);\n  border-radius: 6px;\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, .2);\n          box-shadow: 0 5px 10px rgba(0, 0, 0, .2);\n\n  line-break: auto;\n}\n.popover.top {\n  margin-top: -10px;\n}\n.popover.right {\n  margin-left: 10px;\n}\n.popover.bottom {\n  margin-top: 10px;\n}\n.popover.left {\n  margin-left: -10px;\n}\n.popover-title {\n  padding: 8px 14px;\n  margin: 0;\n  font-size: 14px;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-radius: 5px 5px 0 0;\n}\n.popover-content {\n  padding: 9px 14px;\n}\n.popover > .arrow,\n.popover > .arrow:after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.popover > .arrow {\n  border-width: 11px;\n}\n.popover > .arrow:after {\n  content: \"\";\n  border-width: 10px;\n}\n.popover.top > .arrow {\n  bottom: -11px;\n  left: 50%;\n  margin-left: -11px;\n  border-top-color: #999;\n  border-top-color: rgba(0, 0, 0, .25);\n  border-bottom-width: 0;\n}\n.popover.top > .arrow:after {\n  bottom: 1px;\n  margin-left: -10px;\n  content: \" \";\n  border-top-color: #fff;\n  border-bottom-width: 0;\n}\n.popover.right > .arrow {\n  top: 50%;\n  left: -11px;\n  margin-top: -11px;\n  border-right-color: #999;\n  border-right-color: rgba(0, 0, 0, .25);\n  border-left-width: 0;\n}\n.popover.right > .arrow:after {\n  bottom: -10px;\n  left: 1px;\n  content: \" \";\n  border-right-color: #fff;\n  border-left-width: 0;\n}\n.popover.bottom > .arrow {\n  top: -11px;\n  left: 50%;\n  margin-left: -11px;\n  border-top-width: 0;\n  border-bottom-color: #999;\n  border-bottom-color: rgba(0, 0, 0, .25);\n}\n.popover.bottom > .arrow:after {\n  top: 1px;\n  margin-left: -10px;\n  content: \" \";\n  border-top-width: 0;\n  border-bottom-color: #fff;\n}\n.popover.left > .arrow {\n  top: 50%;\n  right: -11px;\n  margin-top: -11px;\n  border-right-width: 0;\n  border-left-color: #999;\n  border-left-color: rgba(0, 0, 0, .25);\n}\n.popover.left > .arrow:after {\n  right: 1px;\n  bottom: -10px;\n  content: \" \";\n  border-right-width: 0;\n  border-left-color: #fff;\n}\n.carousel {\n  position: relative;\n}\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.carousel-inner > .item {\n  position: relative;\n  display: none;\n  -webkit-transition: .6s ease-in-out left;\n       -o-transition: .6s ease-in-out left;\n          transition: .6s ease-in-out left;\n}\n.carousel-inner > .item > img,\n.carousel-inner > .item > a > img {\n  line-height: 1;\n}\n@media all and (transform-3d), (-webkit-transform-3d) {\n  .carousel-inner > .item {\n    -webkit-transition: -webkit-transform .6s ease-in-out;\n         -o-transition:      -o-transform .6s ease-in-out;\n            transition:         transform .6s ease-in-out;\n\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    -webkit-perspective: 1000px;\n            perspective: 1000px;\n  }\n  .carousel-inner > .item.next,\n  .carousel-inner > .item.active.right {\n    left: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0);\n  }\n  .carousel-inner > .item.prev,\n  .carousel-inner > .item.active.left {\n    left: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0);\n  }\n  .carousel-inner > .item.next.left,\n  .carousel-inner > .item.prev.right,\n  .carousel-inner > .item.active {\n    left: 0;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n.carousel-inner > .active,\n.carousel-inner > .next,\n.carousel-inner > .prev {\n  display: block;\n}\n.carousel-inner > .active {\n  left: 0;\n}\n.carousel-inner > .next,\n.carousel-inner > .prev {\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.carousel-inner > .next {\n  left: 100%;\n}\n.carousel-inner > .prev {\n  left: -100%;\n}\n.carousel-inner > .next.left,\n.carousel-inner > .prev.right {\n  left: 0;\n}\n.carousel-inner > .active.left {\n  left: -100%;\n}\n.carousel-inner > .active.right {\n  left: 100%;\n}\n.carousel-control {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 15%;\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, .6);\n  filter: alpha(opacity=50);\n  opacity: .5;\n}\n.carousel-control.left {\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);\n  background-image:      -o-linear-gradient(left, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);\n  background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .5)), to(rgba(0, 0, 0, .0001)));\n  background-image:         linear-gradient(to right, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);\n  background-repeat: repeat-x;\n}\n.carousel-control.right {\n  right: 0;\n  left: auto;\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);\n  background-image:      -o-linear-gradient(left, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);\n  background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .0001)), to(rgba(0, 0, 0, .5)));\n  background-image:         linear-gradient(to right, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);\n  background-repeat: repeat-x;\n}\n.carousel-control:hover,\n.carousel-control:focus {\n  color: #fff;\n  text-decoration: none;\n  filter: alpha(opacity=90);\n  outline: 0;\n  opacity: .9;\n}\n.carousel-control .icon-prev,\n.carousel-control .icon-next,\n.carousel-control .glyphicon-chevron-left,\n.carousel-control .glyphicon-chevron-right {\n  position: absolute;\n  top: 50%;\n  z-index: 5;\n  display: inline-block;\n  margin-top: -10px;\n}\n.carousel-control .icon-prev,\n.carousel-control .glyphicon-chevron-left {\n  left: 50%;\n  margin-left: -10px;\n}\n.carousel-control .icon-next,\n.carousel-control .glyphicon-chevron-right {\n  right: 50%;\n  margin-right: -10px;\n}\n.carousel-control .icon-prev,\n.carousel-control .icon-next {\n  width: 20px;\n  height: 20px;\n  font-family: serif;\n  line-height: 1;\n}\n.carousel-control .icon-prev:before {\n  content: '\\2039';\n}\n.carousel-control .icon-next:before {\n  content: '\\203A';\n}\n.carousel-indicators {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  z-index: 15;\n  width: 60%;\n  padding-left: 0;\n  margin-left: -30%;\n  text-align: center;\n  list-style: none;\n}\n.carousel-indicators li {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin: 1px;\n  text-indent: -999px;\n  cursor: pointer;\n  background-color: #000 \\9;\n  background-color: rgba(0, 0, 0, 0);\n  border: 1px solid #fff;\n  border-radius: 10px;\n}\n.carousel-indicators .active {\n  width: 12px;\n  height: 12px;\n  margin: 0;\n  background-color: #fff;\n}\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 20px;\n  left: 15%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, .6);\n}\n.carousel-caption .btn {\n  text-shadow: none;\n}\n@media screen and (min-width: 768px) {\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    width: 30px;\n    height: 30px;\n    margin-top: -15px;\n    font-size: 30px;\n  }\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .icon-prev {\n    margin-left: -15px;\n  }\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-next {\n    margin-right: -15px;\n  }\n  .carousel-caption {\n    right: 20%;\n    left: 20%;\n    padding-bottom: 30px;\n  }\n  .carousel-indicators {\n    bottom: 20px;\n  }\n}\n.clearfix:before,\n.clearfix:after,\n.dl-horizontal dd:before,\n.dl-horizontal dd:after,\n.container:before,\n.container:after,\n.container-fluid:before,\n.container-fluid:after,\n.row:before,\n.row:after,\n.form-horizontal .form-group:before,\n.form-horizontal .form-group:after,\n.btn-toolbar:before,\n.btn-toolbar:after,\n.btn-group-vertical > .btn-group:before,\n.btn-group-vertical > .btn-group:after,\n.nav:before,\n.nav:after,\n.navbar:before,\n.navbar:after,\n.navbar-header:before,\n.navbar-header:after,\n.navbar-collapse:before,\n.navbar-collapse:after,\n.pager:before,\n.pager:after,\n.panel-body:before,\n.panel-body:after,\n.modal-footer:before,\n.modal-footer:after {\n  display: table;\n  content: \" \";\n}\n.clearfix:after,\n.dl-horizontal dd:after,\n.container:after,\n.container-fluid:after,\n.row:after,\n.form-horizontal .form-group:after,\n.btn-toolbar:after,\n.btn-group-vertical > .btn-group:after,\n.nav:after,\n.navbar:after,\n.navbar-header:after,\n.navbar-collapse:after,\n.pager:after,\n.panel-body:after,\n.modal-footer:after {\n  clear: both;\n}\n.center-block {\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n}\n.pull-right {\n  float: right !important;\n}\n.pull-left {\n  float: left !important;\n}\n.hide {\n  display: none !important;\n}\n.show {\n  display: block !important;\n}\n.invisible {\n  visibility: hidden;\n}\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.hidden {\n  display: none !important;\n}\n.affix {\n  position: fixed;\n}\n@-ms-viewport {\n  width: device-width;\n}\n.visible-xs,\n.visible-sm,\n.visible-md,\n.visible-lg {\n  display: none !important;\n}\n.visible-xs-block,\n.visible-xs-inline,\n.visible-xs-inline-block,\n.visible-sm-block,\n.visible-sm-inline,\n.visible-sm-inline-block,\n.visible-md-block,\n.visible-md-inline,\n.visible-md-inline-block,\n.visible-lg-block,\n.visible-lg-inline,\n.visible-lg-inline-block {\n  display: none !important;\n}\n@media (max-width: 767px) {\n  .visible-xs {\n    display: block !important;\n  }\n  table.visible-xs {\n    display: table !important;\n  }\n  tr.visible-xs {\n    display: table-row !important;\n  }\n  th.visible-xs,\n  td.visible-xs {\n    display: table-cell !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-block {\n    display: block !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-inline {\n    display: inline !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm {\n    display: block !important;\n  }\n  table.visible-sm {\n    display: table !important;\n  }\n  tr.visible-sm {\n    display: table-row !important;\n  }\n  th.visible-sm,\n  td.visible-sm {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-block {\n    display: block !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md {\n    display: block !important;\n  }\n  table.visible-md {\n    display: table !important;\n  }\n  tr.visible-md {\n    display: table-row !important;\n  }\n  th.visible-md,\n  td.visible-md {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-block {\n    display: block !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg {\n    display: block !important;\n  }\n  table.visible-lg {\n    display: table !important;\n  }\n  tr.visible-lg {\n    display: table-row !important;\n  }\n  th.visible-lg,\n  td.visible-lg {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-block {\n    display: block !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (max-width: 767px) {\n  .hidden-xs {\n    display: none !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .hidden-sm {\n    display: none !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .hidden-md {\n    display: none !important;\n  }\n}\n@media (min-width: 1200px) {\n  .hidden-lg {\n    display: none !important;\n  }\n}\n.visible-print {\n  display: none !important;\n}\n@media print {\n  .visible-print {\n    display: block !important;\n  }\n  table.visible-print {\n    display: table !important;\n  }\n  tr.visible-print {\n    display: table-row !important;\n  }\n  th.visible-print,\n  td.visible-print {\n    display: table-cell !important;\n  }\n}\n.visible-print-block {\n  display: none !important;\n}\n@media print {\n  .visible-print-block {\n    display: block !important;\n  }\n}\n.visible-print-inline {\n  display: none !important;\n}\n@media print {\n  .visible-print-inline {\n    display: inline !important;\n  }\n}\n.visible-print-inline-block {\n  display: none !important;\n}\n@media print {\n  .visible-print-inline-block {\n    display: inline-block !important;\n  }\n}\n@media print {\n  .hidden-print {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=bootstrap.css.map */\n", ""]);

	// exports


/***/ },
/* 6 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "f4769f9bdb7466be65088239c12046d1.eot";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "448c34a56d699c29117adc64c43affeb.woff2";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fa2772327f55d8198301fdb8bcfc8158.woff";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e18bbf611f2a2e43afc071aa2f4e1512.ttf";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "89889688147bd7575d6327160d64e760.svg";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 13 */,
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (window) {
	    'use strict';

	    /*global define, module, exports, require */

	    var c3 = { version: "0.4.10" };

	    var c3_chart_fn,
	        c3_chart_internal_fn,
	        c3_chart_internal_axis_fn;

	    function API(owner) {
	        this.owner = owner;
	    }

	    function inherit(base, derived) {

	        if (Object.create) {
	            derived.prototype = Object.create(base.prototype);
	        } else {
	            var f = function f() {};
	            f.prototype = base.prototype;
	            derived.prototype = new f();
	        }

	        derived.prototype.constructor = derived;

	        return derived;
	    }

	    function Chart(config) {
	        var $$ = this.internal = new ChartInternal(this);
	        $$.loadConfig(config);
	        $$.init();

	        // bind "this" to nested API
	        (function bindThis(fn, target, argThis) {
	            Object.keys(fn).forEach(function (key) {
	                target[key] = fn[key].bind(argThis);
	                if (Object.keys(fn[key]).length > 0) {
	                    bindThis(fn[key], target[key], argThis);
	                }
	            });
	        })(c3_chart_fn, this, this);
	    }

	    function ChartInternal(api) {
	        var $$ = this;
	        $$.d3 = window.d3 ? window.d3 :  true ? __webpack_require__(13) : undefined;
	        $$.api = api;
	        $$.config = $$.getDefaultConfig();
	        $$.data = {};
	        $$.cache = {};
	        $$.axes = {};
	    }

	    c3.generate = function (config) {
	        return new Chart(config);
	    };

	    c3.chart = {
	        fn: Chart.prototype,
	        internal: {
	            fn: ChartInternal.prototype,
	            axis: {
	                fn: Axis.prototype
	            }
	        }
	    };
	    c3_chart_fn = c3.chart.fn;
	    c3_chart_internal_fn = c3.chart.internal.fn;
	    c3_chart_internal_axis_fn = c3.chart.internal.axis.fn;

	    c3_chart_internal_fn.init = function () {
	        var $$ = this, config = $$.config;

	        $$.initParams();

	        if (config.data_url) {
	            $$.convertUrlToData(config.data_url, config.data_mimeType, config.data_keys, $$.initWithData);
	        }
	        else if (config.data_json) {
	            $$.initWithData($$.convertJsonToData(config.data_json, config.data_keys));
	        }
	        else if (config.data_rows) {
	            $$.initWithData($$.convertRowsToData(config.data_rows));
	        }
	        else if (config.data_columns) {
	            $$.initWithData($$.convertColumnsToData(config.data_columns));
	        }
	        else {
	            throw Error('url or json or rows or columns is required.');
	        }
	    };

	    c3_chart_internal_fn.initParams = function () {
	        var $$ = this, d3 = $$.d3, config = $$.config;

	        // MEMO: clipId needs to be unique because it conflicts when multiple charts exist
	        $$.clipId = "c3-" + (+new Date()) + '-clip',
	        $$.clipIdForXAxis = $$.clipId + '-xaxis',
	        $$.clipIdForYAxis = $$.clipId + '-yaxis',
	        $$.clipIdForGrid = $$.clipId + '-grid',
	        $$.clipIdForSubchart = $$.clipId + '-subchart',
	        $$.clipPath = $$.getClipPath($$.clipId),
	        $$.clipPathForXAxis = $$.getClipPath($$.clipIdForXAxis),
	        $$.clipPathForYAxis = $$.getClipPath($$.clipIdForYAxis);
	        $$.clipPathForGrid = $$.getClipPath($$.clipIdForGrid),
	        $$.clipPathForSubchart = $$.getClipPath($$.clipIdForSubchart),

	        $$.dragStart = null;
	        $$.dragging = false;
	        $$.flowing = false;
	        $$.cancelClick = false;
	        $$.mouseover = false;
	        $$.transiting = false;

	        $$.color = $$.generateColor();
	        $$.levelColor = $$.generateLevelColor();

	        $$.dataTimeFormat = config.data_xLocaltime ? d3.time.format : d3.time.format.utc;
	        $$.axisTimeFormat = config.axis_x_localtime ? d3.time.format : d3.time.format.utc;
	        $$.defaultAxisTimeFormat = $$.axisTimeFormat.multi([
	            [".%L", function (d) { return d.getMilliseconds(); }],
	            [":%S", function (d) { return d.getSeconds(); }],
	            ["%I:%M", function (d) { return d.getMinutes(); }],
	            ["%I %p", function (d) { return d.getHours(); }],
	            ["%-m/%-d", function (d) { return d.getDay() && d.getDate() !== 1; }],
	            ["%-m/%-d", function (d) { return d.getDate() !== 1; }],
	            ["%-m/%-d", function (d) { return d.getMonth(); }],
	            ["%Y/%-m/%-d", function () { return true; }]
	        ]);

	        $$.hiddenTargetIds = [];
	        $$.hiddenLegendIds = [];
	        $$.focusedTargetIds = [];
	        $$.defocusedTargetIds = [];

	        $$.xOrient = config.axis_rotated ? "left" : "bottom";
	        $$.yOrient = config.axis_rotated ? (config.axis_y_inner ? "top" : "bottom") : (config.axis_y_inner ? "right" : "left");
	        $$.y2Orient = config.axis_rotated ? (config.axis_y2_inner ? "bottom" : "top") : (config.axis_y2_inner ? "left" : "right");
	        $$.subXOrient = config.axis_rotated ? "left" : "bottom";

	        $$.isLegendRight = config.legend_position === 'right';
	        $$.isLegendInset = config.legend_position === 'inset';
	        $$.isLegendTop = config.legend_inset_anchor === 'top-left' || config.legend_inset_anchor === 'top-right';
	        $$.isLegendLeft = config.legend_inset_anchor === 'top-left' || config.legend_inset_anchor === 'bottom-left';
	        $$.legendStep = 0;
	        $$.legendItemWidth = 0;
	        $$.legendItemHeight = 0;

	        $$.currentMaxTickWidths = {
	            x: 0,
	            y: 0,
	            y2: 0
	        };

	        $$.rotated_padding_left = 30;
	        $$.rotated_padding_right = config.axis_rotated && !config.axis_x_show ? 0 : 30;
	        $$.rotated_padding_top = 5;

	        $$.withoutFadeIn = {};

	        $$.intervalForObserveInserted = undefined;

	        $$.axes.subx = d3.selectAll([]); // needs when excluding subchart.js
	    };

	    c3_chart_internal_fn.initChartElements = function () {
	        if (this.initBar) { this.initBar(); }
	        if (this.initLine) { this.initLine(); }
	        if (this.initArc) { this.initArc(); }
	        if (this.initGauge) { this.initGauge(); }
	        if (this.initText) { this.initText(); }
	    };

	    c3_chart_internal_fn.initWithData = function (data) {
	        var $$ = this, d3 = $$.d3, config = $$.config;
	        var defs, main, binding = true;

	        $$.axis = new Axis($$);

	        if ($$.initPie) { $$.initPie(); }
	        if ($$.initBrush) { $$.initBrush(); }
	        if ($$.initZoom) { $$.initZoom(); }

	        if (!config.bindto) {
	            $$.selectChart = d3.selectAll([]);
	        }
	        else if (typeof config.bindto.node === 'function') {
	            $$.selectChart = config.bindto;
	        }
	        else {
	            $$.selectChart = d3.select(config.bindto);
	        }
	        if ($$.selectChart.empty()) {
	            $$.selectChart = d3.select(document.createElement('div')).style('opacity', 0);
	            $$.observeInserted($$.selectChart);
	            binding = false;
	        }
	        $$.selectChart.html("").classed("c3", true);

	        // Init data as targets
	        $$.data.xs = {};
	        $$.data.targets = $$.convertDataToTargets(data);

	        if (config.data_filter) {
	            $$.data.targets = $$.data.targets.filter(config.data_filter);
	        }

	        // Set targets to hide if needed
	        if (config.data_hide) {
	            $$.addHiddenTargetIds(config.data_hide === true ? $$.mapToIds($$.data.targets) : config.data_hide);
	        }
	        if (config.legend_hide) {
	            $$.addHiddenLegendIds(config.legend_hide === true ? $$.mapToIds($$.data.targets) : config.legend_hide);
	        }

	        // when gauge, hide legend // TODO: fix
	        if ($$.hasType('gauge')) {
	            config.legend_show = false;
	        }

	        // Init sizes and scales
	        $$.updateSizes();
	        $$.updateScales();

	        // Set domains for each scale
	        $$.x.domain(d3.extent($$.getXDomain($$.data.targets)));
	        $$.y.domain($$.getYDomain($$.data.targets, 'y'));
	        $$.y2.domain($$.getYDomain($$.data.targets, 'y2'));
	        $$.subX.domain($$.x.domain());
	        $$.subY.domain($$.y.domain());
	        $$.subY2.domain($$.y2.domain());

	        // Save original x domain for zoom update
	        $$.orgXDomain = $$.x.domain();

	        // Set initialized scales to brush and zoom
	        if ($$.brush) { $$.brush.scale($$.subX); }
	        if (config.zoom_enabled) { $$.zoom.scale($$.x); }

	        /*-- Basic Elements --*/

	        // Define svgs
	        $$.svg = $$.selectChart.append("svg")
	            .style("overflow", "hidden")
	            .on('mouseenter', function () { return config.onmouseover.call($$); })
	            .on('mouseleave', function () { return config.onmouseout.call($$); });

	        // Define defs
	        defs = $$.svg.append("defs");
	        $$.clipChart = $$.appendClip(defs, $$.clipId);
	        $$.clipXAxis = $$.appendClip(defs, $$.clipIdForXAxis);
	        $$.clipYAxis = $$.appendClip(defs, $$.clipIdForYAxis);
	        $$.clipGrid = $$.appendClip(defs, $$.clipIdForGrid);
	        $$.clipSubchart = $$.appendClip(defs, $$.clipIdForSubchart);
	        $$.updateSvgSize();

	        // Define regions
	        main = $$.main = $$.svg.append("g").attr("transform", $$.getTranslate('main'));

	        if ($$.initSubchart) { $$.initSubchart(); }
	        if ($$.initTooltip) { $$.initTooltip(); }
	        if ($$.initLegend) { $$.initLegend(); }

	        /*-- Main Region --*/

	        // text when empty
	        main.append("text")
	            .attr("class", CLASS.text + ' ' + CLASS.empty)
	            .attr("text-anchor", "middle") // horizontal centering of text at x position in all browsers.
	            .attr("dominant-baseline", "middle"); // vertical centering of text at y position in all browsers, except IE.

	        // Regions
	        $$.initRegion();

	        // Grids
	        $$.initGrid();

	        // Define g for chart area
	        main.append('g')
	            .attr("clip-path", $$.clipPath)
	            .attr('class', CLASS.chart);

	        // Grid lines
	        if (config.grid_lines_front) { $$.initGridLines(); }

	        // Cover whole with rects for events
	        $$.initEventRect();

	        // Define g for chart
	        $$.initChartElements();

	        // if zoom privileged, insert rect to forefront
	        // TODO: is this needed?
	        main.insert('rect', config.zoom_privileged ? null : 'g.' + CLASS.regions)
	            .attr('class', CLASS.zoomRect)
	            .attr('width', $$.width)
	            .attr('height', $$.height)
	            .style('opacity', 0)
	            .on("dblclick.zoom", null);

	        // Set default extent if defined
	        if (config.axis_x_extent) { $$.brush.extent($$.getDefaultExtent()); }

	        // Add Axis
	        $$.axis.init();

	        // Set targets
	        $$.updateTargets($$.data.targets);

	        // Draw with targets
	        if (binding) {
	            $$.updateDimension();
	            $$.config.oninit.call($$);
	            $$.redraw({
	                withTransition: false,
	                withTransform: true,
	                withUpdateXDomain: true,
	                withUpdateOrgXDomain: true,
	                withTransitionForAxis: false
	            });
	        }

	        // Bind resize event
	        if (window.onresize == null) {
	            window.onresize = $$.generateResize();
	        }
	        if (window.onresize.add) {
	            window.onresize.add(function () {
	                config.onresize.call($$);
	            });
	            window.onresize.add(function () {
	                $$.api.flush();
	            });
	            window.onresize.add(function () {
	                config.onresized.call($$);
	            });
	        }

	        // export element of the chart
	        $$.api.element = $$.selectChart.node();
	    };

	    c3_chart_internal_fn.smoothLines = function (el, type) {
	        var $$ = this;
	        if (type === 'grid') {
	            el.each(function () {
	                var g = $$.d3.select(this),
	                    x1 = g.attr('x1'),
	                    x2 = g.attr('x2'),
	                    y1 = g.attr('y1'),
	                    y2 = g.attr('y2');
	                g.attr({
	                    'x1': Math.ceil(x1),
	                    'x2': Math.ceil(x2),
	                    'y1': Math.ceil(y1),
	                    'y2': Math.ceil(y2)
	                });
	            });
	        }
	    };


	    c3_chart_internal_fn.updateSizes = function () {
	        var $$ = this, config = $$.config;
	        var legendHeight = $$.legend ? $$.getLegendHeight() : 0,
	            legendWidth = $$.legend ? $$.getLegendWidth() : 0,
	            legendHeightForBottom = $$.isLegendRight || $$.isLegendInset ? 0 : legendHeight,
	            hasArc = $$.hasArcType(),
	            xAxisHeight = config.axis_rotated || hasArc ? 0 : $$.getHorizontalAxisHeight('x'),
	            subchartHeight = config.subchart_show && !hasArc ? (config.subchart_size_height + xAxisHeight) : 0;

	        $$.currentWidth = $$.getCurrentWidth();
	        $$.currentHeight = $$.getCurrentHeight();

	        // for main
	        $$.margin = config.axis_rotated ? {
	            top: $$.getHorizontalAxisHeight('y2') + $$.getCurrentPaddingTop(),
	            right: hasArc ? 0 : $$.getCurrentPaddingRight(),
	            bottom: $$.getHorizontalAxisHeight('y') + legendHeightForBottom + $$.getCurrentPaddingBottom(),
	            left: subchartHeight + (hasArc ? 0 : $$.getCurrentPaddingLeft())
	        } : {
	            top: 4 + $$.getCurrentPaddingTop(), // for top tick text
	            right: hasArc ? 0 : $$.getCurrentPaddingRight(),
	            bottom: xAxisHeight + subchartHeight + legendHeightForBottom + $$.getCurrentPaddingBottom(),
	            left: hasArc ? 0 : $$.getCurrentPaddingLeft()
	        };

	        // for subchart
	        $$.margin2 = config.axis_rotated ? {
	            top: $$.margin.top,
	            right: NaN,
	            bottom: 20 + legendHeightForBottom,
	            left: $$.rotated_padding_left
	        } : {
	            top: $$.currentHeight - subchartHeight - legendHeightForBottom,
	            right: NaN,
	            bottom: xAxisHeight + legendHeightForBottom,
	            left: $$.margin.left
	        };

	        // for legend
	        $$.margin3 = {
	            top: 0,
	            right: NaN,
	            bottom: 0,
	            left: 0
	        };
	        if ($$.updateSizeForLegend) { $$.updateSizeForLegend(legendHeight, legendWidth); }

	        $$.width = $$.currentWidth - $$.margin.left - $$.margin.right;
	        $$.height = $$.currentHeight - $$.margin.top - $$.margin.bottom;
	        if ($$.width < 0) { $$.width = 0; }
	        if ($$.height < 0) { $$.height = 0; }

	        $$.width2 = config.axis_rotated ? $$.margin.left - $$.rotated_padding_left - $$.rotated_padding_right : $$.width;
	        $$.height2 = config.axis_rotated ? $$.height : $$.currentHeight - $$.margin2.top - $$.margin2.bottom;
	        if ($$.width2 < 0) { $$.width2 = 0; }
	        if ($$.height2 < 0) { $$.height2 = 0; }

	        // for arc
	        $$.arcWidth = $$.width - ($$.isLegendRight ? legendWidth + 10 : 0);
	        $$.arcHeight = $$.height - ($$.isLegendRight ? 0 : 10);
	        if ($$.hasType('gauge')) {
	            $$.arcHeight += $$.height - $$.getGaugeLabelHeight();
	        }
	        if ($$.updateRadius) { $$.updateRadius(); }

	        if ($$.isLegendRight && hasArc) {
	            $$.margin3.left = $$.arcWidth / 2 + $$.radiusExpanded * 1.1;
	        }
	    };

	    c3_chart_internal_fn.updateTargets = function (targets) {
	        var $$ = this;

	        /*-- Main --*/

	        //-- Text --//
	        $$.updateTargetsForText(targets);

	        //-- Bar --//
	        $$.updateTargetsForBar(targets);

	        //-- Line --//
	        $$.updateTargetsForLine(targets);

	        //-- Arc --//
	        if ($$.hasArcType() && $$.updateTargetsForArc) { $$.updateTargetsForArc(targets); }

	        /*-- Sub --*/

	        if ($$.updateTargetsForSubchart) { $$.updateTargetsForSubchart(targets); }

	        // Fade-in each chart
	        $$.showTargets();
	    };
	    c3_chart_internal_fn.showTargets = function () {
	        var $$ = this;
	        $$.svg.selectAll('.' + CLASS.target).filter(function (d) { return $$.isTargetToShow(d.id); })
	          .transition().duration($$.config.transition_duration)
	            .style("opacity", 1);
	    };

	    c3_chart_internal_fn.redraw = function (options, transitions) {
	        var $$ = this, main = $$.main, d3 = $$.d3, config = $$.config;
	        var areaIndices = $$.getShapeIndices($$.isAreaType), barIndices = $$.getShapeIndices($$.isBarType), lineIndices = $$.getShapeIndices($$.isLineType);
	        var withY, withSubchart, withTransition, withTransitionForExit, withTransitionForAxis,
	            withTransform, withUpdateXDomain, withUpdateOrgXDomain, withTrimXDomain, withLegend,
	            withEventRect, withDimension, withUpdateXAxis;
	        var hideAxis = $$.hasArcType();
	        var drawArea, drawBar, drawLine, xForText, yForText;
	        var duration, durationForExit, durationForAxis;
	        var waitForDraw, flow;
	        var targetsToShow = $$.filterTargetsToShow($$.data.targets), tickValues, i, intervalForCulling, xDomainForZoom;
	        var xv = $$.xv.bind($$), cx, cy;

	        options = options || {};
	        withY = getOption(options, "withY", true);
	        withSubchart = getOption(options, "withSubchart", true);
	        withTransition = getOption(options, "withTransition", true);
	        withTransform = getOption(options, "withTransform", false);
	        withUpdateXDomain = getOption(options, "withUpdateXDomain", false);
	        withUpdateOrgXDomain = getOption(options, "withUpdateOrgXDomain", false);
	        withTrimXDomain = getOption(options, "withTrimXDomain", true);
	        withUpdateXAxis = getOption(options, "withUpdateXAxis", withUpdateXDomain);
	        withLegend = getOption(options, "withLegend", false);
	        withEventRect = getOption(options, "withEventRect", true);
	        withDimension = getOption(options, "withDimension", true);
	        withTransitionForExit = getOption(options, "withTransitionForExit", withTransition);
	        withTransitionForAxis = getOption(options, "withTransitionForAxis", withTransition);

	        duration = withTransition ? config.transition_duration : 0;
	        durationForExit = withTransitionForExit ? duration : 0;
	        durationForAxis = withTransitionForAxis ? duration : 0;

	        transitions = transitions || $$.axis.generateTransitions(durationForAxis);

	        // update legend and transform each g
	        if (withLegend && config.legend_show) {
	            $$.updateLegend($$.mapToIds($$.data.targets), options, transitions);
	        } else if (withDimension) {
	            // need to update dimension (e.g. axis.y.tick.values) because y tick values should change
	            // no need to update axis in it because they will be updated in redraw()
	            $$.updateDimension(true);
	        }

	        // MEMO: needed for grids calculation
	        if ($$.isCategorized() && targetsToShow.length === 0) {
	            $$.x.domain([0, $$.axes.x.selectAll('.tick').size()]);
	        }

	        if (targetsToShow.length) {
	            $$.updateXDomain(targetsToShow, withUpdateXDomain, withUpdateOrgXDomain, withTrimXDomain);
	            if (!config.axis_x_tick_values) {
	                tickValues = $$.axis.updateXAxisTickValues(targetsToShow);
	            }
	        } else {
	            $$.xAxis.tickValues([]);
	            $$.subXAxis.tickValues([]);
	        }

	        if (config.zoom_rescale && !options.flow) {
	            xDomainForZoom = $$.x.orgDomain();
	        }

	        $$.y.domain($$.getYDomain(targetsToShow, 'y', xDomainForZoom));
	        $$.y2.domain($$.getYDomain(targetsToShow, 'y2', xDomainForZoom));

	        if (!config.axis_y_tick_values && config.axis_y_tick_count) {
	            $$.yAxis.tickValues($$.axis.generateTickValues($$.y.domain(), config.axis_y_tick_count));
	        }
	        if (!config.axis_y2_tick_values && config.axis_y2_tick_count) {
	            $$.y2Axis.tickValues($$.axis.generateTickValues($$.y2.domain(), config.axis_y2_tick_count));
	        }

	        // axes
	        $$.axis.redraw(transitions, hideAxis);

	        // Update axis label
	        $$.axis.updateLabels(withTransition);

	        // show/hide if manual culling needed
	        if ((withUpdateXDomain || withUpdateXAxis) && targetsToShow.length) {
	            if (config.axis_x_tick_culling && tickValues) {
	                for (i = 1; i < tickValues.length; i++) {
	                    if (tickValues.length / i < config.axis_x_tick_culling_max) {
	                        intervalForCulling = i;
	                        break;
	                    }
	                }
	                $$.svg.selectAll('.' + CLASS.axisX + ' .tick text').each(function (e) {
	                    var index = tickValues.indexOf(e);
	                    if (index >= 0) {
	                        d3.select(this).style('display', index % intervalForCulling ? 'none' : 'block');
	                    }
	                });
	            } else {
	                $$.svg.selectAll('.' + CLASS.axisX + ' .tick text').style('display', 'block');
	            }
	        }

	        // setup drawer - MEMO: these must be called after axis updated
	        drawArea = $$.generateDrawArea ? $$.generateDrawArea(areaIndices, false) : undefined;
	        drawBar = $$.generateDrawBar ? $$.generateDrawBar(barIndices) : undefined;
	        drawLine = $$.generateDrawLine ? $$.generateDrawLine(lineIndices, false) : undefined;
	        xForText = $$.generateXYForText(areaIndices, barIndices, lineIndices, true);
	        yForText = $$.generateXYForText(areaIndices, barIndices, lineIndices, false);

	        // Update sub domain
	        if (withY) {
	            $$.subY.domain($$.getYDomain(targetsToShow, 'y'));
	            $$.subY2.domain($$.getYDomain(targetsToShow, 'y2'));
	        }

	        // tooltip
	        $$.tooltip.style("display", "none");

	        // xgrid focus
	        $$.updateXgridFocus();

	        // Data empty label positioning and text.
	        main.select("text." + CLASS.text + '.' + CLASS.empty)
	            .attr("x", $$.width / 2)
	            .attr("y", $$.height / 2)
	            .text(config.data_empty_label_text)
	          .transition()
	            .style('opacity', targetsToShow.length ? 0 : 1);

	        // grid
	        $$.updateGrid(duration);

	        // rect for regions
	        $$.updateRegion(duration);

	        // bars
	        $$.updateBar(durationForExit);

	        // lines, areas and cricles
	        $$.updateLine(durationForExit);
	        $$.updateArea(durationForExit);
	        $$.updateCircle();

	        // text
	        if ($$.hasDataLabel()) {
	            $$.updateText(durationForExit);
	        }

	        // arc
	        if ($$.redrawArc) { $$.redrawArc(duration, durationForExit, withTransform); }

	        // subchart
	        if ($$.redrawSubchart) {
	            $$.redrawSubchart(withSubchart, transitions, duration, durationForExit, areaIndices, barIndices, lineIndices);
	        }

	        // circles for select
	        main.selectAll('.' + CLASS.selectedCircles)
	            .filter($$.isBarType.bind($$))
	            .selectAll('circle')
	            .remove();

	        // event rects will redrawn when flow called
	        if (config.interaction_enabled && !options.flow && withEventRect) {
	            $$.redrawEventRect();
	            if ($$.updateZoom) { $$.updateZoom(); }
	        }

	        // update circleY based on updated parameters
	        $$.updateCircleY();

	        // generate circle x/y functions depending on updated params
	        cx = ($$.config.axis_rotated ? $$.circleY : $$.circleX).bind($$);
	        cy = ($$.config.axis_rotated ? $$.circleX : $$.circleY).bind($$);

	        if (options.flow) {
	            flow = $$.generateFlow({
	                targets: targetsToShow,
	                flow: options.flow,
	                duration: options.flow.duration,
	                drawBar: drawBar,
	                drawLine: drawLine,
	                drawArea: drawArea,
	                cx: cx,
	                cy: cy,
	                xv: xv,
	                xForText: xForText,
	                yForText: yForText
	            });
	        }

	        if ((duration || flow) && $$.isTabVisible()) { // Only use transition if tab visible. See #938.
	            // transition should be derived from one transition
	            d3.transition().duration(duration).each(function () {
	                var transitionsToWait = [];

	                // redraw and gather transitions
	                [
	                    $$.redrawBar(drawBar, true),
	                    $$.redrawLine(drawLine, true),
	                    $$.redrawArea(drawArea, true),
	                    $$.redrawCircle(cx, cy, true),
	                    $$.redrawText(xForText, yForText, options.flow, true),
	                    $$.redrawRegion(true),
	                    $$.redrawGrid(true),
	                ].forEach(function (transitions) {
	                    transitions.forEach(function (transition) {
	                        transitionsToWait.push(transition);
	                    });
	                });

	                // Wait for end of transitions to call flow and onrendered callback
	                waitForDraw = $$.generateWait();
	                transitionsToWait.forEach(function (t) {
	                    waitForDraw.add(t);
	                });
	            })
	            .call(waitForDraw, function () {
	                if (flow) {
	                    flow();
	                }
	                if (config.onrendered) {
	                    config.onrendered.call($$);
	                }
	            });
	        }
	        else {
	            $$.redrawBar(drawBar);
	            $$.redrawLine(drawLine);
	            $$.redrawArea(drawArea);
	            $$.redrawCircle(cx, cy);
	            $$.redrawText(xForText, yForText, options.flow);
	            $$.redrawRegion();
	            $$.redrawGrid();
	            if (config.onrendered) {
	                config.onrendered.call($$);
	            }
	        }

	        // update fadein condition
	        $$.mapToIds($$.data.targets).forEach(function (id) {
	            $$.withoutFadeIn[id] = true;
	        });
	    };

	    c3_chart_internal_fn.updateAndRedraw = function (options) {
	        var $$ = this, config = $$.config, transitions;
	        options = options || {};
	        // same with redraw
	        options.withTransition = getOption(options, "withTransition", true);
	        options.withTransform = getOption(options, "withTransform", false);
	        options.withLegend = getOption(options, "withLegend", false);
	        // NOT same with redraw
	        options.withUpdateXDomain = true;
	        options.withUpdateOrgXDomain = true;
	        options.withTransitionForExit = false;
	        options.withTransitionForTransform = getOption(options, "withTransitionForTransform", options.withTransition);
	        // MEMO: this needs to be called before updateLegend and it means this ALWAYS needs to be called)
	        $$.updateSizes();
	        // MEMO: called in updateLegend in redraw if withLegend
	        if (!(options.withLegend && config.legend_show)) {
	            transitions = $$.axis.generateTransitions(options.withTransitionForAxis ? config.transition_duration : 0);
	            // Update scales
	            $$.updateScales();
	            $$.updateSvgSize();
	            // Update g positions
	            $$.transformAll(options.withTransitionForTransform, transitions);
	        }
	        // Draw with new sizes & scales
	        $$.redraw(options, transitions);
	    };
	    c3_chart_internal_fn.redrawWithoutRescale = function () {
	        this.redraw({
	            withY: false,
	            withSubchart: false,
	            withEventRect: false,
	            withTransitionForAxis: false
	        });
	    };

	    c3_chart_internal_fn.isTimeSeries = function () {
	        return this.config.axis_x_type === 'timeseries';
	    };
	    c3_chart_internal_fn.isCategorized = function () {
	        return this.config.axis_x_type.indexOf('categor') >= 0;
	    };
	    c3_chart_internal_fn.isCustomX = function () {
	        var $$ = this, config = $$.config;
	        return !$$.isTimeSeries() && (config.data_x || notEmpty(config.data_xs));
	    };

	    c3_chart_internal_fn.isTimeSeriesY = function () {
	        return this.config.axis_y_type === 'timeseries';
	    };

	    c3_chart_internal_fn.getTranslate = function (target) {
	        var $$ = this, config = $$.config, x, y;
	        if (target === 'main') {
	            x = asHalfPixel($$.margin.left);
	            y = asHalfPixel($$.margin.top);
	        } else if (target === 'context') {
	            x = asHalfPixel($$.margin2.left);
	            y = asHalfPixel($$.margin2.top);
	        } else if (target === 'legend') {
	            x = $$.margin3.left;
	            y = $$.margin3.top;
	        } else if (target === 'x') {
	            x = 0;
	            y = config.axis_rotated ? 0 : $$.height;
	        } else if (target === 'y') {
	            x = 0;
	            y = config.axis_rotated ? $$.height : 0;
	        } else if (target === 'y2') {
	            x = config.axis_rotated ? 0 : $$.width;
	            y = config.axis_rotated ? 1 : 0;
	        } else if (target === 'subx') {
	            x = 0;
	            y = config.axis_rotated ? 0 : $$.height2;
	        } else if (target === 'arc') {
	            x = $$.arcWidth / 2;
	            y = $$.arcHeight / 2;
	        }
	        return "translate(" + x + "," + y + ")";
	    };
	    c3_chart_internal_fn.initialOpacity = function (d) {
	        return d.value !== null && this.withoutFadeIn[d.id] ? 1 : 0;
	    };
	    c3_chart_internal_fn.initialOpacityForCircle = function (d) {
	        return d.value !== null && this.withoutFadeIn[d.id] ? this.opacityForCircle(d) : 0;
	    };
	    c3_chart_internal_fn.opacityForCircle = function (d) {
	        var opacity = this.config.point_show ? 1 : 0;
	        return isValue(d.value) ? (this.isScatterType(d) ? 0.5 : opacity) : 0;
	    };
	    c3_chart_internal_fn.opacityForText = function () {
	        return this.hasDataLabel() ? 1 : 0;
	    };
	    c3_chart_internal_fn.xx = function (d) {
	        return d ? this.x(d.x) : null;
	    };
	    c3_chart_internal_fn.xv = function (d) {
	        var $$ = this, value = d.value;
	        if ($$.isTimeSeries()) {
	            value = $$.parseDate(d.value);
	        }
	        else if ($$.isCategorized() && typeof d.value === 'string') {
	            value = $$.config.axis_x_categories.indexOf(d.value);
	        }
	        return Math.ceil($$.x(value));
	    };
	    c3_chart_internal_fn.yv = function (d) {
	        var $$ = this,
	            yScale = d.axis && d.axis === 'y2' ? $$.y2 : $$.y;
	        return Math.ceil(yScale(d.value));
	    };
	    c3_chart_internal_fn.subxx = function (d) {
	        return d ? this.subX(d.x) : null;
	    };

	    c3_chart_internal_fn.transformMain = function (withTransition, transitions) {
	        var $$ = this,
	            xAxis, yAxis, y2Axis;
	        if (transitions && transitions.axisX) {
	            xAxis = transitions.axisX;
	        } else {
	            xAxis  = $$.main.select('.' + CLASS.axisX);
	            if (withTransition) { xAxis = xAxis.transition(); }
	        }
	        if (transitions && transitions.axisY) {
	            yAxis = transitions.axisY;
	        } else {
	            yAxis = $$.main.select('.' + CLASS.axisY);
	            if (withTransition) { yAxis = yAxis.transition(); }
	        }
	        if (transitions && transitions.axisY2) {
	            y2Axis = transitions.axisY2;
	        } else {
	            y2Axis = $$.main.select('.' + CLASS.axisY2);
	            if (withTransition) { y2Axis = y2Axis.transition(); }
	        }
	        (withTransition ? $$.main.transition() : $$.main).attr("transform", $$.getTranslate('main'));
	        xAxis.attr("transform", $$.getTranslate('x'));
	        yAxis.attr("transform", $$.getTranslate('y'));
	        y2Axis.attr("transform", $$.getTranslate('y2'));
	        $$.main.select('.' + CLASS.chartArcs).attr("transform", $$.getTranslate('arc'));
	    };
	    c3_chart_internal_fn.transformAll = function (withTransition, transitions) {
	        var $$ = this;
	        $$.transformMain(withTransition, transitions);
	        if ($$.config.subchart_show) { $$.transformContext(withTransition, transitions); }
	        if ($$.legend) { $$.transformLegend(withTransition); }
	    };

	    c3_chart_internal_fn.updateSvgSize = function () {
	        var $$ = this,
	            brush = $$.svg.select(".c3-brush .background");
	        $$.svg.attr('width', $$.currentWidth).attr('height', $$.currentHeight);
	        $$.svg.selectAll(['#' + $$.clipId, '#' + $$.clipIdForGrid]).select('rect')
	            .attr('width', $$.width)
	            .attr('height', $$.height);
	        $$.svg.select('#' + $$.clipIdForXAxis).select('rect')
	            .attr('x', $$.getXAxisClipX.bind($$))
	            .attr('y', $$.getXAxisClipY.bind($$))
	            .attr('width', $$.getXAxisClipWidth.bind($$))
	            .attr('height', $$.getXAxisClipHeight.bind($$));
	        $$.svg.select('#' + $$.clipIdForYAxis).select('rect')
	            .attr('x', $$.getYAxisClipX.bind($$))
	            .attr('y', $$.getYAxisClipY.bind($$))
	            .attr('width', $$.getYAxisClipWidth.bind($$))
	            .attr('height', $$.getYAxisClipHeight.bind($$));
	        $$.svg.select('#' + $$.clipIdForSubchart).select('rect')
	            .attr('width', $$.width)
	            .attr('height', brush.size() ? brush.attr('height') : 0);
	        $$.svg.select('.' + CLASS.zoomRect)
	            .attr('width', $$.width)
	            .attr('height', $$.height);
	        // MEMO: parent div's height will be bigger than svg when <!DOCTYPE html>
	        $$.selectChart.style('max-height', $$.currentHeight + "px");
	    };


	    c3_chart_internal_fn.updateDimension = function (withoutAxis) {
	        var $$ = this;
	        if (!withoutAxis) {
	            if ($$.config.axis_rotated) {
	                $$.axes.x.call($$.xAxis);
	                $$.axes.subx.call($$.subXAxis);
	            } else {
	                $$.axes.y.call($$.yAxis);
	                $$.axes.y2.call($$.y2Axis);
	            }
	        }
	        $$.updateSizes();
	        $$.updateScales();
	        $$.updateSvgSize();
	        $$.transformAll(false);
	    };

	    c3_chart_internal_fn.observeInserted = function (selection) {
	        var $$ = this, observer;
	        if (typeof MutationObserver === 'undefined') {
	            window.console.error("MutationObserver not defined.");
	            return;
	        }
	        observer= new MutationObserver(function (mutations) {
	            mutations.forEach(function (mutation) {
	                if (mutation.type === 'childList' && mutation.previousSibling) {
	                    observer.disconnect();
	                    // need to wait for completion of load because size calculation requires the actual sizes determined after that completion
	                    $$.intervalForObserveInserted = window.setInterval(function () {
	                        // parentNode will NOT be null when completed
	                        if (selection.node().parentNode) {
	                            window.clearInterval($$.intervalForObserveInserted);
	                            $$.updateDimension();
	                            $$.config.oninit.call($$);
	                            $$.redraw({
	                                withTransform: true,
	                                withUpdateXDomain: true,
	                                withUpdateOrgXDomain: true,
	                                withTransition: false,
	                                withTransitionForTransform: false,
	                                withLegend: true
	                            });
	                            selection.transition().style('opacity', 1);
	                        }
	                    }, 10);
	                }
	            });
	        });
	        observer.observe(selection.node(), {attributes: true, childList: true, characterData: true});
	    };


	    c3_chart_internal_fn.generateResize = function () {
	        var resizeFunctions = [];
	        function callResizeFunctions() {
	            resizeFunctions.forEach(function (f) {
	                f();
	            });
	        }
	        callResizeFunctions.add = function (f) {
	            resizeFunctions.push(f);
	        };
	        return callResizeFunctions;
	    };

	    c3_chart_internal_fn.endall = function (transition, callback) {
	        var n = 0;
	        transition
	            .each(function () { ++n; })
	            .each("end", function () {
	                if (!--n) { callback.apply(this, arguments); }
	            });
	    };
	    c3_chart_internal_fn.generateWait = function () {
	        var transitionsToWait = [],
	            f = function (transition, callback) {
	                var timer = setInterval(function () {
	                    var done = 0;
	                    transitionsToWait.forEach(function (t) {
	                        if (t.empty()) {
	                            done += 1;
	                            return;
	                        }
	                        try {
	                            t.transition();
	                        } catch (e) {
	                            done += 1;
	                        }
	                    });
	                    if (done === transitionsToWait.length) {
	                        clearInterval(timer);
	                        if (callback) { callback(); }
	                    }
	                }, 10);
	            };
	        f.add = function (transition) {
	            transitionsToWait.push(transition);
	        };
	        return f;
	    };

	    c3_chart_internal_fn.parseDate = function (date) {
	        var $$ = this, parsedDate;
	        if (date instanceof Date) {
	            parsedDate = date;
	        } else if (typeof date === 'string') {
	            parsedDate = $$.dataTimeFormat($$.config.data_xFormat).parse(date);
	        } else if (typeof date === 'number' || !isNaN(date)) {
	            parsedDate = new Date(+date);
	        }
	        if (!parsedDate || isNaN(+parsedDate)) {
	            window.console.error("Failed to parse x '" + date + "' to Date object");
	        }
	        return parsedDate;
	    };

	    c3_chart_internal_fn.isTabVisible = function () {
	        var hidden;
	        if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support
	            hidden = "hidden";
	        } else if (typeof document.mozHidden !== "undefined") {
	            hidden = "mozHidden";
	        } else if (typeof document.msHidden !== "undefined") {
	            hidden = "msHidden";
	        } else if (typeof document.webkitHidden !== "undefined") {
	            hidden = "webkitHidden";
	        }

	        return document[hidden] ? false : true;
	    };

	    c3_chart_internal_fn.getDefaultConfig = function () {
	        var config = {
	            bindto: '#chart',
	            size_width: undefined,
	            size_height: undefined,
	            padding_left: undefined,
	            padding_right: undefined,
	            padding_top: undefined,
	            padding_bottom: undefined,
	            zoom_enabled: false,
	            zoom_extent: undefined,
	            zoom_privileged: false,
	            zoom_rescale: false,
	            zoom_onzoom: function () {},
	            zoom_onzoomstart: function () {},
	            zoom_onzoomend: function () {},
	            interaction_enabled: true,
	            onmouseover: function () {},
	            onmouseout: function () {},
	            onresize: function () {},
	            onresized: function () {},
	            oninit: function () {},
	            onrendered: function () {},
	            transition_duration: 350,
	            data_x: undefined,
	            data_xs: {},
	            data_xFormat: '%Y-%m-%d',
	            data_xLocaltime: true,
	            data_xSort: true,
	            data_idConverter: function (id) { return id; },
	            data_names: {},
	            data_classes: {},
	            data_groups: [],
	            data_axes: {},
	            data_type: undefined,
	            data_types: {},
	            data_labels: {},
	            data_order: 'desc',
	            data_regions: {},
	            data_color: undefined,
	            data_colors: {},
	            data_hide: false,
	            data_filter: undefined,
	            data_selection_enabled: false,
	            data_selection_grouped: false,
	            data_selection_isselectable: function () { return true; },
	            data_selection_multiple: true,
	            data_selection_draggable: false,
	            data_onclick: function () {},
	            data_onmouseover: function () {},
	            data_onmouseout: function () {},
	            data_onselected: function () {},
	            data_onunselected: function () {},
	            data_url: undefined,
	            data_json: undefined,
	            data_rows: undefined,
	            data_columns: undefined,
	            data_mimeType: undefined,
	            data_keys: undefined,
	            // configuration for no plot-able data supplied.
	            data_empty_label_text: "",
	            // subchart
	            subchart_show: false,
	            subchart_size_height: 60,
	            subchart_onbrush: function () {},
	            // color
	            color_pattern: [],
	            color_threshold: {},
	            // legend
	            legend_show: true,
	            legend_hide: false,
	            legend_position: 'bottom',
	            legend_inset_anchor: 'top-left',
	            legend_inset_x: 10,
	            legend_inset_y: 0,
	            legend_inset_step: undefined,
	            legend_item_onclick: undefined,
	            legend_item_onmouseover: undefined,
	            legend_item_onmouseout: undefined,
	            legend_equally: false,
	            // axis
	            axis_rotated: false,
	            axis_x_show: true,
	            axis_x_type: 'indexed',
	            axis_x_localtime: true,
	            axis_x_categories: [],
	            axis_x_tick_centered: false,
	            axis_x_tick_format: undefined,
	            axis_x_tick_culling: {},
	            axis_x_tick_culling_max: 10,
	            axis_x_tick_count: undefined,
	            axis_x_tick_fit: true,
	            axis_x_tick_values: null,
	            axis_x_tick_rotate: 0,
	            axis_x_tick_outer: true,
	            axis_x_tick_multiline: true,
	            axis_x_tick_width: null,
	            axis_x_max: undefined,
	            axis_x_min: undefined,
	            axis_x_padding: {},
	            axis_x_height: undefined,
	            axis_x_extent: undefined,
	            axis_x_label: {},
	            axis_y_show: true,
	            axis_y_type: undefined,
	            axis_y_max: undefined,
	            axis_y_min: undefined,
	            axis_y_inverted: false,
	            axis_y_center: undefined,
	            axis_y_inner: undefined,
	            axis_y_label: {},
	            axis_y_tick_format: undefined,
	            axis_y_tick_outer: true,
	            axis_y_tick_values: null,
	            axis_y_tick_count: undefined,
	            axis_y_tick_time_value: undefined,
	            axis_y_tick_time_interval: undefined,
	            axis_y_padding: {},
	            axis_y_default: undefined,
	            axis_y2_show: false,
	            axis_y2_max: undefined,
	            axis_y2_min: undefined,
	            axis_y2_inverted: false,
	            axis_y2_center: undefined,
	            axis_y2_inner: undefined,
	            axis_y2_label: {},
	            axis_y2_tick_format: undefined,
	            axis_y2_tick_outer: true,
	            axis_y2_tick_values: null,
	            axis_y2_tick_count: undefined,
	            axis_y2_padding: {},
	            axis_y2_default: undefined,
	            // grid
	            grid_x_show: false,
	            grid_x_type: 'tick',
	            grid_x_lines: [],
	            grid_y_show: false,
	            // not used
	            // grid_y_type: 'tick',
	            grid_y_lines: [],
	            grid_y_ticks: 10,
	            grid_focus_show: true,
	            grid_lines_front: true,
	            // point - point of each data
	            point_show: true,
	            point_r: 2.5,
	            point_focus_expand_enabled: true,
	            point_focus_expand_r: undefined,
	            point_select_r: undefined,
	            // line
	            line_connectNull: false,
	            line_step_type: 'step',
	            // bar
	            bar_width: undefined,
	            bar_width_ratio: 0.6,
	            bar_width_max: undefined,
	            bar_zerobased: true,
	            // area
	            area_zerobased: true,
	            // pie
	            pie_label_show: true,
	            pie_label_format: undefined,
	            pie_label_threshold: 0.05,
	            pie_expand: true,
	            // gauge
	            gauge_label_show: true,
	            gauge_label_format: undefined,
	            gauge_expand: true,
	            gauge_min: 0,
	            gauge_max: 100,
	            gauge_units: undefined,
	            gauge_width: undefined,
	            // donut
	            donut_label_show: true,
	            donut_label_format: undefined,
	            donut_label_threshold: 0.05,
	            donut_width: undefined,
	            donut_expand: true,
	            donut_title: "",
	            // region - region to change style
	            regions: [],
	            // tooltip - show when mouseover on each data
	            tooltip_show: true,
	            tooltip_grouped: true,
	            tooltip_format_title: undefined,
	            tooltip_format_name: undefined,
	            tooltip_format_value: undefined,
	            tooltip_position: undefined,
	            tooltip_contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
	                return this.getTooltipContent ? this.getTooltipContent(d, defaultTitleFormat, defaultValueFormat, color) : '';
	            },
	            tooltip_init_show: false,
	            tooltip_init_x: 0,
	            tooltip_init_position: {top: '0px', left: '50px'}
	        };

	        Object.keys(this.additionalConfig).forEach(function (key) {
	            config[key] = this.additionalConfig[key];
	        }, this);

	        return config;
	    };
	    c3_chart_internal_fn.additionalConfig = {};

	    c3_chart_internal_fn.loadConfig = function (config) {
	        var this_config = this.config, target, keys, read;
	        function find() {
	            var key = keys.shift();
	    //        console.log("key =>", key, ", target =>", target);
	            if (key && target && typeof target === 'object' && key in target) {
	                target = target[key];
	                return find();
	            }
	            else if (!key) {
	                return target;
	            }
	            else {
	                return undefined;
	            }
	        }
	        Object.keys(this_config).forEach(function (key) {
	            target = config;
	            keys = key.split('_');
	            read = find();
	    //        console.log("CONFIG : ", key, read);
	            if (isDefined(read)) {
	                this_config[key] = read;
	            }
	        });
	    };

	    c3_chart_internal_fn.getScale = function (min, max, forTimeseries) {
	        return (forTimeseries ? this.d3.time.scale() : this.d3.scale.linear()).range([min, max]);
	    };
	    c3_chart_internal_fn.getX = function (min, max, domain, offset) {
	        var $$ = this,
	            scale = $$.getScale(min, max, $$.isTimeSeries()),
	            _scale = domain ? scale.domain(domain) : scale, key;
	        // Define customized scale if categorized axis
	        if ($$.isCategorized()) {
	            offset = offset || function () { return 0; };
	            scale = function (d, raw) {
	                var v = _scale(d) + offset(d);
	                return raw ? v : Math.ceil(v);
	            };
	        } else {
	            scale = function (d, raw) {
	                var v = _scale(d);
	                return raw ? v : Math.ceil(v);
	            };
	        }
	        // define functions
	        for (key in _scale) {
	            scale[key] = _scale[key];
	        }
	        scale.orgDomain = function () {
	            return _scale.domain();
	        };
	        // define custom domain() for categorized axis
	        if ($$.isCategorized()) {
	            scale.domain = function (domain) {
	                if (!arguments.length) {
	                    domain = this.orgDomain();
	                    return [domain[0], domain[1] + 1];
	                }
	                _scale.domain(domain);
	                return scale;
	            };
	        }
	        return scale;
	    };
	    c3_chart_internal_fn.getY = function (min, max, domain) {
	        var scale = this.getScale(min, max, this.isTimeSeriesY());
	        if (domain) { scale.domain(domain); }
	        return scale;
	    };
	    c3_chart_internal_fn.getYScale = function (id) {
	        return this.axis.getId(id) === 'y2' ? this.y2 : this.y;
	    };
	    c3_chart_internal_fn.getSubYScale = function (id) {
	        return this.axis.getId(id) === 'y2' ? this.subY2 : this.subY;
	    };
	    c3_chart_internal_fn.updateScales = function () {
	        var $$ = this, config = $$.config,
	            forInit = !$$.x;
	        // update edges
	        $$.xMin = config.axis_rotated ? 1 : 0;
	        $$.xMax = config.axis_rotated ? $$.height : $$.width;
	        $$.yMin = config.axis_rotated ? 0 : $$.height;
	        $$.yMax = config.axis_rotated ? $$.width : 1;
	        $$.subXMin = $$.xMin;
	        $$.subXMax = $$.xMax;
	        $$.subYMin = config.axis_rotated ? 0 : $$.height2;
	        $$.subYMax = config.axis_rotated ? $$.width2 : 1;
	        // update scales
	        $$.x = $$.getX($$.xMin, $$.xMax, forInit ? undefined : $$.x.orgDomain(), function () { return $$.xAxis.tickOffset(); });
	        $$.y = $$.getY($$.yMin, $$.yMax, forInit ? config.axis_y_default : $$.y.domain());
	        $$.y2 = $$.getY($$.yMin, $$.yMax, forInit ? config.axis_y2_default : $$.y2.domain());
	        $$.subX = $$.getX($$.xMin, $$.xMax, $$.orgXDomain, function (d) { return d % 1 ? 0 : $$.subXAxis.tickOffset(); });
	        $$.subY = $$.getY($$.subYMin, $$.subYMax, forInit ? config.axis_y_default : $$.subY.domain());
	        $$.subY2 = $$.getY($$.subYMin, $$.subYMax, forInit ? config.axis_y2_default : $$.subY2.domain());
	        // update axes
	        $$.xAxisTickFormat = $$.axis.getXAxisTickFormat();
	        $$.xAxisTickValues = $$.axis.getXAxisTickValues();
	        $$.yAxisTickValues = $$.axis.getYAxisTickValues();
	        $$.y2AxisTickValues = $$.axis.getY2AxisTickValues();

	        $$.xAxis = $$.axis.getXAxis($$.x, $$.xOrient, $$.xAxisTickFormat, $$.xAxisTickValues, config.axis_x_tick_outer);
	        $$.subXAxis = $$.axis.getXAxis($$.subX, $$.subXOrient, $$.xAxisTickFormat, $$.xAxisTickValues, config.axis_x_tick_outer);
	        $$.yAxis = $$.axis.getYAxis($$.y, $$.yOrient, config.axis_y_tick_format, $$.yAxisTickValues, config.axis_y_tick_outer);
	        $$.y2Axis = $$.axis.getYAxis($$.y2, $$.y2Orient, config.axis_y2_tick_format, $$.y2AxisTickValues, config.axis_y2_tick_outer);

	        // Set initialized scales to brush and zoom
	        if (!forInit) {
	            if ($$.brush) { $$.brush.scale($$.subX); }
	            if (config.zoom_enabled) { $$.zoom.scale($$.x); }
	        }
	        // update for arc
	        if ($$.updateArc) { $$.updateArc(); }
	    };

	    c3_chart_internal_fn.getYDomainMin = function (targets) {
	        var $$ = this, config = $$.config,
	            ids = $$.mapToIds(targets), ys = $$.getValuesAsIdKeyed(targets),
	            j, k, baseId, idsInGroup, id, hasNegativeValue;
	        if (config.data_groups.length > 0) {
	            hasNegativeValue = $$.hasNegativeValueInTargets(targets);
	            for (j = 0; j < config.data_groups.length; j++) {
	                // Determine baseId
	                idsInGroup = config.data_groups[j].filter(function (id) { return ids.indexOf(id) >= 0; });
	                if (idsInGroup.length === 0) { continue; }
	                baseId = idsInGroup[0];
	                // Consider negative values
	                if (hasNegativeValue && ys[baseId]) {
	                    ys[baseId].forEach(function (v, i) {
	                        ys[baseId][i] = v < 0 ? v : 0;
	                    });
	                }
	                // Compute min
	                for (k = 1; k < idsInGroup.length; k++) {
	                    id = idsInGroup[k];
	                    if (! ys[id]) { continue; }
	                    ys[id].forEach(function (v, i) {
	                        if ($$.axis.getId(id) === $$.axis.getId(baseId) && ys[baseId] && !(hasNegativeValue && +v > 0)) {
	                            ys[baseId][i] += +v;
	                        }
	                    });
	                }
	            }
	        }
	        return $$.d3.min(Object.keys(ys).map(function (key) { return $$.d3.min(ys[key]); }));
	    };
	    c3_chart_internal_fn.getYDomainMax = function (targets) {
	        var $$ = this, config = $$.config,
	            ids = $$.mapToIds(targets), ys = $$.getValuesAsIdKeyed(targets),
	            j, k, baseId, idsInGroup, id, hasPositiveValue;
	        if (config.data_groups.length > 0) {
	            hasPositiveValue = $$.hasPositiveValueInTargets(targets);
	            for (j = 0; j < config.data_groups.length; j++) {
	                // Determine baseId
	                idsInGroup = config.data_groups[j].filter(function (id) { return ids.indexOf(id) >= 0; });
	                if (idsInGroup.length === 0) { continue; }
	                baseId = idsInGroup[0];
	                // Consider positive values
	                if (hasPositiveValue && ys[baseId]) {
	                    ys[baseId].forEach(function (v, i) {
	                        ys[baseId][i] = v > 0 ? v : 0;
	                    });
	                }
	                // Compute max
	                for (k = 1; k < idsInGroup.length; k++) {
	                    id = idsInGroup[k];
	                    if (! ys[id]) { continue; }
	                    ys[id].forEach(function (v, i) {
	                        if ($$.axis.getId(id) === $$.axis.getId(baseId) && ys[baseId] && !(hasPositiveValue && +v < 0)) {
	                            ys[baseId][i] += +v;
	                        }
	                    });
	                }
	            }
	        }
	        return $$.d3.max(Object.keys(ys).map(function (key) { return $$.d3.max(ys[key]); }));
	    };
	    c3_chart_internal_fn.getYDomain = function (targets, axisId, xDomain) {
	        var $$ = this, config = $$.config,
	            targetsByAxisId = targets.filter(function (t) { return $$.axis.getId(t.id) === axisId; }),
	            yTargets = xDomain ? $$.filterByXDomain(targetsByAxisId, xDomain) : targetsByAxisId,
	            yMin = axisId === 'y2' ? config.axis_y2_min : config.axis_y_min,
	            yMax = axisId === 'y2' ? config.axis_y2_max : config.axis_y_max,
	            yDomainMin = $$.getYDomainMin(yTargets),
	            yDomainMax = $$.getYDomainMax(yTargets),
	            domain, domainLength, padding, padding_top, padding_bottom,
	            center = axisId === 'y2' ? config.axis_y2_center : config.axis_y_center,
	            yDomainAbs, lengths, diff, ratio, isAllPositive, isAllNegative,
	            isZeroBased = ($$.hasType('bar', yTargets) && config.bar_zerobased) || ($$.hasType('area', yTargets) && config.area_zerobased),
	            isInverted = axisId === 'y2' ? config.axis_y2_inverted : config.axis_y_inverted,
	            showHorizontalDataLabel = $$.hasDataLabel() && config.axis_rotated,
	            showVerticalDataLabel = $$.hasDataLabel() && !config.axis_rotated;

	        // MEMO: avoid inverting domain unexpectedly
	        yDomainMin = isValue(yMin) ? yMin : isValue(yMax) ? (yDomainMin < yMax ? yDomainMin : yMax - 10) : yDomainMin;
	        yDomainMax = isValue(yMax) ? yMax : isValue(yMin) ? (yMin < yDomainMax ? yDomainMax : yMin + 10) : yDomainMax;

	        if (yTargets.length === 0) { // use current domain if target of axisId is none
	            return axisId === 'y2' ? $$.y2.domain() : $$.y.domain();
	        }
	        if (isNaN(yDomainMin)) { // set minimum to zero when not number
	            yDomainMin = 0;
	        }
	        if (isNaN(yDomainMax)) { // set maximum to have same value as yDomainMin
	            yDomainMax = yDomainMin;
	        }
	        if (yDomainMin === yDomainMax) {
	            yDomainMin < 0 ? yDomainMax = 0 : yDomainMin = 0;
	        }
	        isAllPositive = yDomainMin >= 0 && yDomainMax >= 0;
	        isAllNegative = yDomainMin <= 0 && yDomainMax <= 0;

	        // Cancel zerobased if axis_*_min / axis_*_max specified
	        if ((isValue(yMin) && isAllPositive) || (isValue(yMax) && isAllNegative)) {
	            isZeroBased = false;
	        }

	        // Bar/Area chart should be 0-based if all positive|negative
	        if (isZeroBased) {
	            if (isAllPositive) { yDomainMin = 0; }
	            if (isAllNegative) { yDomainMax = 0; }
	        }

	        domainLength = Math.abs(yDomainMax - yDomainMin);
	        padding = padding_top = padding_bottom = domainLength * 0.1;

	        if (typeof center !== 'undefined') {
	            yDomainAbs = Math.max(Math.abs(yDomainMin), Math.abs(yDomainMax));
	            yDomainMax = center + yDomainAbs;
	            yDomainMin = center - yDomainAbs;
	        }
	        // add padding for data label
	        if (showHorizontalDataLabel) {
	            lengths = $$.getDataLabelLength(yDomainMin, yDomainMax, 'width');
	            diff = diffDomain($$.y.range());
	            ratio = [lengths[0] / diff, lengths[1] / diff];
	            padding_top += domainLength * (ratio[1] / (1 - ratio[0] - ratio[1]));
	            padding_bottom += domainLength * (ratio[0] / (1 - ratio[0] - ratio[1]));
	        } else if (showVerticalDataLabel) {
	            lengths = $$.getDataLabelLength(yDomainMin, yDomainMax, 'height');
	            padding_top += $$.axis.convertPixelsToAxisPadding(lengths[1], domainLength);
	            padding_bottom += $$.axis.convertPixelsToAxisPadding(lengths[0], domainLength);
	        }
	        if (axisId === 'y' && notEmpty(config.axis_y_padding)) {
	            padding_top = $$.axis.getPadding(config.axis_y_padding, 'top', padding_top, domainLength);
	            padding_bottom = $$.axis.getPadding(config.axis_y_padding, 'bottom', padding_bottom, domainLength);
	        }
	        if (axisId === 'y2' && notEmpty(config.axis_y2_padding)) {
	            padding_top = $$.axis.getPadding(config.axis_y2_padding, 'top', padding_top, domainLength);
	            padding_bottom = $$.axis.getPadding(config.axis_y2_padding, 'bottom', padding_bottom, domainLength);
	        }
	        // Bar/Area chart should be 0-based if all positive|negative
	        if (isZeroBased) {
	            if (isAllPositive) { padding_bottom = yDomainMin; }
	            if (isAllNegative) { padding_top = -yDomainMax; }
	        }
	        domain = [yDomainMin - padding_bottom, yDomainMax + padding_top];
	        return isInverted ? domain.reverse() : domain;
	    };
	    c3_chart_internal_fn.getXDomainMin = function (targets) {
	        var $$ = this, config = $$.config;
	        return isDefined(config.axis_x_min) ?
	            ($$.isTimeSeries() ? this.parseDate(config.axis_x_min) : config.axis_x_min) :
	        $$.d3.min(targets, function (t) { return $$.d3.min(t.values, function (v) { return v.x; }); });
	    };
	    c3_chart_internal_fn.getXDomainMax = function (targets) {
	        var $$ = this, config = $$.config;
	        return isDefined(config.axis_x_max) ?
	            ($$.isTimeSeries() ? this.parseDate(config.axis_x_max) : config.axis_x_max) :
	        $$.d3.max(targets, function (t) { return $$.d3.max(t.values, function (v) { return v.x; }); });
	    };
	    c3_chart_internal_fn.getXDomainPadding = function (domain) {
	        var $$ = this, config = $$.config,
	            diff = domain[1] - domain[0],
	            maxDataCount, padding, paddingLeft, paddingRight;
	        if ($$.isCategorized()) {
	            padding = 0;
	        } else if ($$.hasType('bar')) {
	            maxDataCount = $$.getMaxDataCount();
	            padding = maxDataCount > 1 ? (diff / (maxDataCount - 1)) / 2 : 0.5;
	        } else {
	            padding = diff * 0.01;
	        }
	        if (typeof config.axis_x_padding === 'object' && notEmpty(config.axis_x_padding)) {
	            paddingLeft = isValue(config.axis_x_padding.left) ? config.axis_x_padding.left : padding;
	            paddingRight = isValue(config.axis_x_padding.right) ? config.axis_x_padding.right : padding;
	        } else if (typeof config.axis_x_padding === 'number') {
	            paddingLeft = paddingRight = config.axis_x_padding;
	        } else {
	            paddingLeft = paddingRight = padding;
	        }
	        return {left: paddingLeft, right: paddingRight};
	    };
	    c3_chart_internal_fn.getXDomain = function (targets) {
	        var $$ = this,
	            xDomain = [$$.getXDomainMin(targets), $$.getXDomainMax(targets)],
	            firstX = xDomain[0], lastX = xDomain[1],
	            padding = $$.getXDomainPadding(xDomain),
	            min = 0, max = 0;
	        // show center of x domain if min and max are the same
	        if ((firstX - lastX) === 0 && !$$.isCategorized()) {
	            if ($$.isTimeSeries()) {
	                firstX = new Date(firstX.getTime() * 0.5);
	                lastX = new Date(lastX.getTime() * 1.5);
	            } else {
	                firstX = firstX === 0 ? 1 : (firstX * 0.5);
	                lastX = lastX === 0 ? -1 : (lastX * 1.5);
	            }
	        }
	        if (firstX || firstX === 0) {
	            min = $$.isTimeSeries() ? new Date(firstX.getTime() - padding.left) : firstX - padding.left;
	        }
	        if (lastX || lastX === 0) {
	            max = $$.isTimeSeries() ? new Date(lastX.getTime() + padding.right) : lastX + padding.right;
	        }
	        return [min, max];
	    };
	    c3_chart_internal_fn.updateXDomain = function (targets, withUpdateXDomain, withUpdateOrgXDomain, withTrim, domain) {
	        var $$ = this, config = $$.config;

	        if (withUpdateOrgXDomain) {
	            $$.x.domain(domain ? domain : $$.d3.extent($$.getXDomain(targets)));
	            $$.orgXDomain = $$.x.domain();
	            if (config.zoom_enabled) { $$.zoom.scale($$.x).updateScaleExtent(); }
	            $$.subX.domain($$.x.domain());
	            if ($$.brush) { $$.brush.scale($$.subX); }
	        }
	        if (withUpdateXDomain) {
	            $$.x.domain(domain ? domain : (!$$.brush || $$.brush.empty()) ? $$.orgXDomain : $$.brush.extent());
	            if (config.zoom_enabled) { $$.zoom.scale($$.x).updateScaleExtent(); }
	        }

	        // Trim domain when too big by zoom mousemove event
	        if (withTrim) { $$.x.domain($$.trimXDomain($$.x.orgDomain())); }

	        return $$.x.domain();
	    };
	    c3_chart_internal_fn.trimXDomain = function (domain) {
	        var $$ = this;
	        if (domain[0] <= $$.orgXDomain[0]) {
	            domain[1] = +domain[1] + ($$.orgXDomain[0] - domain[0]);
	            domain[0] = $$.orgXDomain[0];
	        }
	        if ($$.orgXDomain[1] <= domain[1]) {
	            domain[0] = +domain[0] - (domain[1] - $$.orgXDomain[1]);
	            domain[1] = $$.orgXDomain[1];
	        }
	        return domain;
	    };

	    c3_chart_internal_fn.isX = function (key) {
	        var $$ = this, config = $$.config;
	        return (config.data_x && key === config.data_x) || (notEmpty(config.data_xs) && hasValue(config.data_xs, key));
	    };
	    c3_chart_internal_fn.isNotX = function (key) {
	        return !this.isX(key);
	    };
	    c3_chart_internal_fn.getXKey = function (id) {
	        var $$ = this, config = $$.config;
	        return config.data_x ? config.data_x : notEmpty(config.data_xs) ? config.data_xs[id] : null;
	    };
	    c3_chart_internal_fn.getXValuesOfXKey = function (key, targets) {
	        var $$ = this,
	            xValues, ids = targets && notEmpty(targets) ? $$.mapToIds(targets) : [];
	        ids.forEach(function (id) {
	            if ($$.getXKey(id) === key) {
	                xValues = $$.data.xs[id];
	            }
	        });
	        return xValues;
	    };
	    c3_chart_internal_fn.getIndexByX = function (x) {
	        var $$ = this,
	            data = $$.filterByX($$.data.targets, x);
	        return data.length ? data[0].index : null;
	    };
	    c3_chart_internal_fn.getXValue = function (id, i) {
	        var $$ = this;
	        return id in $$.data.xs && $$.data.xs[id] && isValue($$.data.xs[id][i]) ? $$.data.xs[id][i] : i;
	    };
	    c3_chart_internal_fn.getOtherTargetXs = function () {
	        var $$ = this,
	            idsForX = Object.keys($$.data.xs);
	        return idsForX.length ? $$.data.xs[idsForX[0]] : null;
	    };
	    c3_chart_internal_fn.getOtherTargetX = function (index) {
	        var xs = this.getOtherTargetXs();
	        return xs && index < xs.length ? xs[index] : null;
	    };
	    c3_chart_internal_fn.addXs = function (xs) {
	        var $$ = this;
	        Object.keys(xs).forEach(function (id) {
	            $$.config.data_xs[id] = xs[id];
	        });
	    };
	    c3_chart_internal_fn.hasMultipleX = function (xs) {
	        return this.d3.set(Object.keys(xs).map(function (id) { return xs[id]; })).size() > 1;
	    };
	    c3_chart_internal_fn.isMultipleX = function () {
	        return notEmpty(this.config.data_xs) || !this.config.data_xSort || this.hasType('scatter');
	    };
	    c3_chart_internal_fn.addName = function (data) {
	        var $$ = this, name;
	        if (data) {
	            name = $$.config.data_names[data.id];
	            data.name = name ? name : data.id;
	        }
	        return data;
	    };
	    c3_chart_internal_fn.getValueOnIndex = function (values, index) {
	        var valueOnIndex = values.filter(function (v) { return v.index === index; });
	        return valueOnIndex.length ? valueOnIndex[0] : null;
	    };
	    c3_chart_internal_fn.updateTargetX = function (targets, x) {
	        var $$ = this;
	        targets.forEach(function (t) {
	            t.values.forEach(function (v, i) {
	                v.x = $$.generateTargetX(x[i], t.id, i);
	            });
	            $$.data.xs[t.id] = x;
	        });
	    };
	    c3_chart_internal_fn.updateTargetXs = function (targets, xs) {
	        var $$ = this;
	        targets.forEach(function (t) {
	            if (xs[t.id]) {
	                $$.updateTargetX([t], xs[t.id]);
	            }
	        });
	    };
	    c3_chart_internal_fn.generateTargetX = function (rawX, id, index) {
	        var $$ = this, x;
	        if ($$.isTimeSeries()) {
	            x = rawX ? $$.parseDate(rawX) : $$.parseDate($$.getXValue(id, index));
	        }
	        else if ($$.isCustomX() && !$$.isCategorized()) {
	            x = isValue(rawX) ? +rawX : $$.getXValue(id, index);
	        }
	        else {
	            x = index;
	        }
	        return x;
	    };
	    c3_chart_internal_fn.cloneTarget = function (target) {
	        return {
	            id : target.id,
	            id_org : target.id_org,
	            values : target.values.map(function (d) {
	                return {x: d.x, value: d.value, id: d.id};
	            })
	        };
	    };
	    c3_chart_internal_fn.updateXs = function () {
	        var $$ = this;
	        if ($$.data.targets.length) {
	            $$.xs = [];
	            $$.data.targets[0].values.forEach(function (v) {
	                $$.xs[v.index] = v.x;
	            });
	        }
	    };
	    c3_chart_internal_fn.getPrevX = function (i) {
	        var x = this.xs[i - 1];
	        return typeof x !== 'undefined' ? x : null;
	    };
	    c3_chart_internal_fn.getNextX = function (i) {
	        var x = this.xs[i + 1];
	        return typeof x !== 'undefined' ? x : null;
	    };
	    c3_chart_internal_fn.getMaxDataCount = function () {
	        var $$ = this;
	        return $$.d3.max($$.data.targets, function (t) { return t.values.length; });
	    };
	    c3_chart_internal_fn.getMaxDataCountTarget = function (targets) {
	        var length = targets.length, max = 0, maxTarget;
	        if (length > 1) {
	            targets.forEach(function (t) {
	                if (t.values.length > max) {
	                    maxTarget = t;
	                    max = t.values.length;
	                }
	            });
	        } else {
	            maxTarget = length ? targets[0] : null;
	        }
	        return maxTarget;
	    };
	    c3_chart_internal_fn.getEdgeX = function (targets) {
	        var $$ = this;
	        return !targets.length ? [0, 0] : [
	            $$.d3.min(targets, function (t) { return t.values[0].x; }),
	            $$.d3.max(targets, function (t) { return t.values[t.values.length - 1].x; })
	        ];
	    };
	    c3_chart_internal_fn.mapToIds = function (targets) {
	        return targets.map(function (d) { return d.id; });
	    };
	    c3_chart_internal_fn.mapToTargetIds = function (ids) {
	        var $$ = this;
	        return ids ? (isString(ids) ? [ids] : ids) : $$.mapToIds($$.data.targets);
	    };
	    c3_chart_internal_fn.hasTarget = function (targets, id) {
	        var ids = this.mapToIds(targets), i;
	        for (i = 0; i < ids.length; i++) {
	            if (ids[i] === id) {
	                return true;
	            }
	        }
	        return false;
	    };
	    c3_chart_internal_fn.isTargetToShow = function (targetId) {
	        return this.hiddenTargetIds.indexOf(targetId) < 0;
	    };
	    c3_chart_internal_fn.isLegendToShow = function (targetId) {
	        return this.hiddenLegendIds.indexOf(targetId) < 0;
	    };
	    c3_chart_internal_fn.filterTargetsToShow = function (targets) {
	        var $$ = this;
	        return targets.filter(function (t) { return $$.isTargetToShow(t.id); });
	    };
	    c3_chart_internal_fn.mapTargetsToUniqueXs = function (targets) {
	        var $$ = this;
	        var xs = $$.d3.set($$.d3.merge(targets.map(function (t) { return t.values.map(function (v) { return +v.x; }); }))).values();
	        return $$.isTimeSeries() ? xs.map(function (x) { return new Date(+x); }) : xs.map(function (x) { return +x; });
	    };
	    c3_chart_internal_fn.addHiddenTargetIds = function (targetIds) {
	        this.hiddenTargetIds = this.hiddenTargetIds.concat(targetIds);
	    };
	    c3_chart_internal_fn.removeHiddenTargetIds = function (targetIds) {
	        this.hiddenTargetIds = this.hiddenTargetIds.filter(function (id) { return targetIds.indexOf(id) < 0; });
	    };
	    c3_chart_internal_fn.addHiddenLegendIds = function (targetIds) {
	        this.hiddenLegendIds = this.hiddenLegendIds.concat(targetIds);
	    };
	    c3_chart_internal_fn.removeHiddenLegendIds = function (targetIds) {
	        this.hiddenLegendIds = this.hiddenLegendIds.filter(function (id) { return targetIds.indexOf(id) < 0; });
	    };
	    c3_chart_internal_fn.getValuesAsIdKeyed = function (targets) {
	        var ys = {};
	        targets.forEach(function (t) {
	            ys[t.id] = [];
	            t.values.forEach(function (v) {
	                ys[t.id].push(v.value);
	            });
	        });
	        return ys;
	    };
	    c3_chart_internal_fn.checkValueInTargets = function (targets, checker) {
	        var ids = Object.keys(targets), i, j, values;
	        for (i = 0; i < ids.length; i++) {
	            values = targets[ids[i]].values;
	            for (j = 0; j < values.length; j++) {
	                if (checker(values[j].value)) {
	                    return true;
	                }
	            }
	        }
	        return false;
	    };
	    c3_chart_internal_fn.hasNegativeValueInTargets = function (targets) {
	        return this.checkValueInTargets(targets, function (v) { return v < 0; });
	    };
	    c3_chart_internal_fn.hasPositiveValueInTargets = function (targets) {
	        return this.checkValueInTargets(targets, function (v) { return v > 0; });
	    };
	    c3_chart_internal_fn.isOrderDesc = function () {
	        var config = this.config;
	        return typeof(config.data_order) === 'string' && config.data_order.toLowerCase() === 'desc';
	    };
	    c3_chart_internal_fn.isOrderAsc = function () {
	        var config = this.config;
	        return typeof(config.data_order) === 'string' && config.data_order.toLowerCase() === 'asc';
	    };
	    c3_chart_internal_fn.orderTargets = function (targets) {
	        var $$ = this, config = $$.config, orderAsc = $$.isOrderAsc(), orderDesc = $$.isOrderDesc();
	        if (orderAsc || orderDesc) {
	            targets.sort(function (t1, t2) {
	                var reducer = function (p, c) { return p + Math.abs(c.value); };
	                var t1Sum = t1.values.reduce(reducer, 0),
	                    t2Sum = t2.values.reduce(reducer, 0);
	                return orderAsc ? t2Sum - t1Sum : t1Sum - t2Sum;
	            });
	        } else if (isFunction(config.data_order)) {
	            targets.sort(config.data_order);
	        } // TODO: accept name array for order
	        return targets;
	    };
	    c3_chart_internal_fn.filterByX = function (targets, x) {
	        return this.d3.merge(targets.map(function (t) { return t.values; })).filter(function (v) { return v.x - x === 0; });
	    };
	    c3_chart_internal_fn.filterRemoveNull = function (data) {
	        return data.filter(function (d) { return isValue(d.value); });
	    };
	    c3_chart_internal_fn.filterByXDomain = function (targets, xDomain) {
	        return targets.map(function (t) {
	            return {
	                id: t.id,
	                id_org: t.id_org,
	                values: t.values.filter(function (v) {
	                    return xDomain[0] <= v.x && v.x <= xDomain[1];
	                })
	            };
	        });
	    };
	    c3_chart_internal_fn.hasDataLabel = function () {
	        var config = this.config;
	        if (typeof config.data_labels === 'boolean' && config.data_labels) {
	            return true;
	        } else if (typeof config.data_labels === 'object' && notEmpty(config.data_labels)) {
	            return true;
	        }
	        return false;
	    };
	    c3_chart_internal_fn.getDataLabelLength = function (min, max, key) {
	        var $$ = this,
	            lengths = [0, 0], paddingCoef = 1.3;
	        $$.selectChart.select('svg').selectAll('.dummy')
	            .data([min, max])
	            .enter().append('text')
	            .text(function (d) { return $$.dataLabelFormat(d.id)(d); })
	            .each(function (d, i) {
	                lengths[i] = this.getBoundingClientRect()[key] * paddingCoef;
	            })
	            .remove();
	        return lengths;
	    };
	    c3_chart_internal_fn.isNoneArc = function (d) {
	        return this.hasTarget(this.data.targets, d.id);
	    },
	    c3_chart_internal_fn.isArc = function (d) {
	        return 'data' in d && this.hasTarget(this.data.targets, d.data.id);
	    };
	    c3_chart_internal_fn.findSameXOfValues = function (values, index) {
	        var i, targetX = values[index].x, sames = [];
	        for (i = index - 1; i >= 0; i--) {
	            if (targetX !== values[i].x) { break; }
	            sames.push(values[i]);
	        }
	        for (i = index; i < values.length; i++) {
	            if (targetX !== values[i].x) { break; }
	            sames.push(values[i]);
	        }
	        return sames;
	    };

	    c3_chart_internal_fn.findClosestFromTargets = function (targets, pos) {
	        var $$ = this, candidates;

	        // map to array of closest points of each target
	        candidates = targets.map(function (target) {
	            return $$.findClosest(target.values, pos);
	        });

	        // decide closest point and return
	        return $$.findClosest(candidates, pos);
	    };
	    c3_chart_internal_fn.findClosest = function (values, pos) {
	        var $$ = this, minDist = 100, closest;

	        // find mouseovering bar
	        values.filter(function (v) { return v && $$.isBarType(v.id); }).forEach(function (v) {
	            var shape = $$.main.select('.' + CLASS.bars + $$.getTargetSelectorSuffix(v.id) + ' .' + CLASS.bar + '-' + v.index).node();
	            if (!closest && $$.isWithinBar(shape)) {
	                closest = v;
	            }
	        });

	        // find closest point from non-bar
	        values.filter(function (v) { return v && !$$.isBarType(v.id); }).forEach(function (v) {
	            var d = $$.dist(v, pos);
	            if (d < minDist) {
	                minDist = d;
	                closest = v;
	            }
	        });

	        return closest;
	    };
	    c3_chart_internal_fn.dist = function (data, pos) {
	        var $$ = this, config = $$.config,
	            xIndex = config.axis_rotated ? 1 : 0,
	            yIndex = config.axis_rotated ? 0 : 1,
	            y = $$.circleY(data, data.index),
	            x = $$.x(data.x);
	        return Math.pow(x - pos[xIndex], 2) + Math.pow(y - pos[yIndex], 2);
	    };
	    c3_chart_internal_fn.convertValuesToStep = function (values) {
	        var converted = [].concat(values), i;

	        if (!this.isCategorized()) {
	            return values;
	        }

	        for (i = values.length + 1; 0 < i; i--) {
	            converted[i] = converted[i - 1];
	        }

	        converted[0] = {
	            x: converted[0].x - 1,
	            value: converted[0].value,
	            id: converted[0].id
	        };
	        converted[values.length + 1] = {
	            x: converted[values.length].x + 1,
	            value: converted[values.length].value,
	            id: converted[values.length].id
	        };

	        return converted;
	    };
	    c3_chart_internal_fn.updateDataAttributes = function (name, attrs) {
	        var $$ = this, config = $$.config, current = config['data_' + name];
	        if (typeof attrs === 'undefined') { return current; }
	        Object.keys(attrs).forEach(function (id) {
	            current[id] = attrs[id];
	        });
	        $$.redraw({withLegend: true});
	        return current;
	    };

	    c3_chart_internal_fn.convertUrlToData = function (url, mimeType, keys, done) {
	        var $$ = this, type = mimeType ? mimeType : 'csv';
	        $$.d3.xhr(url, function (error, data) {
	            var d;
	            if (!data) {
	                throw new Error(error.responseURL + ' ' + error.status + ' (' + error.statusText + ')');
	            }
	            if (type === 'json') {
	                d = $$.convertJsonToData(JSON.parse(data.response), keys);
	            } else if (type === 'tsv') {
	                d = $$.convertTsvToData(data.response);
	            } else {
	                d = $$.convertCsvToData(data.response);
	            }
	            done.call($$, d);
	        });
	    };
	    c3_chart_internal_fn.convertXsvToData = function (xsv, parser) {
	        var rows = parser.parseRows(xsv), d;
	        if (rows.length === 1) {
	            d = [{}];
	            rows[0].forEach(function (id) {
	                d[0][id] = null;
	            });
	        } else {
	            d = parser.parse(xsv);
	        }
	        return d;
	    };
	    c3_chart_internal_fn.convertCsvToData = function (csv) {
	        return this.convertXsvToData(csv, this.d3.csv);
	    };
	    c3_chart_internal_fn.convertTsvToData = function (tsv) {
	        return this.convertXsvToData(tsv, this.d3.tsv);
	    };
	    c3_chart_internal_fn.convertJsonToData = function (json, keys) {
	        var $$ = this,
	            new_rows = [], targetKeys, data;
	        if (keys) { // when keys specified, json would be an array that includes objects
	            if (keys.x) {
	                targetKeys = keys.value.concat(keys.x);
	                $$.config.data_x = keys.x;
	            } else {
	                targetKeys = keys.value;
	            }
	            new_rows.push(targetKeys);
	            json.forEach(function (o) {
	                var new_row = [];
	                targetKeys.forEach(function (key) {
	                    // convert undefined to null because undefined data will be removed in convertDataToTargets()
	                    var v = isUndefined(o[key]) ? null : o[key];
	                    new_row.push(v);
	                });
	                new_rows.push(new_row);
	            });
	            data = $$.convertRowsToData(new_rows);
	        } else {
	            Object.keys(json).forEach(function (key) {
	                new_rows.push([key].concat(json[key]));
	            });
	            data = $$.convertColumnsToData(new_rows);
	        }
	        return data;
	    };
	    c3_chart_internal_fn.convertRowsToData = function (rows) {
	        var keys = rows[0], new_row = {}, new_rows = [], i, j;
	        for (i = 1; i < rows.length; i++) {
	            new_row = {};
	            for (j = 0; j < rows[i].length; j++) {
	                if (isUndefined(rows[i][j])) {
	                    throw new Error("Source data is missing a component at (" + i + "," + j + ")!");
	                }
	                new_row[keys[j]] = rows[i][j];
	            }
	            new_rows.push(new_row);
	        }
	        return new_rows;
	    };
	    c3_chart_internal_fn.convertColumnsToData = function (columns) {
	        var new_rows = [], i, j, key;
	        for (i = 0; i < columns.length; i++) {
	            key = columns[i][0];
	            for (j = 1; j < columns[i].length; j++) {
	                if (isUndefined(new_rows[j - 1])) {
	                    new_rows[j - 1] = {};
	                }
	                if (isUndefined(columns[i][j])) {
	                    throw new Error("Source data is missing a component at (" + i + "," + j + ")!");
	                }
	                new_rows[j - 1][key] = columns[i][j];
	            }
	        }
	        return new_rows;
	    };
	    c3_chart_internal_fn.convertDataToTargets = function (data, appendXs) {
	        var $$ = this, config = $$.config,
	            ids = $$.d3.keys(data[0]).filter($$.isNotX, $$),
	            xs = $$.d3.keys(data[0]).filter($$.isX, $$),
	            targets;

	        // save x for update data by load when custom x and c3.x API
	        ids.forEach(function (id) {
	            var xKey = $$.getXKey(id);

	            if ($$.isCustomX() || $$.isTimeSeries()) {
	                // if included in input data
	                if (xs.indexOf(xKey) >= 0) {
	                    $$.data.xs[id] = (appendXs && $$.data.xs[id] ? $$.data.xs[id] : []).concat(
	                        data.map(function (d) { return d[xKey]; })
	                            .filter(isValue)
	                            .map(function (rawX, i) { return $$.generateTargetX(rawX, id, i); })
	                    );
	                }
	                // if not included in input data, find from preloaded data of other id's x
	                else if (config.data_x) {
	                    $$.data.xs[id] = $$.getOtherTargetXs();
	                }
	                // if not included in input data, find from preloaded data
	                else if (notEmpty(config.data_xs)) {
	                    $$.data.xs[id] = $$.getXValuesOfXKey(xKey, $$.data.targets);
	                }
	                // MEMO: if no x included, use same x of current will be used
	            } else {
	                $$.data.xs[id] = data.map(function (d, i) { return i; });
	            }
	        });


	        // check x is defined
	        ids.forEach(function (id) {
	            if (!$$.data.xs[id]) {
	                throw new Error('x is not defined for id = "' + id + '".');
	            }
	        });

	        // convert to target
	        targets = ids.map(function (id, index) {
	            var convertedId = config.data_idConverter(id);
	            return {
	                id: convertedId,
	                id_org: id,
	                values: data.map(function (d, i) {
	                    var xKey = $$.getXKey(id), rawX = d[xKey], x = $$.generateTargetX(rawX, id, i);
	                    // use x as categories if custom x and categorized
	                    if ($$.isCustomX() && $$.isCategorized() && index === 0 && rawX) {
	                        if (i === 0) { config.axis_x_categories = []; }
	                        config.axis_x_categories.push(rawX);
	                    }
	                    // mark as x = undefined if value is undefined and filter to remove after mapped
	                    if (isUndefined(d[id]) || $$.data.xs[id].length <= i) {
	                        x = undefined;
	                    }
	                    return {x: x, value: d[id] !== null && !isNaN(d[id]) ? +d[id] : null, id: convertedId};
	                }).filter(function (v) { return isDefined(v.x); })
	            };
	        });

	        // finish targets
	        targets.forEach(function (t) {
	            var i;
	            // sort values by its x
	            if (config.data_xSort) {
	                t.values = t.values.sort(function (v1, v2) {
	                    var x1 = v1.x || v1.x === 0 ? v1.x : Infinity,
	                        x2 = v2.x || v2.x === 0 ? v2.x : Infinity;
	                    return x1 - x2;
	                });
	            }
	            // indexing each value
	            i = 0;
	            t.values.forEach(function (v) {
	                v.index = i++;
	            });
	            // this needs to be sorted because its index and value.index is identical
	            $$.data.xs[t.id].sort(function (v1, v2) {
	                return v1 - v2;
	            });
	        });

	        // set target types
	        if (config.data_type) {
	            $$.setTargetType($$.mapToIds(targets).filter(function (id) { return ! (id in config.data_types); }), config.data_type);
	        }

	        // cache as original id keyed
	        targets.forEach(function (d) {
	            $$.addCache(d.id_org, d);
	        });

	        return targets;
	    };

	    c3_chart_internal_fn.load = function (targets, args) {
	        var $$ = this;
	        if (targets) {
	            // filter loading targets if needed
	            if (args.filter) {
	                targets = targets.filter(args.filter);
	            }
	            // set type if args.types || args.type specified
	            if (args.type || args.types) {
	                targets.forEach(function (t) {
	                    var type = args.types && args.types[t.id] ? args.types[t.id] : args.type;
	                    $$.setTargetType(t.id, type);
	                });
	            }
	            // Update/Add data
	            $$.data.targets.forEach(function (d) {
	                for (var i = 0; i < targets.length; i++) {
	                    if (d.id === targets[i].id) {
	                        d.values = targets[i].values;
	                        targets.splice(i, 1);
	                        break;
	                    }
	                }
	            });
	            $$.data.targets = $$.data.targets.concat(targets); // add remained
	        }

	        // Set targets
	        $$.updateTargets($$.data.targets);

	        // Redraw with new targets
	        $$.redraw({withUpdateOrgXDomain: true, withUpdateXDomain: true, withLegend: true});

	        if (args.done) { args.done(); }
	    };
	    c3_chart_internal_fn.loadFromArgs = function (args) {
	        var $$ = this;
	        if (args.data) {
	            $$.load($$.convertDataToTargets(args.data), args);
	        }
	        else if (args.url) {
	            $$.convertUrlToData(args.url, args.mimeType, args.keys, function (data) {
	                $$.load($$.convertDataToTargets(data), args);
	            });
	        }
	        else if (args.json) {
	            $$.load($$.convertDataToTargets($$.convertJsonToData(args.json, args.keys)), args);
	        }
	        else if (args.rows) {
	            $$.load($$.convertDataToTargets($$.convertRowsToData(args.rows)), args);
	        }
	        else if (args.columns) {
	            $$.load($$.convertDataToTargets($$.convertColumnsToData(args.columns)), args);
	        }
	        else {
	            $$.load(null, args);
	        }
	    };
	    c3_chart_internal_fn.unload = function (targetIds, done) {
	        var $$ = this;
	        if (!done) {
	            done = function () {};
	        }
	        // filter existing target
	        targetIds = targetIds.filter(function (id) { return $$.hasTarget($$.data.targets, id); });
	        // If no target, call done and return
	        if (!targetIds || targetIds.length === 0) {
	            done();
	            return;
	        }
	        $$.svg.selectAll(targetIds.map(function (id) { return $$.selectorTarget(id); }))
	            .transition()
	            .style('opacity', 0)
	            .remove()
	            .call($$.endall, done);
	        targetIds.forEach(function (id) {
	            // Reset fadein for future load
	            $$.withoutFadeIn[id] = false;
	            // Remove target's elements
	            if ($$.legend) {
	                $$.legend.selectAll('.' + CLASS.legendItem + $$.getTargetSelectorSuffix(id)).remove();
	            }
	            // Remove target
	            $$.data.targets = $$.data.targets.filter(function (t) {
	                return t.id !== id;
	            });
	        });
	    };

	    c3_chart_internal_fn.categoryName = function (i) {
	        var config = this.config;
	        return i < config.axis_x_categories.length ? config.axis_x_categories[i] : i;
	    };

	    c3_chart_internal_fn.initEventRect = function () {
	        var $$ = this;
	        $$.main.select('.' + CLASS.chart).append("g")
	            .attr("class", CLASS.eventRects)
	            .style('fill-opacity', 0);
	    };
	    c3_chart_internal_fn.redrawEventRect = function () {
	        var $$ = this, config = $$.config,
	            eventRectUpdate, maxDataCountTarget,
	            isMultipleX = $$.isMultipleX();

	        // rects for mouseover
	        var eventRects = $$.main.select('.' + CLASS.eventRects)
	                .style('cursor', config.zoom_enabled ? config.axis_rotated ? 'ns-resize' : 'ew-resize' : null)
	                .classed(CLASS.eventRectsMultiple, isMultipleX)
	                .classed(CLASS.eventRectsSingle, !isMultipleX);

	        // clear old rects
	        eventRects.selectAll('.' + CLASS.eventRect).remove();

	        // open as public variable
	        $$.eventRect = eventRects.selectAll('.' + CLASS.eventRect);

	        if (isMultipleX) {
	            eventRectUpdate = $$.eventRect.data([0]);
	            // enter : only one rect will be added
	            $$.generateEventRectsForMultipleXs(eventRectUpdate.enter());
	            // update
	            $$.updateEventRect(eventRectUpdate);
	            // exit : not needed because always only one rect exists
	        }
	        else {
	            // Set data and update $$.eventRect
	            maxDataCountTarget = $$.getMaxDataCountTarget($$.data.targets);
	            eventRects.datum(maxDataCountTarget ? maxDataCountTarget.values : []);
	            $$.eventRect = eventRects.selectAll('.' + CLASS.eventRect);
	            eventRectUpdate = $$.eventRect.data(function (d) { return d; });
	            // enter
	            $$.generateEventRectsForSingleX(eventRectUpdate.enter());
	            // update
	            $$.updateEventRect(eventRectUpdate);
	            // exit
	            eventRectUpdate.exit().remove();
	        }
	    };
	    c3_chart_internal_fn.updateEventRect = function (eventRectUpdate) {
	        var $$ = this, config = $$.config,
	            x, y, w, h, rectW, rectX;

	        // set update selection if null
	        eventRectUpdate = eventRectUpdate || $$.eventRect.data(function (d) { return d; });

	        if ($$.isMultipleX()) {
	            // TODO: rotated not supported yet
	            x = 0;
	            y = 0;
	            w = $$.width;
	            h = $$.height;
	        }
	        else {
	            if (($$.isCustomX() || $$.isTimeSeries()) && !$$.isCategorized()) {

	                // update index for x that is used by prevX and nextX
	                $$.updateXs();

	                rectW = function (d) {
	                    var prevX = $$.getPrevX(d.index), nextX = $$.getNextX(d.index);

	                    // if there this is a single data point make the eventRect full width (or height)
	                    if (prevX === null && nextX === null) {
	                        return config.axis_rotated ? $$.height : $$.width;
	                    }

	                    if (prevX === null) { prevX = $$.x.domain()[0]; }
	                    if (nextX === null) { nextX = $$.x.domain()[1]; }

	                    return Math.max(0, ($$.x(nextX) - $$.x(prevX)) / 2);
	                };
	                rectX = function (d) {
	                    var prevX = $$.getPrevX(d.index), nextX = $$.getNextX(d.index),
	                        thisX = $$.data.xs[d.id][d.index];

	                    // if there this is a single data point position the eventRect at 0
	                    if (prevX === null && nextX === null) {
	                        return 0;
	                    }

	                    if (prevX === null) { prevX = $$.x.domain()[0]; }

	                    return ($$.x(thisX) + $$.x(prevX)) / 2;
	                };
	            } else {
	                rectW = $$.getEventRectWidth();
	                rectX = function (d) {
	                    return $$.x(d.x) - (rectW / 2);
	                };
	            }
	            x = config.axis_rotated ? 0 : rectX;
	            y = config.axis_rotated ? rectX : 0;
	            w = config.axis_rotated ? $$.width : rectW;
	            h = config.axis_rotated ? rectW : $$.height;
	        }

	        eventRectUpdate
	            .attr('class', $$.classEvent.bind($$))
	            .attr("x", x)
	            .attr("y", y)
	            .attr("width", w)
	            .attr("height", h);
	    };
	    c3_chart_internal_fn.generateEventRectsForSingleX = function (eventRectEnter) {
	        var $$ = this, d3 = $$.d3, config = $$.config;
	        eventRectEnter.append("rect")
	            .attr("class", $$.classEvent.bind($$))
	            .style("cursor", config.data_selection_enabled && config.data_selection_grouped ? "pointer" : null)
	            .on('mouseover', function (d) {
	                var index = d.index;

	                if ($$.dragging || $$.flowing) { return; } // do nothing while dragging/flowing
	                if ($$.hasArcType()) { return; }

	                // Expand shapes for selection
	                if (config.point_focus_expand_enabled) { $$.expandCircles(index, null, true); }
	                $$.expandBars(index, null, true);

	                // Call event handler
	                $$.main.selectAll('.' + CLASS.shape + '-' + index).each(function (d) {
	                    config.data_onmouseover.call($$.api, d);
	                });
	            })
	            .on('mouseout', function (d) {
	                var index = d.index;
	                if (!$$.config) { return; } // chart is destroyed
	                if ($$.hasArcType()) { return; }
	                $$.hideXGridFocus();
	                $$.hideTooltip();
	                // Undo expanded shapes
	                $$.unexpandCircles();
	                $$.unexpandBars();
	                // Call event handler
	                $$.main.selectAll('.' + CLASS.shape + '-' + index).each(function (d) {
	                    config.data_onmouseout.call($$.api, d);
	                });
	            })
	            .on('mousemove', function (d) {
	                var selectedData, index = d.index,
	                    eventRect = $$.svg.select('.' + CLASS.eventRect + '-' + index);

	                if ($$.dragging || $$.flowing) { return; } // do nothing while dragging/flowing
	                if ($$.hasArcType()) { return; }

	                if ($$.isStepType(d) && $$.config.line_step_type === 'step-after' && d3.mouse(this)[0] < $$.x($$.getXValue(d.id, index))) {
	                    index -= 1;
	                }

	                // Show tooltip
	                selectedData = $$.filterTargetsToShow($$.data.targets).map(function (t) {
	                    return $$.addName($$.getValueOnIndex(t.values, index));
	                });

	                if (config.tooltip_grouped) {
	                    $$.showTooltip(selectedData, this);
	                    $$.showXGridFocus(selectedData);
	                }

	                if (config.tooltip_grouped && (!config.data_selection_enabled || config.data_selection_grouped)) {
	                    return;
	                }

	                $$.main.selectAll('.' + CLASS.shape + '-' + index)
	                    .each(function () {
	                        d3.select(this).classed(CLASS.EXPANDED, true);
	                        if (config.data_selection_enabled) {
	                            eventRect.style('cursor', config.data_selection_grouped ? 'pointer' : null);
	                        }
	                        if (!config.tooltip_grouped) {
	                            $$.hideXGridFocus();
	                            $$.hideTooltip();
	                            if (!config.data_selection_grouped) {
	                                $$.unexpandCircles(index);
	                                $$.unexpandBars(index);
	                            }
	                        }
	                    })
	                    .filter(function (d) {
	                        return $$.isWithinShape(this, d);
	                    })
	                    .each(function (d) {
	                        if (config.data_selection_enabled && (config.data_selection_grouped || config.data_selection_isselectable(d))) {
	                            eventRect.style('cursor', 'pointer');
	                        }
	                        if (!config.tooltip_grouped) {
	                            $$.showTooltip([d], this);
	                            $$.showXGridFocus([d]);
	                            if (config.point_focus_expand_enabled) { $$.expandCircles(index, d.id, true); }
	                            $$.expandBars(index, d.id, true);
	                        }
	                    });
	            })
	            .on('click', function (d) {
	                var index = d.index;
	                if ($$.hasArcType() || !$$.toggleShape) { return; }
	                if ($$.cancelClick) {
	                    $$.cancelClick = false;
	                    return;
	                }
	                if ($$.isStepType(d) && config.line_step_type === 'step-after' && d3.mouse(this)[0] < $$.x($$.getXValue(d.id, index))) {
	                    index -= 1;
	                }
	                $$.main.selectAll('.' + CLASS.shape + '-' + index).each(function (d) {
	                    if (config.data_selection_grouped || $$.isWithinShape(this, d)) {
	                        $$.toggleShape(this, d, index);
	                        $$.config.data_onclick.call($$.api, d, this);
	                    }
	                });
	            })
	            .call(
	                config.data_selection_draggable && $$.drag ? (
	                    d3.behavior.drag().origin(Object)
	                        .on('drag', function () { $$.drag(d3.mouse(this)); })
	                        .on('dragstart', function () { $$.dragstart(d3.mouse(this)); })
	                        .on('dragend', function () { $$.dragend(); })
	                ) : function () {}
	            );
	    };

	    c3_chart_internal_fn.generateEventRectsForMultipleXs = function (eventRectEnter) {
	        var $$ = this, d3 = $$.d3, config = $$.config;

	        function mouseout() {
	            $$.svg.select('.' + CLASS.eventRect).style('cursor', null);
	            $$.hideXGridFocus();
	            $$.hideTooltip();
	            $$.unexpandCircles();
	            $$.unexpandBars();
	        }

	        eventRectEnter.append('rect')
	            .attr('x', 0)
	            .attr('y', 0)
	            .attr('width', $$.width)
	            .attr('height', $$.height)
	            .attr('class', CLASS.eventRect)
	            .on('mouseout', function () {
	                if (!$$.config) { return; } // chart is destroyed
	                if ($$.hasArcType()) { return; }
	                mouseout();
	            })
	            .on('mousemove', function () {
	                var targetsToShow = $$.filterTargetsToShow($$.data.targets);
	                var mouse, closest, sameXData, selectedData;

	                if ($$.dragging) { return; } // do nothing when dragging
	                if ($$.hasArcType(targetsToShow)) { return; }

	                mouse = d3.mouse(this);
	                closest = $$.findClosestFromTargets(targetsToShow, mouse);

	                if ($$.mouseover && (!closest || closest.id !== $$.mouseover.id)) {
	                    config.data_onmouseout.call($$.api, $$.mouseover);
	                    $$.mouseover = undefined;
	                }

	                if (! closest) {
	                    mouseout();
	                    return;
	                }

	                if ($$.isScatterType(closest) || !config.tooltip_grouped) {
	                    sameXData = [closest];
	                } else {
	                    sameXData = $$.filterByX(targetsToShow, closest.x);
	                }

	                // show tooltip when cursor is close to some point
	                selectedData = sameXData.map(function (d) {
	                    return $$.addName(d);
	                });
	                $$.showTooltip(selectedData, this);

	                // expand points
	                if (config.point_focus_expand_enabled) {
	                    $$.expandCircles(closest.index, closest.id, true);
	                }
	                $$.expandBars(closest.index, closest.id, true);

	                // Show xgrid focus line
	                $$.showXGridFocus(selectedData);

	                // Show cursor as pointer if point is close to mouse position
	                if ($$.isBarType(closest.id) || $$.dist(closest, mouse) < 100) {
	                    $$.svg.select('.' + CLASS.eventRect).style('cursor', 'pointer');
	                    if (!$$.mouseover) {
	                        config.data_onmouseover.call($$.api, closest);
	                        $$.mouseover = closest;
	                    }
	                }
	            })
	            .on('click', function () {
	                var targetsToShow = $$.filterTargetsToShow($$.data.targets);
	                var mouse, closest;

	                if ($$.hasArcType(targetsToShow)) { return; }

	                mouse = d3.mouse(this);
	                closest = $$.findClosestFromTargets(targetsToShow, mouse);

	                if (! closest) { return; }

	                // select if selection enabled
	                if ($$.isBarType(closest.id) || $$.dist(closest, mouse) < 100) {
	                    $$.main.selectAll('.' + CLASS.shapes + $$.getTargetSelectorSuffix(closest.id)).selectAll('.' + CLASS.shape + '-' + closest.index).each(function () {
	                        if (config.data_selection_grouped || $$.isWithinShape(this, closest)) {
	                            $$.toggleShape(this, closest, closest.index);
	                            $$.config.data_onclick.call($$.api, closest, this);
	                        }
	                    });
	                }
	            })
	            .call(
	                config.data_selection_draggable && $$.drag ? (
	                    d3.behavior.drag().origin(Object)
	                        .on('drag', function () { $$.drag(d3.mouse(this)); })
	                        .on('dragstart', function () { $$.dragstart(d3.mouse(this)); })
	                        .on('dragend', function () { $$.dragend(); })
	                ) : function () {}
	            );
	    };
	    c3_chart_internal_fn.dispatchEvent = function (type, index, mouse) {
	        var $$ = this,
	            selector = '.' + CLASS.eventRect + (!$$.isMultipleX() ? '-' + index : ''),
	            eventRect = $$.main.select(selector).node(),
	            box = eventRect.getBoundingClientRect(),
	            x = box.left + (mouse ? mouse[0] : 0),
	            y = box.top + (mouse ? mouse[1] : 0),
	            event = document.createEvent("MouseEvents");

	        event.initMouseEvent(type, true, true, window, 0, x, y, x, y,
	                             false, false, false, false, 0, null);
	        eventRect.dispatchEvent(event);
	    };

	    c3_chart_internal_fn.getCurrentWidth = function () {
	        var $$ = this, config = $$.config;
	        return config.size_width ? config.size_width : $$.getParentWidth();
	    };
	    c3_chart_internal_fn.getCurrentHeight = function () {
	        var $$ = this, config = $$.config,
	            h = config.size_height ? config.size_height : $$.getParentHeight();
	        return h > 0 ? h : 320 / ($$.hasType('gauge') ? 2 : 1);
	    };
	    c3_chart_internal_fn.getCurrentPaddingTop = function () {
	        var config = this.config;
	        return isValue(config.padding_top) ? config.padding_top : 0;
	    };
	    c3_chart_internal_fn.getCurrentPaddingBottom = function () {
	        var config = this.config;
	        return isValue(config.padding_bottom) ? config.padding_bottom : 0;
	    };
	    c3_chart_internal_fn.getCurrentPaddingLeft = function (withoutRecompute) {
	        var $$ = this, config = $$.config;
	        if (isValue(config.padding_left)) {
	            return config.padding_left;
	        } else if (config.axis_rotated) {
	            return !config.axis_x_show ? 1 : Math.max(ceil10($$.getAxisWidthByAxisId('x', withoutRecompute)), 40);
	        } else if (!config.axis_y_show || config.axis_y_inner) { // && !config.axis_rotated
	            return $$.axis.getYAxisLabelPosition().isOuter ? 30 : 1;
	        } else {
	            return ceil10($$.getAxisWidthByAxisId('y', withoutRecompute));
	        }
	    };
	    c3_chart_internal_fn.getCurrentPaddingRight = function () {
	        var $$ = this, config = $$.config,
	            defaultPadding = 10, legendWidthOnRight = $$.isLegendRight ? $$.getLegendWidth() + 20 : 0;
	        if (isValue(config.padding_right)) {
	            return config.padding_right + 1; // 1 is needed not to hide tick line
	        } else if (config.axis_rotated) {
	            return defaultPadding + legendWidthOnRight;
	        } else if (!config.axis_y2_show || config.axis_y2_inner) { // && !config.axis_rotated
	            return 2 + legendWidthOnRight + ($$.axis.getY2AxisLabelPosition().isOuter ? 20 : 0);
	        } else {
	            return ceil10($$.getAxisWidthByAxisId('y2')) + legendWidthOnRight;
	        }
	    };

	    c3_chart_internal_fn.getParentRectValue = function (key) {
	        var parent = this.selectChart.node(), v;
	        while (parent && parent.tagName !== 'BODY') {
	            try {
	                v = parent.getBoundingClientRect()[key];
	            } catch(e) {
	                if (key === 'width') {
	                    // In IE in certain cases getBoundingClientRect
	                    // will cause an "unspecified error"
	                    v = parent.offsetWidth;
	                }
	            }
	            if (v) {
	                break;
	            }
	            parent = parent.parentNode;
	        }
	        return v;
	    };
	    c3_chart_internal_fn.getParentWidth = function () {
	        return this.getParentRectValue('width');
	    };
	    c3_chart_internal_fn.getParentHeight = function () {
	        var h = this.selectChart.style('height');
	        return h.indexOf('px') > 0 ? +h.replace('px', '') : 0;
	    };


	    c3_chart_internal_fn.getSvgLeft = function (withoutRecompute) {
	        var $$ = this, config = $$.config,
	            hasLeftAxisRect = config.axis_rotated || (!config.axis_rotated && !config.axis_y_inner),
	            leftAxisClass = config.axis_rotated ? CLASS.axisX : CLASS.axisY,
	            leftAxis = $$.main.select('.' + leftAxisClass).node(),
	            svgRect = leftAxis && hasLeftAxisRect ? leftAxis.getBoundingClientRect() : {right: 0},
	            chartRect = $$.selectChart.node().getBoundingClientRect(),
	            hasArc = $$.hasArcType(),
	            svgLeft = svgRect.right - chartRect.left - (hasArc ? 0 : $$.getCurrentPaddingLeft(withoutRecompute));
	        return svgLeft > 0 ? svgLeft : 0;
	    };


	    c3_chart_internal_fn.getAxisWidthByAxisId = function (id, withoutRecompute) {
	        var $$ = this, position = $$.axis.getLabelPositionById(id);
	        return $$.axis.getMaxTickWidth(id, withoutRecompute) + (position.isInner ? 20 : 40);
	    };
	    c3_chart_internal_fn.getHorizontalAxisHeight = function (axisId) {
	        var $$ = this, config = $$.config, h = 30;
	        if (axisId === 'x' && !config.axis_x_show) { return 8; }
	        if (axisId === 'x' && config.axis_x_height) { return config.axis_x_height; }
	        if (axisId === 'y' && !config.axis_y_show) { return config.legend_show && !$$.isLegendRight && !$$.isLegendInset ? 10 : 1; }
	        if (axisId === 'y2' && !config.axis_y2_show) { return $$.rotated_padding_top; }
	        // Calculate x axis height when tick rotated
	        if (axisId === 'x' && !config.axis_rotated && config.axis_x_tick_rotate) {
	            h = 30 + $$.axis.getMaxTickWidth(axisId) * Math.cos(Math.PI * (90 - config.axis_x_tick_rotate) / 180);
	        }
	        return h + ($$.axis.getLabelPositionById(axisId).isInner ? 0 : 10) + (axisId === 'y2' ? -10 : 0);
	    };

	    c3_chart_internal_fn.getEventRectWidth = function () {
	        return Math.max(0, this.xAxis.tickInterval());
	    };

	    c3_chart_internal_fn.getShapeIndices = function (typeFilter) {
	        var $$ = this, config = $$.config,
	            indices = {}, i = 0, j, k;
	        $$.filterTargetsToShow($$.data.targets.filter(typeFilter, $$)).forEach(function (d) {
	            for (j = 0; j < config.data_groups.length; j++) {
	                if (config.data_groups[j].indexOf(d.id) < 0) { continue; }
	                for (k = 0; k < config.data_groups[j].length; k++) {
	                    if (config.data_groups[j][k] in indices) {
	                        indices[d.id] = indices[config.data_groups[j][k]];
	                        break;
	                    }
	                }
	            }
	            if (isUndefined(indices[d.id])) { indices[d.id] = i++; }
	        });
	        indices.__max__ = i - 1;
	        return indices;
	    };
	    c3_chart_internal_fn.getShapeX = function (offset, targetsNum, indices, isSub) {
	        var $$ = this, scale = isSub ? $$.subX : $$.x;
	        return function (d) {
	            var index = d.id in indices ? indices[d.id] : 0;
	            return d.x || d.x === 0 ? scale(d.x) - offset * (targetsNum / 2 - index) : 0;
	        };
	    };
	    c3_chart_internal_fn.getShapeY = function (isSub) {
	        var $$ = this;
	        return function (d) {
	            var scale = isSub ? $$.getSubYScale(d.id) : $$.getYScale(d.id);
	            return scale(d.value);
	        };
	    };
	    c3_chart_internal_fn.getShapeOffset = function (typeFilter, indices, isSub) {
	        var $$ = this,
	            targets = $$.orderTargets($$.filterTargetsToShow($$.data.targets.filter(typeFilter, $$))),
	            targetIds = targets.map(function (t) { return t.id; });
	        return function (d, i) {
	            var scale = isSub ? $$.getSubYScale(d.id) : $$.getYScale(d.id),
	                y0 = scale(0), offset = y0;
	            targets.forEach(function (t) {
	                var values = $$.isStepType(d) ? $$.convertValuesToStep(t.values) : t.values;
	                if (t.id === d.id || indices[t.id] !== indices[d.id]) { return; }
	                if (targetIds.indexOf(t.id) < targetIds.indexOf(d.id)) {
	                    if (values[i].value * d.value >= 0) {
	                        offset += scale(values[i].value) - y0;
	                    }
	                }
	            });
	            return offset;
	        };
	    };
	    c3_chart_internal_fn.isWithinShape = function (that, d) {
	        var $$ = this,
	            shape = $$.d3.select(that), isWithin;
	        if (!$$.isTargetToShow(d.id)) {
	            isWithin = false;
	        }
	        else if (that.nodeName === 'circle') {
	            isWithin = $$.isStepType(d) ? $$.isWithinStep(that, $$.getYScale(d.id)(d.value)) : $$.isWithinCircle(that, $$.pointSelectR(d) * 1.5);
	        }
	        else if (that.nodeName === 'path') {
	            isWithin = shape.classed(CLASS.bar) ? $$.isWithinBar(that) : true;
	        }
	        return isWithin;
	    };


	    c3_chart_internal_fn.getInterpolate = function (d) {
	        var $$ = this;
	        return $$.isSplineType(d) ? "cardinal" : $$.isStepType(d) ? $$.config.line_step_type : "linear";
	    };

	    c3_chart_internal_fn.initLine = function () {
	        var $$ = this;
	        $$.main.select('.' + CLASS.chart).append("g")
	            .attr("class", CLASS.chartLines);
	    };
	    c3_chart_internal_fn.updateTargetsForLine = function (targets) {
	        var $$ = this, config = $$.config,
	            mainLineUpdate, mainLineEnter,
	            classChartLine = $$.classChartLine.bind($$),
	            classLines = $$.classLines.bind($$),
	            classAreas = $$.classAreas.bind($$),
	            classCircles = $$.classCircles.bind($$),
	            classFocus = $$.classFocus.bind($$);
	        mainLineUpdate = $$.main.select('.' + CLASS.chartLines).selectAll('.' + CLASS.chartLine)
	            .data(targets)
	            .attr('class', function (d) { return classChartLine(d) + classFocus(d); });
	        mainLineEnter = mainLineUpdate.enter().append('g')
	            .attr('class', classChartLine)
	            .style('opacity', 0)
	            .style("pointer-events", "none");
	        // Lines for each data
	        mainLineEnter.append('g')
	            .attr("class", classLines);
	        // Areas
	        mainLineEnter.append('g')
	            .attr('class', classAreas);
	        // Circles for each data point on lines
	        mainLineEnter.append('g')
	            .attr("class", function (d) { return $$.generateClass(CLASS.selectedCircles, d.id); });
	        mainLineEnter.append('g')
	            .attr("class", classCircles)
	            .style("cursor", function (d) { return config.data_selection_isselectable(d) ? "pointer" : null; });
	        // Update date for selected circles
	        targets.forEach(function (t) {
	            $$.main.selectAll('.' + CLASS.selectedCircles + $$.getTargetSelectorSuffix(t.id)).selectAll('.' + CLASS.selectedCircle).each(function (d) {
	                d.value = t.values[d.index].value;
	            });
	        });
	        // MEMO: can not keep same color...
	        //mainLineUpdate.exit().remove();
	    };
	    c3_chart_internal_fn.updateLine = function (durationForExit) {
	        var $$ = this;
	        $$.mainLine = $$.main.selectAll('.' + CLASS.lines).selectAll('.' + CLASS.line)
	            .data($$.lineData.bind($$));
	        $$.mainLine.enter().append('path')
	            .attr('class', $$.classLine.bind($$))
	            .style("stroke", $$.color);
	        $$.mainLine
	            .style("opacity", $$.initialOpacity.bind($$))
	            .style('shape-rendering', function (d) { return $$.isStepType(d) ? 'crispEdges' : ''; })
	            .attr('transform', null);
	        $$.mainLine.exit().transition().duration(durationForExit)
	            .style('opacity', 0)
	            .remove();
	    };
	    c3_chart_internal_fn.redrawLine = function (drawLine, withTransition) {
	        return [
	            (withTransition ? this.mainLine.transition() : this.mainLine)
	                .attr("d", drawLine)
	                .style("stroke", this.color)
	                .style("opacity", 1)
	        ];
	    };
	    c3_chart_internal_fn.generateDrawLine = function (lineIndices, isSub) {
	        var $$ = this, config = $$.config,
	            line = $$.d3.svg.line(),
	            getPoints = $$.generateGetLinePoints(lineIndices, isSub),
	            yScaleGetter = isSub ? $$.getSubYScale : $$.getYScale,
	            xValue = function (d) { return (isSub ? $$.subxx : $$.xx).call($$, d); },
	            yValue = function (d, i) {
	                return config.data_groups.length > 0 ? getPoints(d, i)[0][1] : yScaleGetter.call($$, d.id)(d.value);
	            };

	        line = config.axis_rotated ? line.x(yValue).y(xValue) : line.x(xValue).y(yValue);
	        if (!config.line_connectNull) { line = line.defined(function (d) { return d.value != null; }); }
	        return function (d) {
	            var values = config.line_connectNull ? $$.filterRemoveNull(d.values) : d.values,
	                x = isSub ? $$.x : $$.subX, y = yScaleGetter.call($$, d.id), x0 = 0, y0 = 0, path;
	            if ($$.isLineType(d)) {
	                if (config.data_regions[d.id]) {
	                    path = $$.lineWithRegions(values, x, y, config.data_regions[d.id]);
	                } else {
	                    if ($$.isStepType(d)) { values = $$.convertValuesToStep(values); }
	                    path = line.interpolate($$.getInterpolate(d))(values);
	                }
	            } else {
	                if (values[0]) {
	                    x0 = x(values[0].x);
	                    y0 = y(values[0].value);
	                }
	                path = config.axis_rotated ? "M " + y0 + " " + x0 : "M " + x0 + " " + y0;
	            }
	            return path ? path : "M 0 0";
	        };
	    };
	    c3_chart_internal_fn.generateGetLinePoints = function (lineIndices, isSub) { // partial duplication of generateGetBarPoints
	        var $$ = this, config = $$.config,
	            lineTargetsNum = lineIndices.__max__ + 1,
	            x = $$.getShapeX(0, lineTargetsNum, lineIndices, !!isSub),
	            y = $$.getShapeY(!!isSub),
	            lineOffset = $$.getShapeOffset($$.isLineType, lineIndices, !!isSub),
	            yScale = isSub ? $$.getSubYScale : $$.getYScale;
	        return function (d, i) {
	            var y0 = yScale.call($$, d.id)(0),
	                offset = lineOffset(d, i) || y0, // offset is for stacked area chart
	                posX = x(d), posY = y(d);
	            // fix posY not to overflow opposite quadrant
	            if (config.axis_rotated) {
	                if ((0 < d.value && posY < y0) || (d.value < 0 && y0 < posY)) { posY = y0; }
	            }
	            // 1 point that marks the line position
	            return [
	                [posX, posY - (y0 - offset)],
	                [posX, posY - (y0 - offset)], // needed for compatibility
	                [posX, posY - (y0 - offset)], // needed for compatibility
	                [posX, posY - (y0 - offset)]  // needed for compatibility
	            ];
	        };
	    };


	    c3_chart_internal_fn.lineWithRegions = function (d, x, y, _regions) {
	        var $$ = this, config = $$.config,
	            prev = -1, i, j,
	            s = "M", sWithRegion,
	            xp, yp, dx, dy, dd, diff, diffx2,
	            xOffset = $$.isCategorized() ? 0.5 : 0,
	            xValue, yValue,
	            regions = [];

	        function isWithinRegions(x, regions) {
	            var i;
	            for (i = 0; i < regions.length; i++) {
	                if (regions[i].start < x && x <= regions[i].end) { return true; }
	            }
	            return false;
	        }

	        // Check start/end of regions
	        if (isDefined(_regions)) {
	            for (i = 0; i < _regions.length; i++) {
	                regions[i] = {};
	                if (isUndefined(_regions[i].start)) {
	                    regions[i].start = d[0].x;
	                } else {
	                    regions[i].start = $$.isTimeSeries() ? $$.parseDate(_regions[i].start) : _regions[i].start;
	                }
	                if (isUndefined(_regions[i].end)) {
	                    regions[i].end = d[d.length - 1].x;
	                } else {
	                    regions[i].end = $$.isTimeSeries() ? $$.parseDate(_regions[i].end) : _regions[i].end;
	                }
	            }
	        }

	        // Set scales
	        xValue = config.axis_rotated ? function (d) { return y(d.value); } : function (d) { return x(d.x); };
	        yValue = config.axis_rotated ? function (d) { return x(d.x); } : function (d) { return y(d.value); };

	        // Define svg generator function for region
	        function generateM(points) {
	            return 'M' + points[0][0] + ' ' + points[0][1] + ' ' + points[1][0] + ' ' + points[1][1];
	        }
	        if ($$.isTimeSeries()) {
	            sWithRegion = function (d0, d1, j, diff) {
	                var x0 = d0.x.getTime(), x_diff = d1.x - d0.x,
	                    xv0 = new Date(x0 + x_diff * j),
	                    xv1 = new Date(x0 + x_diff * (j + diff)),
	                    points;
	                if (config.axis_rotated) {
	                    points = [[y(yp(j)), x(xv0)], [y(yp(j + diff)), x(xv1)]];
	                } else {
	                    points = [[x(xv0), y(yp(j))], [x(xv1), y(yp(j + diff))]];
	                }
	                return generateM(points);
	            };
	        } else {
	            sWithRegion = function (d0, d1, j, diff) {
	                var points;
	                if (config.axis_rotated) {
	                    points = [[y(yp(j), true), x(xp(j))], [y(yp(j + diff), true), x(xp(j + diff))]];
	                } else {
	                    points = [[x(xp(j), true), y(yp(j))], [x(xp(j + diff), true), y(yp(j + diff))]];
	                }
	                return generateM(points);
	            };
	        }

	        // Generate
	        for (i = 0; i < d.length; i++) {

	            // Draw as normal
	            if (isUndefined(regions) || ! isWithinRegions(d[i].x, regions)) {
	                s += " " + xValue(d[i]) + " " + yValue(d[i]);
	            }
	            // Draw with region // TODO: Fix for horizotal charts
	            else {
	                xp = $$.getScale(d[i - 1].x + xOffset, d[i].x + xOffset, $$.isTimeSeries());
	                yp = $$.getScale(d[i - 1].value, d[i].value);

	                dx = x(d[i].x) - x(d[i - 1].x);
	                dy = y(d[i].value) - y(d[i - 1].value);
	                dd = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
	                diff = 2 / dd;
	                diffx2 = diff * 2;

	                for (j = diff; j <= 1; j += diffx2) {
	                    s += sWithRegion(d[i - 1], d[i], j, diff);
	                }
	            }
	            prev = d[i].x;
	        }

	        return s;
	    };


	    c3_chart_internal_fn.updateArea = function (durationForExit) {
	        var $$ = this, d3 = $$.d3;
	        $$.mainArea = $$.main.selectAll('.' + CLASS.areas).selectAll('.' + CLASS.area)
	            .data($$.lineData.bind($$));
	        $$.mainArea.enter().append('path')
	            .attr("class", $$.classArea.bind($$))
	            .style("fill", $$.color)
	            .style("opacity", function () { $$.orgAreaOpacity = +d3.select(this).style('opacity'); return 0; });
	        $$.mainArea
	            .style("opacity", $$.orgAreaOpacity);
	        $$.mainArea.exit().transition().duration(durationForExit)
	            .style('opacity', 0)
	            .remove();
	    };
	    c3_chart_internal_fn.redrawArea = function (drawArea, withTransition) {
	        return [
	            (withTransition ? this.mainArea.transition() : this.mainArea)
	                .attr("d", drawArea)
	                .style("fill", this.color)
	                .style("opacity", this.orgAreaOpacity)
	        ];
	    };
	    c3_chart_internal_fn.generateDrawArea = function (areaIndices, isSub) {
	        var $$ = this, config = $$.config, area = $$.d3.svg.area(),
	            getPoints = $$.generateGetAreaPoints(areaIndices, isSub),
	            yScaleGetter = isSub ? $$.getSubYScale : $$.getYScale,
	            xValue = function (d) { return (isSub ? $$.subxx : $$.xx).call($$, d); },
	            value0 = function (d, i) {
	                return config.data_groups.length > 0 ? getPoints(d, i)[0][1] : yScaleGetter.call($$, d.id)($$.getAreaBaseValue(d.id));
	            },
	            value1 = function (d, i) {
	                return config.data_groups.length > 0 ? getPoints(d, i)[1][1] : yScaleGetter.call($$, d.id)(d.value);
	            };

	        area = config.axis_rotated ? area.x0(value0).x1(value1).y(xValue) : area.x(xValue).y0(value0).y1(value1);
	        if (!config.line_connectNull) {
	            area = area.defined(function (d) { return d.value !== null; });
	        }

	        return function (d) {
	            var values = config.line_connectNull ? $$.filterRemoveNull(d.values) : d.values,
	                x0 = 0, y0 = 0, path;
	            if ($$.isAreaType(d)) {
	                if ($$.isStepType(d)) { values = $$.convertValuesToStep(values); }
	                path = area.interpolate($$.getInterpolate(d))(values);
	            } else {
	                if (values[0]) {
	                    x0 = $$.x(values[0].x);
	                    y0 = $$.getYScale(d.id)(values[0].value);
	                }
	                path = config.axis_rotated ? "M " + y0 + " " + x0 : "M " + x0 + " " + y0;
	            }
	            return path ? path : "M 0 0";
	        };
	    };
	    c3_chart_internal_fn.getAreaBaseValue = function () {
	        return 0;
	    };
	    c3_chart_internal_fn.generateGetAreaPoints = function (areaIndices, isSub) { // partial duplication of generateGetBarPoints
	        var $$ = this, config = $$.config,
	            areaTargetsNum = areaIndices.__max__ + 1,
	            x = $$.getShapeX(0, areaTargetsNum, areaIndices, !!isSub),
	            y = $$.getShapeY(!!isSub),
	            areaOffset = $$.getShapeOffset($$.isAreaType, areaIndices, !!isSub),
	            yScale = isSub ? $$.getSubYScale : $$.getYScale;
	        return function (d, i) {
	            var y0 = yScale.call($$, d.id)(0),
	                offset = areaOffset(d, i) || y0, // offset is for stacked area chart
	                posX = x(d), posY = y(d);
	            // fix posY not to overflow opposite quadrant
	            if (config.axis_rotated) {
	                if ((0 < d.value && posY < y0) || (d.value < 0 && y0 < posY)) { posY = y0; }
	            }
	            // 1 point that marks the area position
	            return [
	                [posX, offset],
	                [posX, posY - (y0 - offset)],
	                [posX, posY - (y0 - offset)], // needed for compatibility
	                [posX, offset] // needed for compatibility
	            ];
	        };
	    };


	    c3_chart_internal_fn.updateCircle = function () {
	        var $$ = this;
	        $$.mainCircle = $$.main.selectAll('.' + CLASS.circles).selectAll('.' + CLASS.circle)
	            .data($$.lineOrScatterData.bind($$));
	        $$.mainCircle.enter().append("circle")
	            .attr("class", $$.classCircle.bind($$))
	            .attr("r", $$.pointR.bind($$))
	            .style("fill", $$.color);
	        $$.mainCircle
	            .style("opacity", $$.initialOpacityForCircle.bind($$));
	        $$.mainCircle.exit().remove();
	    };
	    c3_chart_internal_fn.redrawCircle = function (cx, cy, withTransition) {
	        var selectedCircles = this.main.selectAll('.' + CLASS.selectedCircle);
	        return [
	            (withTransition ? this.mainCircle.transition() : this.mainCircle)
	                .style('opacity', this.opacityForCircle.bind(this))
	                .style("fill", this.color)
	                .attr("cx", cx)
	                .attr("cy", cy),
	            (withTransition ? selectedCircles.transition() : selectedCircles)
	                .attr("cx", cx)
	                .attr("cy", cy)
	        ];
	    };
	    c3_chart_internal_fn.circleX = function (d) {
	        return d.x || d.x === 0 ? this.x(d.x) : null;
	    };
	    c3_chart_internal_fn.updateCircleY = function () {
	        var $$ = this, lineIndices, getPoints;
	        if ($$.config.data_groups.length > 0) {
	            lineIndices = $$.getShapeIndices($$.isLineType),
	            getPoints = $$.generateGetLinePoints(lineIndices);
	            $$.circleY = function (d, i) {
	                return getPoints(d, i)[0][1];
	            };
	        } else {
	            $$.circleY = function (d) {
	                return $$.getYScale(d.id)(d.value);
	            };
	        }
	    };
	    c3_chart_internal_fn.getCircles = function (i, id) {
	        var $$ = this;
	        return (id ? $$.main.selectAll('.' + CLASS.circles + $$.getTargetSelectorSuffix(id)) : $$.main).selectAll('.' + CLASS.circle + (isValue(i) ? '-' + i : ''));
	    };
	    c3_chart_internal_fn.expandCircles = function (i, id, reset) {
	        var $$ = this,
	            r = $$.pointExpandedR.bind($$);
	        if (reset) { $$.unexpandCircles(); }
	        $$.getCircles(i, id)
	            .classed(CLASS.EXPANDED, true)
	            .attr('r', r);
	    };
	    c3_chart_internal_fn.unexpandCircles = function (i) {
	        var $$ = this,
	            r = $$.pointR.bind($$);
	        $$.getCircles(i)
	            .filter(function () { return $$.d3.select(this).classed(CLASS.EXPANDED); })
	            .classed(CLASS.EXPANDED, false)
	            .attr('r', r);
	    };
	    c3_chart_internal_fn.pointR = function (d) {
	        var $$ = this, config = $$.config;
	        return $$.isStepType(d) ? 0 : (isFunction(config.point_r) ? config.point_r(d) : config.point_r);
	    };
	    c3_chart_internal_fn.pointExpandedR = function (d) {
	        var $$ = this, config = $$.config;
	        return config.point_focus_expand_enabled ? (config.point_focus_expand_r ? config.point_focus_expand_r : $$.pointR(d) * 1.75) : $$.pointR(d);
	    };
	    c3_chart_internal_fn.pointSelectR = function (d) {
	        var $$ = this, config = $$.config;
	        return config.point_select_r ? config.point_select_r : $$.pointR(d) * 4;
	    };
	    c3_chart_internal_fn.isWithinCircle = function (that, r) {
	        var d3 = this.d3,
	            mouse = d3.mouse(that), d3_this = d3.select(that),
	            cx = +d3_this.attr("cx"), cy = +d3_this.attr("cy");
	        return Math.sqrt(Math.pow(cx - mouse[0], 2) + Math.pow(cy - mouse[1], 2)) < r;
	    };
	    c3_chart_internal_fn.isWithinStep = function (that, y) {
	        return Math.abs(y - this.d3.mouse(that)[1]) < 30;
	    };

	    c3_chart_internal_fn.initBar = function () {
	        var $$ = this;
	        $$.main.select('.' + CLASS.chart).append("g")
	            .attr("class", CLASS.chartBars);
	    };
	    c3_chart_internal_fn.updateTargetsForBar = function (targets) {
	        var $$ = this, config = $$.config,
	            mainBarUpdate, mainBarEnter,
	            classChartBar = $$.classChartBar.bind($$),
	            classBars = $$.classBars.bind($$),
	            classFocus = $$.classFocus.bind($$);
	        mainBarUpdate = $$.main.select('.' + CLASS.chartBars).selectAll('.' + CLASS.chartBar)
	            .data(targets)
	            .attr('class', function (d) { return classChartBar(d) + classFocus(d); });
	        mainBarEnter = mainBarUpdate.enter().append('g')
	            .attr('class', classChartBar)
	            .style('opacity', 0)
	            .style("pointer-events", "none");
	        // Bars for each data
	        mainBarEnter.append('g')
	            .attr("class", classBars)
	            .style("cursor", function (d) { return config.data_selection_isselectable(d) ? "pointer" : null; });

	    };
	    c3_chart_internal_fn.updateBar = function (durationForExit) {
	        var $$ = this,
	            barData = $$.barData.bind($$),
	            classBar = $$.classBar.bind($$),
	            initialOpacity = $$.initialOpacity.bind($$),
	            color = function (d) { return $$.color(d.id); };
	        $$.mainBar = $$.main.selectAll('.' + CLASS.bars).selectAll('.' + CLASS.bar)
	            .data(barData);
	        $$.mainBar.enter().append('path')
	            .attr("class", classBar)
	            .style("stroke", color)
	            .style("fill", color);
	        $$.mainBar
	            .style("opacity", initialOpacity);
	        $$.mainBar.exit().transition().duration(durationForExit)
	            .style('opacity', 0)
	            .remove();
	    };
	    c3_chart_internal_fn.redrawBar = function (drawBar, withTransition) {
	        return [
	            (withTransition ? this.mainBar.transition() : this.mainBar)
	                .attr('d', drawBar)
	                .style("fill", this.color)
	                .style("opacity", 1)
	        ];
	    };
	    c3_chart_internal_fn.getBarW = function (axis, barTargetsNum) {
	        var $$ = this, config = $$.config,
	            w = typeof config.bar_width === 'number' ? config.bar_width : barTargetsNum ? (axis.tickInterval() * config.bar_width_ratio) / barTargetsNum : 0;
	        return config.bar_width_max && w > config.bar_width_max ? config.bar_width_max : w;
	    };
	    c3_chart_internal_fn.getBars = function (i, id) {
	        var $$ = this;
	        return (id ? $$.main.selectAll('.' + CLASS.bars + $$.getTargetSelectorSuffix(id)) : $$.main).selectAll('.' + CLASS.bar + (isValue(i) ? '-' + i : ''));
	    };
	    c3_chart_internal_fn.expandBars = function (i, id, reset) {
	        var $$ = this;
	        if (reset) { $$.unexpandBars(); }
	        $$.getBars(i, id).classed(CLASS.EXPANDED, true);
	    };
	    c3_chart_internal_fn.unexpandBars = function (i) {
	        var $$ = this;
	        $$.getBars(i).classed(CLASS.EXPANDED, false);
	    };
	    c3_chart_internal_fn.generateDrawBar = function (barIndices, isSub) {
	        var $$ = this, config = $$.config,
	            getPoints = $$.generateGetBarPoints(barIndices, isSub);
	        return function (d, i) {
	            // 4 points that make a bar
	            var points = getPoints(d, i);

	            // switch points if axis is rotated, not applicable for sub chart
	            var indexX = config.axis_rotated ? 1 : 0;
	            var indexY = config.axis_rotated ? 0 : 1;

	            var path = 'M ' + points[0][indexX] + ',' + points[0][indexY] + ' ' +
	                    'L' + points[1][indexX] + ',' + points[1][indexY] + ' ' +
	                    'L' + points[2][indexX] + ',' + points[2][indexY] + ' ' +
	                    'L' + points[3][indexX] + ',' + points[3][indexY] + ' ' +
	                    'z';

	            return path;
	        };
	    };
	    c3_chart_internal_fn.generateGetBarPoints = function (barIndices, isSub) {
	        var $$ = this,
	            axis = isSub ? $$.subXAxis : $$.xAxis,
	            barTargetsNum = barIndices.__max__ + 1,
	            barW = $$.getBarW(axis, barTargetsNum),
	            barX = $$.getShapeX(barW, barTargetsNum, barIndices, !!isSub),
	            barY = $$.getShapeY(!!isSub),
	            barOffset = $$.getShapeOffset($$.isBarType, barIndices, !!isSub),
	            yScale = isSub ? $$.getSubYScale : $$.getYScale;
	        return function (d, i) {
	            var y0 = yScale.call($$, d.id)(0),
	                offset = barOffset(d, i) || y0, // offset is for stacked bar chart
	                posX = barX(d), posY = barY(d);
	            // fix posY not to overflow opposite quadrant
	            if ($$.config.axis_rotated) {
	                if ((0 < d.value && posY < y0) || (d.value < 0 && y0 < posY)) { posY = y0; }
	            }
	            // 4 points that make a bar
	            return [
	                [posX, offset],
	                [posX, posY - (y0 - offset)],
	                [posX + barW, posY - (y0 - offset)],
	                [posX + barW, offset]
	            ];
	        };
	    };
	    c3_chart_internal_fn.isWithinBar = function (that) {
	        var mouse = this.d3.mouse(that), box = that.getBoundingClientRect(),
	            seg0 = that.pathSegList.getItem(0), seg1 = that.pathSegList.getItem(1),
	            x = Math.min(seg0.x, seg1.x), y = Math.min(seg0.y, seg1.y),
	            w = box.width, h = box.height, offset = 2,
	            sx = x - offset, ex = x + w + offset, sy = y + h + offset, ey = y - offset;
	        return sx < mouse[0] && mouse[0] < ex && ey < mouse[1] && mouse[1] < sy;
	    };

	    c3_chart_internal_fn.initText = function () {
	        var $$ = this;
	        $$.main.select('.' + CLASS.chart).append("g")
	            .attr("class", CLASS.chartTexts);
	        $$.mainText = $$.d3.selectAll([]);
	    };
	    c3_chart_internal_fn.updateTargetsForText = function (targets) {
	        var $$ = this, mainTextUpdate, mainTextEnter,
	            classChartText = $$.classChartText.bind($$),
	            classTexts = $$.classTexts.bind($$),
	            classFocus = $$.classFocus.bind($$);
	        mainTextUpdate = $$.main.select('.' + CLASS.chartTexts).selectAll('.' + CLASS.chartText)
	            .data(targets)
	            .attr('class', function (d) { return classChartText(d) + classFocus(d); });
	        mainTextEnter = mainTextUpdate.enter().append('g')
	            .attr('class', classChartText)
	            .style('opacity', 0)
	            .style("pointer-events", "none");
	        mainTextEnter.append('g')
	            .attr('class', classTexts);
	    };
	    c3_chart_internal_fn.updateText = function (durationForExit) {
	        var $$ = this, config = $$.config,
	            barOrLineData = $$.barOrLineData.bind($$),
	            classText = $$.classText.bind($$);
	        $$.mainText = $$.main.selectAll('.' + CLASS.texts).selectAll('.' + CLASS.text)
	            .data(barOrLineData);
	        $$.mainText.enter().append('text')
	            .attr("class", classText)
	            .attr('text-anchor', function (d) { return config.axis_rotated ? (d.value < 0 ? 'end' : 'start') : 'middle'; })
	            .style("stroke", 'none')
	            .style("fill", function (d) { return $$.color(d); })
	            .style("fill-opacity", 0);
	        $$.mainText
	            .text(function (d, i, j) { return $$.dataLabelFormat(d.id)(d.value, d.id, i, j); });
	        $$.mainText.exit()
	            .transition().duration(durationForExit)
	            .style('fill-opacity', 0)
	            .remove();
	    };
	    c3_chart_internal_fn.redrawText = function (xForText, yForText, forFlow, withTransition) {
	        return [
	            (withTransition ? this.mainText.transition() : this.mainText)
	                .attr('x', xForText)
	                .attr('y', yForText)
	                .style("fill", this.color)
	                .style("fill-opacity", forFlow ? 0 : this.opacityForText.bind(this))
	        ];
	    };
	    c3_chart_internal_fn.getTextRect = function (text, cls) {
	        var dummy = this.d3.select('body').append('div').classed('c3', true),
	            svg = dummy.append("svg").style('visibility', 'hidden').style('position', 'fixed').style('top', 0).style('left', 0),
	            rect;
	        svg.selectAll('.dummy')
	            .data([text])
	          .enter().append('text')
	            .classed(cls ? cls : "", true)
	            .text(text)
	          .each(function () { rect = this.getBoundingClientRect(); });
	        dummy.remove();
	        return rect;
	    };
	    c3_chart_internal_fn.generateXYForText = function (areaIndices, barIndices, lineIndices, forX) {
	        var $$ = this,
	            getAreaPoints = $$.generateGetAreaPoints(areaIndices, false),
	            getBarPoints = $$.generateGetBarPoints(barIndices, false),
	            getLinePoints = $$.generateGetLinePoints(lineIndices, false),
	            getter = forX ? $$.getXForText : $$.getYForText;
	        return function (d, i) {
	            var getPoints = $$.isAreaType(d) ? getAreaPoints : $$.isBarType(d) ? getBarPoints : getLinePoints;
	            return getter.call($$, getPoints(d, i), d, this);
	        };
	    };
	    c3_chart_internal_fn.getXForText = function (points, d, textElement) {
	        var $$ = this,
	            box = textElement.getBoundingClientRect(), xPos, padding;
	        if ($$.config.axis_rotated) {
	            padding = $$.isBarType(d) ? 4 : 6;
	            xPos = points[2][1] + padding * (d.value < 0 ? -1 : 1);
	        } else {
	            xPos = $$.hasType('bar') ? (points[2][0] + points[0][0]) / 2 : points[0][0];
	        }
	        // show labels regardless of the domain if value is null
	        if (d.value === null) {
	            if (xPos > $$.width) {
	                xPos = $$.width - box.width;
	            } else if (xPos < 0) {
	                xPos = 4;
	            }
	        }
	        return xPos;
	    };
	    c3_chart_internal_fn.getYForText = function (points, d, textElement) {
	        var $$ = this,
	            box = textElement.getBoundingClientRect(),
	            yPos;
	        if ($$.config.axis_rotated) {
	            yPos = (points[0][0] + points[2][0] + box.height * 0.6) / 2;
	        } else {
	            yPos = points[2][1];
	            if (d.value < 0) {
	                yPos += box.height;
	                if ($$.isBarType(d) && $$.isSafari()) {
	                    yPos -= 3;
	                }
	                else if (!$$.isBarType(d) && $$.isChrome()) {
	                    yPos += 3;
	                }
	            } else {
	                yPos += $$.isBarType(d) ? -3 : -6;
	            }
	        }
	        // show labels regardless of the domain if value is null
	        if (d.value === null && !$$.config.axis_rotated) {
	            if (yPos < box.height) {
	                yPos = box.height;
	            } else if (yPos > this.height) {
	                yPos = this.height - 4;
	            }
	        }
	        return yPos;
	    };

	    c3_chart_internal_fn.setTargetType = function (targetIds, type) {
	        var $$ = this, config = $$.config;
	        $$.mapToTargetIds(targetIds).forEach(function (id) {
	            $$.withoutFadeIn[id] = (type === config.data_types[id]);
	            config.data_types[id] = type;
	        });
	        if (!targetIds) {
	            config.data_type = type;
	        }
	    };
	    c3_chart_internal_fn.hasType = function (type, targets) {
	        var $$ = this, types = $$.config.data_types, has = false;
	        targets = targets || $$.data.targets;
	        if (targets && targets.length) {
	            targets.forEach(function (target) {
	                var t = types[target.id];
	                if ((t && t.indexOf(type) >= 0) || (!t && type === 'line')) {
	                    has = true;
	                }
	            });
	        } else if (Object.keys(types).length) {
	            Object.keys(types).forEach(function (id) {
	                if (types[id] === type) { has = true; }
	            });
	        } else {
	            has = $$.config.data_type === type;
	        }
	        return has;
	    };
	    c3_chart_internal_fn.hasArcType = function (targets) {
	        return this.hasType('pie', targets) || this.hasType('donut', targets) || this.hasType('gauge', targets);
	    };
	    c3_chart_internal_fn.isLineType = function (d) {
	        var config = this.config, id = isString(d) ? d : d.id;
	        return !config.data_types[id] || ['line', 'spline', 'area', 'area-spline', 'step', 'area-step'].indexOf(config.data_types[id]) >= 0;
	    };
	    c3_chart_internal_fn.isStepType = function (d) {
	        var id = isString(d) ? d : d.id;
	        return ['step', 'area-step'].indexOf(this.config.data_types[id]) >= 0;
	    };
	    c3_chart_internal_fn.isSplineType = function (d) {
	        var id = isString(d) ? d : d.id;
	        return ['spline', 'area-spline'].indexOf(this.config.data_types[id]) >= 0;
	    };
	    c3_chart_internal_fn.isAreaType = function (d) {
	        var id = isString(d) ? d : d.id;
	        return ['area', 'area-spline', 'area-step'].indexOf(this.config.data_types[id]) >= 0;
	    };
	    c3_chart_internal_fn.isBarType = function (d) {
	        var id = isString(d) ? d : d.id;
	        return this.config.data_types[id] === 'bar';
	    };
	    c3_chart_internal_fn.isScatterType = function (d) {
	        var id = isString(d) ? d : d.id;
	        return this.config.data_types[id] === 'scatter';
	    };
	    c3_chart_internal_fn.isPieType = function (d) {
	        var id = isString(d) ? d : d.id;
	        return this.config.data_types[id] === 'pie';
	    };
	    c3_chart_internal_fn.isGaugeType = function (d) {
	        var id = isString(d) ? d : d.id;
	        return this.config.data_types[id] === 'gauge';
	    };
	    c3_chart_internal_fn.isDonutType = function (d) {
	        var id = isString(d) ? d : d.id;
	        return this.config.data_types[id] === 'donut';
	    };
	    c3_chart_internal_fn.isArcType = function (d) {
	        return this.isPieType(d) || this.isDonutType(d) || this.isGaugeType(d);
	    };
	    c3_chart_internal_fn.lineData = function (d) {
	        return this.isLineType(d) ? [d] : [];
	    };
	    c3_chart_internal_fn.arcData = function (d) {
	        return this.isArcType(d.data) ? [d] : [];
	    };
	    /* not used
	     function scatterData(d) {
	     return isScatterType(d) ? d.values : [];
	     }
	     */
	    c3_chart_internal_fn.barData = function (d) {
	        return this.isBarType(d) ? d.values : [];
	    };
	    c3_chart_internal_fn.lineOrScatterData = function (d) {
	        return this.isLineType(d) || this.isScatterType(d) ? d.values : [];
	    };
	    c3_chart_internal_fn.barOrLineData = function (d) {
	        return this.isBarType(d) || this.isLineType(d) ? d.values : [];
	    };

	    c3_chart_internal_fn.initGrid = function () {
	        var $$ = this, config = $$.config, d3 = $$.d3;
	        $$.grid = $$.main.append('g')
	            .attr("clip-path", $$.clipPathForGrid)
	            .attr('class', CLASS.grid);
	        if (config.grid_x_show) {
	            $$.grid.append("g").attr("class", CLASS.xgrids);
	        }
	        if (config.grid_y_show) {
	            $$.grid.append('g').attr('class', CLASS.ygrids);
	        }
	        if (config.grid_focus_show) {
	            $$.grid.append('g')
	                .attr("class", CLASS.xgridFocus)
	                .append('line')
	                .attr('class', CLASS.xgridFocus);
	        }
	        $$.xgrid = d3.selectAll([]);
	        if (!config.grid_lines_front) { $$.initGridLines(); }
	    };
	    c3_chart_internal_fn.initGridLines = function () {
	        var $$ = this, d3 = $$.d3;
	        $$.gridLines = $$.main.append('g')
	            .attr("clip-path", $$.clipPathForGrid)
	            .attr('class', CLASS.grid + ' ' + CLASS.gridLines);
	        $$.gridLines.append('g').attr("class", CLASS.xgridLines);
	        $$.gridLines.append('g').attr('class', CLASS.ygridLines);
	        $$.xgridLines = d3.selectAll([]);
	    };
	    c3_chart_internal_fn.updateXGrid = function (withoutUpdate) {
	        var $$ = this, config = $$.config, d3 = $$.d3,
	            xgridData = $$.generateGridData(config.grid_x_type, $$.x),
	            tickOffset = $$.isCategorized() ? $$.xAxis.tickOffset() : 0;

	        $$.xgridAttr = config.axis_rotated ? {
	            'x1': 0,
	            'x2': $$.width,
	            'y1': function (d) { return $$.x(d) - tickOffset; },
	            'y2': function (d) { return $$.x(d) - tickOffset; }
	        } : {
	            'x1': function (d) { return $$.x(d) + tickOffset; },
	            'x2': function (d) { return $$.x(d) + tickOffset; },
	            'y1': 0,
	            'y2': $$.height
	        };

	        $$.xgrid = $$.main.select('.' + CLASS.xgrids).selectAll('.' + CLASS.xgrid)
	            .data(xgridData);
	        $$.xgrid.enter().append('line').attr("class", CLASS.xgrid);
	        if (!withoutUpdate) {
	            $$.xgrid.attr($$.xgridAttr)
	                .style("opacity", function () { return +d3.select(this).attr(config.axis_rotated ? 'y1' : 'x1') === (config.axis_rotated ? $$.height : 0) ? 0 : 1; });
	        }
	        $$.xgrid.exit().remove();
	    };

	    c3_chart_internal_fn.updateYGrid = function () {
	        var $$ = this, config = $$.config,
	            gridValues = $$.yAxis.tickValues() || $$.y.ticks(config.grid_y_ticks);
	        $$.ygrid = $$.main.select('.' + CLASS.ygrids).selectAll('.' + CLASS.ygrid)
	            .data(gridValues);
	        $$.ygrid.enter().append('line')
	            .attr('class', CLASS.ygrid);
	        $$.ygrid.attr("x1", config.axis_rotated ? $$.y : 0)
	            .attr("x2", config.axis_rotated ? $$.y : $$.width)
	            .attr("y1", config.axis_rotated ? 0 : $$.y)
	            .attr("y2", config.axis_rotated ? $$.height : $$.y);
	        $$.ygrid.exit().remove();
	        $$.smoothLines($$.ygrid, 'grid');
	    };

	    c3_chart_internal_fn.gridTextAnchor = function (d) {
	        return d.position ? d.position : "end";
	    };
	    c3_chart_internal_fn.gridTextDx = function (d) {
	        return d.position === 'start' ? 4 : d.position === 'middle' ? 0 : -4;
	    };
	    c3_chart_internal_fn.xGridTextX = function (d) {
	        return d.position === 'start' ? -this.height : d.position === 'middle' ? -this.height / 2 : 0;
	    };
	    c3_chart_internal_fn.yGridTextX = function (d) {
	        return d.position === 'start' ? 0 : d.position === 'middle' ? this.width / 2 : this.width;
	    };
	    c3_chart_internal_fn.updateGrid = function (duration) {
	        var $$ = this, main = $$.main, config = $$.config,
	            xgridLine, ygridLine, yv;

	        // hide if arc type
	        $$.grid.style('visibility', $$.hasArcType() ? 'hidden' : 'visible');

	        main.select('line.' + CLASS.xgridFocus).style("visibility", "hidden");
	        if (config.grid_x_show) {
	            $$.updateXGrid();
	        }
	        $$.xgridLines = main.select('.' + CLASS.xgridLines).selectAll('.' + CLASS.xgridLine)
	            .data(config.grid_x_lines);
	        // enter
	        xgridLine = $$.xgridLines.enter().append('g')
	            .attr("class", function (d) { return CLASS.xgridLine + (d['class'] ? ' ' + d['class'] : ''); });
	        xgridLine.append('line')
	            .style("opacity", 0);
	        xgridLine.append('text')
	            .attr("text-anchor", $$.gridTextAnchor)
	            .attr("transform", config.axis_rotated ? "" : "rotate(-90)")
	            .attr('dx', $$.gridTextDx)
	            .attr('dy', -5)
	            .style("opacity", 0);
	        // udpate
	        // done in d3.transition() of the end of this function
	        // exit
	        $$.xgridLines.exit().transition().duration(duration)
	            .style("opacity", 0)
	            .remove();

	        // Y-Grid
	        if (config.grid_y_show) {
	            $$.updateYGrid();
	        }
	        $$.ygridLines = main.select('.' + CLASS.ygridLines).selectAll('.' + CLASS.ygridLine)
	            .data(config.grid_y_lines);
	        // enter
	        ygridLine = $$.ygridLines.enter().append('g')
	            .attr("class", function (d) { return CLASS.ygridLine + (d['class'] ? ' ' + d['class'] : ''); });
	        ygridLine.append('line')
	            .style("opacity", 0);
	        ygridLine.append('text')
	            .attr("text-anchor", $$.gridTextAnchor)
	            .attr("transform", config.axis_rotated ? "rotate(-90)" : "")
	            .attr('dx', $$.gridTextDx)
	            .attr('dy', -5)
	            .style("opacity", 0);
	        // update
	        yv = $$.yv.bind($$);
	        $$.ygridLines.select('line')
	          .transition().duration(duration)
	            .attr("x1", config.axis_rotated ? yv : 0)
	            .attr("x2", config.axis_rotated ? yv : $$.width)
	            .attr("y1", config.axis_rotated ? 0 : yv)
	            .attr("y2", config.axis_rotated ? $$.height : yv)
	            .style("opacity", 1);
	        $$.ygridLines.select('text')
	          .transition().duration(duration)
	            .attr("x", config.axis_rotated ? $$.xGridTextX.bind($$) : $$.yGridTextX.bind($$))
	            .attr("y", yv)
	            .text(function (d) { return d.text; })
	            .style("opacity", 1);
	        // exit
	        $$.ygridLines.exit().transition().duration(duration)
	            .style("opacity", 0)
	            .remove();
	    };
	    c3_chart_internal_fn.redrawGrid = function (withTransition) {
	        var $$ = this, config = $$.config, xv = $$.xv.bind($$),
	            lines = $$.xgridLines.select('line'),
	            texts = $$.xgridLines.select('text');
	        return [
	            (withTransition ? lines.transition() : lines)
	                .attr("x1", config.axis_rotated ? 0 : xv)
	                .attr("x2", config.axis_rotated ? $$.width : xv)
	                .attr("y1", config.axis_rotated ? xv : 0)
	                .attr("y2", config.axis_rotated ? xv : $$.height)
	                .style("opacity", 1),
	            (withTransition ? texts.transition() : texts)
	                .attr("x", config.axis_rotated ? $$.yGridTextX.bind($$) : $$.xGridTextX.bind($$))
	                .attr("y", xv)
	                .text(function (d) { return d.text; })
	                .style("opacity", 1)
	        ];
	    };
	    c3_chart_internal_fn.showXGridFocus = function (selectedData) {
	        var $$ = this, config = $$.config,
	            dataToShow = selectedData.filter(function (d) { return d && isValue(d.value); }),
	            focusEl = $$.main.selectAll('line.' + CLASS.xgridFocus),
	            xx = $$.xx.bind($$);
	        if (! config.tooltip_show) { return; }
	        // Hide when scatter plot exists
	        if ($$.hasType('scatter') || $$.hasArcType()) { return; }
	        focusEl
	            .style("visibility", "visible")
	            .data([dataToShow[0]])
	            .attr(config.axis_rotated ? 'y1' : 'x1', xx)
	            .attr(config.axis_rotated ? 'y2' : 'x2', xx);
	        $$.smoothLines(focusEl, 'grid');
	    };
	    c3_chart_internal_fn.hideXGridFocus = function () {
	        this.main.select('line.' + CLASS.xgridFocus).style("visibility", "hidden");
	    };
	    c3_chart_internal_fn.updateXgridFocus = function () {
	        var $$ = this, config = $$.config;
	        $$.main.select('line.' + CLASS.xgridFocus)
	            .attr("x1", config.axis_rotated ? 0 : -10)
	            .attr("x2", config.axis_rotated ? $$.width : -10)
	            .attr("y1", config.axis_rotated ? -10 : 0)
	            .attr("y2", config.axis_rotated ? -10 : $$.height);
	    };
	    c3_chart_internal_fn.generateGridData = function (type, scale) {
	        var $$ = this,
	            gridData = [], xDomain, firstYear, lastYear, i,
	            tickNum = $$.main.select("." + CLASS.axisX).selectAll('.tick').size();
	        if (type === 'year') {
	            xDomain = $$.getXDomain();
	            firstYear = xDomain[0].getFullYear();
	            lastYear = xDomain[1].getFullYear();
	            for (i = firstYear; i <= lastYear; i++) {
	                gridData.push(new Date(i + '-01-01 00:00:00'));
	            }
	        } else {
	            gridData = scale.ticks(10);
	            if (gridData.length > tickNum) { // use only int
	                gridData = gridData.filter(function (d) { return ("" + d).indexOf('.') < 0; });
	            }
	        }
	        return gridData;
	    };
	    c3_chart_internal_fn.getGridFilterToRemove = function (params) {
	        return params ? function (line) {
	            var found = false;
	            [].concat(params).forEach(function (param) {
	                if ((('value' in param && line.value === param.value) || ('class' in param && line['class'] === param['class']))) {
	                    found = true;
	                }
	            });
	            return found;
	        } : function () { return true; };
	    };
	    c3_chart_internal_fn.removeGridLines = function (params, forX) {
	        var $$ = this, config = $$.config,
	            toRemove = $$.getGridFilterToRemove(params),
	            toShow = function (line) { return !toRemove(line); },
	            classLines = forX ? CLASS.xgridLines : CLASS.ygridLines,
	            classLine = forX ? CLASS.xgridLine : CLASS.ygridLine;
	        $$.main.select('.' + classLines).selectAll('.' + classLine).filter(toRemove)
	            .transition().duration(config.transition_duration)
	            .style('opacity', 0).remove();
	        if (forX) {
	            config.grid_x_lines = config.grid_x_lines.filter(toShow);
	        } else {
	            config.grid_y_lines = config.grid_y_lines.filter(toShow);
	        }
	    };

	    c3_chart_internal_fn.initTooltip = function () {
	        var $$ = this, config = $$.config, i;
	        $$.tooltip = $$.selectChart
	            .style("position", "relative")
	          .append("div")
	            .attr('class', CLASS.tooltipContainer)
	            .style("position", "absolute")
	            .style("pointer-events", "none")
	            .style("display", "none");
	        // Show tooltip if needed
	        if (config.tooltip_init_show) {
	            if ($$.isTimeSeries() && isString(config.tooltip_init_x)) {
	                config.tooltip_init_x = $$.parseDate(config.tooltip_init_x);
	                for (i = 0; i < $$.data.targets[0].values.length; i++) {
	                    if (($$.data.targets[0].values[i].x - config.tooltip_init_x) === 0) { break; }
	                }
	                config.tooltip_init_x = i;
	            }
	            $$.tooltip.html(config.tooltip_contents.call($$, $$.data.targets.map(function (d) {
	                return $$.addName(d.values[config.tooltip_init_x]);
	            }), $$.axis.getXAxisTickFormat(), $$.getYFormat($$.hasArcType()), $$.color));
	            $$.tooltip.style("top", config.tooltip_init_position.top)
	                .style("left", config.tooltip_init_position.left)
	                .style("display", "block");
	        }
	    };
	    c3_chart_internal_fn.getTooltipContent = function (d, defaultTitleFormat, defaultValueFormat, color) {
	        var $$ = this, config = $$.config,
	            titleFormat = config.tooltip_format_title || defaultTitleFormat,
	            nameFormat = config.tooltip_format_name || function (name) { return name; },
	            valueFormat = config.tooltip_format_value || defaultValueFormat,
	            text, i, title, value, name, bgcolor;
	        for (i = 0; i < d.length; i++) {
	            if (! (d[i] && (d[i].value || d[i].value === 0))) { continue; }

	            if (! text) {
	                title = titleFormat ? titleFormat(d[i].x) : d[i].x;
	                text = "<table class='" + CLASS.tooltip + "'>" + (title || title === 0 ? "<tr><th colspan='2'>" + title + "</th></tr>" : "");
	            }

	            value = valueFormat(d[i].value, d[i].ratio, d[i].id, d[i].index);
	            if (value !== undefined) {
	                name = nameFormat(d[i].name, d[i].ratio, d[i].id, d[i].index);
	                bgcolor = $$.levelColor ? $$.levelColor(d[i].value) : color(d[i].id);

	                text += "<tr class='" + CLASS.tooltipName + "-" + d[i].id + "'>";
	                text += "<td class='name'><span style='background-color:" + bgcolor + "'></span>" + name + "</td>";
	                text += "<td class='value'>" + value + "</td>";
	                text += "</tr>";
	            }
	        }
	        return text + "</table>";
	    };
	    c3_chart_internal_fn.tooltipPosition = function (dataToShow, tWidth, tHeight, element) {
	        var $$ = this, config = $$.config, d3 = $$.d3;
	        var svgLeft, tooltipLeft, tooltipRight, tooltipTop, chartRight;
	        var forArc = $$.hasArcType(),
	            mouse = d3.mouse(element);
	      // Determin tooltip position
	        if (forArc) {
	            tooltipLeft = (($$.width - ($$.isLegendRight ? $$.getLegendWidth() : 0)) / 2) + mouse[0];
	            tooltipTop = ($$.height / 2) + mouse[1] + 20;
	        } else {
	            svgLeft = $$.getSvgLeft(true);
	            if (config.axis_rotated) {
	                tooltipLeft = svgLeft + mouse[0] + 100;
	                tooltipRight = tooltipLeft + tWidth;
	                chartRight = $$.currentWidth - $$.getCurrentPaddingRight();
	                tooltipTop = $$.x(dataToShow[0].x) + 20;
	            } else {
	                tooltipLeft = svgLeft + $$.getCurrentPaddingLeft(true) + $$.x(dataToShow[0].x) + 20;
	                tooltipRight = tooltipLeft + tWidth;
	                chartRight = svgLeft + $$.currentWidth - $$.getCurrentPaddingRight();
	                tooltipTop = mouse[1] + 15;
	            }

	            if (tooltipRight > chartRight) {
	                // 20 is needed for Firefox to keep tooletip width
	                tooltipLeft -= tooltipRight - chartRight + 20;
	            }
	            if (tooltipTop + tHeight > $$.currentHeight) {
	                tooltipTop -= tHeight + 30;
	            }
	        }
	        if (tooltipTop < 0) {
	            tooltipTop = 0;
	        }
	        return {top: tooltipTop, left: tooltipLeft};
	    };
	    c3_chart_internal_fn.showTooltip = function (selectedData, element) {
	        var $$ = this, config = $$.config;
	        var tWidth, tHeight, position;
	        var forArc = $$.hasArcType(),
	            dataToShow = selectedData.filter(function (d) { return d && isValue(d.value); }),
	            positionFunction = config.tooltip_position || c3_chart_internal_fn.tooltipPosition;
	        if (dataToShow.length === 0 || !config.tooltip_show) {
	            return;
	        }
	        $$.tooltip.html(config.tooltip_contents.call($$, selectedData, $$.axis.getXAxisTickFormat(), $$.getYFormat(forArc), $$.color)).style("display", "block");

	        // Get tooltip dimensions
	        tWidth = $$.tooltip.property('offsetWidth');
	        tHeight = $$.tooltip.property('offsetHeight');

	        position = positionFunction.call(this, dataToShow, tWidth, tHeight, element);
	        // Set tooltip
	        $$.tooltip
	            .style("top", position.top + "px")
	            .style("left", position.left + 'px');
	    };
	    c3_chart_internal_fn.hideTooltip = function () {
	        this.tooltip.style("display", "none");
	    };

	    c3_chart_internal_fn.initLegend = function () {
	        var $$ = this;
	        $$.legendItemTextBox = {};
	        $$.legendHasRendered = false;
	        $$.legend = $$.svg.append("g").attr("transform", $$.getTranslate('legend'));
	        if (!$$.config.legend_show) {
	            $$.legend.style('visibility', 'hidden');
	            $$.hiddenLegendIds = $$.mapToIds($$.data.targets);
	            return;
	        }
	        // MEMO: call here to update legend box and tranlate for all
	        // MEMO: translate will be upated by this, so transform not needed in updateLegend()
	        $$.updateLegendWithDefaults();
	    };
	    c3_chart_internal_fn.updateLegendWithDefaults = function () {
	        var $$ = this;
	        $$.updateLegend($$.mapToIds($$.data.targets), {withTransform: false, withTransitionForTransform: false, withTransition: false});
	    };
	    c3_chart_internal_fn.updateSizeForLegend = function (legendHeight, legendWidth) {
	        var $$ = this, config = $$.config, insetLegendPosition = {
	            top: $$.isLegendTop ? $$.getCurrentPaddingTop() + config.legend_inset_y + 5.5 : $$.currentHeight - legendHeight - $$.getCurrentPaddingBottom() - config.legend_inset_y,
	            left: $$.isLegendLeft ? $$.getCurrentPaddingLeft() + config.legend_inset_x + 0.5 : $$.currentWidth - legendWidth - $$.getCurrentPaddingRight() - config.legend_inset_x + 0.5
	        };

	        $$.margin3 = {
	            top: $$.isLegendRight ? 0 : $$.isLegendInset ? insetLegendPosition.top : $$.currentHeight - legendHeight,
	            right: NaN,
	            bottom: 0,
	            left: $$.isLegendRight ? $$.currentWidth - legendWidth : $$.isLegendInset ? insetLegendPosition.left : 0
	        };
	    };
	    c3_chart_internal_fn.transformLegend = function (withTransition) {
	        var $$ = this;
	        (withTransition ? $$.legend.transition() : $$.legend).attr("transform", $$.getTranslate('legend'));
	    };
	    c3_chart_internal_fn.updateLegendStep = function (step) {
	        this.legendStep = step;
	    };
	    c3_chart_internal_fn.updateLegendItemWidth = function (w) {
	        this.legendItemWidth = w;
	    };
	    c3_chart_internal_fn.updateLegendItemHeight = function (h) {
	        this.legendItemHeight = h;
	    };
	    c3_chart_internal_fn.getLegendWidth = function () {
	        var $$ = this;
	        return $$.config.legend_show ? $$.isLegendRight || $$.isLegendInset ? $$.legendItemWidth * ($$.legendStep + 1) : $$.currentWidth : 0;
	    };
	    c3_chart_internal_fn.getLegendHeight = function () {
	        var $$ = this, h = 0;
	        if ($$.config.legend_show) {
	            if ($$.isLegendRight) {
	                h = $$.currentHeight;
	            } else {
	                h = Math.max(20, $$.legendItemHeight) * ($$.legendStep + 1);
	            }
	        }
	        return h;
	    };
	    c3_chart_internal_fn.opacityForLegend = function (legendItem) {
	        return legendItem.classed(CLASS.legendItemHidden) ? null : 1;
	    };
	    c3_chart_internal_fn.opacityForUnfocusedLegend = function (legendItem) {
	        return legendItem.classed(CLASS.legendItemHidden) ? null : 0.3;
	    };
	    c3_chart_internal_fn.toggleFocusLegend = function (targetIds, focus) {
	        var $$ = this;
	        targetIds = $$.mapToTargetIds(targetIds);
	        $$.legend.selectAll('.' + CLASS.legendItem)
	            .filter(function (id) { return targetIds.indexOf(id) >= 0; })
	            .classed(CLASS.legendItemFocused, focus)
	          .transition().duration(100)
	            .style('opacity', function () {
	                var opacity = focus ? $$.opacityForLegend : $$.opacityForUnfocusedLegend;
	                return opacity.call($$, $$.d3.select(this));
	            });
	    };
	    c3_chart_internal_fn.revertLegend = function () {
	        var $$ = this, d3 = $$.d3;
	        $$.legend.selectAll('.' + CLASS.legendItem)
	            .classed(CLASS.legendItemFocused, false)
	            .transition().duration(100)
	            .style('opacity', function () { return $$.opacityForLegend(d3.select(this)); });
	    };
	    c3_chart_internal_fn.showLegend = function (targetIds) {
	        var $$ = this, config = $$.config;
	        if (!config.legend_show) {
	            config.legend_show = true;
	            $$.legend.style('visibility', 'visible');
	            if (!$$.legendHasRendered) {
	                $$.updateLegendWithDefaults();
	            }
	        }
	        $$.removeHiddenLegendIds(targetIds);
	        $$.legend.selectAll($$.selectorLegends(targetIds))
	            .style('visibility', 'visible')
	            .transition()
	            .style('opacity', function () { return $$.opacityForLegend($$.d3.select(this)); });
	    };
	    c3_chart_internal_fn.hideLegend = function (targetIds) {
	        var $$ = this, config = $$.config;
	        if (config.legend_show && isEmpty(targetIds)) {
	            config.legend_show = false;
	            $$.legend.style('visibility', 'hidden');
	        }
	        $$.addHiddenLegendIds(targetIds);
	        $$.legend.selectAll($$.selectorLegends(targetIds))
	            .style('opacity', 0)
	            .style('visibility', 'hidden');
	    };
	    c3_chart_internal_fn.clearLegendItemTextBoxCache = function () {
	        this.legendItemTextBox = {};
	    };
	    c3_chart_internal_fn.updateLegend = function (targetIds, options, transitions) {
	        var $$ = this, config = $$.config;
	        var xForLegend, xForLegendText, xForLegendRect, yForLegend, yForLegendText, yForLegendRect;
	        var paddingTop = 4, paddingRight = 10, maxWidth = 0, maxHeight = 0, posMin = 10, tileWidth = 15;
	        var l, totalLength = 0, offsets = {}, widths = {}, heights = {}, margins = [0], steps = {}, step = 0;
	        var withTransition, withTransitionForTransform;
	        var texts, rects, tiles, background;

	        options = options || {};
	        withTransition = getOption(options, "withTransition", true);
	        withTransitionForTransform = getOption(options, "withTransitionForTransform", true);

	        function getTextBox(textElement, id) {
	            if (!$$.legendItemTextBox[id]) {
	                $$.legendItemTextBox[id] = $$.getTextRect(textElement.textContent, CLASS.legendItem);
	            }
	            return $$.legendItemTextBox[id];
	        }

	        function updatePositions(textElement, id, index) {
	            var reset = index === 0, isLast = index === targetIds.length - 1,
	                box = getTextBox(textElement, id),
	                itemWidth = box.width + tileWidth + (isLast && !($$.isLegendRight || $$.isLegendInset) ? 0 : paddingRight),
	                itemHeight = box.height + paddingTop,
	                itemLength = $$.isLegendRight || $$.isLegendInset ? itemHeight : itemWidth,
	                areaLength = $$.isLegendRight || $$.isLegendInset ? $$.getLegendHeight() : $$.getLegendWidth(),
	                margin, maxLength;

	            // MEMO: care about condifion of step, totalLength
	            function updateValues(id, withoutStep) {
	                if (!withoutStep) {
	                    margin = (areaLength - totalLength - itemLength) / 2;
	                    if (margin < posMin) {
	                        margin = (areaLength - itemLength) / 2;
	                        totalLength = 0;
	                        step++;
	                    }
	                }
	                steps[id] = step;
	                margins[step] = $$.isLegendInset ? 10 : margin;
	                offsets[id] = totalLength;
	                totalLength += itemLength;
	            }

	            if (reset) {
	                totalLength = 0;
	                step = 0;
	                maxWidth = 0;
	                maxHeight = 0;
	            }

	            if (config.legend_show && !$$.isLegendToShow(id)) {
	                widths[id] = heights[id] = steps[id] = offsets[id] = 0;
	                return;
	            }

	            widths[id] = itemWidth;
	            heights[id] = itemHeight;

	            if (!maxWidth || itemWidth >= maxWidth) { maxWidth = itemWidth; }
	            if (!maxHeight || itemHeight >= maxHeight) { maxHeight = itemHeight; }
	            maxLength = $$.isLegendRight || $$.isLegendInset ? maxHeight : maxWidth;

	            if (config.legend_equally) {
	                Object.keys(widths).forEach(function (id) { widths[id] = maxWidth; });
	                Object.keys(heights).forEach(function (id) { heights[id] = maxHeight; });
	                margin = (areaLength - maxLength * targetIds.length) / 2;
	                if (margin < posMin) {
	                    totalLength = 0;
	                    step = 0;
	                    targetIds.forEach(function (id) { updateValues(id); });
	                }
	                else {
	                    updateValues(id, true);
	                }
	            } else {
	                updateValues(id);
	            }
	        }

	        if ($$.isLegendInset) {
	            step = config.legend_inset_step ? config.legend_inset_step : targetIds.length;
	            $$.updateLegendStep(step);
	        }

	        if ($$.isLegendRight) {
	            xForLegend = function (id) { return maxWidth * steps[id]; };
	            yForLegend = function (id) { return margins[steps[id]] + offsets[id]; };
	        } else if ($$.isLegendInset) {
	            xForLegend = function (id) { return maxWidth * steps[id] + 10; };
	            yForLegend = function (id) { return margins[steps[id]] + offsets[id]; };
	        } else {
	            xForLegend = function (id) { return margins[steps[id]] + offsets[id]; };
	            yForLegend = function (id) { return maxHeight * steps[id]; };
	        }
	        xForLegendText = function (id, i) { return xForLegend(id, i) + 14; };
	        yForLegendText = function (id, i) { return yForLegend(id, i) + 9; };
	        xForLegendRect = function (id, i) { return xForLegend(id, i); };
	        yForLegendRect = function (id, i) { return yForLegend(id, i) - 5; };

	        // Define g for legend area
	        l = $$.legend.selectAll('.' + CLASS.legendItem)
	            .data(targetIds)
	            .enter().append('g')
	            .attr('class', function (id) { return $$.generateClass(CLASS.legendItem, id); })
	            .style('visibility', function (id) { return $$.isLegendToShow(id) ? 'visible' : 'hidden'; })
	            .style('cursor', 'pointer')
	            .on('click', function (id) {
	                if (config.legend_item_onclick) {
	                    config.legend_item_onclick.call($$, id);
	                } else {
	                    if ($$.d3.event.altKey) {
	                        $$.api.hide();
	                        $$.api.show(id);
	                    } else {
	                        $$.api.toggle(id);
	                        $$.isTargetToShow(id) ? $$.api.focus(id) : $$.api.revert();
	                    }
	                }
	            })
	            .on('mouseover', function (id) {
	                $$.d3.select(this).classed(CLASS.legendItemFocused, true);
	                if (!$$.transiting && $$.isTargetToShow(id)) {
	                    $$.api.focus(id);
	                }
	                if (config.legend_item_onmouseover) {
	                    config.legend_item_onmouseover.call($$, id);
	                }
	            })
	            .on('mouseout', function (id) {
	                $$.d3.select(this).classed(CLASS.legendItemFocused, false);
	                $$.api.revert();
	                if (config.legend_item_onmouseout) {
	                    config.legend_item_onmouseout.call($$, id);
	                }
	            });
	        l.append('text')
	            .text(function (id) { return isDefined(config.data_names[id]) ? config.data_names[id] : id; })
	            .each(function (id, i) { updatePositions(this, id, i); })
	            .style("pointer-events", "none")
	            .attr('x', $$.isLegendRight || $$.isLegendInset ? xForLegendText : -200)
	            .attr('y', $$.isLegendRight || $$.isLegendInset ? -200 : yForLegendText);
	        l.append('rect')
	            .attr("class", CLASS.legendItemEvent)
	            .style('fill-opacity', 0)
	            .attr('x', $$.isLegendRight || $$.isLegendInset ? xForLegendRect : -200)
	            .attr('y', $$.isLegendRight || $$.isLegendInset ? -200 : yForLegendRect);
	        l.append('rect')
	            .attr("class", CLASS.legendItemTile)
	            .style("pointer-events", "none")
	            .style('fill', $$.color)
	            .attr('x', $$.isLegendRight || $$.isLegendInset ? xForLegendText : -200)
	            .attr('y', $$.isLegendRight || $$.isLegendInset ? -200 : yForLegend)
	            .attr('width', 10)
	            .attr('height', 10);

	        // Set background for inset legend
	        background = $$.legend.select('.' + CLASS.legendBackground + ' rect');
	        if ($$.isLegendInset && maxWidth > 0 && background.size() === 0) {
	            background = $$.legend.insert('g', '.' + CLASS.legendItem)
	                .attr("class", CLASS.legendBackground)
	                .append('rect');
	        }

	        texts = $$.legend.selectAll('text')
	            .data(targetIds)
	            .text(function (id) { return isDefined(config.data_names[id]) ? config.data_names[id] : id; }) // MEMO: needed for update
	            .each(function (id, i) { updatePositions(this, id, i); });
	        (withTransition ? texts.transition() : texts)
	            .attr('x', xForLegendText)
	            .attr('y', yForLegendText);

	        rects = $$.legend.selectAll('rect.' + CLASS.legendItemEvent)
	            .data(targetIds);
	        (withTransition ? rects.transition() : rects)
	            .attr('width', function (id) { return widths[id]; })
	            .attr('height', function (id) { return heights[id]; })
	            .attr('x', xForLegendRect)
	            .attr('y', yForLegendRect);

	        tiles = $$.legend.selectAll('rect.' + CLASS.legendItemTile)
	            .data(targetIds);
	        (withTransition ? tiles.transition() : tiles)
	            .style('fill', $$.color)
	            .attr('x', xForLegend)
	            .attr('y', yForLegend);

	        if (background) {
	            (withTransition ? background.transition() : background)
	                .attr('height', $$.getLegendHeight() - 12)
	                .attr('width', maxWidth * (step + 1) + 10);
	        }

	        // toggle legend state
	        $$.legend.selectAll('.' + CLASS.legendItem)
	            .classed(CLASS.legendItemHidden, function (id) { return !$$.isTargetToShow(id); });

	        // Update all to reflect change of legend
	        $$.updateLegendItemWidth(maxWidth);
	        $$.updateLegendItemHeight(maxHeight);
	        $$.updateLegendStep(step);
	        // Update size and scale
	        $$.updateSizes();
	        $$.updateScales();
	        $$.updateSvgSize();
	        // Update g positions
	        $$.transformAll(withTransitionForTransform, transitions);
	        $$.legendHasRendered = true;
	    };

	    function Axis(owner) {
	        API.call(this, owner);
	    }

	    inherit(API, Axis);

	    Axis.prototype.init = function init() {

	        var $$ = this.owner, config = $$.config, main = $$.main;
	        $$.axes.x = main.append("g")
	            .attr("class", CLASS.axis + ' ' + CLASS.axisX)
	            .attr("clip-path", $$.clipPathForXAxis)
	            .attr("transform", $$.getTranslate('x'))
	            .style("visibility", config.axis_x_show ? 'visible' : 'hidden');
	        $$.axes.x.append("text")
	            .attr("class", CLASS.axisXLabel)
	            .attr("transform", config.axis_rotated ? "rotate(-90)" : "")
	            .style("text-anchor", this.textAnchorForXAxisLabel.bind(this));
	        $$.axes.y = main.append("g")
	            .attr("class", CLASS.axis + ' ' + CLASS.axisY)
	            .attr("clip-path", config.axis_y_inner ? "" : $$.clipPathForYAxis)
	            .attr("transform", $$.getTranslate('y'))
	            .style("visibility", config.axis_y_show ? 'visible' : 'hidden');
	        $$.axes.y.append("text")
	            .attr("class", CLASS.axisYLabel)
	            .attr("transform", config.axis_rotated ? "" : "rotate(-90)")
	            .style("text-anchor", this.textAnchorForYAxisLabel.bind(this));

	        $$.axes.y2 = main.append("g")
	            .attr("class", CLASS.axis + ' ' + CLASS.axisY2)
	            // clip-path?
	            .attr("transform", $$.getTranslate('y2'))
	            .style("visibility", config.axis_y2_show ? 'visible' : 'hidden');
	        $$.axes.y2.append("text")
	            .attr("class", CLASS.axisY2Label)
	            .attr("transform", config.axis_rotated ? "" : "rotate(-90)")
	            .style("text-anchor", this.textAnchorForY2AxisLabel.bind(this));
	    };
	    Axis.prototype.getXAxis = function getXAxis(scale, orient, tickFormat, tickValues, withOuterTick, withoutTransition, withoutRotateTickText) {
	        var $$ = this.owner, config = $$.config,
	            axisParams = {
	                isCategory: $$.isCategorized(),
	                withOuterTick: withOuterTick,
	                tickMultiline: config.axis_x_tick_multiline,
	                tickWidth: config.axis_x_tick_width,
	                tickTextRotate: withoutRotateTickText ? 0 : config.axis_x_tick_rotate,
	                withoutTransition: withoutTransition,
	            },
	            axis = c3_axis($$.d3, axisParams).scale(scale).orient(orient);

	        if ($$.isTimeSeries() && tickValues) {
	            tickValues = tickValues.map(function (v) { return $$.parseDate(v); });
	        }

	        // Set tick
	        axis.tickFormat(tickFormat).tickValues(tickValues);
	        if ($$.isCategorized()) {
	            axis.tickCentered(config.axis_x_tick_centered);
	            if (isEmpty(config.axis_x_tick_culling)) {
	                config.axis_x_tick_culling = false;
	            }
	        }

	        return axis;
	    };
	    Axis.prototype.updateXAxisTickValues = function updateXAxisTickValues(targets, axis) {
	        var $$ = this.owner, config = $$.config, tickValues;
	        if (config.axis_x_tick_fit || config.axis_x_tick_count) {
	            tickValues = this.generateTickValues($$.mapTargetsToUniqueXs(targets), config.axis_x_tick_count, $$.isTimeSeries());
	        }
	        if (axis) {
	            axis.tickValues(tickValues);
	        } else {
	            $$.xAxis.tickValues(tickValues);
	            $$.subXAxis.tickValues(tickValues);
	        }
	        return tickValues;
	    };
	    Axis.prototype.getYAxis = function getYAxis(scale, orient, tickFormat, tickValues, withOuterTick, withoutTransition) {
	        var axisParams = {
	            withOuterTick: withOuterTick,
	            withoutTransition: withoutTransition,
	        },
	            $$ = this.owner,
	            d3 = $$.d3,
	            config = $$.config,
	            axis = c3_axis(d3, axisParams).scale(scale).orient(orient).tickFormat(tickFormat);
	        if ($$.isTimeSeriesY()) {
	            axis.ticks(d3.time[config.axis_y_tick_time_value], config.axis_y_tick_time_interval);
	        } else {
	            axis.tickValues(tickValues);
	        }
	        return axis;
	    };
	    Axis.prototype.getId = function getId(id) {
	        var config = this.owner.config;
	        return id in config.data_axes ? config.data_axes[id] : 'y';
	    };
	    Axis.prototype.getXAxisTickFormat = function getXAxisTickFormat() {
	        var $$ = this.owner, config = $$.config,
	            format = $$.isTimeSeries() ? $$.defaultAxisTimeFormat : $$.isCategorized() ? $$.categoryName : function (v) { return v < 0 ? v.toFixed(0) : v; };
	        if (config.axis_x_tick_format) {
	            if (isFunction(config.axis_x_tick_format)) {
	                format = config.axis_x_tick_format;
	            } else if ($$.isTimeSeries()) {
	                format = function (date) {
	                    return date ? $$.axisTimeFormat(config.axis_x_tick_format)(date) : "";
	                };
	            }
	        }
	        return isFunction(format) ? function (v) { return format.call($$, v); } : format;
	    };
	    Axis.prototype.getTickValues = function getTickValues(tickValues, axis) {
	        return tickValues ? tickValues : axis ? axis.tickValues() : undefined;
	    };
	    Axis.prototype.getXAxisTickValues = function getXAxisTickValues() {
	        return this.getTickValues(this.owner.config.axis_x_tick_values, this.owner.xAxis);
	    };
	    Axis.prototype.getYAxisTickValues = function getYAxisTickValues() {
	        return this.getTickValues(this.owner.config.axis_y_tick_values, this.owner.yAxis);
	    };
	    Axis.prototype.getY2AxisTickValues = function getY2AxisTickValues() {
	        return this.getTickValues(this.owner.config.axis_y2_tick_values, this.owner.y2Axis);
	    };
	    Axis.prototype.getLabelOptionByAxisId = function getLabelOptionByAxisId(axisId) {
	        var $$ = this.owner, config = $$.config, option;
	        if (axisId === 'y') {
	            option = config.axis_y_label;
	        } else if (axisId === 'y2') {
	            option = config.axis_y2_label;
	        } else if (axisId === 'x') {
	            option = config.axis_x_label;
	        }
	        return option;
	    };
	    Axis.prototype.getLabelText = function getLabelText(axisId) {
	        var option = this.getLabelOptionByAxisId(axisId);
	        return isString(option) ? option : option ? option.text : null;
	    };
	    Axis.prototype.setLabelText = function setLabelText(axisId, text) {
	        var $$ = this.owner, config = $$.config,
	            option = this.getLabelOptionByAxisId(axisId);
	        if (isString(option)) {
	            if (axisId === 'y') {
	                config.axis_y_label = text;
	            } else if (axisId === 'y2') {
	                config.axis_y2_label = text;
	            } else if (axisId === 'x') {
	                config.axis_x_label = text;
	            }
	        } else if (option) {
	            option.text = text;
	        }
	    };
	    Axis.prototype.getLabelPosition = function getLabelPosition(axisId, defaultPosition) {
	        var option = this.getLabelOptionByAxisId(axisId),
	            position = (option && typeof option === 'object' && option.position) ? option.position : defaultPosition;
	        return {
	            isInner: position.indexOf('inner') >= 0,
	            isOuter: position.indexOf('outer') >= 0,
	            isLeft: position.indexOf('left') >= 0,
	            isCenter: position.indexOf('center') >= 0,
	            isRight: position.indexOf('right') >= 0,
	            isTop: position.indexOf('top') >= 0,
	            isMiddle: position.indexOf('middle') >= 0,
	            isBottom: position.indexOf('bottom') >= 0
	        };
	    };
	    Axis.prototype.getXAxisLabelPosition = function getXAxisLabelPosition() {
	        return this.getLabelPosition('x', this.owner.config.axis_rotated ? 'inner-top' : 'inner-right');
	    };
	    Axis.prototype.getYAxisLabelPosition = function getYAxisLabelPosition() {
	        return this.getLabelPosition('y', this.owner.config.axis_rotated ? 'inner-right' : 'inner-top');
	    };
	    Axis.prototype.getY2AxisLabelPosition = function getY2AxisLabelPosition() {
	        return this.getLabelPosition('y2', this.owner.config.axis_rotated ? 'inner-right' : 'inner-top');
	    };
	    Axis.prototype.getLabelPositionById = function getLabelPositionById(id) {
	        return id === 'y2' ? this.getY2AxisLabelPosition() : id === 'y' ? this.getYAxisLabelPosition() : this.getXAxisLabelPosition();
	    };
	    Axis.prototype.textForXAxisLabel = function textForXAxisLabel() {
	        return this.getLabelText('x');
	    };
	    Axis.prototype.textForYAxisLabel = function textForYAxisLabel() {
	        return this.getLabelText('y');
	    };
	    Axis.prototype.textForY2AxisLabel = function textForY2AxisLabel() {
	        return this.getLabelText('y2');
	    };
	    Axis.prototype.xForAxisLabel = function xForAxisLabel(forHorizontal, position) {
	        var $$ = this.owner;
	        if (forHorizontal) {
	            return position.isLeft ? 0 : position.isCenter ? $$.width / 2 : $$.width;
	        } else {
	            return position.isBottom ? -$$.height : position.isMiddle ? -$$.height / 2 : 0;
	        }
	    };
	    Axis.prototype.dxForAxisLabel = function dxForAxisLabel(forHorizontal, position) {
	        if (forHorizontal) {
	            return position.isLeft ? "0.5em" : position.isRight ? "-0.5em" : "0";
	        } else {
	            return position.isTop ? "-0.5em" : position.isBottom ? "0.5em" : "0";
	        }
	    };
	    Axis.prototype.textAnchorForAxisLabel = function textAnchorForAxisLabel(forHorizontal, position) {
	        if (forHorizontal) {
	            return position.isLeft ? 'start' : position.isCenter ? 'middle' : 'end';
	        } else {
	            return position.isBottom ? 'start' : position.isMiddle ? 'middle' : 'end';
	        }
	    };
	    Axis.prototype.xForXAxisLabel = function xForXAxisLabel() {
	        return this.xForAxisLabel(!this.owner.config.axis_rotated, this.getXAxisLabelPosition());
	    };
	    Axis.prototype.xForYAxisLabel = function xForYAxisLabel() {
	        return this.xForAxisLabel(this.owner.config.axis_rotated, this.getYAxisLabelPosition());
	    };
	    Axis.prototype.xForY2AxisLabel = function xForY2AxisLabel() {
	        return this.xForAxisLabel(this.owner.config.axis_rotated, this.getY2AxisLabelPosition());
	    };
	    Axis.prototype.dxForXAxisLabel = function dxForXAxisLabel() {
	        return this.dxForAxisLabel(!this.owner.config.axis_rotated, this.getXAxisLabelPosition());
	    };
	    Axis.prototype.dxForYAxisLabel = function dxForYAxisLabel() {
	        return this.dxForAxisLabel(this.owner.config.axis_rotated, this.getYAxisLabelPosition());
	    };
	    Axis.prototype.dxForY2AxisLabel = function dxForY2AxisLabel() {
	        return this.dxForAxisLabel(this.owner.config.axis_rotated, this.getY2AxisLabelPosition());
	    };
	    Axis.prototype.dyForXAxisLabel = function dyForXAxisLabel() {
	        var $$ = this.owner, config = $$.config,
	            position = this.getXAxisLabelPosition();
	        if (config.axis_rotated) {
	            return position.isInner ? "1.2em" : -25 - this.getMaxTickWidth('x');
	        } else {
	            return position.isInner ? "-0.5em" : config.axis_x_height ? config.axis_x_height - 10 : "3em";
	        }
	    };
	    Axis.prototype.dyForYAxisLabel = function dyForYAxisLabel() {
	        var $$ = this.owner,
	            position = this.getYAxisLabelPosition();
	        if ($$.config.axis_rotated) {
	            return position.isInner ? "-0.5em" : "3em";
	        } else {
	            return position.isInner ? "1.2em" : -10 - ($$.config.axis_y_inner ? 0 : (this.getMaxTickWidth('y') + 10));
	        }
	    };
	    Axis.prototype.dyForY2AxisLabel = function dyForY2AxisLabel() {
	        var $$ = this.owner,
	            position = this.getY2AxisLabelPosition();
	        if ($$.config.axis_rotated) {
	            return position.isInner ? "1.2em" : "-2.2em";
	        } else {
	            return position.isInner ? "-0.5em" : 15 + ($$.config.axis_y2_inner ? 0 : (this.getMaxTickWidth('y2') + 15));
	        }
	    };
	    Axis.prototype.textAnchorForXAxisLabel = function textAnchorForXAxisLabel() {
	        var $$ = this.owner;
	        return this.textAnchorForAxisLabel(!$$.config.axis_rotated, this.getXAxisLabelPosition());
	    };
	    Axis.prototype.textAnchorForYAxisLabel = function textAnchorForYAxisLabel() {
	        var $$ = this.owner;
	        return this.textAnchorForAxisLabel($$.config.axis_rotated, this.getYAxisLabelPosition());
	    };
	    Axis.prototype.textAnchorForY2AxisLabel = function textAnchorForY2AxisLabel() {
	        var $$ = this.owner;
	        return this.textAnchorForAxisLabel($$.config.axis_rotated, this.getY2AxisLabelPosition());
	    };
	    Axis.prototype.getMaxTickWidth = function getMaxTickWidth(id, withoutRecompute) {
	        var $$ = this.owner, config = $$.config,
	            maxWidth = 0, targetsToShow, scale, axis, dummy, svg;
	        if (withoutRecompute && $$.currentMaxTickWidths[id]) {
	            return $$.currentMaxTickWidths[id];
	        }
	        if ($$.svg) {
	            targetsToShow = $$.filterTargetsToShow($$.data.targets);
	            if (id === 'y') {
	                scale = $$.y.copy().domain($$.getYDomain(targetsToShow, 'y'));
	                axis = this.getYAxis(scale, $$.yOrient, config.axis_y_tick_format, $$.yAxisTickValues, false, true);
	            } else if (id === 'y2') {
	                scale = $$.y2.copy().domain($$.getYDomain(targetsToShow, 'y2'));
	                axis = this.getYAxis(scale, $$.y2Orient, config.axis_y2_tick_format, $$.y2AxisTickValues, false, true);
	            } else {
	                scale = $$.x.copy().domain($$.getXDomain(targetsToShow));
	                axis = this.getXAxis(scale, $$.xOrient, $$.xAxisTickFormat, $$.xAxisTickValues, false, true, true);
	                this.updateXAxisTickValues(targetsToShow, axis);
	            }
	            dummy = $$.d3.select('body').append('div').classed('c3', true);
	            svg = dummy.append("svg").style('visibility', 'hidden').style('position', 'fixed').style('top', 0).style('left', 0),
	            svg.append('g').call(axis).each(function () {
	                $$.d3.select(this).selectAll('text').each(function () {
	                    var box = this.getBoundingClientRect();
	                    if (maxWidth < box.width) { maxWidth = box.width; }
	                });
	                dummy.remove();
	            });
	        }
	        $$.currentMaxTickWidths[id] = maxWidth <= 0 ? $$.currentMaxTickWidths[id] : maxWidth;
	        return $$.currentMaxTickWidths[id];
	    };

	    Axis.prototype.updateLabels = function updateLabels(withTransition) {
	        var $$ = this.owner;
	        var axisXLabel = $$.main.select('.' + CLASS.axisX + ' .' + CLASS.axisXLabel),
	            axisYLabel = $$.main.select('.' + CLASS.axisY + ' .' + CLASS.axisYLabel),
	            axisY2Label = $$.main.select('.' + CLASS.axisY2 + ' .' + CLASS.axisY2Label);
	        (withTransition ? axisXLabel.transition() : axisXLabel)
	            .attr("x", this.xForXAxisLabel.bind(this))
	            .attr("dx", this.dxForXAxisLabel.bind(this))
	            .attr("dy", this.dyForXAxisLabel.bind(this))
	            .text(this.textForXAxisLabel.bind(this));
	        (withTransition ? axisYLabel.transition() : axisYLabel)
	            .attr("x", this.xForYAxisLabel.bind(this))
	            .attr("dx", this.dxForYAxisLabel.bind(this))
	            .attr("dy", this.dyForYAxisLabel.bind(this))
	            .text(this.textForYAxisLabel.bind(this));
	        (withTransition ? axisY2Label.transition() : axisY2Label)
	            .attr("x", this.xForY2AxisLabel.bind(this))
	            .attr("dx", this.dxForY2AxisLabel.bind(this))
	            .attr("dy", this.dyForY2AxisLabel.bind(this))
	            .text(this.textForY2AxisLabel.bind(this));
	    };
	    Axis.prototype.getPadding = function getPadding(padding, key, defaultValue, domainLength) {
	        if (!isValue(padding[key])) {
	            return defaultValue;
	        }
	        if (padding.unit === 'ratio') {
	            return padding[key] * domainLength;
	        }
	        // assume padding is pixels if unit is not specified
	        return this.convertPixelsToAxisPadding(padding[key], domainLength);
	    };
	    Axis.prototype.convertPixelsToAxisPadding = function convertPixelsToAxisPadding(pixels, domainLength) {
	        var $$ = this.owner,
	            length = $$.config.axis_rotated ? $$.width : $$.height;
	        return domainLength * (pixels / length);
	    };
	    Axis.prototype.generateTickValues = function generateTickValues(values, tickCount, forTimeSeries) {
	        var tickValues = values, targetCount, start, end, count, interval, i, tickValue;
	        if (tickCount) {
	            targetCount = isFunction(tickCount) ? tickCount() : tickCount;
	            // compute ticks according to tickCount
	            if (targetCount === 1) {
	                tickValues = [values[0]];
	            } else if (targetCount === 2) {
	                tickValues = [values[0], values[values.length - 1]];
	            } else if (targetCount > 2) {
	                count = targetCount - 2;
	                start = values[0];
	                end = values[values.length - 1];
	                interval = (end - start) / (count + 1);
	                // re-construct unique values
	                tickValues = [start];
	                for (i = 0; i < count; i++) {
	                    tickValue = +start + interval * (i + 1);
	                    tickValues.push(forTimeSeries ? new Date(tickValue) : tickValue);
	                }
	                tickValues.push(end);
	            }
	        }
	        if (!forTimeSeries) { tickValues = tickValues.sort(function (a, b) { return a - b; }); }
	        return tickValues;
	    };
	    Axis.prototype.generateTransitions = function generateTransitions(duration) {
	        var $$ = this.owner, axes = $$.axes;
	        return {
	            axisX: duration ? axes.x.transition().duration(duration) : axes.x,
	            axisY: duration ? axes.y.transition().duration(duration) : axes.y,
	            axisY2: duration ? axes.y2.transition().duration(duration) : axes.y2,
	            axisSubX: duration ? axes.subx.transition().duration(duration) : axes.subx
	        };
	    };
	    Axis.prototype.redraw = function redraw(transitions, isHidden) {
	        var $$ = this.owner;
	        $$.axes.x.style("opacity", isHidden ? 0 : 1);
	        $$.axes.y.style("opacity", isHidden ? 0 : 1);
	        $$.axes.y2.style("opacity", isHidden ? 0 : 1);
	        $$.axes.subx.style("opacity", isHidden ? 0 : 1);
	        transitions.axisX.call($$.xAxis);
	        transitions.axisY.call($$.yAxis);
	        transitions.axisY2.call($$.y2Axis);
	        transitions.axisSubX.call($$.subXAxis);
	    };

	    c3_chart_internal_fn.getClipPath = function (id) {
	        var isIE9 = window.navigator.appVersion.toLowerCase().indexOf("msie 9.") >= 0;
	        return "url(" + (isIE9 ? "" : document.URL.split('#')[0]) + "#" + id + ")";
	    };
	    c3_chart_internal_fn.appendClip = function (parent, id) {
	        return parent.append("clipPath").attr("id", id).append("rect");
	    };
	    c3_chart_internal_fn.getAxisClipX = function (forHorizontal) {
	        // axis line width + padding for left
	        var left = Math.max(30, this.margin.left);
	        return forHorizontal ? -(1 + left) : -(left - 1);
	    };
	    c3_chart_internal_fn.getAxisClipY = function (forHorizontal) {
	        return forHorizontal ? -20 : -this.margin.top;
	    };
	    c3_chart_internal_fn.getXAxisClipX = function () {
	        var $$ = this;
	        return $$.getAxisClipX(!$$.config.axis_rotated);
	    };
	    c3_chart_internal_fn.getXAxisClipY = function () {
	        var $$ = this;
	        return $$.getAxisClipY(!$$.config.axis_rotated);
	    };
	    c3_chart_internal_fn.getYAxisClipX = function () {
	        var $$ = this;
	        return $$.config.axis_y_inner ? -1 : $$.getAxisClipX($$.config.axis_rotated);
	    };
	    c3_chart_internal_fn.getYAxisClipY = function () {
	        var $$ = this;
	        return $$.getAxisClipY($$.config.axis_rotated);
	    };
	    c3_chart_internal_fn.getAxisClipWidth = function (forHorizontal) {
	        var $$ = this,
	            left = Math.max(30, $$.margin.left),
	            right = Math.max(30, $$.margin.right);
	        // width + axis line width + padding for left/right
	        return forHorizontal ? $$.width + 2 + left + right : $$.margin.left + 20;
	    };
	    c3_chart_internal_fn.getAxisClipHeight = function (forHorizontal) {
	        // less than 20 is not enough to show the axis label 'outer' without legend
	        return (forHorizontal ? this.margin.bottom : (this.margin.top + this.height)) + 20;
	    };
	    c3_chart_internal_fn.getXAxisClipWidth = function () {
	        var $$ = this;
	        return $$.getAxisClipWidth(!$$.config.axis_rotated);
	    };
	    c3_chart_internal_fn.getXAxisClipHeight = function () {
	        var $$ = this;
	        return $$.getAxisClipHeight(!$$.config.axis_rotated);
	    };
	    c3_chart_internal_fn.getYAxisClipWidth = function () {
	        var $$ = this;
	        return $$.getAxisClipWidth($$.config.axis_rotated) + ($$.config.axis_y_inner ? 20 : 0);
	    };
	    c3_chart_internal_fn.getYAxisClipHeight = function () {
	        var $$ = this;
	        return $$.getAxisClipHeight($$.config.axis_rotated);
	    };

	    c3_chart_internal_fn.initPie = function () {
	        var $$ = this, d3 = $$.d3, config = $$.config;
	        $$.pie = d3.layout.pie().value(function (d) {
	            return d.values.reduce(function (a, b) { return a + b.value; }, 0);
	        });
	        if (!config.data_order) {
	            $$.pie.sort(null);
	        }
	    };

	    c3_chart_internal_fn.updateRadius = function () {
	        var $$ = this, config = $$.config,
	            w = config.gauge_width || config.donut_width;
	        $$.radiusExpanded = Math.min($$.arcWidth, $$.arcHeight) / 2;
	        $$.radius = $$.radiusExpanded * 0.95;
	        $$.innerRadiusRatio = w ? ($$.radius - w) / $$.radius : 0.6;
	        $$.innerRadius = $$.hasType('donut') || $$.hasType('gauge') ? $$.radius * $$.innerRadiusRatio : 0;
	    };

	    c3_chart_internal_fn.updateArc = function () {
	        var $$ = this;
	        $$.svgArc = $$.getSvgArc();
	        $$.svgArcExpanded = $$.getSvgArcExpanded();
	        $$.svgArcExpandedSub = $$.getSvgArcExpanded(0.98);
	    };

	    c3_chart_internal_fn.updateAngle = function (d) {
	        var $$ = this, config = $$.config,
	            found = false, index = 0,
	            gMin = config.gauge_min, gMax = config.gauge_max, gTic, gValue;
	        $$.pie($$.filterTargetsToShow($$.data.targets)).forEach(function (t) {
	            if (! found && t.data.id === d.data.id) {
	                found = true;
	                d = t;
	                d.index = index;
	            }
	            index++;
	        });
	        if (isNaN(d.startAngle)) {
	            d.startAngle = 0;
	        }
	        if (isNaN(d.endAngle)) {
	            d.endAngle = d.startAngle;
	        }
	        if ($$.isGaugeType(d.data)) {
	            gTic = (Math.PI) / (gMax - gMin);
	            gValue = d.value < gMin ? 0 : d.value < gMax ? d.value - gMin : (gMax - gMin);
	            d.startAngle = -1 * (Math.PI / 2);
	            d.endAngle = d.startAngle + gTic * gValue;
	        }
	        return found ? d : null;
	    };

	    c3_chart_internal_fn.getSvgArc = function () {
	        var $$ = this,
	            arc = $$.d3.svg.arc().outerRadius($$.radius).innerRadius($$.innerRadius),
	            newArc = function (d, withoutUpdate) {
	                var updated;
	                if (withoutUpdate) { return arc(d); } // for interpolate
	                updated = $$.updateAngle(d);
	                return updated ? arc(updated) : "M 0 0";
	            };
	        // TODO: extends all function
	        newArc.centroid = arc.centroid;
	        return newArc;
	    };

	    c3_chart_internal_fn.getSvgArcExpanded = function (rate) {
	        var $$ = this,
	            arc = $$.d3.svg.arc().outerRadius($$.radiusExpanded * (rate ? rate : 1)).innerRadius($$.innerRadius);
	        return function (d) {
	            var updated = $$.updateAngle(d);
	            return updated ? arc(updated) : "M 0 0";
	        };
	    };

	    c3_chart_internal_fn.getArc = function (d, withoutUpdate, force) {
	        return force || this.isArcType(d.data) ? this.svgArc(d, withoutUpdate) : "M 0 0";
	    };


	    c3_chart_internal_fn.transformForArcLabel = function (d) {
	        var $$ = this,
	            updated = $$.updateAngle(d), c, x, y, h, ratio, translate = "";
	        if (updated && !$$.hasType('gauge')) {
	            c = this.svgArc.centroid(updated);
	            x = isNaN(c[0]) ? 0 : c[0];
	            y = isNaN(c[1]) ? 0 : c[1];
	            h = Math.sqrt(x * x + y * y);
	            // TODO: ratio should be an option?
	            ratio = $$.radius && h ? (36 / $$.radius > 0.375 ? 1.175 - 36 / $$.radius : 0.8) * $$.radius / h : 0;
	            translate = "translate(" + (x * ratio) +  ',' + (y * ratio) +  ")";
	        }
	        return translate;
	    };

	    c3_chart_internal_fn.getArcRatio = function (d) {
	        var $$ = this,
	            whole = $$.hasType('gauge') ? Math.PI : (Math.PI * 2);
	        return d ? (d.endAngle - d.startAngle) / whole : null;
	    };

	    c3_chart_internal_fn.convertToArcData = function (d) {
	        return this.addName({
	            id: d.data.id,
	            value: d.value,
	            ratio: this.getArcRatio(d),
	            index: d.index
	        });
	    };

	    c3_chart_internal_fn.textForArcLabel = function (d) {
	        var $$ = this,
	            updated, value, ratio, id, format;
	        if (! $$.shouldShowArcLabel()) { return ""; }
	        updated = $$.updateAngle(d);
	        value = updated ? updated.value : null;
	        ratio = $$.getArcRatio(updated);
	        id = d.data.id;
	        if (! $$.hasType('gauge') && ! $$.meetsArcLabelThreshold(ratio)) { return ""; }
	        format = $$.getArcLabelFormat();
	        return format ? format(value, ratio, id) : $$.defaultArcValueFormat(value, ratio);
	    };

	    c3_chart_internal_fn.expandArc = function (targetIds) {
	        var $$ = this, interval;

	        // MEMO: avoid to cancel transition
	        if ($$.transiting) {
	            interval = window.setInterval(function () {
	                if (!$$.transiting) {
	                    window.clearInterval(interval);
	                    if ($$.legend.selectAll('.c3-legend-item-focused').size() > 0) {
	                        $$.expandArc(targetIds);
	                    }
	                }
	            }, 10);
	            return;
	        }

	        targetIds = $$.mapToTargetIds(targetIds);

	        $$.svg.selectAll($$.selectorTargets(targetIds, '.' + CLASS.chartArc)).each(function (d) {
	            if (! $$.shouldExpand(d.data.id)) { return; }
	            $$.d3.select(this).selectAll('path')
	                .transition().duration(50)
	                .attr("d", $$.svgArcExpanded)
	                .transition().duration(100)
	                .attr("d", $$.svgArcExpandedSub)
	                .each(function (d) {
	                    if ($$.isDonutType(d.data)) {
	                        // callback here
	                    }
	                });
	        });
	    };

	    c3_chart_internal_fn.unexpandArc = function (targetIds) {
	        var $$ = this;

	        if ($$.transiting) { return; }

	        targetIds = $$.mapToTargetIds(targetIds);

	        $$.svg.selectAll($$.selectorTargets(targetIds, '.' + CLASS.chartArc)).selectAll('path')
	            .transition().duration(50)
	            .attr("d", $$.svgArc);
	        $$.svg.selectAll('.' + CLASS.arc)
	            .style("opacity", 1);
	    };

	    c3_chart_internal_fn.shouldExpand = function (id) {
	        var $$ = this, config = $$.config;
	        return ($$.isDonutType(id) && config.donut_expand) || ($$.isGaugeType(id) && config.gauge_expand) || ($$.isPieType(id) && config.pie_expand);
	    };

	    c3_chart_internal_fn.shouldShowArcLabel = function () {
	        var $$ = this, config = $$.config, shouldShow = true;
	        if ($$.hasType('donut')) {
	            shouldShow = config.donut_label_show;
	        } else if ($$.hasType('pie')) {
	            shouldShow = config.pie_label_show;
	        }
	        // when gauge, always true
	        return shouldShow;
	    };

	    c3_chart_internal_fn.meetsArcLabelThreshold = function (ratio) {
	        var $$ = this, config = $$.config,
	            threshold = $$.hasType('donut') ? config.donut_label_threshold : config.pie_label_threshold;
	        return ratio >= threshold;
	    };

	    c3_chart_internal_fn.getArcLabelFormat = function () {
	        var $$ = this, config = $$.config,
	            format = config.pie_label_format;
	        if ($$.hasType('gauge')) {
	            format = config.gauge_label_format;
	        } else if ($$.hasType('donut')) {
	            format = config.donut_label_format;
	        }
	        return format;
	    };

	    c3_chart_internal_fn.getArcTitle = function () {
	        var $$ = this;
	        return $$.hasType('donut') ? $$.config.donut_title : "";
	    };

	    c3_chart_internal_fn.updateTargetsForArc = function (targets) {
	        var $$ = this, main = $$.main,
	            mainPieUpdate, mainPieEnter,
	            classChartArc = $$.classChartArc.bind($$),
	            classArcs = $$.classArcs.bind($$),
	            classFocus = $$.classFocus.bind($$);
	        mainPieUpdate = main.select('.' + CLASS.chartArcs).selectAll('.' + CLASS.chartArc)
	            .data($$.pie(targets))
	            .attr("class", function (d) { return classChartArc(d) + classFocus(d.data); });
	        mainPieEnter = mainPieUpdate.enter().append("g")
	            .attr("class", classChartArc);
	        mainPieEnter.append('g')
	            .attr('class', classArcs);
	        mainPieEnter.append("text")
	            .attr("dy", $$.hasType('gauge') ? "-.1em" : ".35em")
	            .style("opacity", 0)
	            .style("text-anchor", "middle")
	            .style("pointer-events", "none");
	        // MEMO: can not keep same color..., but not bad to update color in redraw
	        //mainPieUpdate.exit().remove();
	    };

	    c3_chart_internal_fn.initArc = function () {
	        var $$ = this;
	        $$.arcs = $$.main.select('.' + CLASS.chart).append("g")
	            .attr("class", CLASS.chartArcs)
	            .attr("transform", $$.getTranslate('arc'));
	        $$.arcs.append('text')
	            .attr('class', CLASS.chartArcsTitle)
	            .style("text-anchor", "middle")
	            .text($$.getArcTitle());
	    };

	    c3_chart_internal_fn.redrawArc = function (duration, durationForExit, withTransform) {
	        var $$ = this, d3 = $$.d3, config = $$.config, main = $$.main,
	            mainArc;
	        mainArc = main.selectAll('.' + CLASS.arcs).selectAll('.' + CLASS.arc)
	            .data($$.arcData.bind($$));
	        mainArc.enter().append('path')
	            .attr("class", $$.classArc.bind($$))
	            .style("fill", function (d) { return $$.color(d.data); })
	            .style("cursor", function (d) { return config.interaction_enabled && config.data_selection_isselectable(d) ? "pointer" : null; })
	            .style("opacity", 0)
	            .each(function (d) {
	                if ($$.isGaugeType(d.data)) {
	                    d.startAngle = d.endAngle = -1 * (Math.PI / 2);
	                }
	                this._current = d;
	            });
	        mainArc
	            .attr("transform", function (d) { return !$$.isGaugeType(d.data) && withTransform ? "scale(0)" : ""; })
	            .style("opacity", function (d) { return d === this._current ? 0 : 1; })
	            .on('mouseover', config.interaction_enabled ? function (d) {
	                var updated, arcData;
	                if ($$.transiting) { // skip while transiting
	                    return;
	                }
	                updated = $$.updateAngle(d);
	                arcData = $$.convertToArcData(updated);
	                // transitions
	                $$.expandArc(updated.data.id);
	                $$.api.focus(updated.data.id);
	                $$.toggleFocusLegend(updated.data.id, true);
	                $$.config.data_onmouseover(arcData, this);
	            } : null)
	            .on('mousemove', config.interaction_enabled ? function (d) {
	                var updated = $$.updateAngle(d),
	                    arcData = $$.convertToArcData(updated),
	                    selectedData = [arcData];
	                $$.showTooltip(selectedData, this);
	            } : null)
	            .on('mouseout', config.interaction_enabled ? function (d) {
	                var updated, arcData;
	                if ($$.transiting) { // skip while transiting
	                    return;
	                }
	                updated = $$.updateAngle(d);
	                arcData = $$.convertToArcData(updated);
	                // transitions
	                $$.unexpandArc(updated.data.id);
	                $$.api.revert();
	                $$.revertLegend();
	                $$.hideTooltip();
	                $$.config.data_onmouseout(arcData, this);
	            } : null)
	            .on('click', config.interaction_enabled ? function (d, i) {
	                var updated = $$.updateAngle(d),
	                    arcData = $$.convertToArcData(updated);
	                if ($$.toggleShape) { $$.toggleShape(this, arcData, i); }
	                $$.config.data_onclick.call($$.api, arcData, this);
	            } : null)
	            .each(function () { $$.transiting = true; })
	            .transition().duration(duration)
	            .attrTween("d", function (d) {
	                var updated = $$.updateAngle(d), interpolate;
	                if (! updated) {
	                    return function () { return "M 0 0"; };
	                }
	                //                if (this._current === d) {
	                //                    this._current = {
	                //                        startAngle: Math.PI*2,
	                //                        endAngle: Math.PI*2,
	                //                    };
	                //                }
	                if (isNaN(this._current.startAngle)) {
	                    this._current.startAngle = 0;
	                }
	                if (isNaN(this._current.endAngle)) {
	                    this._current.endAngle = this._current.startAngle;
	                }
	                interpolate = d3.interpolate(this._current, updated);
	                this._current = interpolate(0);
	                return function (t) {
	                    var interpolated = interpolate(t);
	                    interpolated.data = d.data; // data.id will be updated by interporator
	                    return $$.getArc(interpolated, true);
	                };
	            })
	            .attr("transform", withTransform ? "scale(1)" : "")
	            .style("fill", function (d) {
	                return $$.levelColor ? $$.levelColor(d.data.values[0].value) : $$.color(d.data.id);
	            }) // Where gauge reading color would receive customization.
	            .style("opacity", 1)
	            .call($$.endall, function () {
	                $$.transiting = false;
	            });
	        mainArc.exit().transition().duration(durationForExit)
	            .style('opacity', 0)
	            .remove();
	        main.selectAll('.' + CLASS.chartArc).select('text')
	            .style("opacity", 0)
	            .attr('class', function (d) { return $$.isGaugeType(d.data) ? CLASS.gaugeValue : ''; })
	            .text($$.textForArcLabel.bind($$))
	            .attr("transform", $$.transformForArcLabel.bind($$))
	            .style('font-size', function (d) { return $$.isGaugeType(d.data) ? Math.round($$.radius / 5) + 'px' : ''; })
	          .transition().duration(duration)
	            .style("opacity", function (d) { return $$.isTargetToShow(d.data.id) && $$.isArcType(d.data) ? 1 : 0; });
	        main.select('.' + CLASS.chartArcsTitle)
	            .style("opacity", $$.hasType('donut') || $$.hasType('gauge') ? 1 : 0);

	        if ($$.hasType('gauge')) {
	            $$.arcs.select('.' + CLASS.chartArcsBackground)
	                .attr("d", function () {
	                    var d = {
	                        data: [{value: config.gauge_max}],
	                        startAngle: -1 * (Math.PI / 2),
	                        endAngle: Math.PI / 2
	                    };
	                    return $$.getArc(d, true, true);
	                });
	            $$.arcs.select('.' + CLASS.chartArcsGaugeUnit)
	                .attr("dy", ".75em")
	                .text(config.gauge_label_show ? config.gauge_units : '');
	            $$.arcs.select('.' + CLASS.chartArcsGaugeMin)
	                .attr("dx", -1 * ($$.innerRadius + (($$.radius - $$.innerRadius) / 2)) + "px")
	                .attr("dy", "1.2em")
	                .text(config.gauge_label_show ? config.gauge_min : '');
	            $$.arcs.select('.' + CLASS.chartArcsGaugeMax)
	                .attr("dx", $$.innerRadius + (($$.radius - $$.innerRadius) / 2) + "px")
	                .attr("dy", "1.2em")
	                .text(config.gauge_label_show ? config.gauge_max : '');
	        }
	    };
	    c3_chart_internal_fn.initGauge = function () {
	        var arcs = this.arcs;
	        if (this.hasType('gauge')) {
	            arcs.append('path')
	                .attr("class", CLASS.chartArcsBackground);
	            arcs.append("text")
	                .attr("class", CLASS.chartArcsGaugeUnit)
	                .style("text-anchor", "middle")
	                .style("pointer-events", "none");
	            arcs.append("text")
	                .attr("class", CLASS.chartArcsGaugeMin)
	                .style("text-anchor", "middle")
	                .style("pointer-events", "none");
	            arcs.append("text")
	                .attr("class", CLASS.chartArcsGaugeMax)
	                .style("text-anchor", "middle")
	                .style("pointer-events", "none");
	        }
	    };
	    c3_chart_internal_fn.getGaugeLabelHeight = function () {
	        return this.config.gauge_label_show ? 20 : 0;
	    };

	    c3_chart_internal_fn.initRegion = function () {
	        var $$ = this;
	        $$.region = $$.main.append('g')
	            .attr("clip-path", $$.clipPath)
	            .attr("class", CLASS.regions);
	    };
	    c3_chart_internal_fn.updateRegion = function (duration) {
	        var $$ = this, config = $$.config;

	        // hide if arc type
	        $$.region.style('visibility', $$.hasArcType() ? 'hidden' : 'visible');

	        $$.mainRegion = $$.main.select('.' + CLASS.regions).selectAll('.' + CLASS.region)
	            .data(config.regions);
	        $$.mainRegion.enter().append('g')
	            .attr('class', $$.classRegion.bind($$))
	          .append('rect')
	            .style("fill-opacity", 0);
	        $$.mainRegion.exit().transition().duration(duration)
	            .style("opacity", 0)
	            .remove();
	    };
	    c3_chart_internal_fn.redrawRegion = function (withTransition) {
	        var $$ = this,
	            regions = $$.mainRegion.selectAll('rect'),
	            x = $$.regionX.bind($$),
	            y = $$.regionY.bind($$),
	            w = $$.regionWidth.bind($$),
	            h = $$.regionHeight.bind($$);
	        return [
	            (withTransition ? regions.transition() : regions)
	                .attr("x", x)
	                .attr("y", y)
	                .attr("width", w)
	                .attr("height", h)
	                .style("fill-opacity", function (d) { return isValue(d.opacity) ? d.opacity : 0.1; })
	        ];
	    };
	    c3_chart_internal_fn.regionX = function (d) {
	        var $$ = this, config = $$.config,
	            xPos, yScale = d.axis === 'y' ? $$.y : $$.y2;
	        if (d.axis === 'y' || d.axis === 'y2') {
	            xPos = config.axis_rotated ? ('start' in d ? yScale(d.start) : 0) : 0;
	        } else {
	            xPos = config.axis_rotated ? 0 : ('start' in d ? $$.x($$.isTimeSeries() ? $$.parseDate(d.start) : d.start) : 0);
	        }
	        return xPos;
	    };
	    c3_chart_internal_fn.regionY = function (d) {
	        var $$ = this, config = $$.config,
	            yPos, yScale = d.axis === 'y' ? $$.y : $$.y2;
	        if (d.axis === 'y' || d.axis === 'y2') {
	            yPos = config.axis_rotated ? 0 : ('end' in d ? yScale(d.end) : 0);
	        } else {
	            yPos = config.axis_rotated ? ('start' in d ? $$.x($$.isTimeSeries() ? $$.parseDate(d.start) : d.start) : 0) : 0;
	        }
	        return yPos;
	    };
	    c3_chart_internal_fn.regionWidth = function (d) {
	        var $$ = this, config = $$.config,
	            start = $$.regionX(d), end, yScale = d.axis === 'y' ? $$.y : $$.y2;
	        if (d.axis === 'y' || d.axis === 'y2') {
	            end = config.axis_rotated ? ('end' in d ? yScale(d.end) : $$.width) : $$.width;
	        } else {
	            end = config.axis_rotated ? $$.width : ('end' in d ? $$.x($$.isTimeSeries() ? $$.parseDate(d.end) : d.end) : $$.width);
	        }
	        return end < start ? 0 : end - start;
	    };
	    c3_chart_internal_fn.regionHeight = function (d) {
	        var $$ = this, config = $$.config,
	            start = this.regionY(d), end, yScale = d.axis === 'y' ? $$.y : $$.y2;
	        if (d.axis === 'y' || d.axis === 'y2') {
	            end = config.axis_rotated ? $$.height : ('start' in d ? yScale(d.start) : $$.height);
	        } else {
	            end = config.axis_rotated ? ('end' in d ? $$.x($$.isTimeSeries() ? $$.parseDate(d.end) : d.end) : $$.height) : $$.height;
	        }
	        return end < start ? 0 : end - start;
	    };
	    c3_chart_internal_fn.isRegionOnX = function (d) {
	        return !d.axis || d.axis === 'x';
	    };

	    c3_chart_internal_fn.drag = function (mouse) {
	        var $$ = this, config = $$.config, main = $$.main, d3 = $$.d3;
	        var sx, sy, mx, my, minX, maxX, minY, maxY;

	        if ($$.hasArcType()) { return; }
	        if (! config.data_selection_enabled) { return; } // do nothing if not selectable
	        if (config.zoom_enabled && ! $$.zoom.altDomain) { return; } // skip if zoomable because of conflict drag dehavior
	        if (!config.data_selection_multiple) { return; } // skip when single selection because drag is used for multiple selection

	        sx = $$.dragStart[0];
	        sy = $$.dragStart[1];
	        mx = mouse[0];
	        my = mouse[1];
	        minX = Math.min(sx, mx);
	        maxX = Math.max(sx, mx);
	        minY = (config.data_selection_grouped) ? $$.margin.top : Math.min(sy, my);
	        maxY = (config.data_selection_grouped) ? $$.height : Math.max(sy, my);

	        main.select('.' + CLASS.dragarea)
	            .attr('x', minX)
	            .attr('y', minY)
	            .attr('width', maxX - minX)
	            .attr('height', maxY - minY);
	        // TODO: binary search when multiple xs
	        main.selectAll('.' + CLASS.shapes).selectAll('.' + CLASS.shape)
	            .filter(function (d) { return config.data_selection_isselectable(d); })
	            .each(function (d, i) {
	                var shape = d3.select(this),
	                    isSelected = shape.classed(CLASS.SELECTED),
	                    isIncluded = shape.classed(CLASS.INCLUDED),
	                    _x, _y, _w, _h, toggle, isWithin = false, box;
	                if (shape.classed(CLASS.circle)) {
	                    _x = shape.attr("cx") * 1;
	                    _y = shape.attr("cy") * 1;
	                    toggle = $$.togglePoint;
	                    isWithin = minX < _x && _x < maxX && minY < _y && _y < maxY;
	                }
	                else if (shape.classed(CLASS.bar)) {
	                    box = getPathBox(this);
	                    _x = box.x;
	                    _y = box.y;
	                    _w = box.width;
	                    _h = box.height;
	                    toggle = $$.togglePath;
	                    isWithin = !(maxX < _x || _x + _w < minX) && !(maxY < _y || _y + _h < minY);
	                } else {
	                    // line/area selection not supported yet
	                    return;
	                }
	                if (isWithin ^ isIncluded) {
	                    shape.classed(CLASS.INCLUDED, !isIncluded);
	                    // TODO: included/unincluded callback here
	                    shape.classed(CLASS.SELECTED, !isSelected);
	                    toggle.call($$, !isSelected, shape, d, i);
	                }
	            });
	    };

	    c3_chart_internal_fn.dragstart = function (mouse) {
	        var $$ = this, config = $$.config;
	        if ($$.hasArcType()) { return; }
	        if (! config.data_selection_enabled) { return; } // do nothing if not selectable
	        $$.dragStart = mouse;
	        $$.main.select('.' + CLASS.chart).append('rect')
	            .attr('class', CLASS.dragarea)
	            .style('opacity', 0.1);
	        $$.dragging = true;
	    };

	    c3_chart_internal_fn.dragend = function () {
	        var $$ = this, config = $$.config;
	        if ($$.hasArcType()) { return; }
	        if (! config.data_selection_enabled) { return; } // do nothing if not selectable
	        $$.main.select('.' + CLASS.dragarea)
	            .transition().duration(100)
	            .style('opacity', 0)
	            .remove();
	        $$.main.selectAll('.' + CLASS.shape)
	            .classed(CLASS.INCLUDED, false);
	        $$.dragging = false;
	    };

	    c3_chart_internal_fn.selectPoint = function (target, d, i) {
	        var $$ = this, config = $$.config,
	            cx = (config.axis_rotated ? $$.circleY : $$.circleX).bind($$),
	            cy = (config.axis_rotated ? $$.circleX : $$.circleY).bind($$),
	            r = $$.pointSelectR.bind($$);
	        config.data_onselected.call($$.api, d, target.node());
	        // add selected-circle on low layer g
	        $$.main.select('.' + CLASS.selectedCircles + $$.getTargetSelectorSuffix(d.id)).selectAll('.' + CLASS.selectedCircle + '-' + i)
	            .data([d])
	            .enter().append('circle')
	            .attr("class", function () { return $$.generateClass(CLASS.selectedCircle, i); })
	            .attr("cx", cx)
	            .attr("cy", cy)
	            .attr("stroke", function () { return $$.color(d); })
	            .attr("r", function (d) { return $$.pointSelectR(d) * 1.4; })
	            .transition().duration(100)
	            .attr("r", r);
	    };
	    c3_chart_internal_fn.unselectPoint = function (target, d, i) {
	        var $$ = this;
	        $$.config.data_onunselected(d, target.node());
	        // remove selected-circle from low layer g
	        $$.main.select('.' + CLASS.selectedCircles + $$.getTargetSelectorSuffix(d.id)).selectAll('.' + CLASS.selectedCircle + '-' + i)
	            .transition().duration(100).attr('r', 0)
	            .remove();
	    };
	    c3_chart_internal_fn.togglePoint = function (selected, target, d, i) {
	        selected ? this.selectPoint(target, d, i) : this.unselectPoint(target, d, i);
	    };
	    c3_chart_internal_fn.selectPath = function (target, d) {
	        var $$ = this;
	        $$.config.data_onselected.call($$, d, target.node());
	        target.transition().duration(100)
	            .style("fill", function () { return $$.d3.rgb($$.color(d)).brighter(0.75); });
	    };
	    c3_chart_internal_fn.unselectPath = function (target, d) {
	        var $$ = this;
	        $$.config.data_onunselected.call($$, d, target.node());
	        target.transition().duration(100)
	            .style("fill", function () { return $$.color(d); });
	    };
	    c3_chart_internal_fn.togglePath = function (selected, target, d, i) {
	        selected ? this.selectPath(target, d, i) : this.unselectPath(target, d, i);
	    };
	    c3_chart_internal_fn.getToggle = function (that, d) {
	        var $$ = this, toggle;
	        if (that.nodeName === 'circle') {
	            if ($$.isStepType(d)) {
	                // circle is hidden in step chart, so treat as within the click area
	                toggle = function () {}; // TODO: how to select step chart?
	            } else {
	                toggle = $$.togglePoint;
	            }
	        }
	        else if (that.nodeName === 'path') {
	            toggle = $$.togglePath;
	        }
	        return toggle;
	    };
	    c3_chart_internal_fn.toggleShape = function (that, d, i) {
	        var $$ = this, d3 = $$.d3, config = $$.config,
	            shape = d3.select(that), isSelected = shape.classed(CLASS.SELECTED),
	            toggle = $$.getToggle(that, d).bind($$);

	        if (config.data_selection_enabled && config.data_selection_isselectable(d)) {
	            if (!config.data_selection_multiple) {
	                $$.main.selectAll('.' + CLASS.shapes + (config.data_selection_grouped ? $$.getTargetSelectorSuffix(d.id) : "")).selectAll('.' + CLASS.shape).each(function (d, i) {
	                    var shape = d3.select(this);
	                    if (shape.classed(CLASS.SELECTED)) { toggle(false, shape.classed(CLASS.SELECTED, false), d, i); }
	                });
	            }
	            shape.classed(CLASS.SELECTED, !isSelected);
	            toggle(!isSelected, shape, d, i);
	        }
	    };

	    c3_chart_internal_fn.initBrush = function () {
	        var $$ = this, d3 = $$.d3;
	        $$.brush = d3.svg.brush().on("brush", function () { $$.redrawForBrush(); });
	        $$.brush.update = function () {
	            if ($$.context) { $$.context.select('.' + CLASS.brush).call(this); }
	            return this;
	        };
	        $$.brush.scale = function (scale) {
	            return $$.config.axis_rotated ? this.y(scale) : this.x(scale);
	        };
	    };
	    c3_chart_internal_fn.initSubchart = function () {
	        var $$ = this, config = $$.config,
	            context = $$.context = $$.svg.append("g").attr("transform", $$.getTranslate('context'));

	        context.style('visibility', config.subchart_show ? 'visible' : 'hidden');

	        // Define g for chart area
	        context.append('g')
	            .attr("clip-path", $$.clipPathForSubchart)
	            .attr('class', CLASS.chart);

	        // Define g for bar chart area
	        context.select('.' + CLASS.chart).append("g")
	            .attr("class", CLASS.chartBars);

	        // Define g for line chart area
	        context.select('.' + CLASS.chart).append("g")
	            .attr("class", CLASS.chartLines);

	        // Add extent rect for Brush
	        context.append("g")
	            .attr("clip-path", $$.clipPath)
	            .attr("class", CLASS.brush)
	            .call($$.brush);

	        // ATTENTION: This must be called AFTER chart added
	        // Add Axis
	        $$.axes.subx = context.append("g")
	            .attr("class", CLASS.axisX)
	            .attr("transform", $$.getTranslate('subx'))
	            .attr("clip-path", config.axis_rotated ? "" : $$.clipPathForXAxis);
	    };
	    c3_chart_internal_fn.updateTargetsForSubchart = function (targets) {
	        var $$ = this, context = $$.context, config = $$.config,
	            contextLineEnter, contextLineUpdate, contextBarEnter, contextBarUpdate,
	            classChartBar = $$.classChartBar.bind($$),
	            classBars = $$.classBars.bind($$),
	            classChartLine = $$.classChartLine.bind($$),
	            classLines = $$.classLines.bind($$),
	            classAreas = $$.classAreas.bind($$);

	        if (config.subchart_show) {
	            //-- Bar --//
	            contextBarUpdate = context.select('.' + CLASS.chartBars).selectAll('.' + CLASS.chartBar)
	                .data(targets)
	                .attr('class', classChartBar);
	            contextBarEnter = contextBarUpdate.enter().append('g')
	                .style('opacity', 0)
	                .attr('class', classChartBar);
	            // Bars for each data
	            contextBarEnter.append('g')
	                .attr("class", classBars);

	            //-- Line --//
	            contextLineUpdate = context.select('.' + CLASS.chartLines).selectAll('.' + CLASS.chartLine)
	                .data(targets)
	                .attr('class', classChartLine);
	            contextLineEnter = contextLineUpdate.enter().append('g')
	                .style('opacity', 0)
	                .attr('class', classChartLine);
	            // Lines for each data
	            contextLineEnter.append("g")
	                .attr("class", classLines);
	            // Area
	            contextLineEnter.append("g")
	                .attr("class", classAreas);

	            //-- Brush --//
	            context.selectAll('.' + CLASS.brush + ' rect')
	                .attr(config.axis_rotated ? "width" : "height", config.axis_rotated ? $$.width2 : $$.height2);
	        }
	    };
	    c3_chart_internal_fn.updateBarForSubchart = function (durationForExit) {
	        var $$ = this;
	        $$.contextBar = $$.context.selectAll('.' + CLASS.bars).selectAll('.' + CLASS.bar)
	            .data($$.barData.bind($$));
	        $$.contextBar.enter().append('path')
	            .attr("class", $$.classBar.bind($$))
	            .style("stroke", 'none')
	            .style("fill", $$.color);
	        $$.contextBar
	            .style("opacity", $$.initialOpacity.bind($$));
	        $$.contextBar.exit().transition().duration(durationForExit)
	            .style('opacity', 0)
	            .remove();
	    };
	    c3_chart_internal_fn.redrawBarForSubchart = function (drawBarOnSub, withTransition, duration) {
	        (withTransition ? this.contextBar.transition().duration(duration) : this.contextBar)
	            .attr('d', drawBarOnSub)
	            .style('opacity', 1);
	    };
	    c3_chart_internal_fn.updateLineForSubchart = function (durationForExit) {
	        var $$ = this;
	        $$.contextLine = $$.context.selectAll('.' + CLASS.lines).selectAll('.' + CLASS.line)
	            .data($$.lineData.bind($$));
	        $$.contextLine.enter().append('path')
	            .attr('class', $$.classLine.bind($$))
	            .style('stroke', $$.color);
	        $$.contextLine
	            .style("opacity", $$.initialOpacity.bind($$));
	        $$.contextLine.exit().transition().duration(durationForExit)
	            .style('opacity', 0)
	            .remove();
	    };
	    c3_chart_internal_fn.redrawLineForSubchart = function (drawLineOnSub, withTransition, duration) {
	        (withTransition ? this.contextLine.transition().duration(duration) : this.contextLine)
	            .attr("d", drawLineOnSub)
	            .style('opacity', 1);
	    };
	    c3_chart_internal_fn.updateAreaForSubchart = function (durationForExit) {
	        var $$ = this, d3 = $$.d3;
	        $$.contextArea = $$.context.selectAll('.' + CLASS.areas).selectAll('.' + CLASS.area)
	            .data($$.lineData.bind($$));
	        $$.contextArea.enter().append('path')
	            .attr("class", $$.classArea.bind($$))
	            .style("fill", $$.color)
	            .style("opacity", function () { $$.orgAreaOpacity = +d3.select(this).style('opacity'); return 0; });
	        $$.contextArea
	            .style("opacity", 0);
	        $$.contextArea.exit().transition().duration(durationForExit)
	            .style('opacity', 0)
	            .remove();
	    };
	    c3_chart_internal_fn.redrawAreaForSubchart = function (drawAreaOnSub, withTransition, duration) {
	        (withTransition ? this.contextArea.transition().duration(duration) : this.contextArea)
	            .attr("d", drawAreaOnSub)
	            .style("fill", this.color)
	            .style("opacity", this.orgAreaOpacity);
	    };
	    c3_chart_internal_fn.redrawSubchart = function (withSubchart, transitions, duration, durationForExit, areaIndices, barIndices, lineIndices) {
	        var $$ = this, d3 = $$.d3, config = $$.config,
	            drawAreaOnSub, drawBarOnSub, drawLineOnSub;

	        $$.context.style('visibility', config.subchart_show ? 'visible' : 'hidden');

	        // subchart
	        if (config.subchart_show) {
	            // reflect main chart to extent on subchart if zoomed
	            if (d3.event && d3.event.type === 'zoom') {
	                $$.brush.extent($$.x.orgDomain()).update();
	            }
	            // update subchart elements if needed
	            if (withSubchart) {

	                // extent rect
	                if (!$$.brush.empty()) {
	                    $$.brush.extent($$.x.orgDomain()).update();
	                }
	                // setup drawer - MEMO: this must be called after axis updated
	                drawAreaOnSub = $$.generateDrawArea(areaIndices, true);
	                drawBarOnSub = $$.generateDrawBar(barIndices, true);
	                drawLineOnSub = $$.generateDrawLine(lineIndices, true);

	                $$.updateBarForSubchart(duration);
	                $$.updateLineForSubchart(duration);
	                $$.updateAreaForSubchart(duration);

	                $$.redrawBarForSubchart(drawBarOnSub, duration, duration);
	                $$.redrawLineForSubchart(drawLineOnSub, duration, duration);
	                $$.redrawAreaForSubchart(drawAreaOnSub, duration, duration);
	            }
	        }
	    };
	    c3_chart_internal_fn.redrawForBrush = function () {
	        var $$ = this, x = $$.x;
	        $$.redraw({
	            withTransition: false,
	            withY: $$.config.zoom_rescale,
	            withSubchart: false,
	            withUpdateXDomain: true,
	            withDimension: false
	        });
	        $$.config.subchart_onbrush.call($$.api, x.orgDomain());
	    };
	    c3_chart_internal_fn.transformContext = function (withTransition, transitions) {
	        var $$ = this, subXAxis;
	        if (transitions && transitions.axisSubX) {
	            subXAxis = transitions.axisSubX;
	        } else {
	            subXAxis = $$.context.select('.' + CLASS.axisX);
	            if (withTransition) { subXAxis = subXAxis.transition(); }
	        }
	        $$.context.attr("transform", $$.getTranslate('context'));
	        subXAxis.attr("transform", $$.getTranslate('subx'));
	    };
	    c3_chart_internal_fn.getDefaultExtent = function () {
	        var $$ = this, config = $$.config,
	            extent = isFunction(config.axis_x_extent) ? config.axis_x_extent($$.getXDomain($$.data.targets)) : config.axis_x_extent;
	        if ($$.isTimeSeries()) {
	            extent = [$$.parseDate(extent[0]), $$.parseDate(extent[1])];
	        }
	        return extent;
	    };

	    c3_chart_internal_fn.initZoom = function () {
	        var $$ = this, d3 = $$.d3, config = $$.config, startEvent;

	        $$.zoom = d3.behavior.zoom()
	            .on("zoomstart", function () {
	                startEvent = d3.event.sourceEvent;
	                $$.zoom.altDomain = d3.event.sourceEvent.altKey ? $$.x.orgDomain() : null;
	                config.zoom_onzoomstart.call($$.api, d3.event.sourceEvent);
	            })
	            .on("zoom", function () {
	                $$.redrawForZoom.call($$);
	            })
	            .on('zoomend', function () {
	                var event = d3.event.sourceEvent;
	                // if click, do nothing. otherwise, click interaction will be canceled.
	                if (event && startEvent.clientX === event.clientX && startEvent.clientY === event.clientY) {
	                    return;
	                }
	                $$.redrawEventRect();
	                $$.updateZoom();
	                config.zoom_onzoomend.call($$.api, $$.x.orgDomain());
	            });
	        $$.zoom.scale = function (scale) {
	            return config.axis_rotated ? this.y(scale) : this.x(scale);
	        };
	        $$.zoom.orgScaleExtent = function () {
	            var extent = config.zoom_extent ? config.zoom_extent : [1, 10];
	            return [extent[0], Math.max($$.getMaxDataCount() / extent[1], extent[1])];
	        };
	        $$.zoom.updateScaleExtent = function () {
	            var ratio = diffDomain($$.x.orgDomain()) / diffDomain($$.orgXDomain),
	                extent = this.orgScaleExtent();
	            this.scaleExtent([extent[0] * ratio, extent[1] * ratio]);
	            return this;
	        };
	    };
	    c3_chart_internal_fn.updateZoom = function () {
	        var $$ = this, z = $$.config.zoom_enabled ? $$.zoom : function () {};
	        $$.main.select('.' + CLASS.zoomRect).call(z).on("dblclick.zoom", null);
	        $$.main.selectAll('.' + CLASS.eventRect).call(z).on("dblclick.zoom", null);
	    };
	    c3_chart_internal_fn.redrawForZoom = function () {
	        var $$ = this, d3 = $$.d3, config = $$.config, zoom = $$.zoom, x = $$.x;
	        if (!config.zoom_enabled) {
	            return;
	        }
	        if ($$.filterTargetsToShow($$.data.targets).length === 0) {
	            return;
	        }
	        if (d3.event.sourceEvent.type === 'mousemove' && zoom.altDomain) {
	            x.domain(zoom.altDomain);
	            zoom.scale(x).updateScaleExtent();
	            return;
	        }
	        if ($$.isCategorized() && x.orgDomain()[0] === $$.orgXDomain[0]) {
	            x.domain([$$.orgXDomain[0] - 1e-10, x.orgDomain()[1]]);
	        }
	        $$.redraw({
	            withTransition: false,
	            withY: config.zoom_rescale,
	            withSubchart: false,
	            withEventRect: false,
	            withDimension: false
	        });
	        if (d3.event.sourceEvent.type === 'mousemove') {
	            $$.cancelClick = true;
	        }
	        config.zoom_onzoom.call($$.api, x.orgDomain());
	    };

	    c3_chart_internal_fn.generateColor = function () {
	        var $$ = this, config = $$.config, d3 = $$.d3,
	            colors = config.data_colors,
	            pattern = notEmpty(config.color_pattern) ? config.color_pattern : d3.scale.category10().range(),
	            callback = config.data_color,
	            ids = [];

	        return function (d) {
	            var id = d.id || (d.data && d.data.id) || d, color;

	            // if callback function is provided
	            if (colors[id] instanceof Function) {
	                color = colors[id](d);
	            }
	            // if specified, choose that color
	            else if (colors[id]) {
	                color = colors[id];
	            }
	            // if not specified, choose from pattern
	            else {
	                if (ids.indexOf(id) < 0) { ids.push(id); }
	                color = pattern[ids.indexOf(id) % pattern.length];
	                colors[id] = color;
	            }
	            return callback instanceof Function ? callback(color, d) : color;
	        };
	    };
	    c3_chart_internal_fn.generateLevelColor = function () {
	        var $$ = this, config = $$.config,
	            colors = config.color_pattern,
	            threshold = config.color_threshold,
	            asValue = threshold.unit === 'value',
	            values = threshold.values && threshold.values.length ? threshold.values : [],
	            max = threshold.max || 100;
	        return notEmpty(config.color_threshold) ? function (value) {
	            var i, v, color = colors[colors.length - 1];
	            for (i = 0; i < values.length; i++) {
	                v = asValue ? value : (value * 100 / max);
	                if (v < values[i]) {
	                    color = colors[i];
	                    break;
	                }
	            }
	            return color;
	        } : null;
	    };

	    c3_chart_internal_fn.getYFormat = function (forArc) {
	        var $$ = this,
	            formatForY = forArc && !$$.hasType('gauge') ? $$.defaultArcValueFormat : $$.yFormat,
	            formatForY2 = forArc && !$$.hasType('gauge') ? $$.defaultArcValueFormat : $$.y2Format;
	        return function (v, ratio, id) {
	            var format = $$.axis.getId(id) === 'y2' ? formatForY2 : formatForY;
	            return format.call($$, v, ratio);
	        };
	    };
	    c3_chart_internal_fn.yFormat = function (v) {
	        var $$ = this, config = $$.config,
	            format = config.axis_y_tick_format ? config.axis_y_tick_format : $$.defaultValueFormat;
	        return format(v);
	    };
	    c3_chart_internal_fn.y2Format = function (v) {
	        var $$ = this, config = $$.config,
	            format = config.axis_y2_tick_format ? config.axis_y2_tick_format : $$.defaultValueFormat;
	        return format(v);
	    };
	    c3_chart_internal_fn.defaultValueFormat = function (v) {
	        return isValue(v) ? +v : "";
	    };
	    c3_chart_internal_fn.defaultArcValueFormat = function (v, ratio) {
	        return (ratio * 100).toFixed(1) + '%';
	    };
	    c3_chart_internal_fn.dataLabelFormat = function (targetId) {
	        var $$ = this, data_labels = $$.config.data_labels,
	            format, defaultFormat = function (v) { return isValue(v) ? +v : ""; };
	        // find format according to axis id
	        if (typeof data_labels.format === 'function') {
	            format = data_labels.format;
	        } else if (typeof data_labels.format === 'object') {
	            if (data_labels.format[targetId]) {
	                format = data_labels.format[targetId] === true ? defaultFormat : data_labels.format[targetId];
	            } else {
	                format = function () { return ''; };
	            }
	        } else {
	            format = defaultFormat;
	        }
	        return format;
	    };

	    c3_chart_internal_fn.hasCaches = function (ids) {
	        for (var i = 0; i < ids.length; i++) {
	            if (! (ids[i] in this.cache)) { return false; }
	        }
	        return true;
	    };
	    c3_chart_internal_fn.addCache = function (id, target) {
	        this.cache[id] = this.cloneTarget(target);
	    };
	    c3_chart_internal_fn.getCaches = function (ids) {
	        var targets = [], i;
	        for (i = 0; i < ids.length; i++) {
	            if (ids[i] in this.cache) { targets.push(this.cloneTarget(this.cache[ids[i]])); }
	        }
	        return targets;
	    };

	    var CLASS = c3_chart_internal_fn.CLASS = {
	        target: 'c3-target',
	        chart: 'c3-chart',
	        chartLine: 'c3-chart-line',
	        chartLines: 'c3-chart-lines',
	        chartBar: 'c3-chart-bar',
	        chartBars: 'c3-chart-bars',
	        chartText: 'c3-chart-text',
	        chartTexts: 'c3-chart-texts',
	        chartArc: 'c3-chart-arc',
	        chartArcs: 'c3-chart-arcs',
	        chartArcsTitle: 'c3-chart-arcs-title',
	        chartArcsBackground: 'c3-chart-arcs-background',
	        chartArcsGaugeUnit: 'c3-chart-arcs-gauge-unit',
	        chartArcsGaugeMax: 'c3-chart-arcs-gauge-max',
	        chartArcsGaugeMin: 'c3-chart-arcs-gauge-min',
	        selectedCircle: 'c3-selected-circle',
	        selectedCircles: 'c3-selected-circles',
	        eventRect: 'c3-event-rect',
	        eventRects: 'c3-event-rects',
	        eventRectsSingle: 'c3-event-rects-single',
	        eventRectsMultiple: 'c3-event-rects-multiple',
	        zoomRect: 'c3-zoom-rect',
	        brush: 'c3-brush',
	        focused: 'c3-focused',
	        defocused: 'c3-defocused',
	        region: 'c3-region',
	        regions: 'c3-regions',
	        tooltipContainer: 'c3-tooltip-container',
	        tooltip: 'c3-tooltip',
	        tooltipName: 'c3-tooltip-name',
	        shape: 'c3-shape',
	        shapes: 'c3-shapes',
	        line: 'c3-line',
	        lines: 'c3-lines',
	        bar: 'c3-bar',
	        bars: 'c3-bars',
	        circle: 'c3-circle',
	        circles: 'c3-circles',
	        arc: 'c3-arc',
	        arcs: 'c3-arcs',
	        area: 'c3-area',
	        areas: 'c3-areas',
	        empty: 'c3-empty',
	        text: 'c3-text',
	        texts: 'c3-texts',
	        gaugeValue: 'c3-gauge-value',
	        grid: 'c3-grid',
	        gridLines: 'c3-grid-lines',
	        xgrid: 'c3-xgrid',
	        xgrids: 'c3-xgrids',
	        xgridLine: 'c3-xgrid-line',
	        xgridLines: 'c3-xgrid-lines',
	        xgridFocus: 'c3-xgrid-focus',
	        ygrid: 'c3-ygrid',
	        ygrids: 'c3-ygrids',
	        ygridLine: 'c3-ygrid-line',
	        ygridLines: 'c3-ygrid-lines',
	        axis: 'c3-axis',
	        axisX: 'c3-axis-x',
	        axisXLabel: 'c3-axis-x-label',
	        axisY: 'c3-axis-y',
	        axisYLabel: 'c3-axis-y-label',
	        axisY2: 'c3-axis-y2',
	        axisY2Label: 'c3-axis-y2-label',
	        legendBackground: 'c3-legend-background',
	        legendItem: 'c3-legend-item',
	        legendItemEvent: 'c3-legend-item-event',
	        legendItemTile: 'c3-legend-item-tile',
	        legendItemHidden: 'c3-legend-item-hidden',
	        legendItemFocused: 'c3-legend-item-focused',
	        dragarea: 'c3-dragarea',
	        EXPANDED: '_expanded_',
	        SELECTED: '_selected_',
	        INCLUDED: '_included_'
	    };
	    c3_chart_internal_fn.generateClass = function (prefix, targetId) {
	        return " " + prefix + " " + prefix + this.getTargetSelectorSuffix(targetId);
	    };
	    c3_chart_internal_fn.classText = function (d) {
	        return this.generateClass(CLASS.text, d.index);
	    };
	    c3_chart_internal_fn.classTexts = function (d) {
	        return this.generateClass(CLASS.texts, d.id);
	    };
	    c3_chart_internal_fn.classShape = function (d) {
	        return this.generateClass(CLASS.shape, d.index);
	    };
	    c3_chart_internal_fn.classShapes = function (d) {
	        return this.generateClass(CLASS.shapes, d.id);
	    };
	    c3_chart_internal_fn.classLine = function (d) {
	        return this.classShape(d) + this.generateClass(CLASS.line, d.id);
	    };
	    c3_chart_internal_fn.classLines = function (d) {
	        return this.classShapes(d) + this.generateClass(CLASS.lines, d.id);
	    };
	    c3_chart_internal_fn.classCircle = function (d) {
	        return this.classShape(d) + this.generateClass(CLASS.circle, d.index);
	    };
	    c3_chart_internal_fn.classCircles = function (d) {
	        return this.classShapes(d) + this.generateClass(CLASS.circles, d.id);
	    };
	    c3_chart_internal_fn.classBar = function (d) {
	        return this.classShape(d) + this.generateClass(CLASS.bar, d.index);
	    };
	    c3_chart_internal_fn.classBars = function (d) {
	        return this.classShapes(d) + this.generateClass(CLASS.bars, d.id);
	    };
	    c3_chart_internal_fn.classArc = function (d) {
	        return this.classShape(d.data) + this.generateClass(CLASS.arc, d.data.id);
	    };
	    c3_chart_internal_fn.classArcs = function (d) {
	        return this.classShapes(d.data) + this.generateClass(CLASS.arcs, d.data.id);
	    };
	    c3_chart_internal_fn.classArea = function (d) {
	        return this.classShape(d) + this.generateClass(CLASS.area, d.id);
	    };
	    c3_chart_internal_fn.classAreas = function (d) {
	        return this.classShapes(d) + this.generateClass(CLASS.areas, d.id);
	    };
	    c3_chart_internal_fn.classRegion = function (d, i) {
	        return this.generateClass(CLASS.region, i) + ' ' + ('class' in d ? d['class'] : '');
	    };
	    c3_chart_internal_fn.classEvent = function (d) {
	        return this.generateClass(CLASS.eventRect, d.index);
	    };
	    c3_chart_internal_fn.classTarget = function (id) {
	        var $$ = this;
	        var additionalClassSuffix = $$.config.data_classes[id], additionalClass = '';
	        if (additionalClassSuffix) {
	            additionalClass = ' ' + CLASS.target + '-' + additionalClassSuffix;
	        }
	        return $$.generateClass(CLASS.target, id) + additionalClass;
	    };
	    c3_chart_internal_fn.classFocus = function (d) {
	        return this.classFocused(d) + this.classDefocused(d);
	    };
	    c3_chart_internal_fn.classFocused = function (d) {
	        return ' ' + (this.focusedTargetIds.indexOf(d.id) >= 0 ? CLASS.focused : '');
	    };
	    c3_chart_internal_fn.classDefocused = function (d) {
	        return ' ' + (this.defocusedTargetIds.indexOf(d.id) >= 0 ? CLASS.defocused : '');
	    };
	    c3_chart_internal_fn.classChartText = function (d) {
	        return CLASS.chartText + this.classTarget(d.id);
	    };
	    c3_chart_internal_fn.classChartLine = function (d) {
	        return CLASS.chartLine + this.classTarget(d.id);
	    };
	    c3_chart_internal_fn.classChartBar = function (d) {
	        return CLASS.chartBar + this.classTarget(d.id);
	    };
	    c3_chart_internal_fn.classChartArc = function (d) {
	        return CLASS.chartArc + this.classTarget(d.data.id);
	    };
	    c3_chart_internal_fn.getTargetSelectorSuffix = function (targetId) {
	        return targetId || targetId === 0 ? ('-' + targetId).replace(/[\s?!@#$%^&*()_=+,.<>'":;\[\]\/|~`{}\\]/g, '-') : '';
	    };
	    c3_chart_internal_fn.selectorTarget = function (id, prefix) {
	        return (prefix || '') + '.' + CLASS.target + this.getTargetSelectorSuffix(id);
	    };
	    c3_chart_internal_fn.selectorTargets = function (ids, prefix) {
	        var $$ = this;
	        ids = ids || [];
	        return ids.length ? ids.map(function (id) { return $$.selectorTarget(id, prefix); }) : null;
	    };
	    c3_chart_internal_fn.selectorLegend = function (id) {
	        return '.' + CLASS.legendItem + this.getTargetSelectorSuffix(id);
	    };
	    c3_chart_internal_fn.selectorLegends = function (ids) {
	        var $$ = this;
	        return ids && ids.length ? ids.map(function (id) { return $$.selectorLegend(id); }) : null;
	    };

	    var isValue = c3_chart_internal_fn.isValue = function (v) {
	        return v || v === 0;
	    },
	        isFunction = c3_chart_internal_fn.isFunction = function (o) {
	            return typeof o === 'function';
	        },
	        isString = c3_chart_internal_fn.isString = function (o) {
	            return typeof o === 'string';
	        },
	        isUndefined = c3_chart_internal_fn.isUndefined = function (v) {
	            return typeof v === 'undefined';
	        },
	        isDefined = c3_chart_internal_fn.isDefined = function (v) {
	            return typeof v !== 'undefined';
	        },
	        ceil10 = c3_chart_internal_fn.ceil10 = function (v) {
	            return Math.ceil(v / 10) * 10;
	        },
	        asHalfPixel = c3_chart_internal_fn.asHalfPixel = function (n) {
	            return Math.ceil(n) + 0.5;
	        },
	        diffDomain = c3_chart_internal_fn.diffDomain = function (d) {
	            return d[1] - d[0];
	        },
	        isEmpty = c3_chart_internal_fn.isEmpty = function (o) {
	            return !o || (isString(o) && o.length === 0) || (typeof o === 'object' && Object.keys(o).length === 0);
	        },
	        notEmpty = c3_chart_internal_fn.notEmpty = function (o) {
	            return Object.keys(o).length > 0;
	        },
	        getOption = c3_chart_internal_fn.getOption = function (options, key, defaultValue) {
	            return isDefined(options[key]) ? options[key] : defaultValue;
	        },
	        hasValue = c3_chart_internal_fn.hasValue = function (dict, value) {
	            var found = false;
	            Object.keys(dict).forEach(function (key) {
	                if (dict[key] === value) { found = true; }
	            });
	            return found;
	        },
	        getPathBox = c3_chart_internal_fn.getPathBox = function (path) {
	            var box = path.getBoundingClientRect(),
	                items = [path.pathSegList.getItem(0), path.pathSegList.getItem(1)],
	                minX = items[0].x, minY = Math.min(items[0].y, items[1].y);
	            return {x: minX, y: minY, width: box.width, height: box.height};
	        };

	    c3_chart_fn.focus = function (targetIds) {
	        var $$ = this.internal, candidates;

	        targetIds = $$.mapToTargetIds(targetIds);
	        candidates = $$.svg.selectAll($$.selectorTargets(targetIds.filter($$.isTargetToShow, $$))),

	        this.revert();
	        this.defocus();
	        candidates.classed(CLASS.focused, true).classed(CLASS.defocused, false);
	        if ($$.hasArcType()) {
	            $$.expandArc(targetIds);
	        }
	        $$.toggleFocusLegend(targetIds, true);

	        $$.focusedTargetIds = targetIds;
	        $$.defocusedTargetIds = $$.defocusedTargetIds.filter(function (id) {
	            return targetIds.indexOf(id) < 0;
	        });
	    };

	    c3_chart_fn.defocus = function (targetIds) {
	        var $$ = this.internal, candidates;

	        targetIds = $$.mapToTargetIds(targetIds);
	        candidates = $$.svg.selectAll($$.selectorTargets(targetIds.filter($$.isTargetToShow, $$))),

	        candidates.classed(CLASS.focused, false).classed(CLASS.defocused, true);
	        if ($$.hasArcType()) {
	            $$.unexpandArc(targetIds);
	        }
	        $$.toggleFocusLegend(targetIds, false);

	        $$.focusedTargetIds = $$.focusedTargetIds.filter(function (id) {
	            return targetIds.indexOf(id) < 0;
	        });
	        $$.defocusedTargetIds = targetIds;
	    };

	    c3_chart_fn.revert = function (targetIds) {
	        var $$ = this.internal, candidates;

	        targetIds = $$.mapToTargetIds(targetIds);
	        candidates = $$.svg.selectAll($$.selectorTargets(targetIds)); // should be for all targets

	        candidates.classed(CLASS.focused, false).classed(CLASS.defocused, false);
	        if ($$.hasArcType()) {
	            $$.unexpandArc(targetIds);
	        }
	        if ($$.config.legend_show) {
	            $$.showLegend(targetIds.filter($$.isLegendToShow.bind($$)));
	            $$.legend.selectAll($$.selectorLegends(targetIds))
	                .filter(function () {
	                    return $$.d3.select(this).classed(CLASS.legendItemFocused);
	                })
	                .classed(CLASS.legendItemFocused, false);
	        }

	        $$.focusedTargetIds = [];
	        $$.defocusedTargetIds = [];
	    };

	    c3_chart_fn.show = function (targetIds, options) {
	        var $$ = this.internal, targets;

	        targetIds = $$.mapToTargetIds(targetIds);
	        options = options || {};

	        $$.removeHiddenTargetIds(targetIds);
	        targets = $$.svg.selectAll($$.selectorTargets(targetIds));

	        targets.transition()
	            .style('opacity', 1, 'important')
	            .call($$.endall, function () {
	                targets.style('opacity', null).style('opacity', 1);
	            });

	        if (options.withLegend) {
	            $$.showLegend(targetIds);
	        }

	        $$.redraw({withUpdateOrgXDomain: true, withUpdateXDomain: true, withLegend: true});
	    };

	    c3_chart_fn.hide = function (targetIds, options) {
	        var $$ = this.internal, targets;

	        targetIds = $$.mapToTargetIds(targetIds);
	        options = options || {};

	        $$.addHiddenTargetIds(targetIds);
	        targets = $$.svg.selectAll($$.selectorTargets(targetIds));

	        targets.transition()
	            .style('opacity', 0, 'important')
	            .call($$.endall, function () {
	                targets.style('opacity', null).style('opacity', 0);
	            });

	        if (options.withLegend) {
	            $$.hideLegend(targetIds);
	        }

	        $$.redraw({withUpdateOrgXDomain: true, withUpdateXDomain: true, withLegend: true});
	    };

	    c3_chart_fn.toggle = function (targetIds, options) {
	        var that = this, $$ = this.internal;
	        $$.mapToTargetIds(targetIds).forEach(function (targetId) {
	            $$.isTargetToShow(targetId) ? that.hide(targetId, options) : that.show(targetId, options);
	        });
	    };

	    c3_chart_fn.zoom = function (domain) {
	        var $$ = this.internal;
	        if (domain) {
	            if ($$.isTimeSeries()) {
	                domain = domain.map(function (x) { return $$.parseDate(x); });
	            }
	            $$.brush.extent(domain);
	            $$.redraw({withUpdateXDomain: true, withY: $$.config.zoom_rescale});
	            $$.config.zoom_onzoom.call(this, $$.x.orgDomain());
	        }
	        return $$.brush.extent();
	    };
	    c3_chart_fn.zoom.enable = function (enabled) {
	        var $$ = this.internal;
	        $$.config.zoom_enabled = enabled;
	        $$.updateAndRedraw();
	    };
	    c3_chart_fn.unzoom = function () {
	        var $$ = this.internal;
	        $$.brush.clear().update();
	        $$.redraw({withUpdateXDomain: true});
	    };

	    c3_chart_fn.load = function (args) {
	        var $$ = this.internal, config = $$.config;
	        // update xs if specified
	        if (args.xs) {
	            $$.addXs(args.xs);
	        }
	        // update classes if exists
	        if ('classes' in args) {
	            Object.keys(args.classes).forEach(function (id) {
	                config.data_classes[id] = args.classes[id];
	            });
	        }
	        // update categories if exists
	        if ('categories' in args && $$.isCategorized()) {
	            config.axis_x_categories = args.categories;
	        }
	        // update axes if exists
	        if ('axes' in args) {
	            Object.keys(args.axes).forEach(function (id) {
	                config.data_axes[id] = args.axes[id];
	            });
	        }
	        // update colors if exists
	        if ('colors' in args) {
	            Object.keys(args.colors).forEach(function (id) {
	                config.data_colors[id] = args.colors[id];
	            });
	        }
	        // use cache if exists
	        if ('cacheIds' in args && $$.hasCaches(args.cacheIds)) {
	            $$.load($$.getCaches(args.cacheIds), args.done);
	            return;
	        }
	        // unload if needed
	        if ('unload' in args) {
	            // TODO: do not unload if target will load (included in url/rows/columns)
	            $$.unload($$.mapToTargetIds((typeof args.unload === 'boolean' && args.unload) ? null : args.unload), function () {
	                $$.loadFromArgs(args);
	            });
	        } else {
	            $$.loadFromArgs(args);
	        }
	    };

	    c3_chart_fn.unload = function (args) {
	        var $$ = this.internal;
	        args = args || {};
	        if (args instanceof Array) {
	            args = {ids: args};
	        } else if (typeof args === 'string') {
	            args = {ids: [args]};
	        }
	        $$.unload($$.mapToTargetIds(args.ids), function () {
	            $$.redraw({withUpdateOrgXDomain: true, withUpdateXDomain: true, withLegend: true});
	            if (args.done) { args.done(); }
	        });
	    };

	    c3_chart_fn.flow = function (args) {
	        var $$ = this.internal,
	            targets, data, notfoundIds = [], orgDataCount = $$.getMaxDataCount(),
	            dataCount, domain, baseTarget, baseValue, length = 0, tail = 0, diff, to;

	        if (args.json) {
	            data = $$.convertJsonToData(args.json, args.keys);
	        }
	        else if (args.rows) {
	            data = $$.convertRowsToData(args.rows);
	        }
	        else if (args.columns) {
	            data = $$.convertColumnsToData(args.columns);
	        }
	        else {
	            return;
	        }
	        targets = $$.convertDataToTargets(data, true);

	        // Update/Add data
	        $$.data.targets.forEach(function (t) {
	            var found = false, i, j;
	            for (i = 0; i < targets.length; i++) {
	                if (t.id === targets[i].id) {
	                    found = true;

	                    if (t.values[t.values.length - 1]) {
	                        tail = t.values[t.values.length - 1].index + 1;
	                    }
	                    length = targets[i].values.length;

	                    for (j = 0; j < length; j++) {
	                        targets[i].values[j].index = tail + j;
	                        if (!$$.isTimeSeries()) {
	                            targets[i].values[j].x = tail + j;
	                        }
	                    }
	                    t.values = t.values.concat(targets[i].values);

	                    targets.splice(i, 1);
	                    break;
	                }
	            }
	            if (!found) { notfoundIds.push(t.id); }
	        });

	        // Append null for not found targets
	        $$.data.targets.forEach(function (t) {
	            var i, j;
	            for (i = 0; i < notfoundIds.length; i++) {
	                if (t.id === notfoundIds[i]) {
	                    tail = t.values[t.values.length - 1].index + 1;
	                    for (j = 0; j < length; j++) {
	                        t.values.push({
	                            id: t.id,
	                            index: tail + j,
	                            x: $$.isTimeSeries() ? $$.getOtherTargetX(tail + j) : tail + j,
	                            value: null
	                        });
	                    }
	                }
	            }
	        });

	        // Generate null values for new target
	        if ($$.data.targets.length) {
	            targets.forEach(function (t) {
	                var i, missing = [];
	                for (i = $$.data.targets[0].values[0].index; i < tail; i++) {
	                    missing.push({
	                        id: t.id,
	                        index: i,
	                        x: $$.isTimeSeries() ? $$.getOtherTargetX(i) : i,
	                        value: null
	                    });
	                }
	                t.values.forEach(function (v) {
	                    v.index += tail;
	                    if (!$$.isTimeSeries()) {
	                        v.x += tail;
	                    }
	                });
	                t.values = missing.concat(t.values);
	            });
	        }
	        $$.data.targets = $$.data.targets.concat(targets); // add remained

	        // check data count because behavior needs to change when it's only one
	        dataCount = $$.getMaxDataCount();
	        baseTarget = $$.data.targets[0];
	        baseValue = baseTarget.values[0];

	        // Update length to flow if needed
	        if (isDefined(args.to)) {
	            length = 0;
	            to = $$.isTimeSeries() ? $$.parseDate(args.to) : args.to;
	            baseTarget.values.forEach(function (v) {
	                if (v.x < to) { length++; }
	            });
	        } else if (isDefined(args.length)) {
	            length = args.length;
	        }

	        // If only one data, update the domain to flow from left edge of the chart
	        if (!orgDataCount) {
	            if ($$.isTimeSeries()) {
	                if (baseTarget.values.length > 1) {
	                    diff = baseTarget.values[baseTarget.values.length - 1].x - baseValue.x;
	                } else {
	                    diff = baseValue.x - $$.getXDomain($$.data.targets)[0];
	                }
	            } else {
	                diff = 1;
	            }
	            domain = [baseValue.x - diff, baseValue.x];
	            $$.updateXDomain(null, true, true, false, domain);
	        } else if (orgDataCount === 1) {
	            if ($$.isTimeSeries()) {
	                diff = (baseTarget.values[baseTarget.values.length - 1].x - baseValue.x) / 2;
	                domain = [new Date(+baseValue.x - diff), new Date(+baseValue.x + diff)];
	                $$.updateXDomain(null, true, true, false, domain);
	            }
	        }

	        // Set targets
	        $$.updateTargets($$.data.targets);

	        // Redraw with new targets
	        $$.redraw({
	            flow: {
	                index: baseValue.index,
	                length: length,
	                duration: isValue(args.duration) ? args.duration : $$.config.transition_duration,
	                done: args.done,
	                orgDataCount: orgDataCount,
	            },
	            withLegend: true,
	            withTransition: orgDataCount > 1,
	            withTrimXDomain: false,
	            withUpdateXAxis: true,
	        });
	    };

	    c3_chart_internal_fn.generateFlow = function (args) {
	        var $$ = this, config = $$.config, d3 = $$.d3;

	        return function () {
	            var targets = args.targets,
	                flow = args.flow,
	                drawBar = args.drawBar,
	                drawLine = args.drawLine,
	                drawArea = args.drawArea,
	                cx = args.cx,
	                cy = args.cy,
	                xv = args.xv,
	                xForText = args.xForText,
	                yForText = args.yForText,
	                duration = args.duration;

	            var translateX, scaleX = 1, transform,
	                flowIndex = flow.index,
	                flowLength = flow.length,
	                flowStart = $$.getValueOnIndex($$.data.targets[0].values, flowIndex),
	                flowEnd = $$.getValueOnIndex($$.data.targets[0].values, flowIndex + flowLength),
	                orgDomain = $$.x.domain(), domain,
	                durationForFlow = flow.duration || duration,
	                done = flow.done || function () {},
	                wait = $$.generateWait();

	            var xgrid = $$.xgrid || d3.selectAll([]),
	                xgridLines = $$.xgridLines || d3.selectAll([]),
	                mainRegion = $$.mainRegion || d3.selectAll([]),
	                mainText = $$.mainText || d3.selectAll([]),
	                mainBar = $$.mainBar || d3.selectAll([]),
	                mainLine = $$.mainLine || d3.selectAll([]),
	                mainArea = $$.mainArea || d3.selectAll([]),
	                mainCircle = $$.mainCircle || d3.selectAll([]);

	            // set flag
	            $$.flowing = true;

	            // remove head data after rendered
	            $$.data.targets.forEach(function (d) {
	                d.values.splice(0, flowLength);
	            });

	            // update x domain to generate axis elements for flow
	            domain = $$.updateXDomain(targets, true, true);
	            // update elements related to x scale
	            if ($$.updateXGrid) { $$.updateXGrid(true); }

	            // generate transform to flow
	            if (!flow.orgDataCount) { // if empty
	                if ($$.data.targets[0].values.length !== 1) {
	                    translateX = $$.x(orgDomain[0]) - $$.x(domain[0]);
	                } else {
	                    if ($$.isTimeSeries()) {
	                        flowStart = $$.getValueOnIndex($$.data.targets[0].values, 0);
	                        flowEnd = $$.getValueOnIndex($$.data.targets[0].values, $$.data.targets[0].values.length - 1);
	                        translateX = $$.x(flowStart.x) - $$.x(flowEnd.x);
	                    } else {
	                        translateX = diffDomain(domain) / 2;
	                    }
	                }
	            } else if (flow.orgDataCount === 1 || flowStart.x === flowEnd.x) {
	                translateX = $$.x(orgDomain[0]) - $$.x(domain[0]);
	            } else {
	                if ($$.isTimeSeries()) {
	                    translateX = ($$.x(orgDomain[0]) - $$.x(domain[0]));
	                } else {
	                    translateX = ($$.x(flowStart.x) - $$.x(flowEnd.x));
	                }
	            }
	            scaleX = (diffDomain(orgDomain) / diffDomain(domain));
	            transform = 'translate(' + translateX + ',0) scale(' + scaleX + ',1)';

	            // hide tooltip
	            $$.hideXGridFocus();
	            $$.hideTooltip();

	            d3.transition().ease('linear').duration(durationForFlow).each(function () {
	                wait.add($$.axes.x.transition().call($$.xAxis));
	                wait.add(mainBar.transition().attr('transform', transform));
	                wait.add(mainLine.transition().attr('transform', transform));
	                wait.add(mainArea.transition().attr('transform', transform));
	                wait.add(mainCircle.transition().attr('transform', transform));
	                wait.add(mainText.transition().attr('transform', transform));
	                wait.add(mainRegion.filter($$.isRegionOnX).transition().attr('transform', transform));
	                wait.add(xgrid.transition().attr('transform', transform));
	                wait.add(xgridLines.transition().attr('transform', transform));
	            })
	            .call(wait, function () {
	                var i, shapes = [], texts = [], eventRects = [];

	                // remove flowed elements
	                if (flowLength) {
	                    for (i = 0; i < flowLength; i++) {
	                        shapes.push('.' + CLASS.shape + '-' + (flowIndex + i));
	                        texts.push('.' + CLASS.text + '-' + (flowIndex + i));
	                        eventRects.push('.' + CLASS.eventRect + '-' + (flowIndex + i));
	                    }
	                    $$.svg.selectAll('.' + CLASS.shapes).selectAll(shapes).remove();
	                    $$.svg.selectAll('.' + CLASS.texts).selectAll(texts).remove();
	                    $$.svg.selectAll('.' + CLASS.eventRects).selectAll(eventRects).remove();
	                    $$.svg.select('.' + CLASS.xgrid).remove();
	                }

	                // draw again for removing flowed elements and reverting attr
	                xgrid
	                    .attr('transform', null)
	                    .attr($$.xgridAttr);
	                xgridLines
	                    .attr('transform', null);
	                xgridLines.select('line')
	                    .attr("x1", config.axis_rotated ? 0 : xv)
	                    .attr("x2", config.axis_rotated ? $$.width : xv);
	                xgridLines.select('text')
	                    .attr("x", config.axis_rotated ? $$.width : 0)
	                    .attr("y", xv);
	                mainBar
	                    .attr('transform', null)
	                    .attr("d", drawBar);
	                mainLine
	                    .attr('transform', null)
	                    .attr("d", drawLine);
	                mainArea
	                    .attr('transform', null)
	                    .attr("d", drawArea);
	                mainCircle
	                    .attr('transform', null)
	                    .attr("cx", cx)
	                    .attr("cy", cy);
	                mainText
	                    .attr('transform', null)
	                    .attr('x', xForText)
	                    .attr('y', yForText)
	                    .style('fill-opacity', $$.opacityForText.bind($$));
	                mainRegion
	                    .attr('transform', null);
	                mainRegion.select('rect').filter($$.isRegionOnX)
	                    .attr("x", $$.regionX.bind($$))
	                    .attr("width", $$.regionWidth.bind($$));

	                if (config.interaction_enabled) {
	                    $$.redrawEventRect();
	                }

	                // callback for end of flow
	                done();

	                $$.flowing = false;
	            });
	        };
	    };

	    c3_chart_fn.selected = function (targetId) {
	        var $$ = this.internal, d3 = $$.d3;
	        return d3.merge(
	            $$.main.selectAll('.' + CLASS.shapes + $$.getTargetSelectorSuffix(targetId)).selectAll('.' + CLASS.shape)
	                .filter(function () { return d3.select(this).classed(CLASS.SELECTED); })
	                .map(function (d) { return d.map(function (d) { var data = d.__data__; return data.data ? data.data : data; }); })
	        );
	    };
	    c3_chart_fn.select = function (ids, indices, resetOther) {
	        var $$ = this.internal, d3 = $$.d3, config = $$.config;
	        if (! config.data_selection_enabled) { return; }
	        $$.main.selectAll('.' + CLASS.shapes).selectAll('.' + CLASS.shape).each(function (d, i) {
	            var shape = d3.select(this), id = d.data ? d.data.id : d.id,
	                toggle = $$.getToggle(this, d).bind($$),
	                isTargetId = config.data_selection_grouped || !ids || ids.indexOf(id) >= 0,
	                isTargetIndex = !indices || indices.indexOf(i) >= 0,
	                isSelected = shape.classed(CLASS.SELECTED);
	            // line/area selection not supported yet
	            if (shape.classed(CLASS.line) || shape.classed(CLASS.area)) {
	                return;
	            }
	            if (isTargetId && isTargetIndex) {
	                if (config.data_selection_isselectable(d) && !isSelected) {
	                    toggle(true, shape.classed(CLASS.SELECTED, true), d, i);
	                }
	            } else if (isDefined(resetOther) && resetOther) {
	                if (isSelected) {
	                    toggle(false, shape.classed(CLASS.SELECTED, false), d, i);
	                }
	            }
	        });
	    };
	    c3_chart_fn.unselect = function (ids, indices) {
	        var $$ = this.internal, d3 = $$.d3, config = $$.config;
	        if (! config.data_selection_enabled) { return; }
	        $$.main.selectAll('.' + CLASS.shapes).selectAll('.' + CLASS.shape).each(function (d, i) {
	            var shape = d3.select(this), id = d.data ? d.data.id : d.id,
	                toggle = $$.getToggle(this, d).bind($$),
	                isTargetId = config.data_selection_grouped || !ids || ids.indexOf(id) >= 0,
	                isTargetIndex = !indices || indices.indexOf(i) >= 0,
	                isSelected = shape.classed(CLASS.SELECTED);
	            // line/area selection not supported yet
	            if (shape.classed(CLASS.line) || shape.classed(CLASS.area)) {
	                return;
	            }
	            if (isTargetId && isTargetIndex) {
	                if (config.data_selection_isselectable(d)) {
	                    if (isSelected) {
	                        toggle(false, shape.classed(CLASS.SELECTED, false), d, i);
	                    }
	                }
	            }
	        });
	    };

	    c3_chart_fn.transform = function (type, targetIds) {
	        var $$ = this.internal,
	            options = ['pie', 'donut'].indexOf(type) >= 0 ? {withTransform: true} : null;
	        $$.transformTo(targetIds, type, options);
	    };

	    c3_chart_internal_fn.transformTo = function (targetIds, type, optionsForRedraw) {
	        var $$ = this,
	            withTransitionForAxis = !$$.hasArcType(),
	            options = optionsForRedraw || {withTransitionForAxis: withTransitionForAxis};
	        options.withTransitionForTransform = false;
	        $$.transiting = false;
	        $$.setTargetType(targetIds, type);
	        $$.updateTargets($$.data.targets); // this is needed when transforming to arc
	        $$.updateAndRedraw(options);
	    };

	    c3_chart_fn.groups = function (groups) {
	        var $$ = this.internal, config = $$.config;
	        if (isUndefined(groups)) { return config.data_groups; }
	        config.data_groups = groups;
	        $$.redraw();
	        return config.data_groups;
	    };

	    c3_chart_fn.xgrids = function (grids) {
	        var $$ = this.internal, config = $$.config;
	        if (! grids) { return config.grid_x_lines; }
	        config.grid_x_lines = grids;
	        $$.redrawWithoutRescale();
	        return config.grid_x_lines;
	    };
	    c3_chart_fn.xgrids.add = function (grids) {
	        var $$ = this.internal;
	        return this.xgrids($$.config.grid_x_lines.concat(grids ? grids : []));
	    };
	    c3_chart_fn.xgrids.remove = function (params) { // TODO: multiple
	        var $$ = this.internal;
	        $$.removeGridLines(params, true);
	    };

	    c3_chart_fn.ygrids = function (grids) {
	        var $$ = this.internal, config = $$.config;
	        if (! grids) { return config.grid_y_lines; }
	        config.grid_y_lines = grids;
	        $$.redrawWithoutRescale();
	        return config.grid_y_lines;
	    };
	    c3_chart_fn.ygrids.add = function (grids) {
	        var $$ = this.internal;
	        return this.ygrids($$.config.grid_y_lines.concat(grids ? grids : []));
	    };
	    c3_chart_fn.ygrids.remove = function (params) { // TODO: multiple
	        var $$ = this.internal;
	        $$.removeGridLines(params, false);
	    };

	    c3_chart_fn.regions = function (regions) {
	        var $$ = this.internal, config = $$.config;
	        if (!regions) { return config.regions; }
	        config.regions = regions;
	        $$.redrawWithoutRescale();
	        return config.regions;
	    };
	    c3_chart_fn.regions.add = function (regions) {
	        var $$ = this.internal, config = $$.config;
	        if (!regions) { return config.regions; }
	        config.regions = config.regions.concat(regions);
	        $$.redrawWithoutRescale();
	        return config.regions;
	    };
	    c3_chart_fn.regions.remove = function (options) {
	        var $$ = this.internal, config = $$.config,
	            duration, classes, regions;

	        options = options || {};
	        duration = $$.getOption(options, "duration", config.transition_duration);
	        classes = $$.getOption(options, "classes", [CLASS.region]);

	        regions = $$.main.select('.' + CLASS.regions).selectAll(classes.map(function (c) { return '.' + c; }));
	        (duration ? regions.transition().duration(duration) : regions)
	            .style('opacity', 0)
	            .remove();

	        config.regions = config.regions.filter(function (region) {
	            var found = false;
	            if (!region['class']) {
	                return true;
	            }
	            region['class'].split(' ').forEach(function (c) {
	                if (classes.indexOf(c) >= 0) { found = true; }
	            });
	            return !found;
	        });

	        return config.regions;
	    };

	    c3_chart_fn.data = function (targetIds) {
	        var targets = this.internal.data.targets;
	        return typeof targetIds === 'undefined' ? targets : targets.filter(function (t) {
	            return [].concat(targetIds).indexOf(t.id) >= 0;
	        });
	    };
	    c3_chart_fn.data.shown = function (targetIds) {
	        return this.internal.filterTargetsToShow(this.data(targetIds));
	    };
	    c3_chart_fn.data.values = function (targetId) {
	        var targets, values = null;
	        if (targetId) {
	            targets = this.data(targetId);
	            values = targets[0] ? targets[0].values.map(function (d) { return d.value; }) : null;
	        }
	        return values;
	    };
	    c3_chart_fn.data.names = function (names) {
	        this.internal.clearLegendItemTextBoxCache();
	        return this.internal.updateDataAttributes('names', names);
	    };
	    c3_chart_fn.data.colors = function (colors) {
	        return this.internal.updateDataAttributes('colors', colors);
	    };
	    c3_chart_fn.data.axes = function (axes) {
	        return this.internal.updateDataAttributes('axes', axes);
	    };

	    c3_chart_fn.category = function (i, category) {
	        var $$ = this.internal, config = $$.config;
	        if (arguments.length > 1) {
	            config.axis_x_categories[i] = category;
	            $$.redraw();
	        }
	        return config.axis_x_categories[i];
	    };
	    c3_chart_fn.categories = function (categories) {
	        var $$ = this.internal, config = $$.config;
	        if (!arguments.length) { return config.axis_x_categories; }
	        config.axis_x_categories = categories;
	        $$.redraw();
	        return config.axis_x_categories;
	    };

	    // TODO: fix
	    c3_chart_fn.color = function (id) {
	        var $$ = this.internal;
	        return $$.color(id); // more patterns
	    };

	    c3_chart_fn.x = function (x) {
	        var $$ = this.internal;
	        if (arguments.length) {
	            $$.updateTargetX($$.data.targets, x);
	            $$.redraw({withUpdateOrgXDomain: true, withUpdateXDomain: true});
	        }
	        return $$.data.xs;
	    };
	    c3_chart_fn.xs = function (xs) {
	        var $$ = this.internal;
	        if (arguments.length) {
	            $$.updateTargetXs($$.data.targets, xs);
	            $$.redraw({withUpdateOrgXDomain: true, withUpdateXDomain: true});
	        }
	        return $$.data.xs;
	    };

	    c3_chart_fn.axis = function () {};
	    c3_chart_fn.axis.labels = function (labels) {
	        var $$ = this.internal;
	        if (arguments.length) {
	            Object.keys(labels).forEach(function (axisId) {
	                $$.axis.setLabelText(axisId, labels[axisId]);
	            });
	            $$.axis.updateLabels();
	        }
	        // TODO: return some values?
	    };
	    c3_chart_fn.axis.max = function (max) {
	        var $$ = this.internal, config = $$.config;
	        if (arguments.length) {
	            if (typeof max === 'object') {
	                if (isValue(max.x)) { config.axis_x_max = max.x; }
	                if (isValue(max.y)) { config.axis_y_max = max.y; }
	                if (isValue(max.y2)) { config.axis_y2_max = max.y2; }
	            } else {
	                config.axis_y_max = config.axis_y2_max = max;
	            }
	            $$.redraw({withUpdateOrgXDomain: true, withUpdateXDomain: true});
	        } else {
	            return {
	                x: config.axis_x_max,
	                y: config.axis_y_max,
	                y2: config.axis_y2_max
	            };
	        }
	    };
	    c3_chart_fn.axis.min = function (min) {
	        var $$ = this.internal, config = $$.config;
	        if (arguments.length) {
	            if (typeof min === 'object') {
	                if (isValue(min.x)) { config.axis_x_min = min.x; }
	                if (isValue(min.y)) { config.axis_y_min = min.y; }
	                if (isValue(min.y2)) { config.axis_y2_min = min.y2; }
	            } else {
	                config.axis_y_min = config.axis_y2_min = min;
	            }
	            $$.redraw({withUpdateOrgXDomain: true, withUpdateXDomain: true});
	        } else {
	            return {
	                x: config.axis_x_min,
	                y: config.axis_y_min,
	                y2: config.axis_y2_min
	            };
	        }
	    };
	    c3_chart_fn.axis.range = function (range) {
	        if (arguments.length) {
	            if (isDefined(range.max)) { this.axis.max(range.max); }
	            if (isDefined(range.min)) { this.axis.min(range.min); }
	        } else {
	            return {
	                max: this.axis.max(),
	                min: this.axis.min()
	            };
	        }
	    };

	    c3_chart_fn.legend = function () {};
	    c3_chart_fn.legend.show = function (targetIds) {
	        var $$ = this.internal;
	        $$.showLegend($$.mapToTargetIds(targetIds));
	        $$.updateAndRedraw({withLegend: true});
	    };
	    c3_chart_fn.legend.hide = function (targetIds) {
	        var $$ = this.internal;
	        $$.hideLegend($$.mapToTargetIds(targetIds));
	        $$.updateAndRedraw({withLegend: true});
	    };

	    c3_chart_fn.resize = function (size) {
	        var $$ = this.internal, config = $$.config;
	        config.size_width = size ? size.width : null;
	        config.size_height = size ? size.height : null;
	        this.flush();
	    };

	    c3_chart_fn.flush = function () {
	        var $$ = this.internal;
	        $$.updateAndRedraw({withLegend: true, withTransition: false, withTransitionForTransform: false});
	    };

	    c3_chart_fn.destroy = function () {
	        var $$ = this.internal;

	        window.clearInterval($$.intervalForObserveInserted);
	        window.onresize = null;

	        $$.selectChart.classed('c3', false).html("");

	        // MEMO: this is needed because the reference of some elements will not be released, then memory leak will happen.
	        Object.keys($$).forEach(function (key) {
	            $$[key] = null;
	        });

	        return null;
	    };

	    c3_chart_fn.tooltip = function () {};
	    c3_chart_fn.tooltip.show = function (args) {
	        var $$ = this.internal, index, mouse;

	        // determine mouse position on the chart
	        if (args.mouse) {
	            mouse = args.mouse;
	        }

	        // determine focus data
	        if (args.data) {
	            if ($$.isMultipleX()) {
	                // if multiple xs, target point will be determined by mouse
	                mouse = [$$.x(args.data.x), $$.getYScale(args.data.id)(args.data.value)];
	                index = null;
	            } else {
	                // TODO: when tooltip_grouped = false
	                index = isValue(args.data.index) ? args.data.index : $$.getIndexByX(args.data.x);
	            }
	        }
	        else if (typeof args.x !== 'undefined') {
	            index = $$.getIndexByX(args.x);
	        }
	        else if (typeof args.index !== 'undefined') {
	            index = args.index;
	        }

	        // emulate mouse events to show
	        $$.dispatchEvent('mouseover', index, mouse);
	        $$.dispatchEvent('mousemove', index, mouse);
	    };
	    c3_chart_fn.tooltip.hide = function () {
	        // TODO: get target data by checking the state of focus
	        this.internal.dispatchEvent('mouseout', 0);
	    };

	    // Features:
	    // 1. category axis
	    // 2. ceil values of translate/x/y to int for half pixel antialiasing
	    // 3. multiline tick text
	    var tickTextCharSize;
	    function c3_axis(d3, params) {
	        var scale = d3.scale.linear(), orient = "bottom", innerTickSize = 6, outerTickSize, tickPadding = 3, tickValues = null, tickFormat, tickArguments;

	        var tickOffset = 0, tickCulling = true, tickCentered;

	        params = params || {};
	        outerTickSize = params.withOuterTick ? 6 : 0;

	        function axisX(selection, x) {
	            selection.attr("transform", function (d) {
	                return "translate(" + Math.ceil(x(d) + tickOffset) + ", 0)";
	            });
	        }
	        function axisY(selection, y) {
	            selection.attr("transform", function (d) {
	                return "translate(0," + Math.ceil(y(d)) + ")";
	            });
	        }
	        function scaleExtent(domain) {
	            var start = domain[0], stop = domain[domain.length - 1];
	            return start < stop ? [ start, stop ] : [ stop, start ];
	        }
	        function generateTicks(scale) {
	            var i, domain, ticks = [];
	            if (scale.ticks) {
	                return scale.ticks.apply(scale, tickArguments);
	            }
	            domain = scale.domain();
	            for (i = Math.ceil(domain[0]); i < domain[1]; i++) {
	                ticks.push(i);
	            }
	            if (ticks.length > 0 && ticks[0] > 0) {
	                ticks.unshift(ticks[0] - (ticks[1] - ticks[0]));
	            }
	            return ticks;
	        }
	        function copyScale() {
	            var newScale = scale.copy(), domain;
	            if (params.isCategory) {
	                domain = scale.domain();
	                newScale.domain([domain[0], domain[1] - 1]);
	            }
	            return newScale;
	        }
	        function textFormatted(v) {
	            var formatted = tickFormat ? tickFormat(v) : v;
	            return typeof formatted !== 'undefined' ? formatted : '';
	        }
	        function getSizeFor1Char(tick) {
	            if (tickTextCharSize) {
	                return tickTextCharSize;
	            }
	            var size = {
	                h: 11.5,
	                w: 5.5
	            };
	            tick.select('text').text(textFormatted).each(function (d) {
	                var box = this.getBoundingClientRect(),
	                    text = textFormatted(d),
	                    h = box.height,
	                    w = text ? (box.width / text.length) : undefined;
	                if (h && w) {
	                    size.h = h;
	                    size.w = w;
	                }
	            }).text('');
	            tickTextCharSize = size;
	            return size;
	        }
	        function transitionise(selection) {
	            return params.withoutTransition ? selection : d3.transition(selection);
	        }
	        function axis(g) {
	            g.each(function () {
	                var g = axis.g = d3.select(this);

	                var scale0 = this.__chart__ || scale, scale1 = this.__chart__ = copyScale();

	                var ticks = tickValues ? tickValues : generateTicks(scale1),
	                    tick = g.selectAll(".tick").data(ticks, scale1),
	                    tickEnter = tick.enter().insert("g", ".domain").attr("class", "tick").style("opacity", 1e-6),
	                    // MEMO: No exit transition. The reason is this transition affects max tick width calculation because old tick will be included in the ticks.
	                    tickExit = tick.exit().remove(),
	                    tickUpdate = transitionise(tick).style("opacity", 1),
	                    tickTransform, tickX, tickY;

	                var range = scale.rangeExtent ? scale.rangeExtent() : scaleExtent(scale.range()),
	                    path = g.selectAll(".domain").data([ 0 ]),
	                    pathUpdate = (path.enter().append("path").attr("class", "domain"), transitionise(path));
	                tickEnter.append("line");
	                tickEnter.append("text");

	                var lineEnter = tickEnter.select("line"),
	                    lineUpdate = tickUpdate.select("line"),
	                    textEnter = tickEnter.select("text"),
	                    textUpdate = tickUpdate.select("text");

	                if (params.isCategory) {
	                    tickOffset = Math.ceil((scale1(1) - scale1(0)) / 2);
	                    tickX = tickCentered ? 0 : tickOffset;
	                    tickY = tickCentered ? tickOffset : 0;
	                } else {
	                    tickOffset = tickX = 0;
	                }

	                var text, tspan, sizeFor1Char = getSizeFor1Char(g.select('.tick')), counts = [];
	                var tickLength = Math.max(innerTickSize, 0) + tickPadding,
	                    isVertical = orient === 'left' || orient === 'right';

	                // this should be called only when category axis
	                function splitTickText(d, maxWidth) {
	                    var tickText = textFormatted(d),
	                        subtext, spaceIndex, textWidth, splitted = [];

	                    if (Object.prototype.toString.call(tickText) === "[object Array]") {
	                        return tickText;
	                    }

	                    if (!maxWidth || maxWidth <= 0) {
	                        maxWidth = isVertical ? 95 : params.isCategory ? (Math.ceil(scale1(ticks[1]) - scale1(ticks[0])) - 12) : 110;
	                    }

	                    function split(splitted, text) {
	                        spaceIndex = undefined;
	                        for (var i = 1; i < text.length; i++) {
	                            if (text.charAt(i) === ' ') {
	                                spaceIndex = i;
	                            }
	                            subtext = text.substr(0, i + 1);
	                            textWidth = sizeFor1Char.w * subtext.length;
	                            // if text width gets over tick width, split by space index or crrent index
	                            if (maxWidth < textWidth) {
	                                return split(
	                                    splitted.concat(text.substr(0, spaceIndex ? spaceIndex : i)),
	                                    text.slice(spaceIndex ? spaceIndex + 1 : i)
	                                );
	                            }
	                        }
	                        return splitted.concat(text);
	                    }

	                    return split(splitted, tickText + "");
	                }

	                function tspanDy(d, i) {
	                    var dy = sizeFor1Char.h;
	                    if (i === 0) {
	                        if (orient === 'left' || orient === 'right') {
	                            dy = -((counts[d.index] - 1) * (sizeFor1Char.h / 2) - 3);
	                        } else {
	                            dy = ".71em";
	                        }
	                    }
	                    return dy;
	                }

	                function tickSize(d) {
	                    var tickPosition = scale(d) + (tickCentered ? 0 : tickOffset);
	                    return range[0] < tickPosition && tickPosition < range[1] ? innerTickSize : 0;
	                }

	                text = tick.select("text");
	                tspan = text.selectAll('tspan')
	                    .data(function (d, i) {
	                        var splitted = params.tickMultiline ? splitTickText(d, params.tickWidth) : [].concat(textFormatted(d));
	                        counts[i] = splitted.length;
	                        return splitted.map(function (s) {
	                            return { index: i, splitted: s };
	                        });
	                    });
	                tspan.enter().append('tspan');
	                tspan.exit().remove();
	                tspan.text(function (d) { return d.splitted; });

	                var rotate = params.tickTextRotate;

	                function textAnchorForText(rotate) {
	                    if (!rotate) {
	                        return 'middle';
	                    }
	                    return rotate > 0 ? "start" : "end";
	                }
	                function textTransform(rotate) {
	                    if (!rotate) {
	                        return '';
	                    }
	                    return "rotate(" + rotate + ")";
	                }
	                function dxForText(rotate) {
	                    if (!rotate) {
	                        return 0;
	                    }
	                    return 8 * Math.sin(Math.PI * (rotate / 180));
	                }
	                function yForText(rotate) {
	                    if (!rotate) {
	                        return tickLength;
	                    }
	                    return 11.5 - 2.5 * (rotate / 15) * (rotate > 0 ? 1 : -1);
	                }

	                switch (orient) {
	                case "bottom":
	                    {
	                        tickTransform = axisX;
	                        lineEnter.attr("y2", innerTickSize);
	                        textEnter.attr("y", tickLength);
	                        lineUpdate.attr("x1", tickX).attr("x2", tickX).attr("y2", tickSize);
	                        textUpdate.attr("x", 0).attr("y", yForText(rotate))
	                            .style("text-anchor", textAnchorForText(rotate))
	                            .attr("transform", textTransform(rotate));
	                        tspan.attr('x', 0).attr("dy", tspanDy).attr('dx', dxForText(rotate));
	                        pathUpdate.attr("d", "M" + range[0] + "," + outerTickSize + "V0H" + range[1] + "V" + outerTickSize);
	                        break;
	                    }
	                case "top":
	                    {
	                        // TODO: rotated tick text
	                        tickTransform = axisX;
	                        lineEnter.attr("y2", -innerTickSize);
	                        textEnter.attr("y", -tickLength);
	                        lineUpdate.attr("x2", 0).attr("y2", -innerTickSize);
	                        textUpdate.attr("x", 0).attr("y", -tickLength);
	                        text.style("text-anchor", "middle");
	                        tspan.attr('x', 0).attr("dy", "0em");
	                        pathUpdate.attr("d", "M" + range[0] + "," + -outerTickSize + "V0H" + range[1] + "V" + -outerTickSize);
	                        break;
	                    }
	                case "left":
	                    {
	                        tickTransform = axisY;
	                        lineEnter.attr("x2", -innerTickSize);
	                        textEnter.attr("x", -tickLength);
	                        lineUpdate.attr("x2", -innerTickSize).attr("y1", tickY).attr("y2", tickY);
	                        textUpdate.attr("x", -tickLength).attr("y", tickOffset);
	                        text.style("text-anchor", "end");
	                        tspan.attr('x', -tickLength).attr("dy", tspanDy);
	                        pathUpdate.attr("d", "M" + -outerTickSize + "," + range[0] + "H0V" + range[1] + "H" + -outerTickSize);
	                        break;
	                    }
	                case "right":
	                    {
	                        tickTransform = axisY;
	                        lineEnter.attr("x2", innerTickSize);
	                        textEnter.attr("x", tickLength);
	                        lineUpdate.attr("x2", innerTickSize).attr("y2", 0);
	                        textUpdate.attr("x", tickLength).attr("y", 0);
	                        text.style("text-anchor", "start");
	                        tspan.attr('x', tickLength).attr("dy", tspanDy);
	                        pathUpdate.attr("d", "M" + outerTickSize + "," + range[0] + "H0V" + range[1] + "H" + outerTickSize);
	                        break;
	                    }
	                }
	                if (scale1.rangeBand) {
	                    var x = scale1, dx = x.rangeBand() / 2;
	                    scale0 = scale1 = function (d) {
	                        return x(d) + dx;
	                    };
	                } else if (scale0.rangeBand) {
	                    scale0 = scale1;
	                } else {
	                    tickExit.call(tickTransform, scale1);
	                }
	                tickEnter.call(tickTransform, scale0);
	                tickUpdate.call(tickTransform, scale1);
	            });
	        }
	        axis.scale = function (x) {
	            if (!arguments.length) { return scale; }
	            scale = x;
	            return axis;
	        };
	        axis.orient = function (x) {
	            if (!arguments.length) { return orient; }
	            orient = x in {top: 1, right: 1, bottom: 1, left: 1} ? x + "" : "bottom";
	            return axis;
	        };
	        axis.tickFormat = function (format) {
	            if (!arguments.length) { return tickFormat; }
	            tickFormat = format;
	            return axis;
	        };
	        axis.tickCentered = function (isCentered) {
	            if (!arguments.length) { return tickCentered; }
	            tickCentered = isCentered;
	            return axis;
	        };
	        axis.tickOffset = function () {
	            return tickOffset;
	        };
	        axis.tickInterval = function () {
	            var interval, length;
	            if (params.isCategory) {
	                interval = tickOffset * 2;
	            }
	            else {
	                length = axis.g.select('path.domain').node().getTotalLength() - outerTickSize * 2;
	                interval = length / axis.g.selectAll('line').size();
	            }
	            return interval === Infinity ? 0 : interval;
	        };
	        axis.ticks = function () {
	            if (!arguments.length) { return tickArguments; }
	            tickArguments = arguments;
	            return axis;
	        };
	        axis.tickCulling = function (culling) {
	            if (!arguments.length) { return tickCulling; }
	            tickCulling = culling;
	            return axis;
	        };
	        axis.tickValues = function (x) {
	            if (typeof x === 'function') {
	                tickValues = function () {
	                    return x(scale.domain());
	                };
	            }
	            else {
	                if (!arguments.length) { return tickValues; }
	                tickValues = x;
	            }
	            return axis;
	        };
	        return axis;
	    }

	    c3_chart_internal_fn.isSafari = function () {
	        var ua = window.navigator.userAgent;
	        return ua.indexOf('Safari') >= 0 && ua.indexOf('Chrome') < 0;
	    };
	    c3_chart_internal_fn.isChrome = function () {
	        var ua = window.navigator.userAgent;
	        return ua.indexOf('Chrome') >= 0;
	    };

	    // PhantomJS doesn't have support for Function.prototype.bind, which has caused confusion. Use
	    // this polyfill to avoid the confusion.
	    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind#Polyfill

	    if (!Function.prototype.bind) {
	      Function.prototype.bind = function(oThis) {
	        if (typeof this !== 'function') {
	          // closest thing possible to the ECMAScript 5
	          // internal IsCallable function
	          throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
	        }

	        var aArgs   = Array.prototype.slice.call(arguments, 1),
	            fToBind = this,
	            fNOP    = function() {},
	            fBound  = function() {
	              return fToBind.apply(this instanceof fNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
	            };

	        fNOP.prototype = this.prototype;
	        fBound.prototype = new fNOP();

	        return fBound;
	      };
	    }

	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(13)], __WEBPACK_AMD_DEFINE_FACTORY__ = (c3), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if ('undefined' !== typeof exports && 'undefined' !== typeof module) {
	        module.exports = c3;
	    } else {
	        window.c3 = c3;
	    }

	})(window);


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ShellPanel = (function (_React$Component) {
	    _inherits(ShellPanel, _React$Component);

	    function ShellPanel(props) {
	        _classCallCheck(this, ShellPanel);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ShellPanel).call(this, props));

	        var historyLast = 0;
	        if (localStorage.historySize) {
	            historyLast = localStorage.historySize;
	        } else {
	            localStorage.setItem('historySize', 0);
	        }
	        _this.state = { shellResults: [], historyPosition: Number(historyLast) + 1 };
	        return _this;
	    }

	    _createClass(ShellPanel, [{
	        key: 'addResult',
	        value: function addResult(result) {
	            this.state.shellResults.push(result);
	            this.setState(this.state);
	        }
	    }, {
	        key: 'handleKeyDown',
	        value: function handleKeyDown(e) {
	            switch (e.keyCode) {
	                case 13:
	                    /* RETURN */
	                    e.preventDefault();
	                    var commandNode = _react2.default.findDOMNode(this.refs.command);
	                    this.addResult("# " + commandNode.value);
	                    this.callExecute(commandNode.value);
	                    this.resetPrompt(commandNode);
	                    break;
	                case 38:
	                    /* UP_ARROW */
	                    e.preventDefault();
	                    var commandNode = _react2.default.findDOMNode(this.refs.command);
	                    var currPos = this.state.historyPosition;
	                    this.state.historyPosition = Math.max(1, currPos - 1);
	                    var key = "hist_" + this.state.historyPosition;
	                    commandNode.value = localStorage.getItem(key);
	                    this.setState(this.state);
	                    break;
	                case 40:
	                    /* DOWN ARROW */
	                    e.preventDefault();
	                    var commandNode = _react2.default.findDOMNode(this.refs.command);
	                    var maxHist = Number(localStorage.historySize);
	                    var currPos = this.state.historyPosition;
	                    this.state.historyPosition = Math.min(Number(maxHist) + 1, currPos + 1);
	                    var key = "hist_" + this.state.historyPosition;
	                    commandNode.value = localStorage.getItem(key);
	                    this.setState(this.state);
	                    break;
	            }
	        }
	    }, {
	        key: 'resetPrompt',
	        value: function resetPrompt(commandNode) {
	            var newPos = Number(localStorage.historySize) + 1;
	            localStorage.setItem('historySize', newPos);
	            this.state.historyPosition = newPos + 1;
	            localStorage.setItem('hist_' + newPos, commandNode.value);
	            commandNode.value = "";
	            this.setState(this.state);
	        }
	    }, {
	        key: 'callExecute',
	        value: function callExecute(cmdline) {
	            var n = cmdline.replace(/<\d+\.\d+\.\d+>/g, function r(x) {
	                return "list_to_pid(\"" + x + "\")";
	            });
	            $.post("/api/execute", { cmd: n }, this.handleResult.bind(this));
	        }
	    }, {
	        key: 'handleResult',
	        value: function handleResult(data) {
	            this.addResult(data);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var results = this.state.shellResults;
	            var shellPanels = [];
	            for (var i = 0; i < results.length; i++) {
	                shellPanels.push(_react2.default.createElement(
	                    'div',
	                    { className: 'row' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-md-12' },
	                        results[i]
	                    )
	                ));
	            }
	            return _react2.default.createElement(
	                'div',
	                { className: 'container-fluid' },
	                shellPanels,
	                _react2.default.createElement('input', { id: 'command', ref: 'command', type: 'text',
	                    onKeyDown: this.handleKeyDown.bind(this) })
	            );
	        }
	    }]);

	    return ShellPanel;
	})(_react2.default.Component);

	exports.default = ShellPanel;
	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }
]);