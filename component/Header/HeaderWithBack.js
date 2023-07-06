import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

// ICON
import ArrowLeft from '../../assets/icon/ic_left_arrow.png';

// CONSTANT
import {responsiveWidth} from '../../constant/responsive';
import color from '../../constant/color';

const HeaderWithBack = ({title}) => {
  return (
    <View style={styles.wrapper}>
      <Image source={ArrowLeft} style={styles.icon} resizeMode="contain" />
      <Text style={styles.txtTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  icon: {
    width: responsiveWidth(28),
    height: responsiveWidth(28),
  },
  txtTitle: {
    textAlign: 'center',
    alignSelf: 'center',
    color: color.black,
    fontSize: responsiveWidth(20),
    fontFamily: 'Inter-Medium',
    marginLeft: 'auto',
    marginRight: 'auto',
    left: responsiveWidth(-14),
  },
});

export default HeaderWithBack;
