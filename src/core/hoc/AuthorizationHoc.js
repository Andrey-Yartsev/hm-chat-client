import React from 'react';
import login from '../../actions/login';
import logout from '../../actions/logout';

export default AuthorizationView =>
  class extends React.Component {
    state = {
      login: '',
      password: ''
    };

    loginChanged(login) {
      this.setState({
        login: login
      });
    }

    passwordChanged(password) {
      this.setState({
        password: password
      });
    }

    login() {
      login(null, (error) => {
        this.setState({
          error: error
        });
      })(
        this.context.store.dispatch,
        {
          login: this.state.login,
          password: this.state.password
        }
      );
    }

    logout() {
      logout(this.context.store.dispatch);
    }

    render() {
      return <AuthorizationView
        {...this.props}
        state={this.state}
        login={this.login.bind(this)}
        logout={this.logout.bind(this)}
        loginChanged={this.loginChanged.bind(this)}
        passwordChanged={this.passwordChanged.bind(this)}
      />
    }
  };
