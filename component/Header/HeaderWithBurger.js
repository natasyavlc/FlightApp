import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// CONSTATNT
import {responsiveWidth} from '../../constant/responsive';

// ICON
import Menu from '../../assets/icon/ic_menu.png';

const HeaderWithBurger = ({title = 'title', onClickMenu}) => {
  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        <Text style={styles.title}>{title}</Text>
        <Pressable onPress={onClickMenu}>
          <Image source={Menu} style={styles.icon} resizeMode="contain" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    fontSize: responsiveWidth(20),
    fontFamily: 'Inter-Bold',
    textAlign: 'center',
    marginRight: 'auto',
    marginLeft: '28%',
    justifyContent: 'center',
    width: Dimensions.get('window').width / 2 - 32,
  },
  icon: {
    width: responsiveWidth(24),
    height: responsiveWidth(24),
  },
});

export default HeaderWithBurger;
