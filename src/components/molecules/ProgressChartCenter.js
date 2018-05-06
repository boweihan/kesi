import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Colors from 'src/constants/colors';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from 'src/actions';
import { FontAwesome } from '@expo/vector-icons';
import Util from 'src/helpers/util';

const styles = StyleSheet.create({
  container: {
    height: '60%',
    width: '60%',
    borderRadius: 10000,
    position: 'absolute',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: Colors.white,
    fontSize: 10,
    fontWeight: '100',
  },
  timeLeft: {
    fontSize: 35,
    color: Colors.white,
    fontWeight: '300',
  },
  goal: {
    color: Colors.white,
    fontSize: 10,
    fontWeight: '700',
  },
  button: {
    margin: 10,
    backgroundColor: Colors.orange,
    paddingVertical: 10,
    borderRadius: 100,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    width: 180,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    color: Colors.white,
    fontWeight: 'bold',
  },
  iconStyle: {
    margin: 5,
  },
});

class ProgressChartCenter extends React.PureComponent<
  {
    fast: Object,
    setFast: Function,
    addFastStat: Function,
  },
  {},
> {
  stopFast = () => {
    this.props.addFastStat({
      length: this.props.fast.length,
      startTime: this.props.fast.startTime,
      duration: Math.min(
        Math.round(
          Util.calculateProgress(this.props.fast) *
            this.props.fast.length *
            100,
        ) / 100,
        this.props.fast.length,
      ),
    });
    this.props.setFast({
      length: 0,
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>TIME LEFT</Text>
        <Text style={styles.timeLeft}>{this.props.fast.timeLeft}</Text>
        <TouchableOpacity style={styles.button} onPress={() => this.stopFast()}>
          <Text style={styles.buttonText}>
            STOP FAST{'  '}
            <FontAwesome
              style={styles.iconStyle}
              name="power-off"
              size={16}
              color="white"
            />
          </Text>
        </TouchableOpacity>
        <Text style={styles.goal}>
          {`GOAL: ${this.props.fast.length} HOURS`}
        </Text>
      </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(
  ProgressChartCenter,
);
