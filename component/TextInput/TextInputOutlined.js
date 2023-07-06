/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';

// CONSTANT
import color from '../../constant/color';
import {responsiveHeight, responsiveWidth} from '../../constant/responsive';

const TextInputOutlined = ({
  label = 'label',
  placeholder = '',
  value,
  onChangeText,
  icon,
  withOption,
  dataOption = ['option a', 'option b', 'option c'],
  onSelect,
  ...props
}) => {
  const [isFocused, setFocused] = useState(false);
  const [listOption, setListOption] = useState(dataOption);

  const searchKeyword = searchedText => {
    var searchedKeyword = dataOption?.filter(function (dataOption) {
      return dataOption.toLowerCase().indexOf(searchedText?.toLowerCase()) > -1;
    });
    setListOption(searchedKeyword);
  };

  const onChangeInput = val => {
    onChangeText();
    withOption ? searchKeyword(val) : null;
  };

  return (
    <>
      <TextInput
        mode="outlined"
        label={<Text>{label}</Text>}
        value={value}
        onChangeText={val => onChangeInput(val)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        underlineColor="transparent"
        activeUnderlineColor="transparent"
        activeOutlineColor={color.primary_green}
        outlineStyle={styles.input}
        selectionColor={color.primary_green}
        left={
          <TextInput.Icon
            icon={icon}
            style={{marginTop: responsiveWidth(12)}}
          />
        }
        style={{height: responsiveHeight(55)}}
        theme={{colors: {primary: 'whit'}}}
        {...props}
      />

      {withOption && isFocused ? (
        <View style={styles.select}>
          {listOption.length > 0
            ? listOption.map(x => {
                return (
                  <Pressable onPress={onSelect}>
                    <Text style={[styles.txtLabel, {marginVertical: 4}]}>
                      {x}
                    </Text>
                  </Pressable>
                );
              })
            : null}
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: color.borderGray,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  content: {
    paddingBottom: responsiveHeight(20),
    fontFamily: 'Inter-Regular',
    fontSize: responsiveWidth(14),
    height: responsiveHeight(55),
  },
  txtLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: color.gray,
  },
  select: {
    backgroundColor: color.white,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: color.borderGray,
    marginTop: 8,
    paddingHorizontal: 12,
  },
});

export default TextInputOutlined;
