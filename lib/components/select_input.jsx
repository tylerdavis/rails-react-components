var React = require('react');
var cx = require('classnames');

class SelectInput extends React.Component {

  label () {
    return (this.props.label) ? <label for={this.props.name}>{this.props.label}</label> : null;
  }

  render () {
    var classes = cx(this.props.className, 'form-control');

    return (
      <div className="form-group">
        {this.label()}
        <select {...this.props} className={classes}>
          {this.props.options.map(function (option) {
            return <option value={option.value || option}>{option.name || option}</option>
          }.bind(this))}
        </select>
      </div>
    )
  }
}

module.exports = SelectInput;