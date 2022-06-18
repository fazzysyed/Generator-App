import { StyleSheet, Text, View,Image ,TouchableOpacity,FlatList} from 'react-native'
import React,{useState} from 'react'
import Layout from '../../components/Layout'
import Camera from 'react-native-vector-icons/Feather'
import { launchCamera } from 'react-native-image-picker';
import Button from '../../components/Button';
import Toast from 'react-native-simple-toast'
import { useSelector } from 'react-redux';
import mime from 'mime'
import SimpleToast from 'react-native-simple-toast';

const SpringFallSerivce6 = ({navigation,route}) => {
  const {fromSecondScreen} = route.params;
  const user = useSelector(state=>state.Reducer.user)
  const [loading,setLoading] = useState(false)
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

  const submitService = ()=>{
    console.log(new Date().toLocaleDateString)
    let data = new FormData();
    let newImages = [];

    if(fromSecondScreen){
      setLoading(true)
      console.log(user.user.id)
      if(image.some(e => e.image != null)){
        image.map((item)=>{
          console.log(item)
          if(item.image){
            
            newImages.push({
              uri: Platform.OS === 'android' ? item.image.uri : item.image.uri.replace('file://', ''),
              type: mime.getType(item.image.uri),
              name: item.image.fileName,
            })
          }
        })
        console.log(newImages)
        let newArray = [];
        fromSecondScreen.materials.map((item)=>{
          newArray.push(item.name)
        })
        console.log(newArray)
        data.append("user_id",fromSecondScreen.user_id);
        data.append('tech_id', user.user.id);
        data.append('notes', fromSecondScreen.note);
        data.append('materials[]', JSON.stringify(newArray));
        data.append('date', "15-05-2022");
  data.append('time', new Date().toLocaleTimeString());
  
  
  
  data.append('service_type', "Service Call");
  
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
      setLoading(false)
  
      Toast.show(result)
      navigation.replace("TechnicalMain")
    })
    .catch(error =>{ 
      setLoading(false)
  
      Toast.show("Something Went Wrong")
    });
  
      }else {
        SimpleToast.show("Image is required.")
      }
   



  
    }
  }

const getImage = (index)=>{
     launchCamera({ noData: true, quality:1 }, response => {
      console.log(response, 'HHHHHH');

      if (response.assets) {
        let newArray = [...image];
        newArray[index].image = response.assets[0]
        console.log(newArray)
        setImage(newArray);
     
      }
    });
}
  return (
<Layout back navigation={navigation}>
    <View style = {{justifyContent:"space-between",flex:1}}>
   <Text style = {{color:"#222222",fontWeight:"bold",marginVertical:10,alignSelf:"center",marginHorizontal:30,textAlign:"center"}}>Please take all applicable pictures for this job here</Text>

    <FlatList data={image} numColumns={2} renderItem={({item,index})=>(
   <View>
 {!item.image ?
  <TouchableOpacity onPress={()=>getImage(index)} style = {{
   backgroundColor:"white",
   marginVertical:10,
   borderRadius:8,
   borderWidth:1,borderColor:"#0048908F",
  height:120,
  width:160,
  marginHorizontal:10,
justifyContent:"center",
   padding:20,
 
   alignItems:"center"
}}>
<Camera color={"#004890"} name="camera" size={40}/>
</TouchableOpacity> : 
 <View style = {{
   backgroundColor:"white",
   marginVertical:10,
   borderRadius:8,
   borderWidth:1,borderColor:"#0048908F",
  height:120,
  marginHorizontal:10,

  width:160


}}>
<Image source={{uri:item.image.uri}} style = {{height:"100%",width:"100%"}}/>
</View>  

}
   </View>
    )}/>
      <View style = {{marginVertical:30}}>
        <Button loading={loading} title={"Finish"} width={160} onPress = {()=>{
           submitService()
          // navigation.navigate("SpringFallSerivce7",{
          //   fromSeventhScreen : newData
          // })
        }}/>
      </View>
    </View>
    
  </Layout>
  )
}

export default SpringFallSerivce6

const styles = StyleSheet.create({})