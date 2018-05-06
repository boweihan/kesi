// @flow
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from 'src/actions';
import Colors from 'src/constants/colors';
import Util from 'src/helpers/util';
import ProgressChart from 'src/components/atoms/ProgressChart';
import ProgressChartCenter from 'src/components/molecules/ProgressChartCenter';
import FloatingView from 'src/components/molecules/FloatingView';
import BarGraph from 'src/components/atoms/BarGraph';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upper: {
    flex: 1.2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.red,
  },
});

class Dashboard extends React.Component<
  {
    setCurrentTime: Function,
    setFastTimeLeft: Function,
    fast: Object,
  },
  { slowTimer: any, fastTimer: any },
> {
  constructor() {
    super();
    this.state = {
      slowTimer: null,
      fastTimer: null,
    };
  }

  componentDidMount() {
    const slowTimer = setInterval(this.tick, 30000);
    this.setState({ slowTimer }); // eslint-disable-line
    const fastTimer = setInterval(this.tock, 1000);
    this.setState({ fastTimer }); // eslint-disable-line
  }

  componentWillUnmount() {
    clearInterval(this.state.slowTimer);
    clearInterval(this.state.fastTimer);
  }

  tick = () => {
    this.props.setCurrentTime(new Date().getTime());
  };

  tock = () => {
    const proxyFast = {
      length: this.props.fast.length,
      startTime: this.props.fast.startTime,
      currentTime: new Date().getTime(),
    };
    this.props.setFastTimeLeft(Util.calculateTimeLeft(proxyFast));
  };

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={[Colors.red, Colors.darkRed, Colors.purple]}
          style={styles.upper}
        >
          <ProgressChart style={{ zIndex: 1 }} />
          <ProgressChartCenter style={{ zIndex: 1000 }} />
        </LinearGradient>
        <BarGraph />
        <FloatingView />
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return { fast: state.fast };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
