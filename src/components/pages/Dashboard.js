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

class Dashboard extends React.PureComponent<
  {
    setCurrentTime: Function,
    setFastTimeLeft: Function,
    fast: Object,
    notification: Object,
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
    this.handleNotifications(proxyFast);
  };

  handleNotifications = (proxyFast: Object) => {
    const msTimeLeft = Util.calculateTimeLeftInMs(proxyFast);
    if (msTimeLeft <= 1800000 && msTimeLeft > 1800000 - 30000) {
      this.sendPushNotification('30 minutes left.', 'Almost there!');
    } else if (msTimeLeft <= 3600000 && msTimeLeft > 3600000 - 30000) {
      this.sendPushNotification('1 hour left!', "You're doing great.");
    } else if (msTimeLeft <= 3600000 * 3 && msTimeLeft > 3600000 * 3 - 30000) {
      this.sendPushNotification('3 hours left!', "Don't think about food.");
    }
  };

  sendPushNotification = (
    title = 'Hey!',
    body = "The team at Kesi hope you're having a great day.",
    token = this.props.notification.token,
  ) => {
    fetch('https://exp.host/--/api/v2/push/send', {
      body: JSON.stringify({
        to: token,
        title,
        body,
        data: { message: `${title} - ${body}` },
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
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
  return {
    fast: state.fast,
    notification: state.notification,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
