
import { ActionTypes } from "./Actions";

const initialState = {
  characters:[],
  filmImages:[]
}

const rootReducer = async (state = initialState, action) => {

  const newState = {...state};

  switch(action.type){
    case ActionTypes.RECEIVE_CHARACTERS:
      newState.characters = action.characters;
      break;
    case ActionTypes.RECEIVE_FILM_IMAGES:
      newState.filmImages = action.images;
      break;
    case ActionTypes.RECEIVE_CHARACTER_DETAILS:
      // find the character, make a shallow copy
      // add the films to the character
      // add the images to the films
      const {char, index} = findMatchingCharacterInState(newState, action.character);

      if(char && index >= 0){
        newState.characters[index] = {...char};
        await addDetailsToCharacter(newState, newState.characters[index], action.details);
      }
      else{
        console.log("invalid character", action.character);
      }

      break;
    default:
      ;
  }

  return newState;
}

//
//
//
function findMatchingCharacterInState(state, character){
  let index = -1;
  const char = state.characters.find(element => {
    const found = character.url === element.character.url;
    index++;
    return found;
  });

  return {char, index};
}

//
//
//
async function addDetailsToCharacter(state, char, details){
  char.details = details;
  char.films = [];

  await Promise.all(
    details.films.map(async (filmURL) => {
      const filmDetails = await fetchFilmDetails(filmURL);
      if(filmDetails){
        addImageToFilm(state, filmDetails);
        char.films.push(filmDetails);
      }
      else{
        console.log("error getting film details", filmURL);
      }
    }
  ));
}

//
//
//
async function fetchFilmDetails(filmURL){
  const res = await fetch(filmURL,
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

  return await res.json();
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
