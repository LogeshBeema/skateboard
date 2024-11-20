import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Login</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default Login;
