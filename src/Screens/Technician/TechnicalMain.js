import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Layout from '../../components/Layout'


const TechnicalMain = ({navigation}) => {
  return (
   <Layout>
       <TouchableOpacity style = {styles.card} onPress = {()=>navigation.navigate("CustomerSearch")}>
    <View style = {{marginHorizontal:10,marginTop:20}}>
       <Text style = {{color:"#222222",fontWeight:"600",marginVertical:5,fontSize:20}}>Customer Search</Text>
       <Text style = {{color:"#222222",fontWeight:"400",marginVertical:5,fontSize:14,width:150}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>

        </View>           
       <View style={styles.ovalBgH}> 
  
       <Image source={require("../../Assets/Images/card1.png")} style = {{height:250,width:200,position: "absolute",resizeMode:"contain",right: 10,}}/>
</View>

       </TouchableOpacity>
       <TouchableOpacity style = {styles.card1}>
    <View style = {{marginHorizontal:10,marginTop:20}}>
       <Text style = {{color:"#222222",fontWeight:"600",marginVertical:5,fontSize:20}}>Route</Text>
       <Text style = {{color:"#222222",fontWeight:"400",marginVertical:5,fontSize:14,width:150}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>

        </View>           

  
       <Image source={require("../../Assets/Images/card2.png")} style = {{height:180,width:200,position: "absolute",resizeMode:"contain",right: -10,marginTop:20}}/>


       </TouchableOpacity>
   </Layout>
  )
}

export default TechnicalMain

const styles = StyleSheet.create({
    card : {
        height:230,
        backgroundColor:"#F4E0D1",
        borderRadius:10,
        flexDirection:"row",justifyContent:"space-between",
        borderWidth:1,
        borderColor:"#0048908F",
        marginVertical:20

    },
    card1 : {
        height:230,
        backgroundColor:"#CDE1F1",
        borderRadius:10,
        flexDirection:"row",justifyContent:"space-between",
        borderWidth:1,
        borderColor:"#0048908F",
        marginVertical:20

    },
    ovalBgH:{

     backgroundColor:"#EEC7A2",
     width:140,
    //  right:1,
    height:"100%",
      
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
     alignSelf:"flex-end",
     borderTopLeftRadius:150,
     borderBottomLeftRadius:150,
     transform: [
        {scaleY: 1}
        ]
    },
    ovalBg:{
        backgroundColor: '#a0c580',
        width : 50, height:50,
        transform: [
        {scaleX: 7}
        ]
    }
})