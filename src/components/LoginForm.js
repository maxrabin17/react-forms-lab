import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  // handleLogin = (e) => {
  //   e.preventDefault()
  //   console.log('Hello World!')
  // }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleEmptyChange = (e) => {
    e.preventDefault()
    this.state.password !== "" && this.state.username !== "" ? this.props.handleLogin(e, this.state): null
  }

  render() {
    return (
      <form onSubmit = {this.handleEmptyChange}>
        <div>
          <label>
            Username
            <input 
              id="username" 
              name="username"
              onChange={this.handleChange} 
              type="text" 
              value={this.state.username}/>
              
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              id="password" 
              name="password" 
              onChange={this.handleChange}
              type="password" 
              value={this.state.password}/>
          </label>
        </div>
        <div>
          <button 
          type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
