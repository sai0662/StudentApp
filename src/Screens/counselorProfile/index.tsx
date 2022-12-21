/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {
  Cap,
  ProfileImage,
  SignOut,
  Delete,
  HomeIcon,
  Events,
  Account,
  University,
} from '../../Utils/images';
import Location from 'react-native-vector-icons/EvilIcons';
import Edit from 'react-native-vector-icons/Octicons';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {Bag} from '../../Utils/images';

interface Topics {
  id: number;
  title?: string;
}

const topics: Topics[] = [
  {id: 1, title: 'Computer science & IT'},
  {id: 2, title: 'Agriculture & Forestry'},
  {id: 3, title: 'Art & Design'},
  {id: 4, title: 'Applied Science'},
];
const CounselorProfile = () => {
  const [courseList] = useState(topics);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: hp(2),
        }}>
        <Text style={{color: '#7551FD', fontSize: hp(2), fontWeight: '500'}}>
          My Profile
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Event')}>
          <Text style={{color: '#7551FD', fontSize: hp(2), fontWeight: '500'}}>
            My Reviews
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{width: wp('100%'), borderColor: '#D2D2D2', borderWidth: 1}}
      /> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profileImageView}>
          <ProfileImage style={styles.profileImage} />
          <View style={styles.editView}>
            <Edit
              name="pencil"
              size={16}
              color="#A689E1"
              style={styles.editImage}
            />
            <Text style={styles.editText}>Edit Profile</Text>
          </View>
          <View style={styles.profileNameView}>
            <Text style={styles.profileName}>Mr. Peter Jones</Text>
          </View>
          <View style={styles.locationView}>
            <Location name="location" size={20} style={styles.locationIcon} />
            <Text style={styles.locationText}>California, Los Angeles</Text>
          </View>
          <Text style={styles.bioTextOne}>
            Hello myself peter, Iam here to assist
          </Text>
          <Text style={styles.bioTextTwo}>you in choosing the best...</Text>
          <View style={styles.experienceView}>
            <View style={styles.universityTextView}>
              <Cap width={16} height={20} style={styles.capIcon} />
              <Text style={styles.univerText}>NY University</Text>
            </View>
            <View style={styles.Line1} />
            <View style={styles.expTextView}>
              <Bag width={16} height={20} style={styles.capIcon} />
              <Text style={styles.expText}>5 Yrs of Experience</Text>
            </View>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.universityListView}>
              {courseList.map((item: any) => (
                <View style={styles.selectedListView}>
                  <Text style={styles.selectedListViewText}>{item.title}</Text>
                </View>
              ))}
            </View>
          </ScrollView>
          <View style={styles.line} />
          <View style={styles.universityView}>
            <SignOut style={styles.capImage} width={16} height={18} />
            <Text style={styles.universityText}>Log out</Text>
          </View>
          <View style={styles.line} />
          <View style={styles.deleteView}>
            <Delete style={styles.capImage} width={16} height={18} />
            <Text style={styles.deleteText}>Delete Account</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomTabView}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <HomeIcon style={styles.homeIcon} />
        </TouchableOpacity>
        <Events style={styles.homeIcon} />
        <University style={styles.universityIcon} />
        <Account />
      </View>
    </View>
  );
};

export default CounselorProfile;
