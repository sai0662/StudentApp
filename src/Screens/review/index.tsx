/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-shadow */
import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import {CommentProfile, ProfileImage, Rating} from '../../Utils/images';
import {HomeIcon, Events, University, Account} from '../../Utils/images';

const reviews = [
  {
    id: 1,
    comment: 'Brilliant Job',
    commentText: 'Good Knowledge about the content',
    name: 'Dean Jones',
    time: '20 mins ago',
  },
  {
    id: 2,
    comment: 'Good Communicator',
    commentText:
      'Great communicator and a very good Counselor.Understand the requirement well',
    name: 'Dean Jones',
    time: '20 mins ago',
  },
  {
    id: 3,
    comment: 'Good Communicator',
    commentText:
      'Great communicator and a very good Counselor.Understand the requirement well',
    name: 'Dean Jones',
    time: '20 mins ago',
  },
];
const Reviews = () => {
  const [Reviews] = useState(reviews);
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profileImageView}>
          <ProfileImage style={styles.profileImage} />
          <Rating style={styles.rating} />
          <View style={styles.ratingTextView}>
            <Text style={styles.ratingText}>Average</Text>
            <View style={styles.line} />
            <Text style={styles.ratingText}>(5k Reviews)</Text>
          </View>
          <View style={styles.reviewView}>
            <Text style={styles.reviewText}>Write A Review</Text>
          </View>
          <View>
            {Reviews.map(item => (
              <View style={{marginTop: 30}}>
                <View style={{flexDirection: 'row'}}>
                  <CommentProfile style={styles.profileImageIcon} />
                  <Text style={styles.commentText}>{item.comment}</Text>
                </View>
                <Rating style={{marginLeft: 34}} />
                <Text style={styles.commentsText}>{item.commentText}</Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.commentName}>{item.name}</Text>
                  <Text style={styles.commentName}>{item.time}</Text>
                </View>
                <View style={styles.horizontalLine} />
              </View>
            ))}
          </View>
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

export default Reviews;
