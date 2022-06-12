import { StyleSheet, Text, View,Image ,TouchableOpacity,FlatList} from 'react-native'
import React,{useState} from 'react'
import Layout from '../../components/Layout'
import Camera from 'react-native-vector-icons/Feather'
import { launchCamera } from 'react-native-image-picker';
import Button from '../../components/Button';

const ServiceCall2 = ({navigation}) => {
  const [image,setImage] = useState([
    {
      id :1,
      image : null
    },
    {
      id :2,
      image : null
    },
    {
      id :3,
      image : null
    },
    {
      id :4,
      image : null
    },
    {
      id :5,
      image : null
    },
    {
      id :6,
      image : null
    },
    {
      id :7,
      image : null
    },
    {
      id :8,
      image : null
    },

  ])

const getImage = (index)=>{
     launchCamera({ noData: true, quality:1 }, response => {
      console.log(response, 'HHHHHH');

      if (response.assets) {
        let newArray = [...image];
        newArray[index].image = response.assets[0]

        setImage(newArray);
     
      }
    });
}
  return (
  <Layout>
    <View style = {{justifyContent:"space-between",flex:1}}>
   <Text style = {{color:"#222222",fontWeight:"bold",marginVertical:10,alignSelf:"center",marginHorizontal:30,textAlign:"center"}}>Please take all applicable pictures for this job here</Text>

    <FlatList data={image} numColumns={2} renderItem={({item,index})=>(
   <View>

 <View style = {{
   backgroundColor:"white",
   marginVertical:10,
   borderRadius:8,
   borderWidth:1,borderColor:"#0048908F",
  height:120,
  marginHorizontal:10,

  width:160


}}>
{/* <Image source={{uri:item.image.uri}} style = {{height:"100%",width:"100%"}}/> */}
</View>  


   </View>
    )}/>
      <View style = {{marginVertical:10,flexDirection:"row",justifyContent:"space-between"}}>
      <Button title={"Incompletee Job"} width={160} onPress = {()=>{
          // navigation.navigate("SpringFallSerivce7")
        }}/>
        <Button title={"Finish"} width={160} onPress = {()=>{
          // navigation.navigate("SpringFallSerivce7")
        }}/>
      </View>
    </View>
    
  </Layout>
  )
}

export default ServiceCall2

const styles = StyleSheet.create({})