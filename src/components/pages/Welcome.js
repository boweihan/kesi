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
import Colors from 'src/constants/colors';

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
  picker: {
    width: '100%',
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
});

class Welcome extends React.Component<{}, { fastLength: number }> {
  static getHourOptions = () => {
    const options = [];
    for (let i = 1; i <= 24; i += 1) {
      let label;
      if (i === 1) {
        label = `${i} hour`;
      } else {
        label = `${i} hours`;
      }
      options.push(<Picker.Item key={i} label={label} value={i} />);
    }
    return options;
  };

  state = {
    fastLength: 12,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.upper}>
          <Text style={styles.headerText}>Welcome</Text>
          <Text style={styles.bodyText}>Set target fast</Text>
          <Picker
            selectedValue={this.state.fastLength}
            style={styles.picker}
            onValueChange={val => this.setState({ fastLength: val })}
          >
            {Welcome.getHourOptions()}
          </Picker>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>SET GOAL</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.typesButton}>Types of fast</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.lower}>
          <Image
            style={{ width: 100, height: 100 }}
            source={require('src/assets/images/logo.png')}
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
