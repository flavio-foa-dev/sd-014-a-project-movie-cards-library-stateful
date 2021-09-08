// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import InputTitle from './InputTitle';
import InputSubtitle from './InputSubtitle';
import InputImagem from './InputImagem';
import InputSinopse from './InputSinopse';

//  const ti = 'title-input';
//  const si = 'subtitle-input';
//  const ip = 'image-input';
//  const sli = 'storyline-input';
const ri = 'rating-input';
const gi = 'genre-input';
//  const nt = 'title';
//  const ns = 'subtitle';
//  const ni = 'imagePath';
//  const nsl = 'storyline';
const nr = 'rating';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      genre: 'action',
    };

    this.aE = this.aE.bind(this);
    this.reset = this.reset.bind(this);
  }

  aE({ target }) {
    const { name } = target;
    const value = name === 'rating' ? parseFloat(target.value) : target.value;
    this.setState({
      [name]: value,
    });
  }

  reset() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath } = this.state;
    const { storyline, rating: r, genre: g } = this.state;
    const me = this.aE;

    return (
      <form data-testid="add-movie-form">
        <InputTitle value={ title } onChange={ me } />
        <InputSubtitle value={ subtitle } onChange={ me } />
        <InputImagem value={ imagePath } onChange={ me } />
        <InputSinopse value={ storyline } onChange={ me } />
        <label htmlFor="n" data-testid="rating-input-label">
          Avaliação
          <input type="number" name={ nr } id="n" value={ r } data-testid={ ri } onChange={ me } />
        </label>
        <label htmlFor="se" data-testid="genre-input-label">
          Gênero
          <select name="genre" id="se" data-testid={ gi } value={ g } onChange={ me }>
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <Button onClick={ onClick } estado={ this.state } metodo={ this.reset } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
