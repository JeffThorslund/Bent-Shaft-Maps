import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";

class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      picture: "",
      userId: "",
      isLoggedIn: false,
    };
  }

  responseFacebook = (response) => {
    console.log(response);
    this.setState({
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
      userID: response.userID,
      isLoggedIn: true,
    });
  };

  render() {
    const logInButton = (
      <FacebookLogin
        appId="2718766671696939"
        autoLoad={true}
        fields="name,email,picture"
        onClick={() => {
          console.log("Clicked");
        }}
        callback={this.responseFacebook}
      />
    );

    const dataDisplay = (
      <div>
        <h2>{this.state.name}</h2>
        <h3>{this.state.email}</h3>
        <h3>{this.state.userID}</h3>
        {<img src={`${this.state.picture}`} />}
      </div>
    );

    return (
      <div>
        <h1>Authentication</h1>
        {this.state.isLoggedIn ? dataDisplay : logInButton}
      </div>
    );
  }
}

export default LogIn;
