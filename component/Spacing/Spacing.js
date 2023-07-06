/* eslint-disable react/react-in-jsx-scope */
import {responsiveHeight} from '../../constant/responsive';
import {View} from 'react-native';

export const Spacing24 = () => {
  return <View style={{height: responsiveHeight(24)}} />;
};

export const Spacing16 = () => {
  return <View style={{height: responsiveHeight(16)}} />;
};

export const Spacing10 = () => {
  return <View style={{height: responsiveHeight(10)}} />;
};
