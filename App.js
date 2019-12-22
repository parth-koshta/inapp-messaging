import React from 'react';
import {View, Text} from 'react-native';
import inAppMessaging from '@react-native-firebase/in-app-messaging';
class App extends React.Component {
  componentDidMount() {
    // console.log(inAppMessaging);
    this.bootstrap();
    this.onSetup();
  }

  bootstrap = async () => {
    await inAppMessaging().setMessagesDisplaySuppressed(true);
  };

  onSetup = () => {
    // await setupUser(user);
    // Allow user to receive messages now setup is complete
    inAppMessaging().setMessagesDisplaySuppressed(false);
  };

  render() {
    return (
      <View>
        <Text>Hello</Text>
      </View>
    );
  }
}
export default App;
