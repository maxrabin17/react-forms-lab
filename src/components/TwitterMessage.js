import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      text: ""
    };
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  render() {

    let counter = this.props.maxChars - this.state.text.length

    return (
      <div>
        <strong>Your message:</strong>
        <input
              value = {this.state.text} 
              onChange = {this.handleChange}
              type="text" 
              name="message" 
              id="message" />
              {counter}
              
      </div>
    );
  }
}

export default TwitterMessage;
