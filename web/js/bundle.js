(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *	Author: Mrinal Mondal
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *	===========================================================================
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

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
        _react2.default.createElement(
          'h2',
          null,
          'Hello ',
          this.props.name
        )
      );
    }
  }]);

  return HelloMessage;
}(_react2.default.Component);

exports.default = HelloMessage;

},{"react":"react"}],2:[function(require,module,exports){
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *	Author: Mrinal Mondal
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

},{"react":"react"}],3:[function(require,module,exports){
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
                                                                                                                                                       *	Author: Mrinal Mondal
                                                                                                                                                       *	===========================================================================
                                                                                                                                                       */

_reactDom2.default.render(_react2.default.createElement(_HelloMessage2.default, { name: 'Hi,Mrinal Mondal, welcome to Cybage.' }), document.getElementById('hello'));

/*
const element = <h1>Rendaring Elements</h1>;
ReactDOM.render(
  element,
  document.getElementById('root')
);
*/

/*
ReactDOM.render(
<h1>Rendaring elemnets 2 </h1>,
document.getElementById('root3')
);
*/

/*
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}   {' Great apps'}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root3')
  );
}

setInterval(tick, 1000);


class Welcome extends React.Component {

 render() {
     return <h1>Hello, {this.props.name}</h1> ;
 }

}

ReactDOM.render(
 <Welcome name="mrinal mondal" />,
 document.getElementById("name")
);
*/

},{"./HelloMessage":1,"./SearchableTable":2,"./data":4,"react":"react","react-dom":"react-dom"}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
*	Author: Mrinal Mondal
*	===========================================================================
*/
var data = exports.data = [{ category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" }, { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" }, { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" }, { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" }, { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" }, { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }];

},{}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXEhlbGxvTWVzc2FnZS5qcyIsImFwcFxcU2VhcmNoYWJsZVRhYmxlLmpzIiwiYXBwXFxhcHAuanMiLCJhcHBcXGRhdGEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQ0tBOzs7Ozs7Ozs7OytlQUxBOzs7OztJQU9zQixZOzs7Ozs7Ozs7Ozs2QkFDWDtBQUNQLGFBQU87QUFBQTtBQUFBO0FBQUs7QUFBQTtBQUFBO0FBQUE7QUFBVyxlQUFLLEtBQUwsQ0FBVztBQUF0QjtBQUFMLE9BQVA7QUFDRDs7OztFQUh3QyxnQkFBTSxTOztrQkFBM0IsWTs7Ozs7Ozs7Ozs7QUNEdEI7Ozs7Ozs7Ozs7K2VBTkE7Ozs7OztJQVFxQixlOzs7QUFDcEIsNEJBQWM7QUFBQTs7QUFFYjtBQUZhOztBQUdQLFFBQUssS0FBTCxHQUFhLEVBQUMsWUFBWSxFQUFiLEVBQWI7QUFITztBQUlWOzs7O2tDQUNlLFUsRUFBWTtBQUMzQjtBQUNBO0FBQ0csUUFBSyxRQUFMLENBQWMsRUFBQyxZQUFZLFVBQWIsRUFBZDtBQUNIOzs7MkJBQ0k7QUFDUCxVQUNDO0FBQUE7QUFBQTtBQUNDLGtDQUFDLFNBQUQ7QUFDQyxpQkFBWSxLQUFLLEtBQUwsQ0FBVyxVQUR4QjtBQUVnQixrQkFBYSxLQUFLLGVBQUwsQ0FBcUIsSUFBckIsQ0FBMEIsSUFBMUI7QUFGN0IsTUFERDtBQUtDLGtDQUFDLEtBQUQ7QUFDQyxXQUFNLEtBQUssS0FBTCxDQUFXLElBRGxCO0FBRUMsaUJBQVksS0FBSyxLQUFMLENBQVc7QUFGeEI7QUFMRCxJQUREO0FBWUE7Ozs7RUF4QjJDLGdCQUFNLFM7O2tCQUE5QixlOztJQTJCZixTOzs7Ozs7Ozs7OztpQ0FDVTtBQUNkO0FBQ00sUUFBSyxLQUFMLENBQVcsV0FBWDtBQUNDO0FBQ0csUUFBSyxJQUFMLENBQVUsZUFBVixDQUEwQixLQUY5QjtBQUlIOzs7MkJBQ0k7QUFDUCxVQUNVO0FBQUE7QUFBQTtBQUNJO0FBQ0MsV0FBSyxNQUROO0FBRUMsa0JBQVksMkJBRmI7QUFHQyxVQUFJLGlCQUhMO0FBSUMsWUFBUSxLQUFLLEtBQUwsQ0FBVyxVQUpwQjtBQUtDLGVBQVcsS0FBSyxZQUFMLENBQWtCLElBQWxCLENBQXVCLElBQXZCO0FBTFo7QUFESixJQURWO0FBV0E7Ozs7RUFwQnNCLGdCQUFNLFM7O0lBdUJ4QixLOzs7Ozs7Ozs7OzsyQkFDRztBQUNQLE9BQUksV0FBVyxFQUFmO0FBQ0EsT0FBSSxPQUFPLEtBQUssS0FBTCxDQUFXLElBQXRCO0FBQ0EsUUFBSyxPQUFMLENBQWEsVUFBUyxPQUFULEVBQWlCO0FBQzdCLFFBQUksUUFBUSxJQUFSLENBQWEsT0FBYixDQUFxQixLQUFLLEtBQUwsQ0FBVyxVQUFoQyxNQUFnRCxDQUFDLENBQXJELEVBQXdEO0FBQ3ZEO0FBQ0E7QUFDRCxhQUFTLElBQVQsQ0FBYyw4QkFBQyxPQUFELElBQVMsS0FBSyxRQUFRLElBQXRCLEVBQTRCLE1BQU0sT0FBbEMsR0FBZDtBQUNBLElBTFksQ0FLWCxJQUxXLENBS04sSUFMTSxDQUFiO0FBTUEsVUFDQztBQUFBO0FBQUE7QUFBTTtBQUFOLElBREQ7QUFHQTs7OztFQWJrQixnQkFBTSxTOztJQWdCcEIsTzs7Ozs7Ozs7Ozs7MkJBQ0c7QUFDUCxVQUNDO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUFJLFVBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsSUFBcEI7QUFBQTtBQUE2QixVQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLEtBQTdDO0FBQUE7QUFBQTtBQURELElBREQ7QUFLQTs7OztFQVBvQixnQkFBTSxTOzs7OztBQ3JFNUI7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBO0FBQ0EsbUJBQVMsTUFBVCxDQUFpQiwyREFBaUIsZ0JBQWpCLEdBQWpCLEVBQWlELFNBQVMsY0FBVCxDQUF3QixpQkFBeEIsQ0FBakQsRSxDQVpBOzs7OztBQWNBLG1CQUFTLE1BQVQsQ0FBZ0Isd0RBQWMsTUFBSyxzQ0FBbkIsR0FBaEIsRUFBK0UsU0FBUyxjQUFULENBQXdCLE9BQXhCLENBQS9FOztBQWtCQTs7Ozs7Ozs7QUFRQTs7Ozs7OztBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0NBOzs7O0FBSU8sSUFBTSxzQkFBTyxDQUNsQixFQUFDLFVBQVUsZ0JBQVgsRUFBNkIsT0FBTyxRQUFwQyxFQUE4QyxTQUFTLElBQXZELEVBQTZELE1BQU0sVUFBbkUsRUFEa0IsRUFFbEIsRUFBQyxVQUFVLGdCQUFYLEVBQTZCLE9BQU8sT0FBcEMsRUFBNkMsU0FBUyxJQUF0RCxFQUE0RCxNQUFNLFVBQWxFLEVBRmtCLEVBR2xCLEVBQUMsVUFBVSxnQkFBWCxFQUE2QixPQUFPLFFBQXBDLEVBQThDLFNBQVMsS0FBdkQsRUFBOEQsTUFBTSxZQUFwRSxFQUhrQixFQUlsQixFQUFDLFVBQVUsYUFBWCxFQUEwQixPQUFPLFFBQWpDLEVBQTJDLFNBQVMsSUFBcEQsRUFBMEQsTUFBTSxZQUFoRSxFQUprQixFQUtsQixFQUFDLFVBQVUsYUFBWCxFQUEwQixPQUFPLFNBQWpDLEVBQTRDLFNBQVMsS0FBckQsRUFBNEQsTUFBTSxVQUFsRSxFQUxrQixFQU1sQixFQUFDLFVBQVUsYUFBWCxFQUEwQixPQUFPLFNBQWpDLEVBQTRDLFNBQVMsSUFBckQsRUFBMkQsTUFBTSxTQUFqRSxFQU5rQixDQUFiIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qXHJcbipcdEF1dGhvcjogTXJpbmFsIE1vbmRhbFxyXG4qXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKi9cclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAgY2xhc3MgSGVsbG9NZXNzYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gPGRpdj48aDI+SGVsbG8ge3RoaXMucHJvcHMubmFtZX08L2gyPjwvZGl2PjtcclxuICB9XHJcbn0iLCIvKlxyXG4qXHRTZWFyY2hhYmxlIFRhYmxlXHJcbipcdEF1dGhvcjogTXJpbmFsIE1vbmRhbFxyXG4qXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKi9cclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hhYmxlVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdC8vIEluaXRpYWwgc3RhdGUgb2YgdGhlIGNvbXBvbmVudFxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7ZmlsdGVyVGV4dDogJyd9XHJcbiAgICB9XHJcbiAgICBoYW5kbGVVc2VySW5wdXQoZmlsdGVyVGV4dCkge1xyXG4gICAgXHQvLyBXaGVuIHRoZXJlJ3MgYSBjaGFuZ2UgaW4gdGhlIHN0YXRlLCB0aGUgY29tcG9uZW50IGFuZCBhbGwgaXRzIFxyXG4gICAgXHQvLyBzdWItY29tcG9uZW50cyBnZXQgdXBkYXRlZC5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtmaWx0ZXJUZXh0OiBmaWx0ZXJUZXh0fSk7XHJcbiAgICB9XHJcblx0cmVuZGVyKCl7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdDxTZWFyY2hCYXIgXHJcblx0XHRcdFx0XHRmaWx0ZXJUZXh0PXt0aGlzLnN0YXRlLmZpbHRlclRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Vc2VySW5wdXQ9e3RoaXMuaGFuZGxlVXNlcklucHV0LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cdFx0XHRcdDxUYWJsZSBcclxuXHRcdFx0XHRcdGRhdGE9e3RoaXMucHJvcHMuZGF0YX0gXHJcblx0XHRcdFx0XHRmaWx0ZXJUZXh0PXt0aGlzLnN0YXRlLmZpbHRlclRleHR9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgU2VhcmNoQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRoYW5kbGVDaGFuZ2UoKSB7XHJcblx0XHQvLyBwYXNzaW5nIGZpbHRlciBkYXRhIHVwIGJ5IHVzaW5nIGEgY2FsbGJhY2tcclxuICAgICAgICB0aGlzLnByb3BzLm9uVXNlcklucHV0KFxyXG4gICAgICAgIFx0Ly8gcmVmIGlzIGxpa2UgdGhlIGlkXHJcbiAgICAgICAgICAgIHRoaXMucmVmcy5maWx0ZXJUZXh0SW5wdXQudmFsdWVcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cdHJlbmRlcigpe1xyXG5cdFx0cmV0dXJuIChcclxuICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICBcdHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICBcdHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBvbmUga2V5d29yZC4uLlwiIFxyXG4gICAgICAgICAgICAgICAgXHRyZWY9XCJmaWx0ZXJUZXh0SW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgXHR2YWx1ZT0ge3RoaXMucHJvcHMuZmlsdGVyVGV4dH1cclxuICAgICAgICAgICAgICAgIFx0b25DaGFuZ2U9IHt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfSBcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICApO1xyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdHJlbmRlcigpe1xyXG5cdFx0bGV0IHNlY3Rpb25zID0gW107XHJcblx0XHRsZXQgZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcclxuXHRcdGRhdGEuZm9yRWFjaChmdW5jdGlvbihwcm9kdWN0KXtcclxuXHRcdFx0aWYgKHByb2R1Y3QubmFtZS5pbmRleE9mKHRoaXMucHJvcHMuZmlsdGVyVGV4dCkgPT09IC0xKSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHRcdHNlY3Rpb25zLnB1c2goPFNlY3Rpb24ga2V5PXtwcm9kdWN0Lm5hbWV9IGRhdGE9e3Byb2R1Y3R9IC8+KTtcclxuXHRcdH0uYmluZCh0aGlzKSlcclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdj57c2VjdGlvbnN9PC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgU2VjdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0cmVuZGVyKCl7XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdFx0PHA+e3RoaXMucHJvcHMuZGF0YS5uYW1lfSA9IHt0aGlzLnByb3BzLmRhdGEucHJpY2V9IDwvcD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxufSIsIi8qXHJcbipcdEF1dGhvcjogTXJpbmFsIE1vbmRhbFxyXG4qXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKi9cclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgU2VhcmNoYWJsZVRhYmxlIGZyb20gJy4vU2VhcmNoYWJsZVRhYmxlJztcclxuaW1wb3J0IHtkYXRhfSBmcm9tICcuL2RhdGEnO1xyXG5pbXBvcnQgSGVsbG9NZXNzYWdlIGZyb20gJy4vSGVsbG9NZXNzYWdlJztcclxuXHJcbi8vIEZpbHRlcmFibGUgQ2hlYXRTaGVldCBDb21wb25lbnRcclxuUmVhY3RET00ucmVuZGVyKCA8U2VhcmNoYWJsZVRhYmxlIGRhdGE9e2RhdGF9Lz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hhYmxlVGFibGUnKSApO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKDxIZWxsb01lc3NhZ2UgbmFtZT1cIkhpLE1yaW5hbCBNb25kYWwsIHdlbGNvbWUgdG8gQ3liYWdlLlwiIC8+LCAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlbGxvJykgKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKlxyXG5jb25zdCBlbGVtZW50ID0gPGgxPlJlbmRhcmluZyBFbGVtZW50czwvaDE+O1xyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgZWxlbWVudCxcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXHJcbik7XHJcbiovXHJcblxyXG4vKlxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbjxoMT5SZW5kYXJpbmcgZWxlbW5ldHMgMiA8L2gxPixcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QzJylcclxuKTtcclxuKi9cclxuXHJcbi8qXHJcbmZ1bmN0aW9uIHRpY2soKSB7XHJcbiAgY29uc3QgZWxlbWVudCA9IChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT5IZWxsbywgd29ybGQhPC9oMT5cclxuICAgICAgPGgyPkl0IGlzIHtuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpfSAgIHsnIEdyZWF0IGFwcHMnfS48L2gyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuICBSZWFjdERPTS5yZW5kZXIoXHJcbiAgICBlbGVtZW50LFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QzJylcclxuICApO1xyXG59XHJcblxyXG5zZXRJbnRlcnZhbCh0aWNrLCAxMDAwKTtcclxuXHJcblxyXG5jbGFzcyBXZWxjb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiByZW5kZXIoKSB7XHJcbiAgICAgcmV0dXJuIDxoMT5IZWxsbywge3RoaXMucHJvcHMubmFtZX08L2gxPiA7XHJcbiB9XHJcblxyXG59XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiA8V2VsY29tZSBuYW1lPVwibXJpbmFsIG1vbmRhbFwiIC8+LFxyXG4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lXCIpXHJcbik7XHJcbiovXHJcblxyXG4iLCIvKlxyXG4qXHRBdXRob3I6IE1yaW5hbCBNb25kYWxcclxuKlx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiovXHJcbmV4cG9ydCBjb25zdCBkYXRhID0gW1xyXG4gIHtjYXRlZ29yeTogXCJTcG9ydGluZyBHb29kc1wiLCBwcmljZTogXCIkNDkuOTlcIiwgc3RvY2tlZDogdHJ1ZSwgbmFtZTogXCJGb290YmFsbFwifSxcclxuICB7Y2F0ZWdvcnk6IFwiU3BvcnRpbmcgR29vZHNcIiwgcHJpY2U6IFwiJDkuOTlcIiwgc3RvY2tlZDogdHJ1ZSwgbmFtZTogXCJCYXNlYmFsbFwifSxcclxuICB7Y2F0ZWdvcnk6IFwiU3BvcnRpbmcgR29vZHNcIiwgcHJpY2U6IFwiJDI5Ljk5XCIsIHN0b2NrZWQ6IGZhbHNlLCBuYW1lOiBcIkJhc2tldGJhbGxcIn0sXHJcbiAge2NhdGVnb3J5OiBcIkVsZWN0cm9uaWNzXCIsIHByaWNlOiBcIiQ5OS45OVwiLCBzdG9ja2VkOiB0cnVlLCBuYW1lOiBcImlQb2QgVG91Y2hcIn0sXHJcbiAge2NhdGVnb3J5OiBcIkVsZWN0cm9uaWNzXCIsIHByaWNlOiBcIiQzOTkuOTlcIiwgc3RvY2tlZDogZmFsc2UsIG5hbWU6IFwiaVBob25lIDVcIn0sXHJcbiAge2NhdGVnb3J5OiBcIkVsZWN0cm9uaWNzXCIsIHByaWNlOiBcIiQxOTkuOTlcIiwgc3RvY2tlZDogdHJ1ZSwgbmFtZTogXCJOZXh1cyA3XCJ9XHJcbl07Il19
