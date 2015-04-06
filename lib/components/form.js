var React = require('react');

/**
 * This is a railsy-ish form base.  It's primary purpose is to port the rails form helper to jsx.
 */
var ____Class0=React.Component;for(var ____Class0____Key in ____Class0){if(____Class0.hasOwnProperty(____Class0____Key)){Form[____Class0____Key]=____Class0[____Class0____Key];}}var ____SuperProtoOf____Class0=____Class0===null?null:____Class0.prototype;Form.prototype=Object.create(____SuperProtoOf____Class0);Form.prototype.constructor=Form;Form.__superConstructor__=____Class0;function Form(){"use strict";if(____Class0!==null){____Class0.apply(this,arguments);}}

  /**
   * Pulls the csrf_token from the head of the document.
   * @returns {string}
   */
  Object.defineProperty(Form,"authenticityToken",{writable:true,configurable:true,value:function( ) {"use strict";
    var token = null;
    var tags = document.getElementsByTagName('meta');

    for (var i = 0; i < tags.length; i++) {
      if (tags[i].name === 'csrf-token') {
        token = tags[i].content;
        break;
      }
    }
    return token;
  }});

  /**
   * Filters PATCH/PUT for form method, returning `post` where necessary
   * @returns {string}
   */
  Object.defineProperty(Form.prototype,"method",{writable:true,configurable:true,value:function( ) {"use strict";
    var method = null;

    if (this.props.method.toLowerCase() === 'put' || this.props.method.toLowerCase() === 'patch') {
      method = 'POST'
    } else {
      method = this.props.method;
    }
    return method.toLowerCase();
  }});

  /**
   * Find all the inputs in the form and append the `for` value to their names.
   * We need to be careful when dealing with nested attributes
   * ex:
   * for="Order"
   * before: <input name="text"/>
   * after: <input name="order[text]"/>
   *
   * before <input name="text[0]"/>
   * after: <input name="order[text][0]"/>
   */
  Object.defineProperty(Form.prototype,"updateInputNames",{writable:true,configurable:true,value:function( ) {"use strict";
    if (!this.props.for) return;
    var el = React.findDOMNode(this);
    this.appendFor(el.getElementsByTagName('input'));
    this.appendFor(el.getElementsByTagName('select'));
    this.appendFor(el.getElementsByTagName('textarea'));
  }});

  Object.defineProperty(Form.prototype,"appendFor",{writable:true,configurable:true,value:function(inputs) {"use strict";
    for (var i = 0; i < inputs.length; i++) {
      if (['utf8', '_method', 'authenticity_token'].indexOf(inputs[i].name) < 0 && inputs[i].type !== 'submit') {
        inputs[i].name = this.props.for.toLowerCase() + '[' + inputs[i].name + ']';
      }
    }
  }});

  Object.defineProperty(Form.prototype,"componentDidMount",{writable:true,configurable:true,value:function( ) {"use strict";
    this.updateInputNames();
  }});

  Object.defineProperty(Form.prototype,"render",{writable:true,configurable:true,value:function( ) {"use strict";
    return (
      React.createElement("form", {action: this.props.action, method: this.method(), acceptCharset: "UTF-8"}, 
        React.createElement("input", {name: "utf8", type: "hidden", value: "✓"}), 
        React.createElement("input", {type: "hidden", name: "_method", value: this.props.method}), 
        React.createElement("input", {type: "hidden", name: "authenticity_token", value: Form.authenticityToken()}), 
        this.props.children
      )
    )
  }});


Form.propTypes = {
  action: React.PropTypes.string.isRequired,
  method: React.PropTypes.oneOf(['post', 'POST', 'patch', 'PATCH', 'put', 'PUT']),
  for: React.PropTypes.string.isRequired
};

module.exports = Form;