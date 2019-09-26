
import { connect } from "react-redux";

import { DispatchActions } from "../Reducers/Actions.js";

import FilmPage from "../Components/FilmPage";

const mapStateToProps = (state, props) => {
  return {...state};
};

const mapDispatchToProps = dispatch => {
  return {
    requestCharacterDetails: character => {
      DispatchActions.requestCharacterDetails(character, dispatch);
    }
  }
};

const enhancer = connect(mapStateToProps, mapDispatchToProps);

const ConnectedFilmPage = enhancer(FilmPage);

export default ConnectedFilmPage;
