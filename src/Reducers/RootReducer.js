
import { ActionTypes } from "./Actions";

const initialState = {
  test:"this is a test value",
  characters:[],
  filmImages:[],
  // currentCharacter:null
}

const rootReducer = (state = initialState, action) => {

  const newState = {...state};

  switch(action.type){
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

      // newState.currentCharacter = current;

      break;
    default:
      ;
  }

  console.log("new state", newState);

  return newState;
}

//
//
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
//
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

//
//
//
export default rootReducer;
