import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, TextInput } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>test</Text>
      <TextInput placeholder="enter name..." style={styles.input}></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    margin: 20,
    padding: 10
  }
})
