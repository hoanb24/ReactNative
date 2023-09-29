import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PressAbleContent from './Component/ultis/PressAbleContent';
import ViewBottom from './Component/Bottom/ViewBottom';
import ButtonContent from './Component/ultis/ButtonContent';
import ButtonAction from './Component/ultis/ButtonAction';
import BigView from './Component/BigView';

export default function App() {
  return (
    <View style={styles.container}>
      <BigView />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
