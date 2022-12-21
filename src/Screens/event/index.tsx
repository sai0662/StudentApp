/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import Calendar from 'react-native-vector-icons/AntDesign';
import Clock from 'react-native-vector-icons/AntDesign';
import {GroupImage, GroupImage2, Cap, Bag} from '../../Utils/images';
import styles from './styles';

const topics = [
  {
    name: 'Curriculum',
  },
  {
    name: 'college applications',
  },
  {
    name: 'Student Exchange Programs',
  },
  {
    name: 'Career Opportunities',
  },
];
const Event = () => {
  const [List] = useState(topics);
  return (
    <View style={styles.container}>
      <View style={styles.eventView}>
        <View style={styles.individualEventView}>
          <Calendar
            name="calendar"
            size={16}
            color="#7551FD"
            style={styles.calendarView}
          />
          <Text style={styles.calendarText}>Friday, December 23</Text>
        </View>
        <View style={styles.individualEventView}>
          <Clock
            name="clockcircleo"
            size={16}
            color="#7551FD"
            style={styles.calendarView}
          />
          <Text style={styles.calendarText}>10:00 AM - 11:00 AM</Text>
        </View>
      </View>
      <View style={styles.participantsView}>
        <Text style={styles.participantsText}>+8 Participants Joined</Text>
        <View style={styles.groupImage}>
          <GroupImage style={styles.GroupImageOne} width={40} height={40} />
          <GroupImage2 style={styles.GroupImageTwo} width={40} height={40} />
          <GroupImage style={styles.GroupImageOne} width={40} height={40} />
          <GroupImage2 width={40} height={40} />
        </View>
      </View>
      <View style={styles.line} />
      <View style={styles.individualEventView}>
        <Image
          source={require('../../Assets/Images/lecturer.png')}
          style={styles.lecturerImage}
        />
        <View style={styles.lecturerDetails}>
          <Text style={styles.lecturerName}>James Ciena</Text>
          <View style={styles.lecturerDetailsView}>
            <Bag style={styles.experienceImage} width={16} height={20} />
            <Text style={styles.experienceText}>5 Yrs of Experience</Text>
          </View>
          <View style={styles.lecturerDetailsView}>
            <Cap style={styles.experienceImage} width={16} height={20} />
            <Text style={styles.experienceText}>Yale University</Text>
          </View>
        </View>
      </View>
      <View style={styles.line} />
      <View>
        <Text style={styles.descriptionText}>Description</Text>
        <View style={styles.descriptionTextView}>
          <Text>
            Yale University aims to empower high schools with professional
            development opportunities and ensure that every high school globally
            will run a robust,well-resourced career and college counseling
            office.
          </Text>
          <Text style={styles.topicsText}>Topics:</Text>

          <View style={styles.topicsListView}>
            {List.map(item => (
              <View style={styles.individualEventView}>
                <View style={styles.dotView} />
                <Text style={styles.topicList}>{item.name}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Event;
