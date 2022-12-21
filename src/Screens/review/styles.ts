import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {backgroundColor: '#7551fd1a', flex: 1},
  profileImageView: {
    alignItems: 'center',
    marginTop: hp(15),
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: wp(10),
    borderTopRightRadius: wp(10),
    flex: 1,
  },
  profileImage: {marginTop: hp(-10)},
  rating: {marginTop: hp(2)},
  line: {
    height: hp(3),
    width: 1,
    backgroundColor: '#CCBEFF',
    marginLeft: wp(2),
    marginRight: wp(2),
  },
  ratingText: {fontSize: hp(2), fontWeight: '600'},
  ratingTextView: {flexDirection: 'row', alignSelf: 'center', marginTop: hp(2)},
  reviewText: {
    fontSize: hp(2),
    alignSelf: 'center',
    marginTop: hp(2.4),
    color: '#858585',
  },
  reviewView: {
    marginTop: hp(6),
    borderWidth: 1,
    width: wp('90%'),
    height: hp('8%'),
    borderRadius: hp(2),
    borderColor: '#B9A7FD',
  },
  commentText: {marginLeft: wp(4)},
  commentsText: {marginLeft: wp(8.4), marginTop: hp(2)},
  commentName: {color: '#858585', marginLeft: hp(4.2), marginTop: hp(2)},
  horizontalLine: {
    width: wp('90%'),
    borderWidth: hp(0.1),
    marginTop: hp(3),
    borderColor: '#DBD2D2',
  },
  profileImageIcon: {marginLeft: wp(1)},
  bottomTabView: {
    elevation: 35,
    paddingVertical: 15,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    shadowOpacity: 18,
    shadowRadius: 10,
    shadowOffset: {
      height: 10,
      width: 1,
    },
  },
  homeIcon: {marginRight: wp(14)},
  universityIcon: {marginRight: wp(16)},
});
