/* eslint-disable react-native/no-inline-styles */
import color from '../../constant/color';
import {responsiveHeight, responsiveWidth} from '../../constant/responsive';
import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

// image
import Line from '../../assets/icon/ic_line.png';
import Plane from '../../assets/icon/ic_round_plane.png';

const FlightSchedule = ({
  deptTime = '5.50',
  city = 'DEL',
  airport = 'Indira Gandhi International Airport',
  arriveTime = '7.30',
  destCity = 'CCU',
  destAirport = 'Subhash Chandra Bose International Airport',
  wrapperStyle,
  withAirport = true,
}) => {
  return (
    <View style={[styles.rowContainer, wrapperStyle]}>
      <View style={{flex: 1}}>
        <Text style={styles.txtTime('left')}>{deptTime}</Text>
        <Text style={styles.txtCity('left')}>{city}</Text>
        {withAirport && (
          <Text style={styles.txtAirport('left')}>{airport}</Text>
        )}
      </View>

      <View
        style={
          withAirport
            ? {marginTop: 24, flex: 1}
            : {marginTop: responsiveHeight(-16), flex: 1}
        }>
        <Image source={Line} style={styles.line} resizeMode="contain" />
        <Image source={Plane} style={styles.plane} resizeMode="contain" />
      </View>

      <View style={{flex: 1}}>
        <Text style={styles.txtTime('right')}>{arriveTime}</Text>
        <Text style={styles.txtCity('right')}>{destCity}</Text>
        {withAirport && (
          <Text style={styles.txtAirport('right')}>{destAirport}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  txtTime: align => ({
    fontFamily: 'Inter-Bold',
    fontSize: responsiveWidth(24),
    color: color.black,
    textAlign: align,
  }),
  txtCity: align => ({
    fontFamily: 'Inter-Medium',
    fontSize: responsiveWidth(16),
    color: color.black,
    textAlign: align,
  }),
  txtAirport: align => ({
    fontFamily: 'Inter-Light',
    fontSize: responsiveWidth(12),
    color: color.black,
    marginTop: 12,
    textAlign: align,
  }),
  line: {
    position: 'absolute',
    width: Dimensions.get('window').width / 3,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(24),
  },
  plane: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: 36,
    height: 36,
    position: 'absolute',
    marginTop: '15%',
  },
});

export default FlightSchedule;
