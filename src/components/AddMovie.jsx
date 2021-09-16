import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    // this.props = { onClick };
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="input-title">
          Título
          <input
            data-testid="title-input"
            value={ title }
            onChange={ this.handleChange }
            name="title"
            id="input-title"
            type="text"
          />
        </label>
      </form>

    );
  }
}

export default AddMovie;
