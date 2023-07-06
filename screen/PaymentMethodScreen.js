import React, {useState} from 'react';
import CardPaymentMethod from '../component/Card/CardPaymentMethod';
import {SafeAreaView, StyleSheet, View} from 'react-native';

// COMPONENT
import HeaderWithBack from '../component/Header/HeaderWithBack';
import TextInputOutlined from '../component/TextInput/TextInputOutlined';

// CONSTANT
import color from '../constant/color';

const PaymentMethodScreen = () => {
  // STATE
  const [cardNum, setCardNum] = useState('');
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <HeaderWithBack title={'Payment'} />
      </View>
      <CardPaymentMethod />

      <View style={[styles.container]}>
        <TextInputOutlined
          // icon={Passport}
          label={'Card Number'}
          placeholder={'5300 0000 0000 0000'}
          value={cardNum}
          onChangeText={val => setCardNum(val)}
        />
      </View>
    </SafeAreaView>
  );
};

export default PaymentMethodScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
