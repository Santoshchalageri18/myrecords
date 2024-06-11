import React, { Component } from "react";
import swal from "sweetalert";
import { Button, TextField, Link, Typography, Container } from "@material-ui/core";
import { withRouter } from "../utils";
import Header from "../Header";
import '../Styles/Register.css'; // Import custom CSS file for register page styling
const axios = require("axios");

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirm_password: '',
      phone: '' // Added state for phone number
    };
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  register = () => {
    const { username, email, password, confirm_password, phone } = this.state;
    
    if (password !== confirm_password) {
      swal({
        text: "Passwords do not match!",
        icon: "error",
        type: "error"
      });
      return;
    }

    axios.post('http://localhost:2000/register', {
      username,
      email,
      password,
      phone // Included phone number in the request
    }).then((res) => {
      swal({
        text: res.data.title,
        icon: "success",
        type: "success"
      });
      this.props.navigate("/");
    }).catch((err) => {
      swal({
        text: err.response.data.errorMessage,
        icon: "error",
        type: "error"
      });
    });
  }

  render() {
    const backgroundStyle = {
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
      color: 'white',
      fontWeight: 'bold',
      transition: 'background 0.3s',
      backgroundColor: '#3f51b5',
    };

    const textFieldStyle = {
      marginBottom: '20px',
    };

    return (
      <div style={backgroundStyle}>
        <Container maxWidth="sm">
          <div style={formStyle}>
            <Typography variant="h4" gutterBottom>
              Register
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
              type="email"
              autoComplete="off"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
              placeholder="Email"
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
            <TextField
              variant="outlined"
              type="password"
              autoComplete="off"
              name="confirm_password"
              value={this.state.confirm_password}
              onChange={this.onChange}
              placeholder="Confirm Password"
              required
              fullWidth
              style={textFieldStyle}
            />
            <TextField
              variant="outlined"
              type="text"
              autoComplete="off"
              name="phone"
              value={this.state.phone}
              onChange={this.onChange}
              placeholder="Phone Number"
              required
              fullWidth
              style={textFieldStyle}
            />
            <Button
              variant="contained"
              color="primary"
              size="large"
              disabled={this.state.username === '' || this.state.password === '' || this.state.email === ''}
              onClick={this.register}
              fullWidth
              style={buttonStyle}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#303f9f'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#3f51b5'}
            >
              Register
            </Button>
            <Link
              component="button"
              onClick={() => {
                this.props.navigate("/Login");
              }}
              style={{ marginTop: '10px', color: '#3f51b5', fontWeight: 'bold' }}
            >
              Login
            </Link>
          </div>
        </Container>
        <Header />
      </div>
    );
  }
}

export default withRouter(Register);
