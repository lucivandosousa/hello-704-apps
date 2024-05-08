import { StatusBar } from 'expo-status-bar';
import { Image, Text, View } from 'react-native';

import { styles } from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Hello World - 704</Text>
      <Image
        style={styles.image}
        source={require("./assets/motorcycle.png")}
      />
      <StatusBar style="auto" />
    </View>
  );
}
