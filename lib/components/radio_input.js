var React = require('react');

var ____Class2=React.Component;for(var ____Class2____Key in ____Class2){if(____Class2.hasOwnProperty(____Class2____Key)){RadioInput[____Class2____Key]=____Class2[____Class2____Key];}}var ____SuperProtoOf____Class2=____Class2===null?null:____Class2.prototype;RadioInput.prototype=Object.create(____SuperProtoOf____Class2);RadioInput.prototype.constructor=RadioInput;RadioInput.__superConstructor__=____Class2;function RadioInput(){"use strict";if(____Class2!==null){____Class2.apply(this,arguments);}}

  Object.defineProperty(RadioInput.prototype,"render",{writable:true,configurable:true,value:function( ) {"use strict";
    return (
      React.createElement("div", {className: "radio"}, 
        React.createElement("label", null, 
          React.createElement("input", {type: "radio", 
            name: this.props.name, 
            value: this.props.value, 
            defaultChecked: this.props.defaultChecked, 
            onChange: this.props.onChange}), 
          this.props.children
        )
      )
    );
  }});


RadioInput.propTypes = {
  defaultChecked: React.PropTypes.bool,
  name: React.PropTypes.string,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func
};

module.exports = RadioInput;