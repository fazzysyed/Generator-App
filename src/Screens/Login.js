import { View, Text,Image } from 'react-native'
import React,{useState} from 'react'
import Layout from '../components/Layout'
import {TextInput} from 'react-native-paper'
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import Button from '../components/Button';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/Actions/actions';
import Toast from 'react-native-simple-toast'
const Login = ({navigation}) => {
    const dispatch = useDispatch();
    const [email,setEmail] = useState("hkhan.swa@gmail.com")
    const [password,setPassword] = useState("12345678");
    const [loading,setLoading] = useState(false);
    const [techloading,setTechloading] = useState(false)

const customerLogin = ()=>{
    setLoading(true)
    var data = JSON.stringify({
        "email": email,
        "password": password
      });
      
      var config = {
        method: 'post',
        url: 'http://generator.thecodelogy.com/api/login',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
    setLoading(false)
        dispatch(loginUser(response.data))
        // console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
    setLoading(false)

        console.log(error);
      });
      
}

const technicianLogin = ()=>{
    setTechloading(true)
    var data = JSON.stringify({
        "email": email,
        "password": password
      });
      
      var config = {
        method: 'post',
        url: 'http://generator.thecodelogy.com/api/login',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        setTechloading(false)
        dispatch(loginUser(response.data))
        // console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        setTechloading(false)

        console.log(error);
      });
      
}
  return (
   <Layout>
       
       <Image source={require("../Assets/Images/loginimage.png")} style = {{height:200,width:200,alignSelf:"center"}} />
       <Text style = {{color:"#4B6D9B",fontWeight:"600",marginVertical:5,fontSize:10}}>Welcome Back</Text>
       <Text style = {{color:"#222222",fontWeight:"bold",marginVertical:5,fontSize:20}}>Login with</Text>

       <Text style = {{color:"#222222",fontWeight:"bold",marginVertical:10}}>Email</Text>
   <TextInput
    //   label="Email"
      
        value={email}
        onChangeText = {(text)=>setEmail(text)}
      activeUnderlineColor='transparent'
      underlineColor="tranparent"   // add this
        outlineColor='tranparent'
        style = {{height:50,borderTopLeftRadius:8,borderTopRightRadius:8,borderBottomLeftRadius:8,borderBottomRightRadius:8,borderWidth:1,borderColor:"#0048908F",marginVertical:10}}
      right={<TextInput.Icon name="check" />}
    />
       <Text style = {{color:"#222222",fontWeight:"bold",marginVertical:10}}>Password</Text>

<TextInput
     
     activeUnderlineColor='transparent'
            
     value={password}
     onChangeText = {(text)=>setPassword(text)}
      secureTextEntry
      underlineColor="tranparent"   // add this
        outlineColor='tranparent'
        style = {{height:45,borderTopLeftRadius:8,borderTopRightRadius:8,borderBottomLeftRadius:8,borderBottomRightRadius:8,borderWidth:1,borderColor:"#0048908F"}}
      right={<TextInput.Icon name="eye" />}
    />
       <Text style = {{color:"#242424",fontWeight:"500",marginVertical:10,alignSelf:"flex-end"}} onPress = {()=>{
navigation.navigate("Forget")
       }}>Forget Your Password?</Text>
    <View style = {{flexDirection:"row",justifyContent:"space-between"}}>
        <Button title={"Pals Log In"} width={160} onPress = {()=>technicianLogin()} loading = {techloading}/>
        <Button title={"Customer Log In"} width={160} onPress = {()=>customerLogin()} loading={loading}/>

    </View>
   </Layout>
  )
}

export default Login