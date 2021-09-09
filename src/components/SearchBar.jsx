import React, { Component } from 'react';

class SearchBar extends Component {
  fetchOptions = () => (
    <>
      <option data-testid="select-option" value="">
        Todos
      </option>
      <option data-testid="select-option" value="action">
        Ação
      </option>
      <option data-testid="select-option" value="comedy">
        Comédia
      </option>
      <option data-testid="select-option" value="thriller">
        Suspense
      </option>
    </>
  );

  render() {
    const {
      bookmarkedOnly,
      onBookmarkedChange,
      onSearchTextChange,
      onSelectedGenreChange,
      searchText,
      selectedGenre,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="text">
          Inclui o texto:
          <input
            data-testid="text-input"
            id="text"
            name="searchText"
            onChange={ onSearchTextChange }
            type="text"
            value={ searchText }
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="checkbox">
          Mostrar somente favoritos
          <input
            checked={ bookmarkedOnly }
            data-testid="checkbox-input"
            id="checkbox"
            name="bookmarkedOnly"
            onChange={ onBookmarkedChange }
            type="checkbox"
          />
        </label>
        <label data-testid="select-input-label" htmlFor="select">
          Filtrar por gênero
          <select
            data-testid="select-input"
            id="select"
            name="selectedGenre"
            onChange={ onSelectedGenreChange }
            value={ selectedGenre }
          >
            {this.fetchOptions()}
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
