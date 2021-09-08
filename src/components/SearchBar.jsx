import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="search-bar">
          Inclui o texto:
          <input
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
            name="search-bar"
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="favorites">
          Mostrar somente favoritos
          <input
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
            name="favorites"
          />
        </label>
        <label data-testid="select-input-label" htmlFor="genre-filter">
          Filtrar por gênero
          <select
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
            name="genre-filter"
          >
            <option
              value=""
              data-testid="select-option"
            >
              Todos
            </option>
            <option
              value="action"
              data-testid="select-option"
            >
              Ação
            </option>
            <option
              value="comedy"
              data-testid="select-option"
            >
              Comédia
            </option>
            <option
              value="thriller"
              data-testid="select-option"
            >
              Suspense
            </option>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
