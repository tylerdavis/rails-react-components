var cx = require('classnames');
var React = require('react');

var ____Class1=React.Component;for(var ____Class1____Key in ____Class1){if(____Class1.hasOwnProperty(____Class1____Key)){Input[____Class1____Key]=____Class1[____Class1____Key];}}var ____SuperProtoOf____Class1=____Class1===null?null:____Class1.prototype;Input.prototype=Object.create(____SuperProtoOf____Class1);Input.prototype.constructor=Input;Input.__superConstructor__=____Class1;function Input(){"use strict";if(____Class1!==null){____Class1.apply(this,arguments);}}

  Object.defineProperty(Input.prototype,"label",{writable:true,configurable:true,value:function( ) {"use strict";
    return (this.props.label) ? React.createElement("label", {for: this.props.name}, this.props.label) : null;
  }});

  Object.defineProperty(Input.prototype,"render",{writable:true,configurable:true,value:function( ) {"use strict";
    var classes = cx(this.props.className, 'control-group');

    return (
      React.createElement("div", {className: classes}, 
        this.label(), 
        React.createElement("div", {className: "controls"}, 
          React.createElement("input", React.__spread({},  this.props, {className: "form-control"}))
        )
      )
    )
  }});


Input.propTypes = {
  name: React.PropTypes.string
};

module.exports = Input;