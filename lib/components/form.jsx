var React = require('react');

/**
 * This is a railsy-ish form base.  It's primary purpose is to port the rails form helper to jsx.
 */
class Form extends React.Component {

  /**
   * Pulls the csrf_token from the head of the document.
   * @returns {string}
   */
  static authenticityToken () {
    var token = null;
    var tags = document.getElementsByTagName('meta');

    for (var i = 0; i < tags.length; i++) {
      if (tags[i].name === 'csrf-token') {
        token = tags[i].content;
        break;
      }
    }
    return token;
  }

  /**
   * Filters PATCH/PUT for form method, returning `post` where necessary
   * @returns {string}
   */
  method () {
    var method = null;

    if (this.props.method.toLowerCase() === 'put' || this.props.method.toLowerCase() === 'patch') {
      method = 'POST'
    } else {
      method = this.props.method;
    }
    return method.toLowerCase();
  }

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
  updateInputNames () {
    if (!this.props.for) return;
    var el = React.findDOMNode(this);
    this.appendFor(el.getElementsByTagName('input'));
    this.appendFor(el.getElementsByTagName('select'));
    this.appendFor(el.getElementsByTagName('textarea'));
  }

  appendFor (inputs) {
    for (var i = 0; i < inputs.length; i++) {
      if (['utf8', '_method', 'authenticity_token'].indexOf(inputs[i].name) < 0 && inputs[i].type !== 'submit') {
        inputs[i].name = this.props.for.toLowerCase() + '[' + inputs[i].name + ']';
      }
    }
  }

  componentDidMount () {
    this.updateInputNames();
  }

  render () {
    return (
      <form action={this.props.action} method={this.method()} acceptCharset="UTF-8">
        <input name="utf8" type="hidden" value="&#x2713;" />
        <input type="hidden" name="_method" value={this.props.method} />
        <input type="hidden" name="authenticity_token" value={Form.authenticityToken()} />
        {this.props.children}
      </form>
    )
  }
}

Form.propTypes = {
  action: React.PropTypes.string.isRequired,
  method: React.PropTypes.oneOf(['post', 'POST', 'patch', 'PATCH', 'put', 'PUT']),
  for: React.PropTypes.string.isRequired
};

module.exports = Form;