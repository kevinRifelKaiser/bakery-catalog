/* eslint-disable import/namespace */
import { useFonts } from 'expo-font';
import { View, ActivityIndicator } from 'react-native';

import AppNavigator from './navigation';
import { styles } from './styles';

const App = () => {
  const [loaded] = useFonts({
    'Rubik-Black': require('../assets/fonts/Rubik-Black.ttf'),
    'Rubik-Bold': require('../assets/fonts/Rubik-Bold.ttf'),
    'Rubik-Medium': require('../assets/fonts/Rubik-Medium.ttf'),
  });

  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return <AppNavigator />;
};

export default App;
