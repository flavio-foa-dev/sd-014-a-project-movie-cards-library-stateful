// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {
      searchText, // string
      onSearchTextChange, // callback
      bookmarkedOnly, // boolean
      onBookmarkedChange, // callback
      selectedGenre, // string
      onSelectedGenreChange, // callback
    } = this.props;

    return (
      <div>
        {searchText}
        {onSearchTextChange}
        {bookmarkedOnly}
        {onBookmarkedChange}
        {selectedGenre}
        {onSelectedGenreChange}
      </div>
    )
  }
}

export default SearchBar;
