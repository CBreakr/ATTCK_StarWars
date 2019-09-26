
import { ActionTypes } from "./Actions";

const initialState = {
  characters:[],
  movieImages:[]
}

const rootReducer = (state = initialState, action) => {

  const newState = {...state};

  switch(action.type){
    case ActionTypes.RECEIVE_CHARACTERS:
      newState.characters = action.characters;
      break;
    case ActionTypes.RECEIVE_FILM_IMAGES:
      newState.movieImages = action.images;
      break;
    case ActionTypes.RECEIVE_FILMS_FOR_CHARACTER:
      // find the character, make a shallow copy
      // add the films to the character
      // add the images to the films
      break;
    default:
      ;
  }

  return newState;
}

export default rootReducer;
