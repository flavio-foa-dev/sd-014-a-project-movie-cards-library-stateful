import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBarCheck extends Component {
  render() {
    const { callbackFunc, checked } = this.props;
    return (
      <label htmlFor="checkbox" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          id="checkbox"
          type="checkbox"
          checked={ checked }
          data-testid="checkbox-input"
          onChange={ callbackFunc }
        />
      </label>
    );
  }
}

SearchBarCheck.defaultProps = {
  checked: false,
  callbackFunc: () => (undefined),
};

SearchBarCheck.propTypes = {
  checked: PropTypes.bool,
  callbackFunc: PropTypes.func,
};

export default SearchBarCheck;
