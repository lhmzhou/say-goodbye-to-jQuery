"use strict";

var DOMPropertyOperations = _dereq_("./DOMPropertyOperations");
var ReactComponent = _dereq_("./ReactComponent");
var ReactCompositeComponent = _dereq_("./ReactCompositeComponent");
var ReactElement = _dereq_("./ReactElement");
var ReactElementValidator = _dereq_("./ReactElementValidator");
var ReactDOM = _dereq_("./ReactDOM");
var ReactDOMComponent = _dereq_("./ReactDOMComponent");

(function(window, undefined) {

  propTypes: {
  x : React.PropTypes.number.isRequired,
  y : React.PropTypes.number.isRequired,
  backgroundColor : React.PropTypes.string,
  className : React.PropTypes.string
  },

  getDefaultProps() {
    return {
      x : 0,
      y : 0,
      className : ""
    };
  },

	create: function(obj) {
		return new RecordSet(this, obj);
	},

	get: function(selector) {
		return new RecordSet(this, Selector.find(this.data, selector));
	},

  ReactDOM.querySelectorAll('selector');

});
