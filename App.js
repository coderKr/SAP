import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {
  Notifications,
} from 'expo';
import registerForPushNotificationsAsync from './notification';
import TextBlock from './components/textblock'

export default class App extends React.Component {
  state = {
    notification:{},
    count: 0
  };

  componentWillMount() {
    registerForPushNotificationsAsync();
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = (notification) => {
    this.setState({notification: notification});
    this.setState({count: this.state.count+1});
  };


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.image}>
          <Image source={require('./assets/images/logosap.png')}/>
        </View>
        <View style={styles.contentbox}>
            <TextBlock heading="Created By" value='Kripa Agarwal'/>
            <TextBlock heading="Date" value='02/24/2018'/>
            <TextBlock heading="Number of Notifications" value={this.state.count}/>
            <TextBlock heading="Latest Push Content" value={JSON.stringify(this.state.notification.data)}/>
          </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentbox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }

});
