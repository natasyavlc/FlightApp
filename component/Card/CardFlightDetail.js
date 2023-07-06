/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

// CONSTANT
import color from '../../constant/color';
import {responsiveHeight} from '../../constant/responsive';

// COMPONENT
import FlightSchedule from '../../component/Schedule/FlightSchedule';
import {Spacing24} from '../../component/Spacing/Spacing';
import TextInputDate from '../../component/TextInput/TextInputDate';

// ICON
import Calendar from '../../assets/icon/ic_calendar.png';
import Clock from '../../assets/icon/ic_clock.png';

const CardFlightDetail = ({
  image = 'https://source.unsplash.com/1024x768/?airplane',
  date = '',
  onSelectDate,
  time = '',
  onSelectTime,
}) => (
  <View style={styles.wrapper}>
    <Image source={{uri: image}} resizeMode="cover" style={styles.img} />
    <Spacing24 />
    <FlightSchedule />
    <View style={styles.divider} />
    <View style={styles.rowContainer}>
      <View style={{flex: 1, marginRight: 12}}>
        <TextInputDate
          icon={Calendar}
          label={'Date'}
          placeholder={'12/05/1990'}
          value={date}
          onSelectDate={onSelectDate}
        />
      </View>
      <View style={{flex: 1}}>
        <TextInputDate
          icon={Clock}
          label={'Time'}
          placeholder={'10.45 AM'}
          mode={'time'}
          value={time}
          onSelectDate={onSelectTime}
        />
      </View>
    </View>
  </View>
);

export default CardFlightDetail;

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    borderRadius: 16,
    elevation: 4,
    shadowColor: color.primary_green,
    shadowOffset: {
      width: 1.8,
      height: 1.8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    backgroundColor: color.white,
  },
  img: {
    width: responsiveHeight(95),
    height: responsiveHeight(60),
    alignSelf: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: color.borderGray,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: color.borderGray,
    marginVertical: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
