import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

// COMPONENT
import HeaderWithBack from '../component/Header/HeaderWithBack';
import CardFlightDetail from '../component/Card/CardFlightDetail';

// CONSTANT
import color from '../constant/color';
import {Spacing16} from '../component/Spacing/Spacing';

const FlightDetailsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <HeaderWithBack title={'Flight Details'} />
        <Spacing16 />
        <CardFlightDetail />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.whiteGreen,
  },
  content: {
    padding: 16,
  },
});

export default FlightDetailsScreen;
