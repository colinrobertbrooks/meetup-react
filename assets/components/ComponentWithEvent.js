import React from 'react';

class ComponentWithEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    // using synthetic event here for didactic purposes
    var btnText = e.target.innerText;
    this.setState({
      isToggleOn: btnText === 'ON' ? false : true
    });
  }
  render() {
    return (
      <button
        onClick={this.handleClick}
      >
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

export default ComponentWithEvent;
