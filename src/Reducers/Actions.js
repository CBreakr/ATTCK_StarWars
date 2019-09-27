
const characterConfigURL = "./config/characters.json";
const film_imagesConfigURL = "./config/film_images.json";

const fetchOptionsJSON = {
   headers : {
     'Content-Type': 'application/json',
     'Accept': 'application/json'
   }
};

export const ActionTypes = {
  RECEIVE_CHARACTERS:"RECEIVE_CHARACTERS",
  RECEIVE_FILM_IMAGES:"RECEIVE_FILM_IMAGES",
  RECEIVE_CHARACTER_DETAILS:"RECEIVE_CHARACTER_DETAILS"
};

export const DispatchActions = {
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

    console.log(`URL: ${character.URL}`);

    fetch(character.URL, fetchOptionsJSON)
    .then(res => res.json())
    .then(async (data) => {
      console.log("detail data", data);
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
}

//
//
//
async function fetchFilmDetails(filmURL){
  const res = await fetch(filmURL, fetchOptionsJSON);
  return await res.json();
}
