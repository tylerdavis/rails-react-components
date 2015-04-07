var cx = require('classnames');
var React = require('react');

class Input extends React.Component {

  label () {
    return (this.props.label) ? <label for={this.props.name}>{this.props.label}</label> : null;
  }

  render () {
    var classes = cx(this.props.className, 'control-group');

    return (
      <div className={classes}>
        {this.label()}
        <div className="controls">
          <input {...this.props} className="form-control" />
        </div>
      </div>
    )
  }
}

Input.propTypes = {
  name: React.PropTypes.string
};

module.exports = Input;