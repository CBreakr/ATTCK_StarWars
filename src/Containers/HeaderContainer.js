
import { connect } from "react-redux";

import Header from "../Components/HeaderComponent";

const mapStateToProps = (state, props) => {
  return {
    isFilmPage: state.isFilmPage
  };
}

const enhancer = connect(mapStateToProps);
const ConnectedHeader = enhancer(Header);

export default ConnectedHeader;
