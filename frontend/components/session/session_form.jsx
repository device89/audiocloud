import React from 'react';
import { timingSafeEqual } from 'crypto';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formType = this.props.formType;
    this.otherForm = this.props.otherForm;
    this.otherFormNice = this.props.otherFormNice;
    this.setModalStatus = this.props.setModalStatus;
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.setModalStatus(false);
    this.props.processForm(user);
    this.props.history.push({
      pathname: "/explore",
    });
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="modal">
        <div className="modal-content">
          <h3>{this.formType} or <button onClick={() => this.setModalStatus(this.otherForm)}>{this.otherFormNice}</button> instead</h3>
          <button onClick={() => this.props.setModalStatus(false)}>[Close Button]</button>
          <form onSubmit={this.handleSubmit} className="login-form-box">
            {this.renderErrors()}
            <div className="login-form">
              <br/>
              <label>Username:
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input"
                />
              </label>
              <br/>
              <label>Password:
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                />
              </label>
              <br/>
              <input className="session-submit" type="submit" value={this.props.formType} />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SessionForm;