import { StyleSheet, Text, View ,TouchableOpacity,FlatList} from 'react-native'
import React,{useState} from 'react'
import Layout from '../../components/Layout'
import Entypo from 'react-native-vector-icons/Entypo'
import DatePicker from 'react-native-date-picker'
import {TextInput} from 'react-native-paper'
import Service from '../../components/Service'
import axios from 'axios'
import { useSelector } from 'react-redux'

const InCompleteService = ({navigation}) => {
  const user = useSelector(state=>state.Reducer.user)

  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [data,setData] = useState([
   
  ])

  const getServices = ()=>{
    var FormData = require('form-data');
var data = new FormData();
// data.append('sdate', '15-05-2022');
// data.append('edate', '15-12-2022');

var config = {
  method: 'post',
  url: 'http://generator.thecodelogy.com/api/incomplete-service-call',
  headers: { 
    'Accept': 'application/json', 
    'Authorization': `Bearer ${user.access_token}`, 
   
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(response.data,"AAAADADAD");
  setData(response.data.serviceCallHistory.data)
})
.catch(function (error) {
  console.log(error);
});
  }

  return (
 <Layout back={true} navigation={navigation}>
   <View style = {{alignItems:"center"}}>
   <Text style = {{color:"#222222",fontWeight:"bold",marginVertical:5}}>Incomplete Service Call History </Text>
   <Text style = {{color:"#222222",fontWeight:"bold",marginVertical:5}}>Last Service Call: 9/10/2021 </Text>

   </View>


   <FlatList style = {{marginTop:10}} data={data} renderItem = {({item})=>(
<Service item={item} onPress = {()=>{
  navigation.navigate("ServiceDetial",{
    id :item.id
  })
}}/>
   )}/>

 </Layout>
  )
}

export default InCompleteService

const styles = StyleSheet.create({
  
})