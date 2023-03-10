import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {backgroundColor: 'white'},
  eventView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: hp(2),
  },
  individualEventView: {flexDirection: 'row'},
  groupImage: {flexDirection: 'row', marginLeft: wp(30)},
  calendarView: {marginTop: hp(0.4)},
  calendarText: {color: '#626262', fontSize: hp(1.8), marginLeft: wp(2)},
  participantsView: {
    flexDirection: 'row',
    marginLeft: wp(4),
    marginTop: hp(2),
  },
  participantsText: {color: '#858585', marginTop: hp(1.2), fontSize: hp(1.6)},
  GroupImageOne: {marginRight: wp(-5)},
  GroupImageTwo: {marginRight: wp(-4)},
  line: {
    width: wp('100%'),
    borderWidth: 1,
    borderColor: '#D2D2D2',
    marginTop: hp(3),
  },
  lecturerImage: {
    width: wp(20),
    height: hp(10),
    borderRadius: hp(10),
    marginTop: hp(3),
    marginLeft: wp(3),
  },
  lecturerDetails: {marginTop: hp(3), marginLeft: wp(10)},
  lecturerName: {
    marginBottom: hp(2),
    color: '#000000',
    fontSize: hp(2),
    fontWeight: '500',
  },
  lecturerDetailsView: {flexDirection: 'row', marginBottom: hp(0.6)},
  experienceImage: {marginTop: hp(0.2)},
  experienceText: {marginLeft: wp(2), color: '#858585'},
  descriptionText: {
    color: '#000000',
    fontSize: hp(2.6),
    fontWeight: '400',
    marginLeft: wp(4),
    marginTop: hp(2),
  },
  descriptionTextView: {width: '95%', marginLeft: wp(4), marginTop: hp(2)},
  topicsText: {fontSize: hp(2), marginTop: hp(2), color: '#626262'},
  topicsListView: {marginTop: hp(2)},
  dotView: {
    width: wp(2),
    height: hp(1),
    borderRadius: hp(20),
    backgroundColor: '#626262',
    marginTop: hp(1),
  },
  topicList: {marginLeft: wp(2), fontSize: hp(2)},
  cameraImageView: {
    width: wp(16),
    height: hp(8),
    //marginTop: hp(-3.6),
    backgroundColor: 'white',
    marginLeft: wp(19),
    borderRadius: hp(10),
    borderColor: '#7551FD',
    borderWidth: 1,
  },
  cameraImage: {
    backgroundColor: 'white',
    marginLeft: wp(0.8),
    marginTop: hp(0.6),
  },
});
