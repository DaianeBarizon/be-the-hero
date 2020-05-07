import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Text style={styles.txt}>Hello World!</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  txt: {
    marginTop: 20,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default App;
