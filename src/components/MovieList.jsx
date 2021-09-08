import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies, searchText } = this.props;

    return (
      <div data-testid="movie-list" className="movie-list">
        {/* <h1>{ searchText }</h1>
        <h1>{ console.log(movies.title) }</h1> */}
        { movies
          .map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  searchText: PropTypes.string.isRequired,
};

export default MovieList;
