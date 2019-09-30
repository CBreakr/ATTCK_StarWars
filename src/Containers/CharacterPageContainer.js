
import { connect } from "react-redux";

import { DispatchActions } from "../Reducers/Actions";

import CharacterPage from "../Components/CharacterPage";

const mapStateToProps = (state, props) => {
  return {...state};
};

const mapDispatchToProps = dispatch => {
  return {
    setPageToCharacter: () => {
      dispatch(DispatchActions.setPageToCharacter());
    },
    requestCharacters: () => {
      DispatchActions.requestCharacters(dispatch);
    },
    requestFilmImages: () => {
      DispatchActions.requestFilmImages(dispatch);
    }
  }
};

const enhancer = connect(mapStateToProps, mapDispatchToProps);

const ConnectedCharacterPage = enhancer(CharacterPage);

export default ConnectedCharacterPage;
