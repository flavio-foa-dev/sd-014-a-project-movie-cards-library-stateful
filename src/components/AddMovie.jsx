// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './AddMovieComponents/TextInput';
import TextAreaInput from './AddMovieComponents/TextAreaInput';
import NumberInput from './AddMovieComponents/NumberInput';
import SelectInput from './AddMovieComponents/SelectInput';

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
  }

  addMovieBtn = () => {
    const { onClick } = this.props;
    const getMovie = onClick;
    getMovie(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  saveNewCardValues = ({ target }) => {
    const { value, name } = target;
    if (name === 'image') {
      this.setState({
        imagePath: value,
      });
    } else {
      this.setState({ // value chega como string por ser extraído de string de html;
        [name]: (name === 'rating' ? Number(value) : value),
      });
    }
  }

  render() {
    const cb = this.saveNewCardValues;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TextInput lblName="Título" name="title" value={ title } cb={ cb } />
        <TextInput lblName="Subtítulo" name="subtitle" value={ subtitle } cb={ cb } />
        <TextInput lblName="Imagem" name="image" value={ imagePath } cb={ cb } />
        <TextAreaInput lblName="Sinopse" name="storyline" value={ storyline } cb={ cb } />
        <NumberInput lblName="Avaliação" name="rating" value={ rating } cb={ cb } />
        <SelectInput
          lblName="Gênero"
          name="genre"
          value={ genre }
          cb={ cb }
          opt={ [['action', 'Ação'], ['comedy', 'Comédia'], ['thriller', 'Suspense']] }
        />
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.addMovieBtn }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
