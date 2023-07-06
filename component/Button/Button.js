import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

// CONSTANT
import color from '../../constant/color';
import {responsiveHeight, responsiveWidth} from '../../constant/responsive';

const Button = ({
  title = 'Check',
  btnHeight = responsiveHeight(40),
  filled = true,
}) => {
  return (
    <TouchableOpacity
      style={
        filled
          ? styles.containerFill(btnHeight)
          : styles.containerOutlined(btnHeight)
      }>
      <Text style={filled ? styles.txtTitle : styles.txtTitleWhite}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerFill: height => ({
    height: height,
    borderRadius: 8,
    backgroundColor: color.primary_green,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(12),
  }),
  containerOutlined: height => ({
    height: height,
    borderRadius: 8,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: color.primary_green,
    borderWidth: 1,
    paddingHorizontal: responsiveWidth(12),
  }),
  txtTitle: {
    fontFamily: 'Inter-Medium',
    color: color.white,
    fontSize: responsiveWidth(18),
    textAlign: 'center',
  },
  txtTitleWhite: {
    fontFamily: 'Inter-Medium',
    color: color.primary_green,
    fontSize: responsiveWidth(18),
    textAlign: 'center',
  },
});

export default Button;
