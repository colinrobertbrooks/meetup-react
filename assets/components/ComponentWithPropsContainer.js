import React from 'react';
import ComponentWithProps from './ComponentWithProps';

class ComponentWithPropsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      name: e.target.value
    });
  }
  render() {
    var {name} = this.state;
    return (
      <div>
        <p
          style={{
            color: '#f9f9f9',
            marginBottom: '5px',
            textAlign: 'left'
          }}
        >
          Name:
        </p>
        <input
          style={{
            borderRadius: '6px',
            color: '#2d2d2d',
            paddingTop: '8px',
            paddingBottom: '8px',
            paddingLeft: '40px',
            spellCheck: false,
            width: '100%'
          }}
          type="text"
          value={name}
          onChange={this.handleChange}
        />
        <p
          style={{
            color: '#f9f9f9',
            marginBottom: '5px',
            textAlign: 'left'
          }}
        >
          Result:
        </p>
        <div
          style={{
            backgroundColor: '#f9f9f9',
            borderRadius: '6px',
            color: '#2d2d2d',
            padding: '1px 40px',
            textAlign: 'left'
          }}
        >
          <ComponentWithProps
            name={name}
          />
        </div>
      </div>
    );
  }
}

export default ComponentWithPropsContainer;
