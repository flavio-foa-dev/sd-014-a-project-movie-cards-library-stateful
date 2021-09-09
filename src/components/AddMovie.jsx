import React, { Component } from 'react';

class AddMovie extends Component {
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

    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler({ target }) {
    const { name, type } = target;
    const value = type !== 'checkbox' ? target.value : target.checked;

    this.setState({
      [name]: value,
    });
  }

  inputsGenerator(test, type, name, value) {
    return (
      <input
        data-testid={ test }
        type={ type }
        name={ name }
        value={ value }
        onChange={ this.changeHandler }
      />
    );
  }

  textAreaGenerator(test, type, name, value) {
    return (
      <textarea
        data-testid={ test }
        type={ type }
        name={ name }
        value={ value }
        onChange={ this.changeHandler }
      />
    );
  }

  selectOptions(value) {
    return (
      <select
        data-testid="genre-input"
        type="text"
        name="genre"
        value={ value }
        onChange={ this.changeHandler }
      >
        <option value="action" data-testid="genre-option">Ação</option>
        <option value="comedy" data-testid="genre-option">Comédia</option>
        <option value="thriller" data-testid="genre-option">Suspense</option>
      </select>
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          { this.inputsGenerator('title-input', 'text', 'title', title) }
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          { this.inputsGenerator('subtitle-input', 'text', 'subtitle', subtitle) }
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          { this.inputsGenerator('image-input', 'text', 'imagePath', imagePath) }
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          { this.textAreaGenerator('storyline-input', 'storyline', storyline) }
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          { this.inputsGenerator('rating-input', 'number', 'rating', rating) }
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          { this.selectOptions(genre) }
        </label>
      </form>
    );
  }
}

export default AddMovie;
