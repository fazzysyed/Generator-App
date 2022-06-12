import { View, Text,StyleSheet,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Appbar } from 'react-native-paper';
import  {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import AntDesign from 'react-native-vector-icons/AntDesign'
const Layout = ({children,back,navigation}) => {
  return (
    <LinearGradient colors={['#C297281A', '#C29727']} style={styles.linearGradient}>
      <KeyboardAvoidingScrollView style ={{flex:1,height:"100%"}}>

    <View style = {{
      flexDirection:"row",
      justifyContent:back ? "space-between" :"center",
      alignItems:"center",
      marginVertical:10,
      marginHorizontal:30
    }}>
       
    {back &&
        <TouchableOpacity
        onPress={()=>{
          navigation.goBack();
        }}
        
        style={{height:40, borderRadius:20,  alignSelf: 'center', backgroundColor:  '#004890',width:40,justifyContent:"center",alignItems:"center"}}
        >
          <AntDesign name='arrowleft' size={25} />
        </TouchableOpacity>

    
  }

    <Image source={require("../Assets/Images/logo.png")} style = {{resizeMode:"contain",height:100,width:140,right:back && 20}}/>
    <View/>
    </View>
        <View
 style = {{marginHorizontal:30}}>
        {children}

        </View>
  </KeyboardAvoidingScrollView>

  </LinearGradient>
  )
}

export default Layout
const styles = StyleSheet.create({
    linearGradient : {
        flex:1,
        height:"100%"
    }
    ,header : {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginVertical:10,
        marginHorizontal:30
    }
})