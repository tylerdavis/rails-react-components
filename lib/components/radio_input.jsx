var React = require('react');

class RadioInput extends React.Component {

  render () {
    return (
      <div className="radio">
        <label>
          <input type="radio"
            name={this.props.name}
            value={this.props.value}
            defaultChecked={this.props.defaultChecked}
            onChange={this.props.onChange} />
          {this.props.children}
        </label>
      </div>
    );
  }
}

RadioInput.propTypes = {
  defaultChecked: React.PropTypes.bool,
  name: React.PropTypes.string,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func
};

module.exports = RadioInput;