import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';

// STYLES
import color from '../constant/color';

// ICON
import plane from '../assets/icon/ic_plane.png';

const Splashscreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Image source={plane} style={styles.icon} resizeMode="contain" />
        <Text style={styles.text}>Book Flight</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary_green,
  },
  wrapper: {
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
  },
  text: {
    fontSize: 36,
    color: color.white,
    fontFamily: 'Inter-ExtraBold',
  },
  icon: {
    width: 90,
    height: 50,
    marginBottom: 20,
  },
});

export default Splashscreen;
