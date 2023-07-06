/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

// COMPONENT
import HeaderWithBack from '../component/Header/HeaderWithBack';
import CardPayment from '../component/Card/CardPayment';
import {Spacing16} from '../component/Spacing/Spacing';
import Button from '../component/Button/Button';

// CONSTANT
import {responsiveHeight, responsiveWidth} from '../constant/responsive';

const PaymentScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.content}>
        <HeaderWithBack title={'Flight Details'} />
        <Spacing16 />
        <CardPayment />
        <View style={styles.rowContainer}>
          <View style={{flex: 1}}>
            <Button
              filled={false}
              title={'Cancel'}
              btnHeight={responsiveHeight(50)}
            />
          </View>
          <View style={{width: responsiveWidth(16)}} />
          <View style={{flex: 1}}>
            <Button title={'Confirm'} btnHeight={responsiveHeight(50)} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  content: {
    padding: 16,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: responsiveHeight(24),
  },
});
