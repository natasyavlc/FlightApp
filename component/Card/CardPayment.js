/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

// CONSTANT
import {responsiveHeight, responsiveWidth} from '../../constant/responsive';

// ICON
import Calendar from '../../assets/icon/ic_calendar.png';
import color from '../../constant/color';
import FlightSchedule from '../../component/Schedule/FlightSchedule';

const CardPayment = ({
  image = 'https://source.unsplash.com/1024x768/?airplane',
  date = '15/07/2022',
  price = '230',
}) => {
  return (
    <View style={styles.card}>
      <View style={[styles.rowContainer, styles.margin]}>
        <Image source={{uri: image}} style={styles.img} resizeMode="cover" />

        <View style={[styles.rowContainer]}>
          <Image source={Calendar} style={styles.icon} resizeMode="contain" />
          <Text style={styles.txtdate}>{date}</Text>
        </View>
      </View>
      <FlightSchedule wrapperStyle={{padding: 16}} />

      <View style={styles.divider} />

      <View style={styles.rowContainer2}>
        <Text style={styles.txtLeft}>Price</Text>
        <Text style={styles.txtPrice}>${price}</Text>
      </View>
    </View>
  );
};

export default CardPayment;

const styles = StyleSheet.create({
  card: {
    backgroundColor: color.white,
    borderRadius: 8,
    elevation: 4,
    shadowColor: color.primary_green,
    shadowOffset: {
      width: 1.8,
      height: 1.8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowContainer2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: responsiveHeight(16),
  },
  margin: {
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  img: {
    width: responsiveWidth(48),
    height: responsiveWidth(24),
    borderWidth: 1,
    borderColor: color.borderGray,
    borderRadius: 4,
  },
  icon: {
    width: 20,
    height: 20,
  },
  txtdate: {
    fontFamily: 'Inter-Medium',
    fontSize: responsiveWidth(14),
    color: color.black,
    marginLeft: 8,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: color.borderGray,
    marginVertical: 20,
  },
  txtLeft: {
    fontFamily: 'Inter-Light',
    fontSize: responsiveWidth(22),
    color: color.black,
  },
  txtPrice: {
    fontFamily: 'Inter-SemiBold',
    fontSize: responsiveWidth(32),
    color: color.black,
    marginLeft: 8,
  },
});
