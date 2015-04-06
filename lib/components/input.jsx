var cx = require('classnames');
var React = require('react');

class Input extends React.Component {

  label () {
    return (this.props.label) ? <label for={this.props.name}>{this.props.label}</label> : null;
  }

  render () {
    var classes = cx(this.props.className, 'form-group');

    return (
      <div className={classes}>
        {this.label()}
        <input {...this.props} className="form-control" />
      </div>
    )
  }
}

Input.propTypes = {
  name: React.PropTypes.string
};

module.exports = Input;