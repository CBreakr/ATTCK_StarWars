
import { ActionTypes } from "./Actions";

const initialState = {
  test:"this is a test value",
  characters:[],
  filmImages:[],
  characterId: null,
  isFilmPage:false,
  currentFilmIndex:null
}

const rootReducer = (state = initialState, action) => {

  const newState = {...state};

  switch(action.type){
    case ActionTypes.SET_CHARACTER_PAGE:
      newState.isFilmPage = false;
      newState.characterId = null;
      newState.currentFilmIndex = null;
      break;
    case ActionTypes.SET_FILM_PAGE:
      newState.isFilmPage = true;
      newState.characterId = action.characterId;
      newState.currentFilmIndex = 0;
      break;
    case ActionTypes.RECEIVE_CHARACTERS:
      newState.characters = action.characters;
      break;
    case ActionTypes.RECEIVE_FILM_IMAGES:
      newState.filmImages = action.images;
      break;
    case ActionTypes.RECEIVE_CHARACTER_DETAILS:
      // find the character
      // substitute the new character in
      // add the images to the films

      const characters = state.characters;
      newState.characters = [...characters];
      const current = replaceCharacterInList(newState, action.character);

      if(!current.filmImagesAdded){
        current.films.forEach(film => {
          addImageToFilm(newState, film);
        });
        current.filmImagesAdded = true;
      }

      break;
    case ActionTypes.SET_PREVIOUS_FILM:
      // check to make sure that we're in bounds
      if(newState.currentFilmIndex > 0){
        newState.currentFilmIndex--;
      }
      break;
    case ActionTypes.SET_NEXT_FILM:
      if(newState.characterId && newState.characters){
        const character = newState.characters.find(char => {
          // matching string to number here
          return newState.characterId == char.id;
        });

        // check to make sure that we're in bounds
        if(
          character
          && character.films
          && character.films.length > newState.currentFilmIndex+1
        ){
          newState.currentFilmIndex++;
        }
      }
      break;
    default:
      ;
  }

  return newState;
}

//
// replace a character in the state list
// with a new reference, so that we don't
// mutate the state
//
function replaceCharacterInList(state, character){
  // return the character that's found
  let index = -1;
  const char = state.characters.find(element => {
    index++;
    return character.id === element.id;
  });

  if(char){
    state.characters[index] = character;
  }

  return char;
}

//
// attach the imageURL from the
// config list to the state object
//
function addImageToFilm(state, film){
  const match = state.filmImages.find(element => {
    return film.episode_id === element.episode_id;
  });

  if(match){
    film.imageURL = match.imageURL;
  }

  return match;
}

export default rootReducer;
