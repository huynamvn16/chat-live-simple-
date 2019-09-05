import { createStackNavigator } from 'react-navigation';

import Chat from './components/Chat';

export default createStackNavigator({

	Chat: { screen: Chat }
});

//export default function App() {
//  return (
//    <View style={styles.container}>
//      <Text>Open up App.js to start working on your app!</Text>
//    </View>
//  );
//}

//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    backgroundColor: '#fff',
//    alignItems: 'center',
//    justifyContent: 'center',
//  },
//});
