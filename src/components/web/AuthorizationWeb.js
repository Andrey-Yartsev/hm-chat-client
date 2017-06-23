import React from 'react';

import '../../static/css/auth.css';

class AuthorizationWeb extends React.Component {

  loginChanged(event) {
    this.props.loginChanged(event.target.value);
  }

  passwordChanged(event) {
    this.props.passwordChanged(event.target.value);
  }

  login(event) {
    event.preventDefault();
    this.props.login();
  }

  logout(event) {
    event.preventDefault();
    this.props.logout();
  }

  render() {
    if (this.props.auth.token) {
      return <div className="auth">
        <span className="login icon">
          <i>&nbsp;</i>
          <span>{this.props.auth.login}</span>
        </span>
        <a href="#" className="logout icon"
           onClick={this.logout.bind(this)}>
          <i>&nbsp;</i>
          <span>Выйти</span>
        </a>
      </div>;
    }
    return <div className="loginForm">
      <div className="title">
        <span className="logo">&nbsp;</span>
        <span className="operator">.чат</span>
      </div>
      {
        this.props.state.error ?
          this.props.state.error : ''
      }
      <form onSubmit={this.login.bind(this)} action="/client">
        <p>
          <input type="text" name="login"
                 onChange={this.loginChanged.bind(this)}
                 value={this.props.state.login}
          />
        </p>
        <p><input type="password" name="password"
                  onChange={this.passwordChanged.bind(this)}
                  value={this.props.state.password}
        /></p>
        <button type="submit" className="button login">Войти</button>
      </form>

      <form action="https://openidtest.lad24.ru/openid/e1cib/oid2op" method="post">
        <input type="hidden" name="openid.mode" value="checkid_setup" />
        <input type="hidden" name="openid.return_to" value="http://localhost:3001/" />
        <button type="submit" className="openid button blue">OpenID</button>
      </form>

    </div>;
  }
}
export default AuthorizationWeb;