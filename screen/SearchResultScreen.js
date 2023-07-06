/* eslint-disable react-native/no-inline-styles */
import HeaderWithBack from '../component/Header/HeaderWithBack';
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import color from '../constant/color';
import CardSearchResult from '../component/Card/CardSearchResult';
import {Spacing24} from '../component/Spacing/Spacing';

// DUMMY DATA
const dataResult = [
  {
    airlineImg: 'https://source.unsplash.com/1024x768/?airplane',
    flightName: 'IN 230',
    flightDuration: '01 hr 40 min',
    deptTime: '05.50',
    origin: 'DEL (Delhi)',
    arriveTime: '07.30',
    destination: 'CCU (Kolkata)',
    type: 'Bussines Class',
    price: '360',
  },
  {
    airlineImg: 'https://source.unsplash.com/1024x768/?airplane',
    flightName: 'IN 230',
    flightDuration: '01 hr 40 min',
    deptTime: '05.50',
    origin: 'DEL (Delhi)',
    arriveTime: '07.30',
    destination: 'CCU (Kolkata)',
    type: 'Economy Class',
    price: '360',
  },
  {
    airlineImg: 'https://source.unsplash.com/1024x768/?airplane',
    flightName: 'IN 230',
    flightDuration: '01 hr 40 min',
    deptTime: '05.50',
    origin: 'DEL (Delhi)',
    arriveTime: '07.30',
    destination: 'CCU (Kolkata)',
    type: 'Bussines Class',
    price: '360',
  },
  {
    airlineImg: 'https://source.unsplash.com/1024x768/?airplane',
    flightName: 'IN 230',
    flightDuration: '01 hr 40 min',
    deptTime: '05.50',
    origin: 'DEL (Delhi)',
    arriveTime: '07.30',
    destination: 'CCU (Kolkata)',
    type: 'Bussines Class',
    price: '360',
  },
];

const SearchResultScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{padding: 16}}>
        <HeaderWithBack title={'Search Result'} />
        <Spacing24 />
        <ScrollView>
          {dataResult.map(data => {
            return <CardSearchResult data={data} />;
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
});

export default SearchResultScreen;
