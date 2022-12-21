/* eslint-disable no-unreachable */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {MultipleSelectList} from 'react-native-dropdown-select-list';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Check from 'react-native-vector-icons/AntDesign';
import Account from 'react-native-vector-icons/Ionicons';
import Drop from 'react-native-vector-icons/SimpleLineIcons';
import Topic from 'react-native-vector-icons/MaterialCommunityIcons';
import Graduation from 'react-native-vector-icons/Entypo';
import Search from 'react-native-vector-icons/Feather';
interface TopicType {
  id: number;
  value?: string;
  selected?: boolean;
  name?: string;
  select?: boolean;
}

interface College {
  id: number;
  name?: string;
  select?: boolean;
  selected?: boolean;
}
const topicsData: TopicType[] = [
  {id: 1, value: 'Agriculture & Forestry', selected: false},
  {id: 2, value: 'Applied Science & Professions', selected: false},
  {id: 3, value: 'Arts, Design & Architecture', selected: false},
  {id: 4, value: 'Business & Management', selected: false},
  {id: 5, value: 'Computer Science & IT', selected: false},
  {id: 6, value: 'Agriculture & Forestry', selected: false},
  {id: 7, value: 'Applied Science & Professions', selected: false},
  {id: 8, value: 'Arts, Design & Architecture', selected: false},
  {id: 9, value: 'Business & Management', selected: false},
  {id: 10, value: 'Computer Science & IT', selected: false},
];

const collegesList: College[] = [
  {id: 1, name: 'CMR IT Medchal', selected: false},
  {id: 2, name: 'JNTU Hyderabad', selected: false},
  {id: 3, name: 'Malla Reddy', selected: false},
  {id: 4, name: 'CMR IT Medchal', selected: false},
  {id: 5, name: 'JNTU Hyderabad', selected: false},
  {id: 6, name: 'Malla Reddy', selected: false},
];

const Profile = () => {
  const [isTopicClicked, setIsTopicClicked] = useState(false);
  const [topicList, setTopicList] = useState(topicsData);
  const [selectedTopics, setSelectedTopics] = useState<TopicType[]>([]);

  const [isUniversityClicked, setUniversityClicked] = useState(false);

  const [colleges, setColleges] = useState(collegesList);
  const [selectedColleges, setSelectedColleges] = useState<College[]>([]);

  const [isLookingForClicked, setIsLookingForClicked] = useState(false);

  const onTopicSelect = (item: TopicType) => {
    const findItem = selectedTopics.find(topic => topic.id === item.id);
    if (findItem) {
      const filteredItems = selectedTopics.filter(
        topic => topic.id !== item.id,
      );
      setSelectedTopics(filteredItems);
    } else {
      setSelectedTopics([...selectedTopics, item]);
    }
    const mappedTopics = topicList.map(topic => {
      if (topic.id === item.id) {
        return {...topic, selected: !topic.selected};
      } else {
        return topic;
      }
    });
    setTopicList(mappedTopics);
  };

  const onCollegeSelect = (item: College) => {
    const findItem = selectedColleges.find(college => college.id === item.id);
    if (findItem) {
      const filteredItems = selectedColleges.filter(
        college => college.id !== item.id,
      );
      setSelectedColleges(filteredItems);
    } else {
      setSelectedColleges([...selectedColleges, item]);
    }
    const mappedColleges = colleges.map(col => {
      if (col.id === item.id) {
        return {...col, selected: !col.selected};
      } else {
        return col;
      }
    });
    setColleges(mappedColleges);
  };

  //form
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const submit = () => {
    const mapedTopics = selectedTopics.map(topic => {
      return topic.value;
    });

    const mapedCollege = selectedColleges.map(college => {
      return college.name;
    });

    const formData = {
      firstName: firstName,
      lastName: lastName,
      selectedTopics: mapedTopics,
      selectedColleges: mapedCollege,
    };
    console.log(formData);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.profiletext}>Complete Profile</Text>
      <View style={styles.profileimagesview}>
        <Image
          source={require('../../Assets/Images/profile.jpeg')}
          style={styles.profileimage}
        />
        <View style={styles.cameraimageview}>
          <AntDesign name="camerao" size={22} style={styles.cameraicon} />
        </View>
      </View>
      <View style={styles.formview}>
        <View style={styles.firstnameview}>
          <Account
            name="person-outline"
            size={16}
            style={styles.firstnameprofile}
          />
          <TextInput
            style={styles.input}
            placeholder={'First Name'}
            placeholderTextColor={'grey'}
            value={firstName}
            onChangeText={text => setFirstName(text)}
          />
        </View>
        <View style={styles.firstnameview}>
          <Account
            name="person-outline"
            size={16}
            style={styles.firstnameprofile}
          />
          <TextInput
            style={styles.input}
            placeholder={'Last Name'}
            placeholderTextColor={'grey'}
            onChangeText={text => setLastName(text)}
            value={lastName}
          />
        </View>
        {/* university dropdown*/}
        {selectedColleges.length < 3 && (
          <View style={{marginTop: hp(1)}}>
            <Text
              style={{
                color: '#A689E1',
                fontSize: wp(3),
                marginLeft: wp(4.5),
              }}>
              Minimum 3 item should be selected
            </Text>
          </View>
        )}
        <TouchableOpacity
          style={[
            styles.dropdownview,
            {borderColor: isUniversityClicked ? '#A689E1' : '#F5F5F5'},
          ]}
          onPress={() => {
            setUniversityClicked(!isUniversityClicked);
          }}>
          <Graduation name="graduation-cap" size={16} />
          <Text style={styles.dropdowntext}>Select University College</Text>
          {isUniversityClicked ? (
            <Drop
              name="arrow-up"
              size={18}
              color="#A689E1"
              style={styles.dropicon}
            />
          ) : (
            <Drop name="arrow-down" size={18} style={styles.dropicon} />
          )}
        </TouchableOpacity>
        {isUniversityClicked ? (
          <View style={styles.universitydropdownlist}>
            <FlatList
              data={colleges}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    key={item.id}
                    style={styles.listview}
                    onPress={() => onCollegeSelect(item)}>
                    <View
                      style={[
                        styles.checkboxview,
                        {
                          backgroundColor: item.selected ? '#A689E1' : 'white',
                          borderColor: item.selected ? '#A689E1' : 'black',
                        },
                      ]}>
                      {item.selected ? (
                        <Check name="check" size={15} color="white" />
                      ) : null}
                    </View>
                    <Text style={{marginLeft: wp(2)}}>{item.name}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        ) : null}
        <View style={{marginLeft: wp(4)}}>
          <View style={styles.row}>
            {selectedColleges.map((item: any) => (
              <TouchableOpacity style={styles.selectedlistview}>
                <Text style={styles.selectedlistviewtext}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/*Topics dropdown*/}
        {selectedTopics.length < 3 && (
          <View style={{marginTop: hp(1)}}>
            <Text
              style={{
                color: '#A689E1',
                fontSize: wp(3),
                marginLeft: wp(4.5),
              }}>
              Minimum 3 item should be selected
            </Text>
          </View>
        )}
        <View>
          <TouchableOpacity
            style={[
              styles.dropdownview,
              {borderColor: isTopicClicked ? '#A689E1' : '#F5F5F5'},
            ]}
            onPress={() => {
              setIsTopicClicked(!isTopicClicked);
            }}>
            <Topic name="bookshelf" size={16} />
            <Text style={styles.dropdowntext}>Select interested topics</Text>
            {isTopicClicked ? (
              <Drop
                name="arrow-up"
                size={18}
                color="#A689E1"
                style={styles.dropicon}
              />
            ) : (
              <Drop name="arrow-down" size={18} style={styles.dropicon} />
            )}
          </TouchableOpacity>
          {isTopicClicked ? (
            <View style={styles.dropdownlist}>
              <FlatList
                data={topicList}
                renderItem={({item, index}) => {
                  return (
                    <TouchableOpacity
                      key={item.id}
                      style={styles.listview}
                      onPress={() => onTopicSelect(item)}>
                      <View
                        style={[
                          styles.checkboxview,
                          {
                            backgroundColor: item.selected
                              ? '#A689E1'
                              : 'white',
                            borderColor: item.selected ? '#A689E1' : 'black',
                          },
                        ]}>
                        {item.selected ? (
                          <Check name="check" size={15} color="white" />
                        ) : null}
                      </View>
                      <Text style={{marginLeft: wp(2)}}>{item.value}</Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          ) : null}
        </View>
        {/* <View style={{marginLeft: wp(4)}}>
          <View style={styles.row}>
            {selectedTopics.map((item: any) => (
              <TouchableOpacity style={styles.selectedlistview}>
                <Text style={styles.selectedlistviewtext}>{item.value}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View> */}
        {/* Lookingfor dropdown*/}
        <View>
          <TouchableOpacity
            style={[
              styles.dropdownview,
              {borderColor: isLookingForClicked ? '#A689E1' : '#F5F5F5'},
            ]}
            onPress={() => {
              setIsLookingForClicked(!isLookingForClicked);
            }}>
            <Search name="search" size={16} />
            <Text style={styles.dropdowntext}>What are you looking for </Text>
            {isLookingForClicked ? (
              <Drop
                name="arrow-up"
                size={18}
                color="#A689E1"
                style={styles.dropicon}
              />
            ) : (
              <Drop name="arrow-down" size={18} style={styles.dropicon} />
            )}
          </TouchableOpacity>
          {isLookingForClicked ? (
            <View style={styles.dropdownlist}>
              <FlatList
                data={colleges}
                renderItem={({item, index}) => {
                  return (
                    <TouchableOpacity
                      key={item.id}
                      style={styles.listview}
                      onPress={() => onCollegeSelect(item)}>
                      <View
                        style={[
                          styles.checkboxview,
                          {
                            backgroundColor: item.select ? '#A689E1' : 'white',
                            borderColor: item.select ? '#A689E1' : 'black',
                          },
                        ]}
                      />
                      <Text style={{marginLeft: wp(2)}}>{'items'}</Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          ) : null}
        </View>
        <TouchableOpacity style={styles.buttonview}>
          <Text style={styles.buttontext}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
