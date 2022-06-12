import { StyleSheet, Text, View ,TouchableOpacity,FlatList} from 'react-native'
import React,{useState} from 'react'
import Layout from '../../components/Layout'
import Entypo from 'react-native-vector-icons/Entypo'
import DatePicker from 'react-native-date-picker'
import {TextInput} from 'react-native-paper'
import Service from '../../components/Service'
const CustomerDashboard = ({navigation}) => {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [data,setData] = useState([
    {
      id:1,
      name : "General Service Call",
      status :"completed",
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
 <Layout>
   <View style = {{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
   <Text style = {{color:"#222222",fontWeight:"bold",marginVertical:10}}>Service Agreement Infomation</Text>
    <Entypo name='bell' color= "#222222" size={20}/>
   </View>
   <View>
     <View style = {{flexDirection:"row",justifyContent:"space-between",marginVertical:20}}>

   <TouchableOpacity style = {{flexDirection:"row"}}onPress={()=>{
     setOpen(true)
   }} >
   <Text style = {{color:"#222222",fontWeight:"400",marginVertical:10}}>Start Date</Text>
   <TextInput
     
     activeUnderlineColor='transparent'
            
    //  value={`${po}`}
    //  onChangeText = {(text)=>setPo(text)}

      underlineColor="tranparent"   // add this
        outlineColor='tranparent'
        style = {{height:40,borderTopLeftRadius:8,borderTopRightRadius:8,borderBottomLeftRadius:8,borderBottomRightRadius:8,borderWidth:1,borderColor:"#0048908F",backgroundColor:"white",width:80,marginHorizontal:10}}
    
    />
</TouchableOpacity>
<TouchableOpacity style = {{flexDirection:"row"}}onPress={()=>{
  setOpen(true)
}}>
   <Text style = {{color:"#222222",fontWeight:"400",marginVertical:10}}>End Date</Text>
   <TextInput
     
     activeUnderlineColor='transparent'
            
    //  value={`${po}`}
    //  onChangeText = {(text)=>setPo(text)}

      underlineColor="tranparent"   // add this
        outlineColor='tranparent'
        style = {{height:40,borderTopLeftRadius:8,borderTopRightRadius:8,borderBottomLeftRadius:8,borderBottomRightRadius:8,borderWidth:1,borderColor:"#0048908F",backgroundColor:"white",width:80,marginHorizontal:10}}
    
    />
</TouchableOpacity>
</View>
<View style = {{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
   <Text style = {{color:"#222222",fontWeight:"bold",marginVertical:10}}>Incomplete Service</Text>
   <Text style = {{color:"#222222",fontWeight:"400",marginVertical:10}} onPress = {()=>{
     navigation.navigate("Incomplete")
   }}>View All</Text>

   </View>

   </View>

   <FlatList data={data} renderItem = {({item})=>(
<Service item={item} onPress = {()=>{
  navigation.navigate("ServiceDetial")
}}/>
   )}/>
   <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
 </Layout>
  )
}

export default CustomerDashboard

const styles = StyleSheet.create({
  
})