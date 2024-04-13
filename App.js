import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import Loading from './components/Loading.js'
import LoginPage from './components/LoginPage.js'


export default function App() {
  return (

    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <LoginPage />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: "Mplus 1p"
  }
});
