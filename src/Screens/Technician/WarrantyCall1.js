import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Layout from '../../components/Layout';
import Button from '../../components/Button';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
// import {TextInput} from 'react-native-paper'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useEffect} from 'react';
import SimpleToast from 'react-native-simple-toast';
const ServiceCall1 = ({navigation, route}) => {
  const [inner, setInner] = useState(false);
  const {fromfirstScreen} = route.params;
  const [isVisible, setIsVisible] = useState(false);
  const [customStep, setCustomStep] = useState('');
  const [po, setPo] = useState('');
  const [note, setNote] = useState('');
  const [customData, setCustomData] = useState([]);
  const [nopart, setNoPart] = useState(false);
  const [index, setIndex] = useState('');
  const [editing, setEditing] = useState(false);
  const [selected, setSelected] = useState(false);
  const [warrantyData, setWarrantyData] = useState({
    condition: '',
    hours: '',
    ownerDescriptionOfProblem: '',
    workedPerformed: '',
    serial: fromfirstScreen.sno,
    model: fromfirstScreen.model,
  });

  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [date, setDate] = useState(
    new Date().toISOString().replace(/T.*/, '').split('-').reverse().join('-'),
  );

  const inputHandler = (name, event) => {
    setWarrantyData({...warrantyData, [name]: event});
  };

  const editCustomItem = (index, text) => {
    const editedCustomData = [...customData];
    const editedItem = editedCustomData[index];

    // Assume you want to update the 'name' property of the custom item
    // You can update any property as needed
    editedItem.name = text;

    setCustomData(editedCustomData);
    setIsVisible(false);
    setEditing(false);
    setCustomStep('');
    setIndex('');
  };

  return (
    <Layout back navigation={navigation}>
      <Text
        style={{
          color: '#222222',
          fontWeight: 'bold',
          marginVertical: 10,
          alignSelf: 'center',
          marginHorizontal: 30,
          textAlign: 'center',
        }}>
        Please add all job related notes here
      </Text>

      <View style={[styles.fieldContainer]}>
        <Text
          style={{color: '#222222', fontWeight: 'bold', marginVertical: 10}}>
          PO #
        </Text>
        <TextInput
          activeUnderlineColor="transparent"
          value={`${po}`}
          underlineColor="tranparent" // add this
          outlineColor="tranparent"
          onChangeText={text => setPo(text)}
          style={{
            height: 40,

            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            borderWidth: 1,
            borderColor: '#0048908F',
            backgroundColor: 'white',
            width: 80,
            color: '#000',
            paddingLeft: 10,
          }}
        />
      </View>
      <View style={styles.fieldContainer}>
        <Text
          style={{
            color: '#222222',
            fontWeight: 'bold',
          }}>
          Condition
        </Text>
        <TextInput
          activeUnderlineColor="transparent"
          multiline={true}
          underlineColor="tranparent" // add this
          outlineColor="tranparent"
          value={warrantyData.condition}
          onChangeText={text => inputHandler('condition', text)}
          style={{
            height: 50,

            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            borderWidth: 1,
            borderColor: '#0048908F',
            backgroundColor: 'white',
            width: 200,
            color: '#000',
            paddingLeft: 10,
          }}
        />
      </View>
      <View style={styles.fieldContainer}>
        <Text
          style={{
            color: '#222222',
            fontWeight: 'bold',
          }}>
          Hours
        </Text>
        <TextInput
          activeUnderlineColor="transparent"
          underlineColor="tranparent" // add this
          outlineColor="tranparent"
          keyboardType="number-pad"
          value={warrantyData.hours}
          onChangeText={text => inputHandler('hours', text)}
          style={{
            height: 50,

            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            borderWidth: 1,
            borderColor: '#0048908F',
            backgroundColor: 'white',
            width: 200,
            color: '#000',
          }}
        />
      </View>
      <View style={styles.fieldContainer}>
        <View>
          <Text
            style={{
              color: '#222222',
              fontWeight: 'bold',
            }}>
            Owner description
          </Text>
          <Text
            style={{
              color: '#222222',
              fontWeight: 'bold',
            }}>
            of problem
          </Text>
        </View>

        <TextInput
          activeUnderlineColor="transparent"
          multiline={true}
          underlineColor="tranparent" // add this
          outlineColor="tranparent"
          value={warrantyData.ownerDescriptionOfProblem}
          onChangeText={text => inputHandler('ownerDescriptionOfProblem', text)}
          style={{
            height: 100,

            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            borderWidth: 1,
            borderColor: '#0048908F',
            backgroundColor: 'white',
            width: 200,
            color: '#000',
            paddingLeft: 10,
          }}
        />
      </View>
      <View style={styles.fieldContainer}>
        <Text
          style={{
            color: '#222222',
            fontWeight: 'bold',
          }}>
          Worked Performed
        </Text>

        <TextInput
          activeUnderlineColor="transparent"
          multiline={true}
          underlineColor="tranparent" // add this
          outlineColor="tranparent"
          value={warrantyData.workedPerformed}
          onChangeText={text => inputHandler('workedPerformed', text)}
          style={{
            height: 100,

            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            borderWidth: 1,
            borderColor: '#0048908F',
            backgroundColor: 'white',
            width: 200,
            color: '#000',
            paddingLeft: 10,
          }}
        />
      </View>

      {customData.length ? (
        <View
          style={{
            marginVertical: 20,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            borderWidth: 1,
            borderColor: '#0048908F',
            padding: 10,
            backgroundColor: '#FFFFFF',
            marginBottom: 10,
          }}>
          <FlatList
            data={customData}
            renderItem={({item, index}) => (
              <View
                style={{
                  padding: 10,
                  borderBottomWidth: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: '#000'}}>{item.name}</Text>

                <Entypo
                  name="edit"
                  color={'#000'}
                  size={20}
                  onPress={() => {
                    setEditing(true);
                    setIndex(index);
                    setCustomStep(item.name);
                    setIsVisible(true);
                  }}
                />
              </View>
            )}
          />
        </View>
      ) : null}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 10,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{color: '#222222', fontWeight: 'bold', marginVertical: 10}}>
            Serial#
          </Text>
          <TextInput
            activeUnderlineColor="transparent"
            editable={false}
            value={warrantyData.serial}
            //  onChangeText = {(text)=>setPo(text)}

            underlineColor="tranparent" // add this
            outlineColor="tranparent"
            style={{
              height: 40,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              paddingLeft: 10,

              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              borderWidth: 1,
              borderColor: '#0048908F',
              backgroundColor: 'white',
              width: 100,
              marginHorizontal: 3.5,
              fontSize: 12,
              textAlign: 'left',
              color: '#000',
            }}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: '#000', fontWeight: 'bold', marginVertical: 10}}>
            model#
          </Text>
          <TextInput
            activeUnderlineColor="transparent"
            value={warrantyData.model}
            editable={false}
            underlineColor="tranparent" // add this
            outlineColor="tranparent"
            style={{
              height: 40,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              borderWidth: 1,
              borderColor: '#0048908F',
              backgroundColor: 'white',
              width: 80,
              marginHorizontal: 10,
              fontSize: 12,
              color: '#000',
              paddingLeft: 10,
            }}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          //   marginVertical: 20,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{color: '#222222', fontWeight: 'bold', marginVertical: 10}}>
            Date#
          </Text>
          <TextInput
            activeUnderlineColor="transparent"
            editable={false}
            value={date}
            //  onChangeText = {(text)=>setPo(text)}

            underlineColor="tranparent" // add this
            outlineColor="tranparent"
            style={{
              height: 40,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              paddingLeft: 10,

              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              borderWidth: 1,
              borderColor: '#0048908F',
              backgroundColor: 'white',
              width: 100,
              marginHorizontal: 10,
              fontSize: 12,
              textAlign: 'left',
              color: '#000',
            }}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: '#000', fontWeight: 'bold', marginVertical: 10}}>
            Time#
          </Text>
          <TextInput
            activeUnderlineColor="transparent"
            value={time}
            editable={false}
            underlineColor="tranparent" // add this
            outlineColor="tranparent"
            style={{
              height: 40,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              borderWidth: 1,
              borderColor: '#0048908F',
              backgroundColor: 'white',
              width: 80,
              marginHorizontal: 10,
              fontSize: 12,
              color: '#000',
              paddingLeft: 10,
            }}
          />
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          onPress={() => {
            setNoPart(!nopart);
          }}
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
          <Text
            style={{
              color: '#000',
              fontWeight: 'bold',
              marginVertical: 10,
              marginRight: 15,
              fontSize: 17,
            }}>
            No part used?
          </Text>
          <View
            style={{
              backgroundColor: nopart ? '#004890' : '#FFFFFF',
              height: 30,
              width: 30,

              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#004890',
            }}>
            <Icon
              name="check"
              color={nopart ? '#FFFFFF' : '#FFFFFF'}
              size={20}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelected(!selected);
          }}
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
          <Text
            style={{
              color: '#000',
              fontWeight: 'bold',
              marginVertical: 10,
              marginRight: 15,
              fontSize: 17,
            }}>
            Incomplete Job
          </Text>
          <View
            style={{
              backgroundColor: selected ? '#004890' : '#FFFFFF',
              height: 30,
              width: 30,

              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#004890',
            }}>
            <Icon
              name="check"
              color={selected ? '#FFFFFF' : '#FFFFFF'}
              size={20}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginBottom: 20,
        }}>
        {!nopart ? (
          <Button
            title={'Add Part'}
            width={150}
            onPress={() => {
              setEditing(false);
              setCustomStep('');
              setIndex('');
              setIsVisible(true);
            }}
          />
        ) : (
          <View />
        )}
        <Button
          title={'Next'}
          width={150}
          onPress={() => {
            if (!po.length) {
              SimpleToast.show('PO # is required.');
              return;
            }
            if (!nopart) {
              if (customData.length === 0) {
                SimpleToast.show('atleast one part is required.');
                return;
              }
            }
            if (
              warrantyData.condition.length &&
              warrantyData.hours.length &&
              warrantyData.ownerDescriptionOfProblem.length &&
              warrantyData.workedPerformed.length
            ) {
              navigation.navigate('WarrantyCall2', {
                fromSecondScreen: {
                  condition: warrantyData.condition,
                  hours: warrantyData.hours,
                  ownerDescriptionOfProblem:
                    warrantyData.ownerDescriptionOfProblem,
                  workedPerformed: warrantyData.workedPerformed,
                  serial: warrantyData.serial,
                  model: warrantyData.model,
                  customData: customData,
                  po: po.toString(),
                  user_id: fromfirstScreen.user_id,
                  service_type: fromfirstScreen.service_type,
                  generator_id: fromfirstScreen.generator_id,
                  date: date,
                  time: time,
                  incompleted: selected,
                  voltageData: fromfirstScreen.voltageData,
                },
              });
            } else {
              SimpleToast.show('All fields are required.');
            }
          }}
        />
      </View>

      <Modal isVisible={isVisible}>
        <View style={styles.viewModal}>
          <View style={styles.textModal1}>
            <View />
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 22,
              }}>
              Add Part
            </Text>
            <Entypo
              name="circle-with-cross"
              color={'#FFFFFF'}
              size={30}
              style={{marginHorizontal: 5}}
              onPress={() => setIsVisible(false)}
            />
          </View>
          <View style={{marginHorizontal: 20, marginTop: 25}}>
            <TextInput
              //   label="Email"
              value={customStep}
              onChangeText={text => setCustomStep(text)}
              activeUnderlineColor="transparent"
              underlineColor="tranparent" // add this
              outlineColor="tranparent"
              style={{
                height: 50,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
                borderWidth: 1,
                borderColor: '#0048908F',
                marginVertical: 10,
                backgroundColor: '#FFFFFF',
                color: '#222222',
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',

              alignSelf: 'center',
              marginVertical: 20,
            }}>
            <View
              style={{
                width: '50%',
                alignSelf: 'center',

                borderRadius: 5,
              }}>
              <TouchableOpacity
                style={styles.otCancel}
                onPress={() => {
                  if (editing) {
                    editCustomItem(index, customStep);
                  } else {
                    let newArray = [...customData];
                    newArray.push({
                      id: customData.length,
                      name: customStep,
                      custom: true,
                    });
                    setCustomData(newArray);
                    setIsVisible(false);
                    setCustomStep('');
                  }
                }}>
                <Text style={styles.textCancel1}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </Layout>
  );
};

export default ServiceCall1;

const styles = StyleSheet.create({
  viewModal: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    // paddingHorizontal: wp(6),
    // marginTop: hp(10),
    // paddingVertical: hp(3),
  },
  textModal2: {
    fontSize: hp(2.2),
    color: '#000',
    marginVertical: hp(0.5),
  },
  textModal3: {
    fontSize: hp(2.4),
    color: '#004890',
  },
  textModal1: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 70,
    backgroundColor: '#004890',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    flexDirection: 'row',
    borderColor: '#1A98D5',
  },
  textCancel: {
    fontSize: hp(2),

    textAlign: 'center',
    color: '#FFFFFF',
  },
  textCancel1: {
    fontSize: hp(2),

    textAlign: 'center',
    color: '#fff',
  },
  otCancel: {
    backgroundColor: '#004890',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fieldContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderColor: 'black',
    alignItems: 'flex-start',
    marginTop: 4,
  },
});
