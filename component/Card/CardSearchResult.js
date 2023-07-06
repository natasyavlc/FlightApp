/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

// COMPONENT
import Button from '../../component/Button/Button';

// ICON
import Airplane from '../../assets/icon/ic_plane_green.png';
import Chair from '../../assets/icon/ic_chair.png';

// CONSTANT
import color from '../../constant/color';
import {responsiveWidth} from '../../constant/responsive';

const CardSearchResult = ({data}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.rowWrapperSpace}>
        <View style={styles.rowWrapper}>
          <Image
            source={{uri: data.airlineImg}}
            style={styles.image}
            resizeMode="cover"
          />
          <Text style={styles.txtName}>{data.flightName}</Text>
        </View>
        <Text style={styles.txtDuration}>{data.flightDuration}</Text>
      </View>

      <View style={[styles.rowWrapperSpace, {marginTop: 12}]}>
        <View>
          <Text style={styles.txtTime}>{data.deptTime}</Text>
          <Text style={styles.txtCity}>{data.origin}</Text>
        </View>
        <Image source={Airplane} style={styles.airplane} resizeMode="contain" />
        <View>
          <Text style={[styles.txtTime, {textAlign: 'right'}]}>
            {data.arriveTime}
          </Text>
          <Text style={[styles.txtCity, {textAlign: 'right'}]}>
            {data.destination}
          </Text>
        </View>
      </View>

      <View style={styles.line} />

      <View style={[styles.rowWrapperSpace, {marginBottom: 16}]}>
        <View style={styles.rowWrapper}>
          <Image source={Chair} style={styles.chair} resizeMode="contain" />
          <Text style={styles.txtType}>{data.type}</Text>
        </View>
        <View style={styles.rowWrapper}>
          <Text style={styles.txtFrom}>From </Text>
          <Text>${data.price}</Text>
        </View>
      </View>

      <Button />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: color.white,
    padding: 16,
    borderRadius: 12,
    elevation: 4,
    shadowColor: color.primary_green,
    shadowOffset: {
      width: 1.8,
      height: 1.8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginBottom: responsiveWidth(32),
  },
  rowWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  rowWrapperSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: responsiveWidth(48),
    height: responsiveWidth(32),
    borderRadius: 4,
    borderWidth: 1,
    borderColor: color.borderGray,
  },
  txtName: {
    fontFamily: 'Inter-Medium',
    color: color.black,
    fontSize: responsiveWidth(14),
    marginLeft: responsiveWidth(8),
  },
  txtDuration: {
    fontFamily: 'Inter-Medium',
    color: color.textGray,
    fontSize: responsiveWidth(12),
  },
  airplane: {
    width: responsiveWidth(140),
    height: responsiveWidth(32),
    alignSelf: 'center',
  },
  txtTime: {
    fontFamily: 'Inter-SemiBold',
    color: color.black,
    fontSize: responsiveWidth(16),
  },
  txtCity: {
    fontFamily: 'Inter-Medium',
    color: color.textGray,
    fontSize: responsiveWidth(10),
  },
  line: {
    borderBottomWidth: 1,
    borderColor: color.borderGray,
    width: 'auto',
    marginVertical: responsiveWidth(16),
  },
  chair: {
    width: responsiveWidth(16),
    height: responsiveWidth(16),
    marginRight: 10,
  },
  txtType: {
    fontFamily: 'Inter-Regular',
    color: color.textGray,
    fontSize: responsiveWidth(12),
  },
  txtFrom: {
    fontFamily: 'Inter-Light',
    color: color.textGray,
    fontSize: responsiveWidth(12),
  },
  txtPrice: {
    fontFamily: 'Inter-SemiBold',
    color: color.black,
    fontSize: responsiveWidth(16),
  },
});

export default CardSearchResult;
