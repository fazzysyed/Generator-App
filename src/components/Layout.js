import { View, Text,StyleSheet,Image} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Appbar } from 'react-native-paper';
import  {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
const Layout = ({children}) => {
  return (
    <LinearGradient colors={['#C297281A', '#C29727']} style={styles.linearGradient}>
      <KeyboardAvoidingScrollView style ={{flex:1,height:"100%"}}>

    <View style = {styles.header}>
       
    {/* <Image source={require("../Assets/Images/headerback.png")} style = {{resizeMode:"contain",height:30,width:30}}/> */}

    <Image source={require("../Assets/Images/logo.png")} style = {{resizeMode:"contain",height:100,width:140}}/>
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
        justifyContent:"center",
        alignItems:"center",
        marginVertical:10
    }
})