import React from 'react';
import { BarChart, Grid, YAxis } from 'react-native-svg-charts';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from 'src/actions';
import Colors from 'src/constants/colors';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  graphContainer: {
    maxHeight: height * 0.25,
    height: height * 0.25,
    maxWidth: 0.8 * width,
    flex: 1,
    flexDirection: 'row',
  },
  header: {
    fontSize: 10,
    fontWeight: '700',
  },
  graph: {
    height: '100%',
    maxHeight: '100%',
    flex: 1,
  },
  yAxis: {
    height: '100%',
    maxHeight: '100%',
    width: 0.1 * width,
  },
  xAxis: {
    marginHorizontal: -10,
    width: 0.9 * 0.8 * width,
    marginLeft: 0.1 * 0.8 * width - 1,
  },
});

class BarGraph extends React.PureComponent<{}, {}> {
  render() {
    const fill = Colors.purple;
    const data = [5, 2, 12, 23, 16, 8, 16, 16, 14, 15, 3, 0];
    const contentInset = { top: 30, bottom: 30 };
    const numberOfTicks = 6;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>LAST 12 FASTS</Text>
        <View style={styles.graphContainer}>
          <YAxis
            style={styles.yAxis}
            data={data}
            contentInset={contentInset}
            svg={{
              fill: 'grey',
              fontSize: 10,
            }}
            numberOfTicks={numberOfTicks}
            formatLabel={value => `${value}h`}
          />
          <BarChart
            style={styles.graph}
            data={data}
            svg={{ fill }}
            contentInset={contentInset}
            spacingInner={0.7}
            numberOfTicks={numberOfTicks}
          >
            <Grid />
          </BarChart>
        </View>
        {/* <XAxis
          style={styles.xAxis}
          data={data}
          formatLabel={(value, index) => index}
          contentInset={{ left: 10, right: 10 }}
          svg={{ fontSize: 10, fill: 'black' }}
        /> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(BarGraph);
