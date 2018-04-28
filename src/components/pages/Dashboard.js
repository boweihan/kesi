// @flow
import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from 'src/actions';
import Colors from 'src/constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.red,
  },
  lower: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerFloat: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  centerFloat__container: {
    flex: 1,
    height: 75,
  },
  centerFloat__box: {
    marginHorizontal: '15%',
    height: '100%',
    width: '70%',
    backgroundColor: 'white',
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    borderRadius: 10,
  },
});

class Dashboard extends React.Component<{}, {}> {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={[Colors.red, Colors.lightRed]}
          style={styles.upper}
        >
          <View>your elements here</View>
        </LinearGradient>
        <View style={styles.lower} />
        <View style={styles.centerFloat}>
          <View style={styles.centerFloat__container}>
            <View style={styles.centerFloat__box} />
          </View>
        </View>
      </View>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
