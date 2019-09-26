
import { connect } from "react-redux";

import FilmComponent from "../Components/FilmComponent";

const mapStateToProps = (state, props) => {

  return {...state};
}

const mapDispatchToProps= dispatch => {
  return {

  };
}

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const ConnectedFilm = enhancer(FilmComponent);

export default ConnectedFilm;
