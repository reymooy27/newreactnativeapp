import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, ImageBackground, FlatList } from 'react-native';
import CarList from './component/CarList';
import Header from './component/Header';

export default function App() {

  return (
    <View style={styles.container}>
      <Header/>
      <CarList/>
      <StatusBar style='auto'/>
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
