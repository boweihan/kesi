// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from 'src/actions';

import Welcome from 'src/components/pages/Welcome';

class Home extends React.Component<{}> {
  render() {
    return <Welcome />;
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    clock: state.clock,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
