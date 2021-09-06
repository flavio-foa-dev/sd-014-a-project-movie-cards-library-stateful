// implement AddMovie component here
import React from "react";


class AddMovie extends React.Component {
    render() {
        return (
            <form data-testid="add-movie-form">
                <label 
                htmlFor="inputAddMovieTitle" data-testid="title-input-label">Título
                    <input 
                    type="text" 
                    id="inputAddMovieTitle"
                    data-testid="title-input"
                    onChange=""/>
                </label>
                <label 
                htmlFor="inputAddMovieSubtitle" data-testid="subtitle-input-label">Subtítulo
                    <input 
                    type="text" 
                    id="inputAddMovieSubtitle"
                    data-testid="subtitle-input"
                    onChange=""/>
                </label>
                <label 
                htmlFor="inputAddMovieImage" data-testid="image-input-label">Imagem
                    <input 
                    type="text" 
                    id="inputAddMovieImage"
                    data-testid="image-input"
                    onChange=""/>
                </label>
                <label 
                htmlFor="textareaAddMovie" data-testid="storyline-input-label">Sinopse
                    <textarea 
                    id="textareaAddMovie"
                    data-testid="storyline-input"
                    onChange=""/>
                </label>
                <label 
                htmlFor="inputAddMovieRating" data-testid="rating-input-label">Avaliação
                    <input 
                    type="number" 
                    id="inputAddMovieRating"
                    data-testid="rating-input"
                    onChange=""/>
                </label>
                <label 
                htmlFor="selectSearch"
                data-testid="genre-input-label">
                    Gênero
                    <select 
                    name="" 
                    id="selectSearch" 
                    onChange=''
                    data-testid="genre-input">
                    <option 
                    value="action" data-testid="genre-option">Ação</option>
                    <option 
                    value="comedy" data-testid="genre-option">Comédia</option>
                    <option 
                    value="thriller" data-testid="genre-option">Suspense</option>
                    </select>
                </label>
                <button 
                data-testid="send-button"
                onChange=''>Adicionar filme</button>
            </form>
        );
    }
}

export default AddMovie;