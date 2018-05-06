// @flow

import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Colors from 'src/constants/colors';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from 'src/actions';
import DateTimeView from 'src/components/atoms/DateTimeView';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  centerFloat: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top: height / (1 / 0.55) - 40,
    height: 80,
    width: '100%',
  },
  container: {
    flex: 1,
    height: 80,
  },
  box: {
    marginHorizontal: '5%',
    height: '100%',
    width: '90%',
    backgroundColor: 'white',
    shadowOffset: { width: 5, height: 5 },
    shadowColor: Colors.black,
    shadowOpacity: 0.2,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  leftBox: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: Colors.lightGray,
  },
  rightBox: {
    flex: 1,
    borderLeftWidth: 1,
    borderLeftColor: Colors.lightGray,
  },
});

class FloatingView extends React.PureComponent<{ fast: Object }, {}> {
  render() {
    const endDate = new Date(
      this.props.fast.startTime + this.props.fast.length * 3600000,
    );

    return (
      <View style={styles.centerFloat}>
        <View style={styles.container}>
          <View style={styles.box}>
            <View style={styles.leftBox}>
              <DateTimeView
                headerText="STARTED AT"
                date={this.props.fast.startTime}
              />
            </View>
            <View style={styles.rightBox}>
              <DateTimeView headerText="ENDS AT" date={endDate} />
            </View>
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
    fast: state.fast,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FloatingView);
