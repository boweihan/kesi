import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Util from 'src/helpers/util';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 10,
  },
  time: {
    fontSize: 20,
  },
  date: {
    fontSize: 10,
  },
});

class DateTimeView extends React.PureComponent<
  { date: Date, headerText: string },
  {},
> {
  render() {
    const timeString = Util.msToTimeSparse(this.props.date.getTime());
    const dateString = Util.stringifyDate(this.props.date);
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{this.props.headerText}</Text>
        <Text style={styles.time}>{timeString}</Text>
        <Text style={styles.date}>{dateString}</Text>
      </View>
    );
  }
}

export default DateTimeView;
