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
} from 'react-native';
import {Camera, ProfileImage, Verified} from '../../Utils/images';
import styles from './styles';
import Back from 'react-native-vector-icons/AntDesign';
import Edit from 'react-native-vector-icons/AntDesign';
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

const EditProfile = ({navigation}) => {
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

  return (
    <View style={styles.container}>
      <View style={styles.editView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Back name="left" size={20} style={styles.backButton} />
        </TouchableOpacity>
        <Text style={styles.editText}>Edit Profile</Text>
      </View>
      <View style={styles.profileImageView}>
        <ProfileImage />
        <TouchableOpacity style={styles.cameraImageView}>
          <Camera width={20} height={18} style={styles.cameraImage} />
        </TouchableOpacity>
      </View>
      <View style={styles.formView}>
        <View style={styles.firstNameView}>
          <Account
            name="person-outline"
            size={16}
            style={styles.firstNameIcon}
          />
          <TextInput
            style={styles.input}
            placeholder={'First Name'}
            placeholderTextColor={'grey'}
          />
          <Verified style={styles.verifiedButton} />
        </View>
        <View style={styles.lastNameView}>
          <Account
            name="person-outline"
            size={16}
            style={styles.lastNameIcon}
          />
          <TextInput
            style={styles.input}
            placeholder={'Last Name'}
            placeholderTextColor={'grey'}
          />
        </View>
        <View style={styles.addBioView}>
          <Edit name="edit" size={16} style={styles.addBioIcon} />
          <TextInput
            style={styles.editBioInput}
            multiline={true}
            numberOfLines={8}
            placeholder={'Add Bio'}
            placeholderTextColor={'grey'}
          />
        </View>
        {/* university dropdown*/}
        <TouchableOpacity
          style={[
            styles.dropDownView,
            {borderColor: isUniversityClicked ? '#7551FD' : '#F5F5F5'},
          ]}
          onPress={() => {
            setUniversityClicked(!isUniversityClicked);
          }}>
          <Graduation name="graduation-cap" size={16} />
          <Text style={styles.dropDownText}>Select University College</Text>
          {isUniversityClicked ? (
            <Drop
              name="arrow-up"
              size={18}
              color="#A689E1"
              style={styles.dropDropIcon}
            />
          ) : (
            <Drop name="arrow-down" size={18} style={styles.dropDropIcon} />
          )}
        </TouchableOpacity>
        {isUniversityClicked ? (
          <View style={styles.universityDropDownList}>
            <FlatList
              data={colleges}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    key={item.id}
                    style={styles.listView}
                    onPress={() => onCollegeSelect(item)}>
                    <View
                      style={[
                        styles.checkBoxView,
                        {
                          backgroundColor: item.selected ? '#7551FD' : 'white',
                          borderColor: item.selected ? '#7551FD' : 'black',
                        },
                      ]}>
                      {item.selected ? (
                        <Check name="check" size={15} color="white" />
                      ) : null}
                    </View>
                    <Text style={styles.listText}>{item.name}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        ) : null}
        {/*Topics dropdown*/}
        <View>
          <TouchableOpacity
            style={[
              styles.dropDownView,
              {borderColor: isTopicClicked ? '#7551FD' : '#F5F5F5'},
            ]}
            onPress={() => {
              setIsTopicClicked(!isTopicClicked);
            }}>
            <Topic name="bookshelf" size={16} />
            <Text style={styles.dropDownText}>Select interested topics</Text>
            {isTopicClicked ? (
              <Drop
                name="arrow-up"
                size={18}
                color="#A689E1"
                style={styles.topicDropDropIcon}
              />
            ) : (
              <Drop
                name="arrow-down"
                size={18}
                style={styles.topicDropDropIcon}
              />
            )}
          </TouchableOpacity>
          {isTopicClicked ? (
            <View style={styles.topicDropdownlist}>
              <FlatList
                data={topicList}
                renderItem={({item, index}) => {
                  return (
                    <TouchableOpacity
                      key={item.id}
                      style={styles.listView}
                      onPress={() => onTopicSelect(item)}>
                      <View
                        style={[
                          styles.checkBoxView,
                          {
                            backgroundColor: item.selected
                              ? '#7551FD'
                              : 'white',
                            borderColor: item.selected ? '#7551FD' : 'black',
                          },
                        ]}>
                        {item.selected ? (
                          <Check name="check" size={15} color="white" />
                        ) : null}
                      </View>
                      <Text style={styles.listText}>{item.value}</Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          ) : null}
        </View>
        {/* Lookingfor dropdown*/}
        <View>
          <TouchableOpacity
            style={[
              styles.dropDownView,
              {borderColor: isLookingForClicked ? '#7551FD' : '#F5F5F5'},
            ]}
            onPress={() => {
              setIsLookingForClicked(!isLookingForClicked);
            }}>
            <Search name="search" size={16} />
            <Text style={styles.dropDownText}>What are you looking for </Text>
            {isLookingForClicked ? (
              <Drop
                name="arrow-up"
                size={18}
                color="#A689E1"
                style={styles.dropDropIcon}
              />
            ) : (
              <Drop name="arrow-down" size={18} style={styles.dropDropIcon} />
            )}
          </TouchableOpacity>
          {isLookingForClicked ? (
            <View style={styles.lookingForDropDownList}>
              <FlatList
                data={colleges}
                renderItem={({item, index}) => {
                  return (
                    <TouchableOpacity
                      key={item.id}
                      style={styles.listView}
                      onPress={() => onCollegeSelect(item)}
                    />
                  );
                }}
              />
            </View>
          ) : null}
        </View>
        <TouchableOpacity style={styles.buttonView}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditProfile;
