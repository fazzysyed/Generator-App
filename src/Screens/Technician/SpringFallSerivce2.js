import { StyleSheet, Text, View,Image ,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import Layout from '../../components/Layout'
import Camera from 'react-native-vector-icons/Feather'
import { launchCamera } from 'react-native-image-picker';
import Button from '../../components/Button';

const SpringFallSerivce2 = ({navigation}) => {
  const [image,setImage] = useState(null)

const getImage = ()=>{
     launchCamera({ noData: true, quality:1 }, response => {
      console.log(response, 'HHHHHH');

      if (response.assets) {
        setImage(response.assets[0].uri);
     
      }
    });
}
  return (
  <Layout>
    <View style = {{justifyContent:"space-between",flex:1}}>
      <View>
      <Text style = {{color:"#222222",fontWeight:"bold",marginVertical:10,alignSelf:"center",marginHorizontal:30,textAlign:"center"}}>Please take a picture of inside the transfer switch</Text>
    {!image ?
     <TouchableOpacity onPress={getImage} style = {{
      backgroundColor:"white",
      marginVertical:10,
      borderRadius:8,
      borderWidth:1,borderColor:"#0048908F",
     height:300,
  
      padding:20,
      justifyContent:"center"
      ,alignItems:"center"
 }}>
<Camera color={"#004890"} name="camera" size={100}/>
 </TouchableOpacity> : 
    <View style = {{
      backgroundColor:"white",
      marginVertical:10,
      borderRadius:8,
      borderWidth:1,borderColor:"#0048908F",
     height:300,
  
 
 }}>
<Image source={{uri:image}} style = {{height:"100%",width:"100%"}}/>
 </View>  
  
  }
      </View>
      <View style = {{marginVertical:200}}>
        <Button title={"Next"} width={160} onPress = {()=>{
          navigation.navigate("SpringFallSerivce3")
        }}/>
      </View>
    </View>
    
  </Layout>
  )
}

export default SpringFallSerivce2

const styles = StyleSheet.create({})