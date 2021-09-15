import React, { Component } from 'react';
import TitleForm from './TitleForm';
import SubtitleForm from './SubtitleForm';
import ImagePathForm from './ImagePathForm';
import StorylineForm from './StorylineForm';
import RatingForm from './RatingForm';
import GenreForm from './GenreForm';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form" onSubmit={ this.handleSubmit }>
        <TitleForm value={ title } onChange={ this.handleChange } />
        <SubtitleForm value={ subtitle } onChange={ this.handleChange } />
        <ImagePathForm value={ imagePath } onChange={ this.handleChange } />
        <StorylineForm value={ storyline } onChange={ this.handleChange } />
        <RatingForm value={ rating } onChange={ this.handleChange } />
        <GenreForm value={ genre } onChange={ this.handleChange } />
        <button type="submit" data-testid="send-button">
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
