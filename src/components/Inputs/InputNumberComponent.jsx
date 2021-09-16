import React from 'react';
import PropTypes from 'prop-types';

class InputNumberComponent extends React.Component {
  render() {
    const { id, callback, value, titulo } = this.props;
    return (
      <label data-testid={ `${id}-input-label` } htmlFor={ id }>
        { titulo }
        <input
          id={ id }
          type="number"
          value={ value }
          onChange={ callback }
          data-testid={ `${id}-input` }
        />
      </label>
    );
  }
}
InputNumberComponent.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  titulo: PropTypes.string.isRequired,
};

export default InputNumberComponent;
