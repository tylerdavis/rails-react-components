var React = require('react');
var cx = require('classnames');

var ____Class3=React.Component;for(var ____Class3____Key in ____Class3){if(____Class3.hasOwnProperty(____Class3____Key)){SelectInput[____Class3____Key]=____Class3[____Class3____Key];}}var ____SuperProtoOf____Class3=____Class3===null?null:____Class3.prototype;SelectInput.prototype=Object.create(____SuperProtoOf____Class3);SelectInput.prototype.constructor=SelectInput;SelectInput.__superConstructor__=____Class3;function SelectInput(){"use strict";if(____Class3!==null){____Class3.apply(this,arguments);}}

  Object.defineProperty(SelectInput.prototype,"label",{writable:true,configurable:true,value:function( ) {"use strict";
    return (this.props.label) ? React.createElement("label", {for: this.props.name}, this.props.label) : null;
  }});

  Object.defineProperty(SelectInput.prototype,"render",{writable:true,configurable:true,value:function( ) {"use strict";
    var classes = cx(this.props.className, 'form-control');

    return (
      React.createElement("div", {className: "form-group"}, 
        this.label(), 
        React.createElement("select", React.__spread({},  this.props, {className: classes}), 
          this.props.options.map(function (option) {
            return React.createElement("option", {value: option.value || option}, option.name || option)
          }.bind(this))
        )
      )
    )
  }});


module.exports = SelectInput;