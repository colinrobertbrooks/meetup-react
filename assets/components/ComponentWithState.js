/*
  differs from example code to highlight state change and clear time interval
  when component is unmounted.
*/

import React from 'react';

class ComponentWithState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
      timeIntervalId: null
    };
  }
  componentDidMount() {
    var timeIntervalId = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString()
      });
    }, 1000);
    this.setState({
      timeIntervalId: timeIntervalId
    });
  }
  componentWillUnmount() {
    clearInterval(this.state.timeIntervalId);
  }
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <h2>
          It is{' '}
          <span
            style={{
              color: '#cc7a6f'
            }}
          >
            {this.state.time}
          </span>
          .
        </h2>
      </div>
    );
  }
}

export default ComponentWithState;
