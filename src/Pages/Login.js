import React, { Component } from "react";
import swal from "sweetalert";
import { Button, TextField, Link, Typography, Container } from "@material-ui/core";
import { withRouter } from "../utils";
import Header from "../Header";
const axios = require("axios");

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isGoogleScriptLoaded: false,
    };
  }

  componentDidMount() {
    // Load the Google Identity Services library
    this.loadGoogleScript();
  }

  loadGoogleScript = () => {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    script.onload = this.onGoogleScriptLoad;
    document.body.appendChild(script);
  }

  onGoogleScriptLoad = () => {
    this.setState({ isGoogleScriptLoaded: true });
    this.initializeGoogleSignIn();
  }

  initializeGoogleSignIn = () => {
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: '480201724067-6k5cjhkqeg9gpk3aeomrq5vborb8kjqv.apps.googleusercontent.com',
        callback: this.handleCredentialResponse,
      });
      window.google.accounts.id.renderButton(
        document.getElementById("google-signin-button"),
        { theme: "outline", size: "large" } // Customization attributes
      );
    }
  }

  handleCredentialResponse = (response) => {
    axios.post('http://localhost:2000/google-login', {
      id_token: response.credential
    }).then(res => {
      // Handle successful login
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user_id', res.data.id);
      localStorage.setItem('loggedIn', 'true'); // Set flag indicating user is logged in
      this.props.navigate("/HomeDashboard");
    }).catch(err => {
      console.error('Google Sign-In failed:', err);
      swal({
        text: 'Google Sign-In failed. Please try again.',
        icon: "error",
      });
    });
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  login = () => {
    const { username, password } = this.state;
  
    axios.post('http://localhost:2000/login', {
      username: username,
      password: password,
    }).then((res) => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user_id', res.data.id);
      localStorage.setItem('loggedIn', 'true');
      this.props.navigate("/HomeDashboard");
    }).catch((err) => {
      if (err.response && err.response.data && err.response.data.errorMessage) {
        swal({
          text: err.response.data.errorMessage,
          icon: "error",
        });
      }
    });
  }

  render() {
    const backgroundStyle = {
      // backgroundImage: 'url("https://i.postimg.cc/900SL3mP/vecteezy-medical-background-with-hexagons-pattern-geometric-32472223.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    };

    const formStyle = {
      background: 'rgba(255, 255, 255, 0.9)',
      padding: '40px',
      borderRadius: '15px',
      boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
      width: '100%',
      maxWidth: '400px',
      textAlign: 'center',
    };

    const buttonStyle = {
      marginTop: '20px',
      padding: '10px 20px',
      borderRadius: '30px',
      fontWeight: 'bold',
      color:'white',
      transition: 'background 0.3s',
      backgroundColor: '#3f51b5',
    };

    const googleSignInStyle = {
      margin: '20px 0',
    };

    const textFieldStyle = {
      marginBottom: '20px',
    };

    return (
      <div style={backgroundStyle}>
        <Container maxWidth="sm">
          <div style={formStyle}>
            <Typography variant="h4" gutterBottom>
              Login
            </Typography>
            <TextField
              variant="outlined"
              type="text"
              autoComplete="off"
              name="username"
              value={this.state.username}
              onChange={this.onChange}
              placeholder="User Name"
              required
              fullWidth
              style={textFieldStyle}
            />
            <TextField
              variant="outlined"
              type="password"
              autoComplete="off"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
              placeholder="Password"
              required
              fullWidth
              style={textFieldStyle}
            />
            <Button
              variant="contained"
              color="primary"
              size="large"
              disabled={this.state.username === '' || this.state.password === ''}
              onClick={this.login}
              fullWidth
              style={buttonStyle}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#303f9f'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#3f51b5'}
            >
              Login
            </Button>
            <div className="google-signin" style={googleSignInStyle}>
              <div id="google-signin-button"></div>
            </div>
            <Link
              component="button"
              onClick={() => {
                this.props.navigate("/register");
              }}
              style={{ marginTop: '10px', color: '#3f51b5', fontWeight: 'bold' }}
            >
              Register
            </Link>
          </div>
        </Container>
        <Header />
      </div>
    );
  }
}

export default withRouter(Login);
