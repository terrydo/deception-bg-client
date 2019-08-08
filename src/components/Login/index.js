import React from 'react';
import { connect } from 'react-redux';
import { setToken } from './actions';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.inputUsernameRef = React.createRef();
    this.inputPasswordRef = React.createRef();
    this.addSocketEvents();
  }
  addSocketEvents = () => {
    this.props.socket.on('sv_registerCb', data => {
      if (data && data.success) {
        alert(data.success);
      }
      else if (data.error) {
        alert(data.error);
      }
    });

    this.props.socket.on('sv_loginCb', data => {
      console.log(data);
      if (data && data.success) {
        this.props.doSetToken(data.token);
      }
    });
  }
  getFormData(){
    return {
      username: this.inputUsernameRef.current.value,
      password: this.inputPasswordRef.current.value,
    }
  }
  doTheLogin = () => {
    this.props.socket.emit('login', this.getFormData());
  };
  doTheRegister = () => {
    this.props.socket.emit('register', this.getFormData());
  };
  render(){
    return (
      <form className="form frame">
        <div className="form__group">
          <input
            type="text"
            placeholder="Username"
            name="name"
            className="form__input"
            ref={this.inputUsernameRef}
          />
        </div>
        <div className="form__group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="form__input"
            ref={this.inputPasswordRef}
          />
        </div>
        <div className="d-flex justify-content-between">
          <button
            type="button"
            className="btn btn--type-1"
            onClick={this.doTheLogin}
          >
            Submit
          </button>
          <button
            type="button"
            onClick={this.doTheRegister}
            className="btn btn--type-1"
          >
            Register
          </button>
        </div>
      </form>
    )
  }
};

const mapStateToProps = state => ({
  socket: state.socket
});

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    doSetToken: payload => {
      console.log('payload: ' + payload);
      dispatch(setToken(payload));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm)