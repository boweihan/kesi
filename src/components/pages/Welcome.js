// @flow
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Picker,
  TouchableOpacity,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from 'src/actions';
import Util from 'src/helpers/util';
import Colors from 'src/constants/colors';
import Logo from 'src/assets/images/logo.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upper: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lower: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: Colors.red,
    fontSize: 50,
    marginBottom: 20,
  },
  bodyText: {
    fontSize: 16,
  },
  pickerContainer: {
    width: 150,
    height: 160,
    display: 'flex',
    flexDirection: 'row',
  },
  picker: {
    flex: 1,
  },
  pickerItem: {
    height: 80,
    marginVertical: 40,
    fontSize: 40,
  },
  button: {
    margin: 20,
    backgroundColor: Colors.red,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 100,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'black',
    shadowOpacity: 0.2,
  },
  buttonText: {
    fontSize: 16,
    color: Colors.white,
    fontWeight: 'bold',
  },
  typesButton: {
    color: Colors.linkBlue,
  },
  colon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  colonText: {
    fontWeight: 'bold',
  },
  logo: {
    width: 100,
    height: 100,
  },
});

class Welcome extends React.Component<
  {
    setFast: Function,
  },
  {
    fastLength: number,
  },
> {
  static getHourOptions = () => {
    const options = [];
    for (let i = 0; i <= 24; i += 1) {
      options.push(<Picker.Item key={i} label={i.toString()} value={i} />);
    }
    return options;
  };

  state = {
    fastLength: 12,
  };

  updateFastLength = fastLength => {
    this.setState({ fastLength });
  };

  initializeFast = () => {
    const time = new Date().getTime();
    const fast = {
      length: this.state.fastLength,
      startTime: time,
      currentTime: time,
      timeLeft: '',
    };
    fast.timeLeft = Util.calculateTimeLeft(fast);
    this.props.setFast(fast);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.upper}>
          <Text style={styles.headerText}>Welcome</Text>
          <Text style={styles.bodyText}>Set target fast</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={this.state.fastLength}
              style={styles.picker}
              itemStyle={styles.pickerItem}
              onValueChange={this.updateFastLength}
            >
              {Welcome.getHourOptions()}
            </Picker>
            <View style={styles.colon}>
              <Text style={styles.colonText}>:</Text>
            </View>
            <Picker
              selectedValue={24 - this.state.fastLength}
              style={styles.picker}
              itemStyle={styles.pickerItem}
              onValueChange={remainder => this.updateFastLength(24 - remainder)}
            >
              {Welcome.getHourOptions()}
            </Picker>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.initializeFast()}
          >
            <Text style={styles.buttonText}>SET GOAL</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.typesButton}>Types of fast</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.lower}>
          <Image style={styles.logo} source={Logo} />
        </View>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
