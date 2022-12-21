/* eslint-disable @typescript-eslint/no-unused-vars */
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {backgroundColor: '#f5f5f5', height: '100%'},
  searchBarView: {
    marginTop: hp(2),
    marginLeft: hp(1.5),
    width: wp('94%'),
  },
  headerText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000000',
    padding: hp(2),
  },
  searchBarInsideView: {
    borderRadius: hp('1%'),
    backgroundColor: '#DCDCDC',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchImage: {marginLeft: wp(4)},
  textInput: {
    marginLeft: hp(2),
    height: hp('6%'),
    fontSize: hp(2),
    fontFamily: 'Gotham-Bold',
    width: wp(90),
  },
  containerItems: {
    paddingTop: hp(3),
    height: hp('30%'),
  },
  categoryItemTextone: {
    width: wp('80%'),
    height: hp('21%'),
    alignSelf: 'center',
    marginHorizontal: hp(1.6),
    borderRadius: hp('1.8%'),
    //resizeMode: 'stretch',
    //borderWidth: 1,
    backgroundColor: '#E3DEF7',
  },
  cardItemDayText: {
    marginLeft: wp(6),
    width: wp(16),
    height: hp(3),
    marginTop: hp(4),
    borderRadius: hp(2),
    paddingLeft: wp(3.8),
    paddingTop: hp(0.4),
    color: 'white',
    backgroundColor: '#7551FD',
    fontSize: hp(1.4),
  },
  Line1: {
    height: '96%',
    width: 1,
    backgroundColor: '#CCBEFF',
    marginTop: hp(2.5),
    marginLeft: wp(2),
  },
  profileimagesview: {alignItems: 'center', marginTop: hp('2%')},
  profileimage: {
    width: wp('8%'),
    height: hp('4%'),
    borderRadius: hp(2),
    borderWidth: 1,
    borderColor: 'white',
  },
  cameraImageView: {
    marginLeft: hp('5%'),
    marginTop: hp('-4%'),
    borderRadius: hp(1),
  },
  containerItemsTwo: {
    paddingTop: hp(3),
    height: hp('30%'),
  },
  categoryItemTextTwo: {
    width: wp('80%'),
    height: hp('21%'),
    alignSelf: 'center',
    marginHorizontal: hp(1.6),
    borderRadius: hp('1.8%'),
    //resizeMode: 'stretch',
    //borderWidth: 1,
    backgroundColor: 'white',
  },
});
