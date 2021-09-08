import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    // deckaração do estadoa atual do componente
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    // this.handleClick = this.handleClick.bind(this); como usei a => não tem nessecidade do bind.
  }

  handleChange = ({ target }) => this.setState({
    [target.name]: (target.type === 'checkbox' ? target.checked : target.value),
  })

  handleClick = (event) => {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);

    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  /* usei referência o createInput fazendo o codereview do colega Marcelo A. */

  createInput(type, name, value, dataTestid) {
    return (
      <input
        type={ type }
        name={ name }
        value={ value }
        onChange={ this.handleChange }
        data-testid={ dataTestid }
      />
    );
  }

  render() {
    // destruturando state
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        {/* usei referência o createInput fazendo o codereview do colega Marcelo A. */}
        <label htmlFor="title" data-testid="title-input-label">
          Título
          { this.createInput('text', 'title', title, 'title-input') }
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          { this.createInput('text', 'subtitle', subtitle, 'subtitle-input-label') }
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          { this.createInput('text', 'imagePath', imagePath, 'image-input') }
        </label>
        <label htmlFor="storyline" data-testid="storyline-input">
          Sinopse
          <textarea
            name="storyline"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          { this.createInput('number', 'rating', rating, 'rating-input') }
        </label>
        <label htmlFor="selectGenre" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            value={ genre }
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

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
