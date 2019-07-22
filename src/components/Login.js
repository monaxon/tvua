import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import useLoginStates from "states/LoginStates";
import TextInput from "components/TextInput";
import Logo from "components/Logo";
import "styles/Login.css";
import "styles/UIKit.css";

function mapStateToProps(state) {
  return {
    UsernameValue: state.UsernameValue,
    PasswordValue: state.PasswordValue
  };
}

function Login(props) {
  const [UsernameColor, PasswordColor, changeState] = useLoginStates();

  function handleLoginSubmit(e) {
    e.preventDefault();
    fetch("http://192.168.1.6:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        Username: props.UsernameValue.trim(),
        Password: props.PasswordValue
      })
    })
      .then(result => {
        return result.json();
      })
      .then(data => {
        alert(data.fullname);
      });
    // alert("نام: " + props.UsernameValue + "\nرمز: " + props.PasswordValue);
  }

  return (
    <div className="Login">
      <Logo Size="30%" Color="#00557c" />
      <p className="LoginTitle">سیستم جامع ثبت غیبت اساتید</p>
      <form onSubmit={e => handleLoginSubmit(e)}>
        <TextInput
          ReducerType="USERNAME-VALUE"
          Color={UsernameColor}
          Icon="user"
          Type="text"
          ID="username"
          Placeholder="نام کاربری..."
          Value={props.UsernameValue}
        />
        <TextInput
          ReducerType="PASSWORD-VALUE"
          Color={PasswordColor}
          Icon="key"
          Type="password"
          ID="password"
          Placeholder="رمز عبور..."
          Value={props.PasswordValue}
        />
        <button type="submit" className="Button-With-Title LoginButton">
          <FontAwesomeIcon
            className="LoginIcon"
            icon="sign-in-alt"
            size="sm"
            color="#eaeaea"
          />
          ورود
        </button>
      </form>
    </div>
  );
}

export default connect(mapStateToProps)(Login);
