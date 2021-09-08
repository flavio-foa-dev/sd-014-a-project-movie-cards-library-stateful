import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  // Inspirado no codigo do Marcello Alves tanto a função handleChange quanto a customImput
  handleChange = ({ target }) => this.setState({
    [target.name]: (target.type === 'checkbox' ? target.checked : target.value),
  });

  customImput(type, name, value, data) {
    return (
      <input
        type={ type }
        name={ name }
        value={ value }
        onChange={ this.handleChange }
        data-testid={ data }
      />
    );
  }

  render() {
    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          { this.customImput('text', 'title', title, 'title-input') }
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          {this.customImput('text', 'subtitle', subtitle, 'subtitle-input')}
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          {this.customImput('text', 'imagePath', imagePath, 'image-input')}
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          {this.customImput('text', 'storyline', storyline, 'storyline-input')}
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          {this.customImput('number', 'rating', rating, 'rating-input')}
        </label>
      </form>
    );
  }
}

export default AddMovie;
