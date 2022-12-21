/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {ScrollView, Text, View, FlatList, TouchableOpacity} from 'react-native';
import {
  Cap,
  ProfileBg,
  ProfileImg,
  Topics,
  Events,
  University,
  SignOut,
  Delete,
  Account,
  HomeIcon,
} from '../../Utils/images';
import styles from './styles';
import Edit from 'react-native-vector-icons/Octicons';

interface College {
  id: number;
  name?: string;
}

interface Topics {
  id: number;
  title?: string;
}

const colleges: College[] = [
  {
    id: 1,
    name: 'School of Visual Arts',
  },
  {
    id: 2,
    name: 'Georgia Tech',
  },
  {
    id: 3,
    name: 'Yale university',
  },
  {
    id: 4,
    name: 'Stanford university',
  },
  {
    id: 5,
    name: 'five',
  },
  {
    id: 6,
    name: 'six',
  },
  {
    id: 7,
    name: 'seven',
  },
  {
    id: 8,
    name: 'eight',
  },
  {
    id: 9,
    name: 'collegenine',
  },
  {
    id: 10,
    name: 'collegeten',
  },
  // {
  //   id: 9,
  //   name: 'collegenine',
  // },
  // {
  //   id: 10,
  //   name: 'collegeten',
  // },
];

const topics: Topics[] = [
  {id: 1, title: 'Mathematics'},
  {id: 2, title: 'Computer science & IT'},
  {id: 3, title: 'Biology'},
  {id: 1, title: 'Mathematics'},
  {id: 2, title: 'Computer science & IT'},
  {id: 3, title: 'Biology'},
];

const StudentProfile = ({navigation}) => {
  const [collegesList] = useState(colleges);
  const [courseList] = useState(topics);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.profileView}>
          <Text style={styles.profileText}>Profile</Text>
        </View>
        <View style={styles.profileImageView}>
          <ProfileBg />
          <ProfileImg style={styles.profileImage} />
          <TouchableOpacity style={styles.editView} onPress={() => navigation.navigate('EditProfile')}>
            <Edit
              name="pencil"
              size={16}
              color="#A689E1"
              style={styles.editImage}
            />
            <Text style={styles.editText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.profileNameView}>
          <Text style={styles.profileNameText}>David Stone</Text>
        </View>
        <View style={styles.studentNameView}>
          <Text style={styles.studentText}>Student</Text>
        </View>
        <View style={styles.bioTextView}>
          <Text style={styles.bioTextOne}>
            I am here for guidance with my college application
          </Text>
          <Text style={styles.bioTextTwo}>and university selection</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.universityView}>
          <Cap style={styles.capImage} width={16} height={18} />
          <Text style={styles.universityText}>Intrested University</Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.universityListView}>
            {collegesList.map((item: any) => (
              <View style={styles.selectedListView}>
                <Text style={styles.selectedListViewText}>{item.name}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
        <View style={styles.lineTwo} />
        <View style={styles.universityView}>
          <Topics style={styles.capImage} width={16} height={18} />
          <Text style={styles.universityText}>Intrested Topics</Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.topicListView}>
            {courseList.map((item: any) => (
              <View style={styles.topicSelectedListView}>
                <Text style={styles.topicSelectedListText}>{item.title}</Text>
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
        <View style={styles.universityView}>
          <Delete style={styles.capImage} width={16} height={18} />
          <Text style={styles.deleteText}>Delete Account</Text>
        </View>
      </ScrollView>
      <View style={styles.bottomTabView}>
        <HomeIcon style={styles.homeIcon} />
        <Events style={styles.homeIcon} />
        <University style={styles.universityIcon} />
        <Account />
      </View>
    </View>
  );
};

export default StudentProfile;
