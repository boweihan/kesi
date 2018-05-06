import React from 'react';
import { ProgressCircle } from 'react-native-svg-charts';
import { StyleSheet } from 'react-native';
import Colors from 'src/constants/colors';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from 'src/actions';
import Util from 'src/helpers/util';

const styles = StyleSheet.create({
  chart: {
    height: '80%',
    width: '80%',
  },
});

class ProgressChart extends React.PureComponent<{ fast: Object }, {}> {
  render() {
    const progress = Util.calculateProgress(this.props.fast);
    return (
      <ProgressCircle
        style={styles.chart}
        key={this.props.fast.currentTime}
        progress={progress}
        progressColor={Colors.purple}
      />
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(ProgressChart);
