import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label htmlFor="search" data-testid="text-input-label">
          Inclui o texto
          <input
            onChange={ onSearchTextChange }
            type="text"
            id="search"
            name="search"
            value={ searchText }
            data-testid="text-input"
          />
        </label>

        <label htmlFor="favorito" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            onChange={ onBookmarkedChange }
            type="checkbox"
            id="favorito"
            name="favorito"
            checked={ bookmarkedOnly }
            data-testid="checkbox-input"
          />
        </label>
      </form>
    );
  }
}

export default SearchBar;
