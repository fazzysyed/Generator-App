import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import Layout from '../../components/Layout'
import {TextInput} from 'react-native-paper'
import Button from '../../components/Button'
const SpringFallSerivce7 = ({navigation}) => {
  const [note,setNote] = useState("")
  return (
<Layout>
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
        style = {{backgroundColor:"white",textAlign:"center"}}

    />


</View>
<Button title={"Finish"} width={250}/>
<Button title={"Finish & Start service call"} width={250}/>
<Button title={"Finish & Start Warranty call"} width={250}/>


</Layout>
  )
}

export default SpringFallSerivce7

const styles = StyleSheet.create({})