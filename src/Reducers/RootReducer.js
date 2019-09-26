
import { ActionTypes } from "./Actions";

const initialState = {
  test:"this is a test value",
  characters:[],
  filmImages:[]
}

const rootReducer = (state = initialState, action) => {

  console.log("starting state with action", state, action);

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
      replaceCharacterInList(newState, action.character);

      action.character.films.forEach(film => {
        addImageToFilm(newState, film);
      });

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
