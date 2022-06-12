import { StyleSheet, Text, View,Image ,TouchableOpacity} from 'react-native'
import React,{useEffect, useState} from 'react'
import Layout from '../../components/Layout'
import AntDesign from 'react-native-vector-icons/AntDesign'
const ServiceImages = () => {
  const [index,setIndex] = useState(0)
  const [data,setData] = useState([{
    id:1,
    image : require("../../Assets/Images/generator.png")
  },
  {
    id:2,
    image : require("../../Assets/Images/generator.png")
  },
  {
    id:3,
    image : require("../../Assets/Images/generator.png")
  },
])
  return (
    <Layout back={true} navigation={navigation}>
    <View style = {{
  height:350,
  marginBottom:50,
  
}}>
  {data.map((item,i)=>{
    if(i ===index ){
      return(
        <Image source={item.image} style = {{height:"100%",width:"100%"}}/>
      )
    }
  })}
</View>
<Text style = {{color:"#222222",fontWeight:"400",marginVertical:5,alignSelf:"center",marginHorizontal:30,textAlign:"center",bottom:70,fontSize:16}}>{index+1}/{data.length}</Text>

<View style = {{flexDirection:"row",justifyContent:"space-between",marginVertical:1}}>
<TouchableOpacity
onPress={()=>{
  if(index != 0 ){
    setIndex(index-1)
  }
}}

style={{height:50, borderRadius:5,  alignSelf: 'center', backgroundColor:  '#004890',width:50,justifyContent:"center",alignItems:"center"}}
>
  <AntDesign name='arrowleft' size={25} />
</TouchableOpacity>
<TouchableOpacity
onPress={()=>{
  if(index != data.length-1)
  setIndex(index+1)
}}

style={{height:50, borderRadius:5,  alignSelf: 'center', backgroundColor:  '#004890',width:50,justifyContent:"center",alignItems:"center"}}
>
  <AntDesign name='arrowright' size={25} />
</TouchableOpacity>
</View>
  </Layout>
  )
}

export default ServiceImages

const styles = StyleSheet.create({})