import React, { Component } from 'react';

export default class Home extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => {
        console.log(res.express);
      })
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div>
        <h1>Hi, Im the Homepage</h1>
        <p>{this.state.response}</p>
      </div>
    );
  }
}
