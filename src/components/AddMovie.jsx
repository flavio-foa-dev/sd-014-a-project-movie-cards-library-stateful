// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    // Chamando o pai
    super(props);
    // Criando estado e definindo estado inicial
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // Acessa a chave targe, do objeto evento e salva no state
  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  handleClick(event) {
    event.preventDefault();
    const { onClick } = this.props;
    console.log(this);
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  createInput(tipo, value, name, dataTestid) {
    return (
      <input
        id={ dataTestid }
        type={ tipo }
        value={ value }
        name={ name }
        data-testid={ dataTestid }
        onChange={ this.handleChange }
      />
    );
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          { this.createInput('text', title, 'title', 'title-input') }
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          { this.createInput('text', subtitle, 'subtitle', 'subtitle-input') }
        </label>
        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
          { this.createInput('text', imagePath, 'imagePath', 'image-input') }
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          { this.createInput('textarea', storyline, 'storyline', 'storyline-input') }
        </label>
        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação
          { this.createInput('number', rating, 'rating', 'rating-input') }
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero:
          <select
            value={ genre }
            name="genre"
            id="genre-input"
            data-testid="genre-input"
            onChange={ this.handleChange }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button type="submit" data-testid="send-button" onClick={ this.handleClick }>
          Adicionar filme
        </button>
      </form>
    );
  }
}
// <Refenrênncias: https://reactjs.org/docs/forms.html>

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
