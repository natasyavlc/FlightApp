import React, {useState} from 'react';
import {Image, KeyboardAvoidingView, Pressable, StyleSheet} from 'react-native';

// COMPONENT
import TabRounded from '../component/Tab/TabRounded';
import HeaderWithBurger from '../component/Header/HeaderWithBurger';
import {Spacing16} from '../component/Spacing/Spacing';
import TextInputOutlined from '../component/TextInput/TextInputOutlined';

// CONSTANT
import color from '../constant/color';
import {responsiveHeight, responsiveWidth} from '../constant/responsive';

// ICON
import TakeOff from '../assets/icon/ic_airplane_takeoff.png';
import Landing from '../assets/icon/ic_airplane_landing.png';
import ArrowDownUp from '../assets/icon/ic_arrows_downup.png';

const HomeScreen = () => {
  const [tabValue, setTabValue] = useState(1);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  return (
    <KeyboardAvoidingView style={styles.container}>
      <HeaderWithBurger title={'Book Flight'} />
      <Spacing16 />
      <TabRounded valueTab={tabValue} onPressTab={val => setTabValue(val)} />
      <Spacing16 />

      <TextInputOutlined
        icon={TakeOff}
        label={'from'}
        value={origin}
        onChangeText={val => setOrigin(val)}
      />

      <Pressable
        style={styles.roundedWrapper}
        onPress={() => {
          setDestination(origin);
          setOrigin(destination);
        }}>
        <Image source={ArrowDownUp} style={styles.icon} resizeMode="contain" />
      </Pressable>

      <TextInputOutlined
        icon={Landing}
        label={'to'}
        value={destination}
        onChangeText={val => setDestination(val)}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: color.white,
  },
  roundedWrapper: {
    borderRadius: 40,
    backgroundColor: color.white,
    width: responsiveHeight(40),
    height: responsiveHeight(40),
    borderWidth: 1,
    borderColor: color.borderGray,
    alignSelf: 'flex-end',
    marginRight: responsiveWidth(16),
    zIndex: 5,
    marginVertical: responsiveHeight(-12),
  },
  icon: {
    width: 24,
    height: 24,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
});

export default HomeScreen;
