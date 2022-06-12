import { StyleSheet, Text, View,FlatList } from 'react-native'
import React,{useState} from 'react'
import Layout from '../../components/Layout'
import {TextInput} from 'react-native-paper'
import Button from '../../components/Button'
const ServiceDetail = ({navigation}) => {
  const [note,setNote] = useState("")
  const [data,setData] = useState([
    {
      id : 1,
      name : "John Deere 320"
    },
    {
      id : 2,
      name : "Control Board"
    },
    {
      id : 3,
      name : "Oil Filter"
    },
    {
      id : 4,
      name : "AVR"
    },
    {
      id : 5,
      name : "Fluids"
    },
  ])
  return (
    <Layout back={true} navigation={navigation}>
<Text style = {{color:"#222222",fontWeight:"bold",marginVertical:10,alignSelf:"center",marginHorizontal:30,textAlign:"center"}}>John Smith - General Service Call</Text>
<Text style = {{color:"#222222",fontWeight:"bold",marginVertical:5,alignSelf:"center",marginHorizontal:30,textAlign:"center"}}>9/2/21 - 3:30 pm</Text>

<View style = {{
  height:250,borderTopLeftRadius:8,borderTopRightRadius:8,borderBottomLeftRadius:8,borderBottomRightRadius:8,borderWidth:1,borderColor:"#0048908F",padding:10,backgroundColor:"#FFFFFF",
  marginBottom:50
}}>
<TextInput
     
     activeUnderlineColor='transparent'
            numberOfLines={4}
            multiline={true}

            
     value={note}
     onChangeText = {(text)=>setNote(text)}

      underlineColor="tranparent"   // add this
        outlineColor='tranparent'
        style = {{backgroundColor:"white",textAlign:"center"}}

    />


</View>
<View style = {{
  borderTopLeftRadius:8,borderTopRightRadius:8,borderBottomLeftRadius:8,borderBottomRightRadius:8,borderWidth:1,borderColor:"#0048908F",padding:10,backgroundColor:"#FFFFFF",
  marginBottom:30
}}>
 <FlatList data={data} renderItem = {({item})=>(
    <View style = {{padding:4}}>
      <Text style = {{color:"#000"}}>{item.name}</Text>
    </View>
  )}/>

</View>
<Text style = {{color:"#222222",fontWeight:"400",marginVertical:5,alignSelf:'flex-end',textAlign:"center"}} onPress = {()=>{
  navigation.navigate("ServiceImages")
}}>View Images</Text>
  


</Layout>
  )
}

export default ServiceDetail

const styles = StyleSheet.create({})