
import React from "react";
import { withRouter } from "react-router"

// from react router code samples

/*
this component will wrap the app,
and ensure that when a link is
followed that we scroll to the top
*/

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)
