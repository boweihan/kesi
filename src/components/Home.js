// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Permissions, Notifications } from 'expo';
import { bindActionCreators } from 'redux';
import { ActionCreators } from 'src/actions';

import Welcome from 'src/components/pages/Welcome';
import Dashboard from 'src/components/pages/Dashboard';

class Home extends React.Component<{
  fast: Object,
  setNotificationToken: Function,
  setNotification: Function,
}> {
  componentDidMount() {
    this.registerForPushNotifications();
  }

  registerForPushNotifications = async () => {
    let { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    if (status !== 'granted') {
      status = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (status !== 'granted') {
        return;
      }
    }

    const token = await Notifications.getExpoPushTokenAsync();

    Notifications.addListener(this.handleNotification);

    this.props.setNotificationToken(token);
  };

  handleNotification = notification => {
    this.props.setNotification(notification);
  };

  render() {
    return this.props.fast.length ? <Dashboard /> : <Welcome />;
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
