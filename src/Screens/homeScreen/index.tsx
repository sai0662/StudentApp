/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './styles';
import {
  Bag,
  Cap,
  Clock,
  Events,
  GroupImage,
  GroupImage2,
  Search,
  Star,
  University,
  Account,
  HomeIcon,
} from '../../Utils/images';
import Right from 'react-native-vector-icons/AntDesign';
import CarouselItemOne from '../../data/carouselItemOne';
import CarouselItemTwo from '../../data/carouselItemTwo';

const HomeScreen = ({navigation}) => {
  const renderCarouselItemone = ({item}) => {
    return (
      <View style={styles.containerItems}>
        <TouchableOpacity
          style={styles.categoryItemTextone}
          onPress={() => navigation.navigate('Counselor')}>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Text style={styles.cardItemDayText}>{item.Day}</Text>
              <View style={{width: wp(25), marginTop: hp(3)}}>
                <Text
                  style={{
                    marginLeft: wp(11),
                    fontSize: hp(2.4),
                    color: '#000000',
                  }}>
                  {item.Date}
                </Text>
                <Text
                  style={{
                    marginLeft: wp(9),
                    fontSize: hp(2.4),
                    color: '#000000',
                  }}>
                  {item.Month}
                </Text>
              </View>
            </View>
            <View style={styles.Line1} />
            <View>
              <Text
                style={{
                  fontSize: hp(2.6),
                  fontWeight: '400',
                  color: '#404040',
                  marginLeft: wp(5),
                  marginTop: hp(3.5),
                }}>
                {item.Text}
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Clock style={{marginLeft: wp(5.2), marginTop: hp(2)}} />
                <Text
                  style={{
                    fontSize: hp(1.6),
                    marginLeft: wp(2),
                    marginTop: hp(1.6),
                  }}>
                  {item.Time}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: wp(5),
                  marginTop: hp(2),
                }}>
                <GroupImage style={{marginRight: wp(-2)}} />
                <GroupImage2 style={{marginRight: wp(-2)}} />
                <GroupImage style={{marginRight: wp(-2)}} />
                <GroupImage2 />
                <Text
                  style={{
                    fontSize: hp(1.2),
                    marginLeft: wp(2),
                    marginTop: hp(0.4),
                  }}>
                  +8 Students Joined
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderCarouselItemTwo = ({item}) => {
    return (
      <TouchableOpacity style={styles.containerItemsTwo}>
        <View style={styles.categoryItemTextTwo}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={item.image}
              style={{
                height: hp(18),
                marginTop: hp(1.6),
                borderRadius: hp(2),
                marginLeft: wp(3.5),
              }}
            />
            <View style={{marginLeft: wp(4), marginTop: hp(3)}}>
              <Text
                style={{
                  marginBottom: hp(2),
                  color: '#000000',
                  fontSize: hp(2),
                  fontWeight: '500',
                }}>
                {item.counselorName}
              </Text>
              <View style={{flexDirection: 'row', marginBottom: hp(0.6)}}>
                <Bag style={{marginTop: hp(0.2)}} width={16} height={20} />
                <Text style={{marginLeft: wp(2), color: '#858585'}}>
                  {item.Experience}
                </Text>
              </View>
              <View style={{flexDirection: 'row', marginBottom: hp(0.6)}}>
                <Cap style={{marginTop: hp(0.2)}} width={16} height={20} />
                <Text style={{marginLeft: wp(2), color: '#858585'}}>
                  {item.University}
                </Text>
              </View>
              <View style={{flexDirection: 'row', marginBottom: hp(0.6)}}>
                <Star style={{marginTop: hp(0.2)}} width={16} height={20} />
                <Text style={{marginLeft: wp(2), color: '#7551FD'}}>
                  {item.Rating}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.headerText}>Hi Student!</Text>
        <View style={styles.searchBarView}>
          <View style={styles.searchBarInsideView}>
            <Search style={styles.searchImage} />
            <TextInput style={styles.textInput} placeholder="Search" />
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: hp(2)}}>
          <View style={{marginLeft: wp(3)}}>
            <Text style={{fontSize: hp(2), color: '#000000'}}>My</Text>
            <Text
              style={{fontSize: hp(3), color: '#000000', fontWeight: '400'}}>
              Events
            </Text>
          </View>
          <Text
            style={{
              marginLeft: wp('56%'),
              marginTop: hp(2.4),
              color: '#7551FD',
            }}>
            View all
          </Text>
          <Right
            name="right"
            size={11}
            color="#7551FD"
            style={{marginTop: hp(3), marginLeft: wp(1.8)}}
          />
        </View>
        <View>
          <FlatList
            data={CarouselItemOne}
            renderItem={renderCarouselItemone}
            keyExtractor={item => item.Date}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            scrollEventThrottle={32}
          />
        </View>
        <View style={{flexDirection: 'row', marginTop: hp(-2)}}>
          <View style={{marginLeft: wp(3)}}>
            <Text style={{fontSize: hp(2), color: '#000000'}}>Find your</Text>
            <Text
              style={{fontSize: hp(3), color: '#000000', fontWeight: '400'}}>
              Counselor
            </Text>
          </View>
          <Text
            style={{
              marginLeft: wp('47%'),
              marginTop: hp(2.4),
              color: '#7551FD',
            }}>
            View all
          </Text>
          <Right
            name="right"
            size={11}
            color="#7551FD"
            style={{marginTop: hp(3), marginLeft: wp(1.8)}}
          />
        </View>
        <View>
          <FlatList
            data={CarouselItemTwo}
            renderItem={renderCarouselItemTwo}
            keyExtractor={item => item.Experience}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            scrollEventThrottle={32}
          />
        </View>
        <View style={{flexDirection: 'row', marginTop: hp(-2)}}>
          <View style={{marginLeft: wp(3)}}>
            <Text style={{fontSize: hp(2), color: '#000000'}}>Find your</Text>
            <Text
              style={{fontSize: hp(3), color: '#000000', fontWeight: '400'}}>
              University
            </Text>
          </View>
          <Text
            style={{
              marginLeft: wp('47%'),
              marginTop: hp(2.4),
              color: '#7551FD',
            }}>
            View all
          </Text>
          <Right
            name="right"
            size={11}
            color="#7551FD"
            style={{marginTop: hp(3), marginLeft: wp(1.8)}}
          />
        </View>
        <View>
          <FlatList
            data={CarouselItemTwo}
            renderItem={renderCarouselItemTwo}
            keyExtractor={item => item.Experience}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            scrollEventThrottle={32}
          />
        </View>
      </ScrollView>
      <View
        style={{
          paddingVertical: 15,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <View>
          <HomeIcon style={{marginRight: wp(14)}} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Event')}>
          <Events style={{marginRight: wp(16)}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Event')}>
          <University style={{marginRight: wp(16)}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Account />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
