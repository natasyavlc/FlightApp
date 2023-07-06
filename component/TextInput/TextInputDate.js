/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
import React, {useState} from 'react';
import {StyleSheet, Text, Pressable, Platform, Dimensions} from 'react-native';
import {TextInput} from 'react-native-paper';
// import DatePicker from 'react-native-date-picker';
import DatePicker from 'react-native-datepicker';
import color from '../../constant/color';
import {responsiveHeight, responsiveWidth} from '../../constant/responsive';

const TextInputDate = ({
  label = 'label',
  placeholder = 'placeholder',
  mode = 'date',
  value,
  icon,
  onSelectDate,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(value);
  const dateString = new Date(date).toLocaleString();

  return (
    <Pressable onPress={() => setOpen(true)}>
      {/* <TextInput
        mode="outlined"
        label={<Text>{label}</Text>}
        value={
          mode === 'date'
            ? dateString.substring(0, dateString.indexOf(','))
            : dateString.substring(
                dateString.indexOf(',') + 1,
                dateString.indexOf(',') + 7,
              )
        }
        onChangeText={val => {
          console.log(val, dateString, 'lha ini val');
          onSelectDate(dateString);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
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
        theme={{colors: {primary: 'red'}}}
        {...props}
      />
      <DatePicker
        modal
        locale={'en_GB'}
        open={open}
        date={date}
        maximumDate={new Date()}
        mode={mode}
        onDateChange={date => {
          console.log(date, 'cek date');
          setOpen(false);
          setDate(date);
        }}
        onConfirm={date => {
          console.log(date, 'cek date');
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      /> */}
      {/* <DatePicker
        style={{
          width: Dimensions.get('window').width / 2 - 30,
          marginTop: Platform.OS === 'ios' ? 10 : 5,
          marginBottom: 10,
        //   backgroundColor: 'yellow',
          height: responsiveHeight(54),
        }}
        date={value}
        mode="date"
        placeholder={placeholder}
        format="DD/MM/YYYY"
        maxDate={new Date()}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            right: 10,
          },
          dateInput: {
            borderRadius: 8,
            alignItems: 'flex-start',
            paddingLeft: 10,
            height: 200 * 0.06,
            borderColor: '#BCC8E7',
          },
        }}
        onDateChange={onSelectDate}
        iconComponent={
          icon
          //   <Calendar size={20} style={{position: 'absolute', right: 10}} />
        }
      /> */}

      <DatePicker
        style={styles.containerPicker}
        date={date}
        mode={mode}
        placeholder={placeholder}
        format="DD-MM-YYYY"
        is24Hour
        maxDate={new Date()}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 4,
            width: 20,
            height: 20,
          },
          dateInput: {
            marginLeft: 36,
            borderColor: 'transparent',
          },
        }}
        iconSource={icon}
        onDateChange={date => setDate(date)}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: color.white,
    borderWidth: 1,
    borderColor: color.borderGray,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  containerPicker: {
    borderColor: color.borderGray,
    borderRadius: 8,
    borderWidth: 1,
    color: 'red',
  },
});

export default TextInputDate;
