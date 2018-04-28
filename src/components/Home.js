// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from 'src/actions';

import Welcome from 'src/components/pages/Welcome';
import Dashboard from 'src/components/pages/Dashboard';

class Home extends React.Component<{ fast: Object }> {
  render() {
    return this.props.fast.length ? <Dashboard /> : <Welcome />;
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    fast: state.fast,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
