import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

// COMPONENT
import FlightSchedule from '../../component/Schedule/FlightSchedule';

// CONSTANT
import color from '../../constant/color';
import {responsiveHeight, responsiveWidth} from '../../constant/responsive';

// ICON
import Calendar from '../../assets/icon/ic_calendar.png';

const CardPaymentMethod = ({
  image = 'https://source.unsplash.com/1024x768/?airplane',
  flightDate = '15/07/2022',
  price = '230',
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.rowContainer}>
        <Image source={{uri: image}} style={styles.img} resizeMode="cover" />
        <View style={styles.rowContainer2}>
          <Image source={Calendar} style={styles.icon} resizeMode="contain" />
          <Text style={styles.txtDate}>{flightDate}</Text>
        </View>
      </View>

      <View style={styles.divider} />
      <FlightSchedule withAirport={false} />
      <View style={styles.divider} />

      <View style={styles.rowContainer}>
        <Text style={styles.txtTotal}>Total</Text>
        <Text style={styles.txtPrice}>$ {price}</Text>
      </View>
    </View>
  );
};

export default CardPaymentMethod;

const styles = StyleSheet.create({
  card: {
    backgroundColor: color.white,
    padding: 20,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
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
  },
  img: {
    width: responsiveWidth(48),
    height: responsiveHeight(24),
    borderRadius: 4,
  },
  rowContainer2: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
  txtDate: {
    fontFamily: 'Inter-Medium',
    fontSize: responsiveHeight(14),
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: color.borderGray,
    marginVertical: responsiveHeight(20),
  },
  txtTotal: {
    fontFamily: 'Inter-Regular',
    fontSize: responsiveHeight(14),
    color: color.black,
  },
  txtPrice: {
    fontFamily: 'Inter-SemiBold',
    fontSize: responsiveHeight(22),
    color: color.primary_green,
  },
});
