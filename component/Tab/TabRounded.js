import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// CONSTAMT
import color from '../../constant/color';
import {responsiveHeight} from '../../constant/responsive';

const TabRounded = ({
  category = ['One Way', 'Round', 'Multicity'],
  valueTab = 0,
  onPressTab,
}) => {
  const [tabValue, setTabValue] = useState(valueTab);
  return (
    <View style={styles.container}>
      {category.map((item, id) => {
        return (
          <TouchableOpacity
            key={id}
            style={[
              styles.tab,
              {
                backgroundColor:
                  tabValue === id ? color.primary_green : color.white,
              },
            ]}
            activeOpacity={valueTab}
            onPress={() => {
              setTabValue(id);
              onPressTab(id);
            }}>
            <Text
              style={[
                styles.txtTab,
                {color: tabValue === id ? color.white : color.gray},
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    elevation: 5,
    shadowColor: '#591B1B',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    height: responsiveHeight(36),
    borderRadius: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tab: {
    flexDirection: 'row',
    backgroundColor: color.primary_green,
    width: (Dimensions.get('window').width - 44) / 3,
    height: responsiveHeight(36),
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtTab: {
    fontFamily: 'Inter-Regular',
    fontSize: responsiveHeight(14),
  },
});

export default TabRounded;
