
const characterConfigURL = "./config/characters.json";
const film_imagesConfigURL = "./config/film_images.json";

const fetchOptionsJSON = {
   headers : {
     'Content-Type': 'application/json',
     'Accept': 'application/json'
   }
};

export const ActionTypes = {
  SET_CHARACTER_PAGE:"SET_CHARACTER_PAGE",
  SET_FILM_PAGE:"SET_FILM_PAGE",
  RECEIVE_CHARACTERS:"RECEIVE_CHARACTERS",
  RECEIVE_FILM_IMAGES:"RECEIVE_FILM_IMAGES",
  RECEIVE_CHARACTER_DETAILS:"RECEIVE_CHARACTER_DETAILS",
  SET_PREVIOUS_FILM:"SET_PREVIOUS_FILM",
  SET_NEXT_FILM:"SET_NEXT_FILM"
};

export const DispatchActions = {
  setPageToCharacter: () => {
    return {
      type:ActionTypes.SET_CHARACTER_PAGE
    };
  },
  setPageToFilm: (characterId) => {
    return {
      type:ActionTypes.SET_FILM_PAGE,
      characterId
    };
  },
  requestCharacters: dispatch => {
    fetch(characterConfigURL, fetchOptionsJSON)
    .then(res => res.json())
    .then(data => {
      dispatch(DispatchActions.receiveCharacters(data.characters));
    })
    .catch(err => {
      console.log("error request character list", err);
    });
  },
  // set the character list data
  // once we have it from the local config
  // or already stored in object
  receiveCharacters: characters => {
    return {
      type:ActionTypes.RECEIVE_CHARACTERS,
      characters
    };
  },
  requestFilmImages: dispatch => {
    fetch(film_imagesConfigURL, fetchOptionsJSON)
    .then(res => res.json())
    .then(data => {
      dispatch(DispatchActions.receiveFilmImages(data.films));
    })
    .catch(err => {
      console.log("error request film images", err);
    });
  },
  // set the film images
  // once we have it from the local config
  // or already stored in object
  receiveFilmImages: images => {
    return {
      type: ActionTypes.RECEIVE_FILM_IMAGES,
      images
    };
  },
  requestCharacterDetails: async (character, dispatch) => {
    // I can cache this
    // because there's no reason to make this call every time
    // with data that updates so infrequently

    fetch(character.URL, fetchOptionsJSON)
    .then(res => res.json())
    .then(async (data) => {
      await addDetailsToCharacter(character, data);
      dispatch(DispatchActions.receiveCharacterDetails(character));
    })
    .catch(err => {
      console.log("error request films for character", err, character);
    });
  },
  // set the character and films details
  // once we have it from the API
  // or already stored in object
  receiveCharacterDetails: (character, details) => {
    return {
      type: ActionTypes.RECEIVE_CHARACTER_DETAILS,
      character,
      details
    };
  },
  // these methods are for navigating
  // the film carousel
  showPreviousFilm: dispatch => {
    return {
      type: ActionTypes.SET_PREVIOUS_FILM
    }
  },
  showNextFilm: dispatch => {
    return {
      type: ActionTypes.SET_NEXT_FILM
    }
  }
};

//
// trigger all of the API calls for film
// based on the list from the character
// and then wait for them all to complete
// before sorting them
//
async function addDetailsToCharacter(character, details){
  character.films = [];
  character.filmImagesAdded = false;

  await Promise.all(
    details.films.map(async (filmURL) => {
      const filmDetails = await fetchFilmDetails(filmURL);
      if(filmDetails){
        character.films.push(filmDetails);
      }
      else{
        console.log("error getting film details", filmURL);
      }
    }
  ));

  const sortedFilms = filmSort(character.films);
  character.films = sortedFilms;
}

//
// sort these films in order of episode_id
//
export function filmSort(films){
  // these are short lists, so just an insertion sort will do
  const copy = [...films];

  for(let i = 0; i < copy.length; i++){
    let film = copy[i];
    let j = i-1;
    // walk down the already-sorted films
    for(; j >= 0 && copy[j].episode_id > film.episode_id; j--){
      copy[j+1] = copy[j];
    }
    copy[j+1] = film;
  }

  return copy;
}

//
// make the call to the API
//
async function fetchFilmDetails(filmURL){
  const res = await fetch(filmURL, fetchOptionsJSON);
  return await res.json();
}
