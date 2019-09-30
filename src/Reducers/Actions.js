
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
  RECEIVE_CHARACTER_DETAILS:"RECEIVE_CHARACTER_DETAILS"
};

export const DispatchActions = {
  setPageToCharacter: () => {
    return {
      type:ActionTypes.SET_CHARACTER_PAGE
    };
  },
  setPageToFilm: () => {
    return {
      type:ActionTypes.SET_FILM_PAGE
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
  receiveCharacterDetails: (character, details) => {
    return {
      type: ActionTypes.RECEIVE_CHARACTER_DETAILS,
      character,
      details
    };
  }
};

//
//
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
//
//
async function fetchFilmDetails(filmURL){
  const res = await fetch(filmURL, fetchOptionsJSON);
  return await res.json();
}
