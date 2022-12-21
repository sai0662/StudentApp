/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Back from 'react-native-vector-icons/AntDesign';
import Account from 'react-native-vector-icons/Ionicons';
import Check from 'react-native-vector-icons/AntDesign';
import Edit from 'react-native-vector-icons/AntDesign';
import Graduation from 'react-native-vector-icons/Entypo';
import Location from 'react-native-vector-icons/EvilIcons';
import Drop from 'react-native-vector-icons/SimpleLineIcons';
import {
  ProfileImage,
  Camera,
  Verified,
  Pronouns,
  ExperienceImage,
  Expert,
} from '../../Utils/images';
import styles from './styles';

interface Pronouns {
  id: number;
  name: string;
  selected: boolean;
}

interface College {
  id: number;
  name?: string;
  select?: boolean;
  selected?: boolean;
}
const pronounsList: Pronouns[] = [
  {id: 1, name: 'MR', selected: false},
  {id: 2, name: 'MRs', selected: false},
];

const collegesList: College[] = [
  {id: 1, name: 'CMR IT Medchal', selected: false},
  {id: 2, name: 'JNTU Hyderabad', selected: false},
  {id: 3, name: 'Malla Reddy', selected: false},
  {id: 4, name: 'CMR IT Medchal', selected: false},
  {id: 5, name: 'JNTU Hyderabad', selected: false},
  {id: 6, name: 'Malla Reddy', selected: false},
];

const expertList: College[] = [
  {id: 1, name: 'Business', selected: false},
  {id: 2, name: 'Computer Science', selected: false},
  {id: 3, name: 'Agriculture', selected: false},
];
const EditCounselorProfile = () => {
  const [pronouns, setPronouns] = useState(pronounsList);
  const [isPronounsClicked, setIsPronounsClicked] = useState(false);
  const [selectedPronouns, setSelectedPronouns] = useState<Pronouns[]>([]);

  const [isUniversityClicked, setUniversityClicked] = useState(false);
  const [colleges, setColleges] = useState(collegesList);
  const [selectedColleges, setSelectedColleges] = useState<College[]>([]);

  const [expert, setExpert] = useState(expertList);
  const [isExpClicked, setIsExpClicked] = useState(false);

  const onPronounsSelect = (item: Pronouns) => {
    const findItem = selectedPronouns.find(pro => pro.id === item.id);
    if (findItem) {
      const filteredItems = selectedPronouns.filter(pro => pro.id !== item.id);
      setSelectedPronouns(filteredItems);
    } else {
      setSelectedPronouns([...selectedPronouns, item]);
    }
    const mappedPronouns = pronouns.map(pro => {
      if (pro.id === item.id) {
        return {...pro, selected: !pro.selected};
      } else {
        return pro;
      }
    });
    setPronouns(mappedPronouns);
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
    <ScrollView style={styles.container}>
      <View style={styles.editView}>
        <TouchableOpacity>
          <Back name="left" size={20} style={styles.backButton} />
        </TouchableOpacity>
        <Text style={styles.editText}>Edit Profile</Text>
      </View>
      <View style={styles.profileImageView}>
        <ProfileImage />
        <TouchableOpacity style={styles.cameraImageView}>
          <Camera width={18} height={16} style={styles.cameraImage} />
        </TouchableOpacity>
      </View>
      <View style={styles.formView}>
        <TouchableOpacity
          style={[
            styles.dropDownView,
            {borderColor: isPronounsClicked ? '#7551FD' : '#F5F5F5'},
          ]}
          onPress={() => {
            setIsPronounsClicked(!isPronounsClicked);
          }}>
          <Pronouns size={16} />
          <Text style={styles.dropDownText}>Select University College</Text>
          {isPronounsClicked ? (
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
        {isPronounsClicked ? (
          <View style={styles.pronounsDropDownList}>
            <FlatList
              data={pronouns}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    key={item.id}
                    style={styles.listView}
                    onPress={() => onPronounsSelect(item)}>
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
        <View style={styles.firstNameView}>
          <Account
            name="person-outline"
            size={16}
            style={styles.firstNameIcon}
          />
          <TextInput
            style={styles.input}
            placeholder={'Peter'}
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
        <View style={styles.firstNameView}>
          <ExperienceImage style={styles.firstNameIcon} />
          <TextInput
            style={styles.input}
            placeholder={'Years of experience'}
            placeholderTextColor={'grey'}
          />
        </View>
        <View style={styles.firstNameView}>
          <Location name="location" size={20} style={styles.firstNameIcon} />
          <TextInput
            style={styles.input}
            placeholder={'Location'}
            placeholderTextColor={'grey'}
          />
          <ActivityIndicator color="#7551FD" style={styles.loader} />
        </View>
        {/* Expertise dropdown*/}
        <TouchableOpacity
          style={[
            styles.dropDownView,
            {borderColor: isExpClicked ? '#7551FD' : '#F5F5F5'},
          ]}
          onPress={() => {
            setIsExpClicked(!isExpClicked);
          }}>
          <Expert />
          <Text style={styles.dropDownText}>Field of expertise</Text>
          {isExpClicked ? (
            <Drop
              name="arrow-up"
              size={18}
              color="#A689E1"
              style={styles.dropDropExperIcon}
            />
          ) : (
            <Drop
              name="arrow-down"
              size={18}
              style={styles.dropDropExperIcon}
            />
          )}
        </TouchableOpacity>
        {isExpClicked ? (
          <View style={styles.ExpDropDownList}>
            <FlatList
              data={expert}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    key={item.id}
                    style={styles.listView}
                    onPress={() => onCollegeSelect(item)}>
                    <Text style={styles.listText}>{item.name}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        ) : null}
      </View>
      <TouchableOpacity style={styles.buttonView}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default EditCounselorProfile;
