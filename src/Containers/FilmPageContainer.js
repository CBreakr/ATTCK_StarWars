
import { connect } from "react-redux";

import { DispatchActions } from "../Reducers/Actions.js";

import FilmPage from "../Components/FilmPage";

const mapStateToProps = (state, props) => {
  return {...state};
};

const mapDispatchToProps = dispatch => {
  return {
    setPageToFilm: (characterId) => {
      dispatch(DispatchActions.setPageToFilm(characterId));
    },
    requestCharacterDetails: character => {
      DispatchActions.requestCharacterDetails(character, dispatch);
    },
    receiveCharacterDetails: character => {
      DispatchActions.receiveCharacterDetails(character);
    },
    showPreviousFilm: () => {
      dispatch(DispatchActions.showPreviousFilm());
    },
    showNextFilm: () => {
      dispatch(DispatchActions.showNextFilm());
    }
  }
};

const enhancer = connect(mapStateToProps, mapDispatchToProps);

const ConnectedFilmPage = enhancer(FilmPage);

export default ConnectedFilmPage;
