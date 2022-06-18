import { StyleSheet, Text, View,Platform ,TextInput} from 'react-native'
import React,{useState,useEffect} from 'react'
import Layout from '../../components/Layout'

import Button from '../../components/Button'
import axios from 'axios'
import mime from 'mime'
import { useSelector } from 'react-redux'
import Toast from 'react-native-simple-toast'
const SpringFallSerivce7 = ({navigation,route}) => {
  const user = useSelector(state=>state.Reducer.user)
  const {fromSeventhScreen} = route.params
  const [note,setNote] = useState("")
  const [loading,setLoading] = useState(false)
  const [warranty,setWarranty] = useState(false)
  const [service,setService] = useState(false)

  useEffect(()=>{
    console.log(fromSeventhScreen,"Hey there")
  },[])

  const submitService = ()=>{
 
    return new Promise((resolve, reject)=> { 
  let data = new FormData();
  let newImages = [];

  if(fromSeventhScreen){
  
    console.log(user.user.id)
    if(fromSeventhScreen.extraImages){
      fromSeventhScreen.extraImages.map((item)=>{
        console.log(item)
        if(item.image){
          
          newImages.push({
            uri: Platform.OS === 'android' ? item.image.uri : item.image.uri.replace('file://', ''),
            type: mime.getType(item.image.uri),
            name: item.image.fileName,
          })
        }
      })
    }
    console.log(newImages)
    let newArray = [];
    fromSeventhScreen.checked.map((item)=>{
      newArray.push(item.name)
    })
    console.log(newArray)
    data.append("user_id",fromSeventhScreen.fromfirstScreen.user_id);
    data.append('tech_id', user.user.id);
    data.append('notes', note);
    data.append('materials[]', JSON.stringify(newArray));
    data.append('date',"12-05-2022");
data.append('time', new Date().toLocaleTimeString());


data.append('inside_transfer_switch', {
uri: Platform.OS === 'android' ? fromSeventhScreen.inside_transfer_switch.uri : fromSeventhScreen.inside_transfer_switch.uri.replace('file://', ''),
type: mime.getType(fromSeventhScreen.inside_transfer_switch.uri),
name: fromSeventhScreen.inside_transfer_switch.fileName,
});
data.append('outside_transfer_switch', {
uri: Platform.OS === 'android' ? fromSeventhScreen.outside_transfer_switch.uri : fromSeventhScreen.outside_transfer_switch.uri.replace('file://', ''),
type: mime.getType(fromSeventhScreen.outside_transfer_switch.uri),
name: fromSeventhScreen.outside_transfer_switch.fileName,
});
data.append('inside_generator', {
uri: Platform.OS === 'android' ? fromSeventhScreen.inside_generator.uri : fromSeventhScreen.inside_generator.uri.replace('file://', ''),
type: mime.getType(fromSeventhScreen.inside_generator.uri),
name: fromSeventhScreen.inside_generator.fileName,
});

data.append('outside_generator', {
uri: Platform.OS === 'android' ? fromSeventhScreen.outside_generator.uri : fromSeventhScreen.outside_generator.uri.replace('file://', ''),
type: mime.getType(fromSeventhScreen.outside_generator.uri),
name: fromSeventhScreen.outside_generator.fileName,
});
data.append('service_type', fromSeventhScreen.fromfirstScreen.service_type);
data.append('status', 'complete');
data.append('po', '93933');

newImages.map((item)=>{
data.append('photo[]',item)
})



var requestOptions = {
method: 'POST',
headers: {
  'Content-Type': 'multipart/form-data;',
  Authorization: `Bearer ${user.access_token}`,
},
body: data,

};

fetch("http://generator.thecodelogy.com/api/service-call", requestOptions)
.then(response => response.text())
.then(result => {
  console.log(result)
 
  resolve(result)

})
.catch(error =>{ 

  resolve("Something went wrong")


});


  
}
      });
    }
    // return new Promise ()
  


  return (
<Layout back navigation={navigation}>
<Text style = {{color:"#222222",fontWeight:"bold",marginVertical:10,alignSelf:"center",marginHorizontal:30,textAlign:"center"}}>Please add all job related notes here</Text>
<View style = {{
  height:300,borderTopLeftRadius:8,borderTopRightRadius:8,borderBottomLeftRadius:8,borderBottomRightRadius:8,borderWidth:1,borderColor:"#0048908F",padding:10,backgroundColor:"#FFFFFF",
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
        style = {{backgroundColor:"white",textAlign:"left"}}

    />


</View>
<Button title={"Finish"} loading={loading} onPress = {()=>{
  setLoading(true)
  submitService().then(()=>{
  Toast.show("Uploading Done")

    setLoading(false)
  navigation.replace("TechnicalMain")


  }).catch(()=>{
  Toast.show("Something Went Wrong")

    setLoading(false)
  })
}} width={250}/>
<Button title={"Finish & Start service call"} loading = {service} onPress = {()=>{
  setService(true)
  submitService().then(()=>{
  Toast.show("Uploading Done")

  setService(false)

    navigation.replace("ServiceCall1",{
      fromfirstScreen :{
        service_type : "Service Call",
        user_id : fromSeventhScreen.fromfirstScreen.user_id,
  
      }
    })
  }).catch(()=>{
  Toast.show("Something Went Wrong")

    setService(false)
  })
}} width={250}/>
<Button title={"Finish & Start Warranty call"} 
loading = {warranty}

onPress = {()=>{
  setWarranty(true)
  submitService().then(()=>{
  Toast.show("Uploading Done")

    setWarranty(false)
    navigation.replace("SpringFallSerivce1",{
      fromfirstScreen :{
        service_type : "Warranty Service",
        user_id : fromSeventhScreen.fromfirstScreen.user_id,
  
      }
      
    })
  }).catch(()=>{
  Toast.show("Something Went Wrong")

    console.log("EEEE")
    setWarranty(false)
  })
}}
width={250}/>


</Layout>
  )
}

export default SpringFallSerivce7

const styles = StyleSheet.create({})