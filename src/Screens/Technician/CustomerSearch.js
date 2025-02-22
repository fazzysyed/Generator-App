import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useFocusEffect} from '@react-navigation/native';

import Layout from '../../components/Layout';
// import {TextInput} from 'react-native-paper'
import Icon from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import axios from 'axios';
import {useSelector} from 'react-redux';
import SimpleToast from 'react-native-simple-toast';

const CustomerSearch = ({navigation}) => {
  const user = useSelector(state => state.Reducer.user);
  const [loading, setLoading] = useState(false);
  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState('');
  const [loadMore, setLoadMore] = useState(false);
  const [page, setPageNumber] = useState(1);
  const [lastPage, setLastPage] = useState(false);

  const renderFooter = () => {
    return (
      //Footer View with Load More button
      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={getCustomers}
          //On Click of button load more data
          style={styles.loadMoreBtn}>
          <Text style={styles.btnText}>Load More</Text>
          {loading ? (
            <ActivityIndicator color="white" style={{marginLeft: 8}} />
          ) : null}
        </TouchableOpacity>
      </View>
    );
  };
  const getCustomers = () => {
    setLoading(true);

    var config = {
      method: 'get',
      url: `https://zacharydevworks.com/generator_app_backend/api/all-customers`,
      headers: {
        Authorization: `Bearer ${user.access_token}`,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response.data, 'fAFAFAFAalskfjalsfkjaslf');

        //Increasing the offset for the next API call
        setCustomers(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  };

  useFocusEffect(
    React.useCallback(() => {
      getCustomers();
    }, []),
  );

  // useFocusEffect(
  //   React.useCallback(() => {
  //     setLoading(true);

  //     var config = {
  //       method: 'get',
  //       url: 'https://zacharydevworks.com/generator_app_backend/api/all-customers',
  //       headers: {
  //         Authorization: `Bearer ${user.access_token}`,
  //       },
  //     };

  //     axios(config)
  //       .then(function (response) {
  //         console.log(response.data);
  //         setCustomers(response.data.data);
  //         setLoading(false);
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //         setLoading(false);
  //       });
  //   }, []),
  // );

  const searchItems = text => {
    let array = [...customers];
    let newData = array.filter(item => {
      const itemData = `${item.fname.toUpperCase()}`;
      const textData = text.toUpperCase();
      if (text.length > 0) {
        return itemData.indexOf(textData) > -1;
      }
      if (text.length === 0) {
        setCustomers(customers);
        setSearch('');
      }
    });
    setCustomers(newData);
    setSearch(text);
  };

  const filteredData = search
    ? customers.filter(x =>
        x.fname.toLowerCase().includes(search.toLowerCase()),
      )
    : customers;

  return (
    <Layout back navigation={navigation}>
      <TextInput
        activeUnderlineColor="transparent"
        value={search}
        onChangeText={text => setSearch(text)}
        underlineColor="tranparent" // add this
        outlineColor="tranparent"
        placeholder="Search"
        placeholderTextColor={'#000'}
        style={{
          height: 45,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
          borderWidth: 1,
          borderColor: '#0048908F',
          backgroundColor: 'white',
          color: '#000',
        }}
        // left={<TextInput.Icon name="account-search-outline" />}
      />
      <View style={{marginTop: 20}}>
        {loading ? (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 250,
            }}>
            <ActivityIndicator color={'#004890'} size="large" />
          </View>
        ) : (
          <FlatList
            data={filteredData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('CustomerDetial', {
                    item: item,
                    incompleted:
                      item.hasInCompletedCalls === '1' ? true : false,
                  });
                }}
                style={[
                  styles.card,
                  {
                    borderWidth: item.hasInCompletedCalls === '1' ? 3 : 1,
                    borderColor:
                      item.hasInCompletedCalls === '1' ? 'red' : '#0048908F',
                  },
                ]}>
                <View style={{marginRight: 10}}>
                  <View
                    style={{
                      height: 60,
                      width: 60,
                      marginTop: 20,
                      borderRadius: 30,
                    }}>
                    {item.profile ? (
                      <Image
                        source={require('../../Assets/Images/user.png')}
                        style={{height: '100%', width: '100%'}}
                      />
                    ) : (
                      <View
                        style={{
                          backgroundColor: '#004890',
                          height: '100%',
                          width: '100%',
                          borderRadius: 30,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            fontSize: 17,
                            textTransform: 'capitalize',
                            color: 'white',
                          }}>
                          {Array.from(item.fname)[0]}
                        </Text>
                      </View>
                    )}
                  </View>
                  <Text
                    style={{
                      color: '#222222',
                      fontWeight: 'bold',
                      marginVertical: 10,
                      // textAlign: 'center',
                      fontSize: 17,
                      width: 120,
                    }}>
                    {item.fname}
                  </Text>
                </View>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginVertical: 10,
                    }}>
                    <Icon name="location-pin" color={'#004890'} size={25} />
                    <View>
                      <Text
                        style={{
                          color: '#222222',
                          width: 150,
                          marginHorizontal: 10,
                        }}>
                        {item.address ? item.address : 'not updated yet.'}
                      </Text>
                      <Text
                        style={{
                          color: '#222222',
                          width: 150,
                          marginHorizontal: 10,
                        }}>
                        {item.city ? item.city : 'city updated yet.'}
                      </Text>
                      <Text
                        style={{
                          color: '#222222',
                          width: 150,
                          marginHorizontal: 10,
                        }}>
                        {item.state ? item.state : 'state updated yet.'}
                      </Text>

                      <Text
                        style={{
                          color: '#222222',
                          width: 150,
                          marginHorizontal: 10,
                        }}>
                        {item.zip ? item.zip : 'state updated yet.'}
                      </Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Feather name="phone-call" color={'#004890'} size={25} />
                    <Text
                      style={{
                        color: '#222222',
                        width: 150,
                        marginHorizontal: 10,
                      }}>
                      {item.phone
                        ? item.phone
                        : item.mobile
                        ? item.mobile
                        : 'not updated yet.'}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </Layout>
  );
};

export default CustomerSearch;

const styles = StyleSheet.create({
  card: {
    height: 150,
    backgroundColor: 'white',
    marginVertical: 10,
    borderRadius: 8,

    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
