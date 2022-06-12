import { StyleSheet, Text, View ,TouchableOpacity,FlatList} from 'react-native'
import React,{useState} from 'react'
import Layout from '../../components/Layout'
import Entypo from 'react-native-vector-icons/Entypo'
import DatePicker from 'react-native-date-picker'
import {TextInput} from 'react-native-paper'
import Service from '../../components/Service'
const InCompleteService = ({navigation}) => {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [data,setData] = useState([
    {
      id:1,
      name : "General Service Call",
      status :"Incomplete",
      date : "9/10/2021",
      time: "3:30 pm"
    },
    {
      id:2,
      name : "General Service Call",
      status :"Incomplete",
      date : "9/10/2021",
      time: "3:30 pm"
    }
  ])

  return (
 <Layout back={true} navigation={navigation}>
   <View style = {{alignItems:"center"}}>
   <Text style = {{color:"#222222",fontWeight:"bold",marginVertical:5}}>Incomplete Service Call History </Text>
   <Text style = {{color:"#222222",fontWeight:"bold",marginVertical:5}}>Last Service Call: 9/10/2021 </Text>

   </View>


   <FlatList style = {{marginTop:10}} data={data} renderItem = {({item})=>(
<Service item={item} onPress = {()=>{
  navigation.navigate("ServiceDetial")
}}/>
   )}/>

 </Layout>
  )
}

export default InCompleteService

const styles = StyleSheet.create({
  
})