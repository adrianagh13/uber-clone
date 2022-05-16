import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import tw from 'tailwind-react-native-classnames';

const HomeScreen = () => {
  return (
    <>
      <SafeAreaView />
      <Text style={tw `text-red-500`}>Let's build uber</Text>
    </>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({

});