import React, {useState, useEffect} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// COMPONENT
import HeaderWithBack from '../component/Header/HeaderWithBack';
import TextInputOutlined from '../component/TextInput/TextInputOutlined';
import {Spacing16} from '../component/Spacing/Spacing';
import TextInputDate from '../component/TextInput/TextInputDate';
import Button from '../component/Button/Button';

// CONSTANT
import {responsiveHeight, responsiveWidth} from '../constant/responsive';
import color from '../constant/color';

// ICON
import Name from '../assets/icon/ic_name.png';
import Address from '../assets/icon/ic_map.png';
import Passport from '../assets/icon/ic_passport.png';
import Cake from '../assets/icon/ic_dob.png';
import Country from '../assets/icon/ic_globe.png';

const PersonalInfoScreen = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [passport, setPassport] = useState('');
  const [dob, setDob] = useState(null);
  const [country, setCountry] = useState('');
  const [countryOpt, setCountryOpt] = useState(true);

  useEffect(() => {
    console.log(dob, 'cek date ob');
  }, [dob]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <HeaderWithBack title={'Personal Info'} />

          <Image
            source={{uri: 'https://source.unsplash.com/1024x768/?profile'}}
            style={styles.imgProfile}
            resizeMode="cover"
          />

          <Text style={styles.txtName}>David Beckham</Text>
        </View>

        <View style={styles.content}>
          <TextInputOutlined
            icon={Name}
            label={'Name'}
            placeholder={'Enter your name here'}
            value={name}
            onChangeText={val => setName(val)}
          />
          <Spacing16 />
          <TextInputOutlined
            icon={Address}
            label={'Address'}
            placeholder={'Enter your address here'}
            value={address}
            onChangeText={val => setAddress(val)}
          />
          <Spacing16 />
          <TextInputOutlined
            icon={Passport}
            label={'Passport'}
            placeholder={'ED 25265 589'}
            value={passport}
            onChangeText={val => setPassport(val)}
          />
          <Spacing16 />
          <TextInputDate
            icon={Cake}
            label={'Date Of Birth'}
            placeholder={'12/05/1990'}
            value={dob}
            onSelectDate={val => {
              setDob(val);
              console.log(val, 'cek value date');
            }}
          />
          <Spacing16 />
          <TextInputOutlined
            icon={Country}
            label={'Country'}
            placeholder={'Enter your country here'}
            withOption={countryOpt}
            dataOption={[
              'Indonesia',
              'Singapore',
              'Malaysia',
              'Thailand',
              'Korea Selatan',
            ]}
            value={country}
            onChangeText={val => {
              setCountryOpt(true);
              setCountry(val);
            }}
            onSelect={event => {
              setCountryOpt(false);
              setCountry(
                event._dispatchInstances.memoizedProps.children[0].props
                  .children,
              );
            }}
          />
          <Spacing16 />

          <Button title={'Confirm'} btnHeight={responsiveHeight(50)} />
          <Pressable>
            <Text style={styles.txtRed}>Skip</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  content: {
    padding: 16,
  },
  imgProfile: {
    width: responsiveWidth(64),
    height: responsiveWidth(64),
    borderRadius: responsiveWidth(64),
    alignSelf: 'center',
    marginTop: 40,
  },
  txtName: {
    fontFamily: 'Inter-Medium',
    color: color.black,
    fontSize: responsiveWidth(16),
    textAlign: 'center',
    marginTop: 8,
  },
  txtRed: {
    fontFamily: 'Inter-Regular',
    color: 'red',
    fontSize: responsiveWidth(16),
    textAlign: 'center',
    marginTop: responsiveHeight(24),
  },
});

export default PersonalInfoScreen;
