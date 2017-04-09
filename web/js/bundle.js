(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import SearchableTable from './SearchableTable';
//import {data} from './data';
//import HelloMessage from './HelloMessage';

// Filterable CheatSheet Component
//ReactDOM.render( <SearchableTable data={data}/>, document.getElementById('searchableTable') );

//ReactDOM.render(<HelloMessage name="Hello,Mrinal Mondal, welcome to Cybage." />,  document.getElementById('hello2') );

/*
*	Author: Jean-Pierre Sierens
*	===========================================================================
*/

_reactDom2.default.render(_react2.default.createElement(
  'h1',
  null,
  'Hello, world ...Entry 2!'
), document.getElementById('root'));

},{"react":"react","react-dom":"react-dom"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HelloMessage = function (_React$Component) {
  _inherits(HelloMessage, _React$Component);

  function HelloMessage() {
    _classCallCheck(this, HelloMessage);

    return _possibleConstructorReturn(this, (HelloMessage.__proto__ || Object.getPrototypeOf(HelloMessage)).apply(this, arguments));
  }

  _createClass(HelloMessage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        'Hello ',
        this.props.name
      );
    }
  }]);

  return HelloMessage;
}(_react2.default.Component);

exports.default = HelloMessage;

},{"react":"react"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *	Searchable Table
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *	Author: Jean-Pierre Sierens
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *	===========================================================================
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var SearchableTable = function (_React$Component) {
	_inherits(SearchableTable, _React$Component);

	function SearchableTable() {
		_classCallCheck(this, SearchableTable);

		// Initial state of the component
		var _this = _possibleConstructorReturn(this, (SearchableTable.__proto__ || Object.getPrototypeOf(SearchableTable)).call(this));

		_this.state = { filterText: '' };
		return _this;
	}

	_createClass(SearchableTable, [{
		key: 'handleUserInput',
		value: function handleUserInput(filterText) {
			// When there's a change in the state, the component and all its 
			// sub-components get updated.
			this.setState({ filterText: filterText });
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(SearchBar, {
					filterText: this.state.filterText,
					onUserInput: this.handleUserInput.bind(this)
				}),
				_react2.default.createElement(Table, {
					data: this.props.data,
					filterText: this.state.filterText
				})
			);
		}
	}]);

	return SearchableTable;
}(_react2.default.Component);

exports.default = SearchableTable;

var SearchBar = function (_React$Component2) {
	_inherits(SearchBar, _React$Component2);

	function SearchBar() {
		_classCallCheck(this, SearchBar);

		return _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).apply(this, arguments));
	}

	_createClass(SearchBar, [{
		key: 'handleChange',
		value: function handleChange() {
			// passing filter data up by using a callback
			this.props.onUserInput(
			// ref is like the id
			this.refs.filterTextInput.value);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'form',
				null,
				_react2.default.createElement('input', {
					type: 'text',
					placeholder: 'Search for one keyword...',
					ref: 'filterTextInput',
					value: this.props.filterText,
					onChange: this.handleChange.bind(this)
				})
			);
		}
	}]);

	return SearchBar;
}(_react2.default.Component);

var Table = function (_React$Component3) {
	_inherits(Table, _React$Component3);

	function Table() {
		_classCallCheck(this, Table);

		return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).apply(this, arguments));
	}

	_createClass(Table, [{
		key: 'render',
		value: function render() {
			var sections = [];
			var data = this.props.data;
			data.forEach(function (product) {
				if (product.name.indexOf(this.props.filterText) === -1) {
					return;
				}
				sections.push(_react2.default.createElement(Section, { key: product.name, data: product }));
			}.bind(this));
			return _react2.default.createElement(
				'div',
				null,
				sections
			);
		}
	}]);

	return Table;
}(_react2.default.Component);

var Section = function (_React$Component4) {
	_inherits(Section, _React$Component4);

	function Section() {
		_classCallCheck(this, Section);

		return _possibleConstructorReturn(this, (Section.__proto__ || Object.getPrototypeOf(Section)).apply(this, arguments));
	}

	_createClass(Section, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'p',
					null,
					this.props.data.name,
					' = ',
					this.props.data.price,
					' '
				)
			);
		}
	}]);

	return Section;
}(_react2.default.Component);

},{"react":"react"}],4:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _SearchableTable = require('./SearchableTable');

var _SearchableTable2 = _interopRequireDefault(_SearchableTable);

var _data = require('./data');

var _HelloMessage = require('./HelloMessage');

var _HelloMessage2 = _interopRequireDefault(_HelloMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Filterable CheatSheet Component
_reactDom2.default.render(_react2.default.createElement(_SearchableTable2.default, { data: _data.data }), document.getElementById('searchableTable')); /*
                                                                                                                                                       *	Author: Jean-Pierre Sierens
                                                                                                                                                       *	===========================================================================
                                                                                                                                                       */

_reactDom2.default.render(_react2.default.createElement(_HelloMessage2.default, { name: 'Hello,Mrinal Mondal, welcome to Cybage.' }), document.getElementById('hello'));

},{"./HelloMessage":2,"./SearchableTable":3,"./data":5,"react":"react","react-dom":"react-dom"}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var data = exports.data = [{ category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" }, { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" }, { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" }, { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" }, { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" }, { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }];

},{}]},{},[4,1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAyXFxhcHAuanMiLCJhcHBcXEhlbGxvTWVzc2FnZS5qcyIsImFwcFxcU2VhcmNoYWJsZVRhYmxlLmpzIiwiYXBwXFxhcHAuanMiLCJhcHBcXGRhdGEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0tBOzs7O0FBQ0E7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQWRBOzs7OztBQWdCQSxtQkFBUyxNQUFULENBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQURGLEVBRUUsU0FBUyxjQUFULENBQXdCLE1BQXhCLENBRkY7Ozs7Ozs7Ozs7O0FDaEJBOzs7Ozs7Ozs7Ozs7SUFFc0IsWTs7Ozs7Ozs7Ozs7NkJBQ1g7QUFDUCxhQUFPO0FBQUE7QUFBQTtBQUFBO0FBQVksYUFBSyxLQUFMLENBQVc7QUFBdkIsT0FBUDtBQUNEOzs7O0VBSHdDLGdCQUFNLFM7O2tCQUEzQixZOzs7Ozs7Ozs7OztBQ0l0Qjs7Ozs7Ozs7OzsrZUFOQTs7Ozs7O0lBUXFCLGU7OztBQUNwQiw0QkFBYztBQUFBOztBQUViO0FBRmE7O0FBR1AsUUFBSyxLQUFMLEdBQWEsRUFBQyxZQUFZLEVBQWIsRUFBYjtBQUhPO0FBSVY7Ozs7a0NBQ2UsVSxFQUFZO0FBQzNCO0FBQ0E7QUFDRyxRQUFLLFFBQUwsQ0FBYyxFQUFDLFlBQVksVUFBYixFQUFkO0FBQ0g7OzsyQkFDSTtBQUNQLFVBQ0M7QUFBQTtBQUFBO0FBQ0Msa0NBQUMsU0FBRDtBQUNDLGlCQUFZLEtBQUssS0FBTCxDQUFXLFVBRHhCO0FBRWdCLGtCQUFhLEtBQUssZUFBTCxDQUFxQixJQUFyQixDQUEwQixJQUExQjtBQUY3QixNQUREO0FBS0Msa0NBQUMsS0FBRDtBQUNDLFdBQU0sS0FBSyxLQUFMLENBQVcsSUFEbEI7QUFFQyxpQkFBWSxLQUFLLEtBQUwsQ0FBVztBQUZ4QjtBQUxELElBREQ7QUFZQTs7OztFQXhCMkMsZ0JBQU0sUzs7a0JBQTlCLGU7O0lBMkJmLFM7Ozs7Ozs7Ozs7O2lDQUNVO0FBQ2Q7QUFDTSxRQUFLLEtBQUwsQ0FBVyxXQUFYO0FBQ0M7QUFDRyxRQUFLLElBQUwsQ0FBVSxlQUFWLENBQTBCLEtBRjlCO0FBSUg7OzsyQkFDSTtBQUNQLFVBQ1U7QUFBQTtBQUFBO0FBQ0k7QUFDQyxXQUFLLE1BRE47QUFFQyxrQkFBWSwyQkFGYjtBQUdDLFVBQUksaUJBSEw7QUFJQyxZQUFRLEtBQUssS0FBTCxDQUFXLFVBSnBCO0FBS0MsZUFBVyxLQUFLLFlBQUwsQ0FBa0IsSUFBbEIsQ0FBdUIsSUFBdkI7QUFMWjtBQURKLElBRFY7QUFXQTs7OztFQXBCc0IsZ0JBQU0sUzs7SUF1QnhCLEs7Ozs7Ozs7Ozs7OzJCQUNHO0FBQ1AsT0FBSSxXQUFXLEVBQWY7QUFDQSxPQUFJLE9BQU8sS0FBSyxLQUFMLENBQVcsSUFBdEI7QUFDQSxRQUFLLE9BQUwsQ0FBYSxVQUFTLE9BQVQsRUFBaUI7QUFDN0IsUUFBSSxRQUFRLElBQVIsQ0FBYSxPQUFiLENBQXFCLEtBQUssS0FBTCxDQUFXLFVBQWhDLE1BQWdELENBQUMsQ0FBckQsRUFBd0Q7QUFDdkQ7QUFDQTtBQUNELGFBQVMsSUFBVCxDQUFjLDhCQUFDLE9BQUQsSUFBUyxLQUFLLFFBQVEsSUFBdEIsRUFBNEIsTUFBTSxPQUFsQyxHQUFkO0FBQ0EsSUFMWSxDQUtYLElBTFcsQ0FLTixJQUxNLENBQWI7QUFNQSxVQUNDO0FBQUE7QUFBQTtBQUFNO0FBQU4sSUFERDtBQUdBOzs7O0VBYmtCLGdCQUFNLFM7O0lBZ0JwQixPOzs7Ozs7Ozs7OzsyQkFDRztBQUNQLFVBQ0M7QUFBQTtBQUFBO0FBQ0M7QUFBQTtBQUFBO0FBQUksVUFBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixJQUFwQjtBQUFBO0FBQTZCLFVBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsS0FBN0M7QUFBQTtBQUFBO0FBREQsSUFERDtBQUtBOzs7O0VBUG9CLGdCQUFNLFM7Ozs7O0FDckU1Qjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7O0FBRUE7QUFDQSxtQkFBUyxNQUFULENBQWlCLDJEQUFpQixnQkFBakIsR0FBakIsRUFBaUQsU0FBUyxjQUFULENBQXdCLGlCQUF4QixDQUFqRCxFLENBWkE7Ozs7O0FBY0EsbUJBQVMsTUFBVCxDQUFnQix3REFBYyxNQUFLLHlDQUFuQixHQUFoQixFQUFrRixTQUFTLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBbEY7Ozs7Ozs7O0FDZE8sSUFBTSxzQkFBTyxDQUNsQixFQUFDLFVBQVUsZ0JBQVgsRUFBNkIsT0FBTyxRQUFwQyxFQUE4QyxTQUFTLElBQXZELEVBQTZELE1BQU0sVUFBbkUsRUFEa0IsRUFFbEIsRUFBQyxVQUFVLGdCQUFYLEVBQTZCLE9BQU8sT0FBcEMsRUFBNkMsU0FBUyxJQUF0RCxFQUE0RCxNQUFNLFVBQWxFLEVBRmtCLEVBR2xCLEVBQUMsVUFBVSxnQkFBWCxFQUE2QixPQUFPLFFBQXBDLEVBQThDLFNBQVMsS0FBdkQsRUFBOEQsTUFBTSxZQUFwRSxFQUhrQixFQUlsQixFQUFDLFVBQVUsYUFBWCxFQUEwQixPQUFPLFFBQWpDLEVBQTJDLFNBQVMsSUFBcEQsRUFBMEQsTUFBTSxZQUFoRSxFQUprQixFQUtsQixFQUFDLFVBQVUsYUFBWCxFQUEwQixPQUFPLFNBQWpDLEVBQTRDLFNBQVMsS0FBckQsRUFBNEQsTUFBTSxVQUFsRSxFQUxrQixFQU1sQixFQUFDLFVBQVUsYUFBWCxFQUEwQixPQUFPLFNBQWpDLEVBQTRDLFNBQVMsSUFBckQsRUFBMkQsTUFBTSxTQUFqRSxFQU5rQixDQUFiIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qXHJcbipcdEF1dGhvcjogSmVhbi1QaWVycmUgU2llcmVuc1xyXG4qXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKi9cclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG4vL2ltcG9ydCBTZWFyY2hhYmxlVGFibGUgZnJvbSAnLi9TZWFyY2hhYmxlVGFibGUnO1xyXG4vL2ltcG9ydCB7ZGF0YX0gZnJvbSAnLi9kYXRhJztcclxuLy9pbXBvcnQgSGVsbG9NZXNzYWdlIGZyb20gJy4vSGVsbG9NZXNzYWdlJztcclxuXHJcbi8vIEZpbHRlcmFibGUgQ2hlYXRTaGVldCBDb21wb25lbnRcclxuLy9SZWFjdERPTS5yZW5kZXIoIDxTZWFyY2hhYmxlVGFibGUgZGF0YT17ZGF0YX0vPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaGFibGVUYWJsZScpICk7XHJcblxyXG4vL1JlYWN0RE9NLnJlbmRlcig8SGVsbG9NZXNzYWdlIG5hbWU9XCJIZWxsbyxNcmluYWwgTW9uZGFsLCB3ZWxjb21lIHRvIEN5YmFnZS5cIiAvPiwgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWxsbzInKSApO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gIDxoMT5IZWxsbywgd29ybGQgLi4uRW50cnkgMiE8L2gxPixcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXHJcbik7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICBjbGFzcyBIZWxsb01lc3NhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiA8ZGl2PkhlbGxvIHt0aGlzLnByb3BzLm5hbWV9PC9kaXY+O1xyXG4gIH1cclxufSIsIi8qXHJcbipcdFNlYXJjaGFibGUgVGFibGVcclxuKlx0QXV0aG9yOiBKZWFuLVBpZXJyZSBTaWVyZW5zXHJcbipcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4qL1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaGFibGVUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0Ly8gSW5pdGlhbCBzdGF0ZSBvZiB0aGUgY29tcG9uZW50XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtmaWx0ZXJUZXh0OiAnJ31cclxuICAgIH1cclxuICAgIGhhbmRsZVVzZXJJbnB1dChmaWx0ZXJUZXh0KSB7XHJcbiAgICBcdC8vIFdoZW4gdGhlcmUncyBhIGNoYW5nZSBpbiB0aGUgc3RhdGUsIHRoZSBjb21wb25lbnQgYW5kIGFsbCBpdHMgXHJcbiAgICBcdC8vIHN1Yi1jb21wb25lbnRzIGdldCB1cGRhdGVkLlxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZpbHRlclRleHQ6IGZpbHRlclRleHR9KTtcclxuICAgIH1cclxuXHRyZW5kZXIoKXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdFx0PFNlYXJjaEJhciBcclxuXHRcdFx0XHRcdGZpbHRlclRleHQ9e3RoaXMuc3RhdGUuZmlsdGVyVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICBvblVzZXJJbnB1dD17dGhpcy5oYW5kbGVVc2VySW5wdXQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcblx0XHRcdFx0PFRhYmxlIFxyXG5cdFx0XHRcdFx0ZGF0YT17dGhpcy5wcm9wcy5kYXRhfSBcclxuXHRcdFx0XHRcdGZpbHRlclRleHQ9e3RoaXMuc3RhdGUuZmlsdGVyVGV4dH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBTZWFyY2hCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdGhhbmRsZUNoYW5nZSgpIHtcclxuXHRcdC8vIHBhc3NpbmcgZmlsdGVyIGRhdGEgdXAgYnkgdXNpbmcgYSBjYWxsYmFja1xyXG4gICAgICAgIHRoaXMucHJvcHMub25Vc2VySW5wdXQoXHJcbiAgICAgICAgXHQvLyByZWYgaXMgbGlrZSB0aGUgaWRcclxuICAgICAgICAgICAgdGhpcy5yZWZzLmZpbHRlclRleHRJbnB1dC52YWx1ZVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblx0cmVuZGVyKCl7XHJcblx0XHRyZXR1cm4gKFxyXG4gICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgIFx0dHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgIFx0cGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIG9uZSBrZXl3b3JkLi4uXCIgXHJcbiAgICAgICAgICAgICAgICBcdHJlZj1cImZpbHRlclRleHRJbnB1dFwiXHJcbiAgICAgICAgICAgICAgICBcdHZhbHVlPSB7dGhpcy5wcm9wcy5maWx0ZXJUZXh0fVxyXG4gICAgICAgICAgICAgICAgXHRvbkNoYW5nZT0ge3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9IFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICk7XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0cmVuZGVyKCl7XHJcblx0XHRsZXQgc2VjdGlvbnMgPSBbXTtcclxuXHRcdGxldCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xyXG5cdFx0ZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKHByb2R1Y3Qpe1xyXG5cdFx0XHRpZiAocHJvZHVjdC5uYW1lLmluZGV4T2YodGhpcy5wcm9wcy5maWx0ZXJUZXh0KSA9PT0gLTEpIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdFx0c2VjdGlvbnMucHVzaCg8U2VjdGlvbiBrZXk9e3Byb2R1Y3QubmFtZX0gZGF0YT17cHJvZHVjdH0gLz4pO1xyXG5cdFx0fS5iaW5kKHRoaXMpKVxyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8ZGl2PntzZWN0aW9uc308L2Rpdj5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBTZWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRyZW5kZXIoKXtcclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHQ8cD57dGhpcy5wcm9wcy5kYXRhLm5hbWV9ID0ge3RoaXMucHJvcHMuZGF0YS5wcmljZX0gPC9wPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fVxyXG59IiwiLypcclxuKlx0QXV0aG9yOiBKZWFuLVBpZXJyZSBTaWVyZW5zXHJcbipcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4qL1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBTZWFyY2hhYmxlVGFibGUgZnJvbSAnLi9TZWFyY2hhYmxlVGFibGUnO1xyXG5pbXBvcnQge2RhdGF9IGZyb20gJy4vZGF0YSc7XHJcbmltcG9ydCBIZWxsb01lc3NhZ2UgZnJvbSAnLi9IZWxsb01lc3NhZ2UnO1xyXG5cclxuLy8gRmlsdGVyYWJsZSBDaGVhdFNoZWV0IENvbXBvbmVudFxyXG5SZWFjdERPTS5yZW5kZXIoIDxTZWFyY2hhYmxlVGFibGUgZGF0YT17ZGF0YX0vPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaGFibGVUYWJsZScpICk7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoPEhlbGxvTWVzc2FnZSBuYW1lPVwiSGVsbG8sTXJpbmFsIE1vbmRhbCwgd2VsY29tZSB0byBDeWJhZ2UuXCIgLz4sICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVsbG8nKSApOyIsImV4cG9ydCBjb25zdCBkYXRhID0gW1xyXG4gIHtjYXRlZ29yeTogXCJTcG9ydGluZyBHb29kc1wiLCBwcmljZTogXCIkNDkuOTlcIiwgc3RvY2tlZDogdHJ1ZSwgbmFtZTogXCJGb290YmFsbFwifSxcclxuICB7Y2F0ZWdvcnk6IFwiU3BvcnRpbmcgR29vZHNcIiwgcHJpY2U6IFwiJDkuOTlcIiwgc3RvY2tlZDogdHJ1ZSwgbmFtZTogXCJCYXNlYmFsbFwifSxcclxuICB7Y2F0ZWdvcnk6IFwiU3BvcnRpbmcgR29vZHNcIiwgcHJpY2U6IFwiJDI5Ljk5XCIsIHN0b2NrZWQ6IGZhbHNlLCBuYW1lOiBcIkJhc2tldGJhbGxcIn0sXHJcbiAge2NhdGVnb3J5OiBcIkVsZWN0cm9uaWNzXCIsIHByaWNlOiBcIiQ5OS45OVwiLCBzdG9ja2VkOiB0cnVlLCBuYW1lOiBcImlQb2QgVG91Y2hcIn0sXHJcbiAge2NhdGVnb3J5OiBcIkVsZWN0cm9uaWNzXCIsIHByaWNlOiBcIiQzOTkuOTlcIiwgc3RvY2tlZDogZmFsc2UsIG5hbWU6IFwiaVBob25lIDVcIn0sXHJcbiAge2NhdGVnb3J5OiBcIkVsZWN0cm9uaWNzXCIsIHByaWNlOiBcIiQxOTkuOTlcIiwgc3RvY2tlZDogdHJ1ZSwgbmFtZTogXCJOZXh1cyA3XCJ9XHJcbl07Il19
