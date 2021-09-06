import React from 'react';
import PropTypes from 'prop-types';
import { genres, addGenreTestIds } from '../configData';

import TextInput from './TextInput';
import StoryLineInput from './StoryLineInput';
import RatingInput from './RatingInput';
import GenreSelectInput from './GenreSelectInput';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: '0',
      genre: 'action',
    };
    this.reset = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: '0',
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(this.reset);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TextInput
          name="title"
          title="Título:"
          handler={ this.handleChange }
          value={ title }
          testIds={ { labelId: 'title-input-label', inputId: 'title-input' } }
        />
        <TextInput
          name="subtitle"
          title="Subtítulo:"
          handler={ this.handleChange }
          value={ subtitle }
          testIds={ { labelId: 'subtitle-input-label', inputId: 'subtitle-input' } }
        />
        <TextInput
          name="imagePath"
          title="Imagem:"
          handler={ this.handleChange }
          value={ imagePath }
          testIds={ { labelId: 'image-input-label', inputId: 'image-input' } }
        />
        <StoryLineInput value={ storyline } handler={ this.handleChange } />

        <RatingInput value={ rating } handler={ this.handleChange } />

        <GenreSelectInput
          value={ genre }
          handler={ this.handleChange }
          genreList={ genres.slice(1) }
          testIds={ addGenreTestIds }
          title="Gênero:"
        />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.handleSubmit }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func };

AddMovie.defaultProps = { onClick: () => undefined };

export default AddMovie;
