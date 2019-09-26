
import { connect } from "react-redux";

import CharacterComponent from "../Components/CharacterComponent";

const mapStateToProps = (state, props) => {

  return {...state};
}

const mapDispatchToProps = dispatch => {
  return {

  };
}

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const ConnectedCharacter = enhancer(CharacterComponent);

export default ConnectedCharacter;
