/*
  differs from example code to highlight props change.
*/

import PropTypes from 'prop-types';
import React from 'react';

class ComponentWithProps extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <h2>
          This is{' '}
          <span
            style={{
              color: '#cc7a6f'
            }}
          >
            {this.props.name}
          </span>
          .
        </h2>
      </div>
    );
  }
}

ComponentWithProps.propTypes = {
  name: PropTypes.string.isRequired
};

export default ComponentWithProps;
