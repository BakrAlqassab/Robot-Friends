import React, { Component } from "react";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return (
        <div >
          <h1> Ooops Someting went Wring</h1>
          <img alt="robots" style={{width:'35rem' ,height:'32rem'}}  src="error.png" />
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundry;
