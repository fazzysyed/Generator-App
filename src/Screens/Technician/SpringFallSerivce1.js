import { StyleSheet, Text, View,FlatList,TouchableOpacity,TextInput } from 'react-native'
import React,{useEffect, useState} from 'react'
import Layout from '../../components/Layout'

import CheckBox from '@react-native-community/checkbox';
import Button from '../../components/Button';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'


import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useDispatch } from 'react-redux';
import SimpleToast from 'react-native-simple-toast';

const SpringFallSerivce1 = ({navigation,route}) => {



  const {fromfirstScreen} = route.params
  const dispatch = useDispatch()
  const [po,setPo] = useState(Math.floor(Math.random()*90000) + 10000  );
  const [isVisible,setIsVisible] = useState(false)
  const [customStep,setCustomStep] = useState("")
  const [data,setData] = useState([
    {
      id:1,
      name  :"Fuel System",
    },
    {
      id:2,
      name  :"Control Panel",
    },
    {
      id:3,
      name  :"Battery Charger",
    },
    {
      id:4,
      name  :"Voltage Regulator",
    },
    {
      id:5,
      name  :"Voltage Regulator",
    },
   
  ])
  return (
    <Layout back navigation={navigation}>
   <View style = {{flexDirection:"row"}}>
   <Text style = {{color:"#222222",fontWeight:"bold",marginVertical:10}}>PO #</Text>
   <TextInput
     
     activeUnderlineColor='transparent'
            editable = {false} 
     value={`${po}`}
     onChangeText = {(text)=>setPo(text)}

      underlineColor="tranparent"   // add this
        outlineColor='tranparent'
        style = {{height:40,borderTopLeftRadius:8,borderTopRightRadius:8,borderBottomLeftRadius:8,borderBottomRightRadius:8,borderWidth:1,borderColor:"#0048908F",backgroundColor:"white",width:80,marginHorizontal:10,color:"#000"}}
    
    />

        
   </View>

   <View style = {{marginTop:10}}>
    <FlatList data={data} renderItem = {({item,index})=>(
      <View style ={{marginVertical:10,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
      <TouchableOpacity style = {{flexDirection:"row",alignItems:"center"}} onPress = {()=>{
        let newArray = [...data];
        if(    newArray[index].selected){
        newArray[index].selected = false;

        }else {
          newArray[index].selected = true;

        }
        setData(newArray)
        console.log(data)
      }}>
      <View style = {{backgroundColor:item.selected ? "#004890"  : "#FFFFFF",height:30,width:30,justifyContent:"center",alignItems:"center",borderRadius:5,borderWidth:1,borderColor:"#004890"}}>
      <Icon name='check' color={item.selected ? "#FFFFFF"  : "#FFFFFF"} size = {20}/>
      </View>
      <Text style = {{fontWeight:"500",color:"#222222",fontSize:18,marginHorizontal:10}}>{item.name}</Text>
  

      </TouchableOpacity>
      {item.custom &&
       <Icon name='delete' color={"#FFFFFF"} size={25} onPress = {()=>{
         let newArray = [...data];
       let arra =  newArray.filter(e=>e.id !=item.id)
         setData(arra)
       }} />
      }
      </View>
    )}/>

<View style = {{flexDirection:"row",justifyContent:"space-between",marginTop:20}}>
  <Button title={"Add Custom Step"} width={160} onPress = {()=>{
    setIsVisible(true)
  }}/>
  <Button title={"Next"} width={160} onPress = {()=>{

if (data.some(e => e.selected === true)) {

  let newData = {
    po :po,
    checked : data,
    fromfirstScreen : fromfirstScreen
}
console.log(newData)
navigation.navigate("SpringFallSerivce2",{

fromSecondScreen :   newData
})
}else {
  SimpleToast.show("Atleast one material is required.")
}

  }}/>

</View>
   </View>
   <Modal isVisible={isVisible}>
      <View style={styles.viewModal}>
        <View style={styles.textModal1}>
        <View/>
          <Text
            style={{
               
              color: '#FFFFFF',
              fontSize: 22,
            }}>
          Add Custom Step
          </Text>
          <Entypo name='circle-with-cross' color={"#FFFFFF"} size={30} style = {{marginHorizontal:5}} onPress = {()=>setIsVisible(false)}/>
        </View>
        <View style={{marginHorizontal: 20, marginTop: 25}}>
        <TextInput
    //   label="Email"
      value={customStep}
      onChangeText = {(text)=>setCustomStep(text)}
   
      activeUnderlineColor='transparent'
      underlineColor="tranparent"   // add this
        outlineColor='tranparent'
        style = {{height:50,borderTopLeftRadius:8,borderTopRightRadius:8,borderBottomLeftRadius:8,borderBottomRightRadius:8,borderWidth:1,borderColor:"#0048908F",marginVertical:10,backgroundColor:"#FFFFFF",color:"#000"}}
 
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
            <TouchableOpacity  style={styles.otCancel} onPress = {()=>{
              let newArray = [...data];
              newArray.push({
                id : data.length,
                name : customStep,
                custom :true,
                selected :true,
              })
              setData(newArray);
              setIsVisible(false)
              setCustomStep("")

            }}>
              <Text style={styles.textCancel1}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
    </Layout>
  )
}

export default SpringFallSerivce1

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
flexDirection:"row",
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
})