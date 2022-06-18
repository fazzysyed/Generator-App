import { StyleSheet, Text, View ,ActivityIndicator} from 'react-native'
import React, { useState,useEffect } from 'react'
import Layout from '../../components/Layout'
import MapView,{PROVIDER_GOOGLE,Marker} from 'react-native-maps'
import { useSelector } from 'react-redux'
import axios from 'axios'

const Map = ({navigation}) => {
  const [data,setData] = useState([]);
  const user = useSelector(state=>state.Reducer.user)
  const [loading,setLoading] = useState(false)

  useEffect(()=>{

    setLoading(true)
   
   var config = {
     method: 'get',
     url: 'http://generator.thecodelogy.com/api/all-customers',
     headers: { 
       'Authorization':  `Bearer ${user.access_token}`, 
     }
   };
   
   axios(config)
   .then(function (response) {
     console.log(response.data);
     if(response.data.data){
       let newArray = [];
     
       response.data.data.map(item=>{
         if(item.latitude && item.longitude){
          newArray.push({
            lat : item.latitude,
            long : item.longitude
          })
         }
    
       })
       console.log(newArray)
       setData(newArray)
     }
    //  setCustomers(response.data.data)
     setTimeout(()=>{
      setLoading(false)
     },3000)
   
   })
   .catch(function (error) {
     console.log(error);
    setLoading(false)
   
   });
   
     },[])
  return (
 <Layout back={true} navigation={navigation}>
   <View style = {{flex:1,height:600}}>
    {loading ? 
  <ActivityIndicator/> : 
  
  <MapView
  style={{ flex: 1 }}
  provider={PROVIDER_GOOGLE}
  showsUserLocation
  followsUserLocation

  initialRegion={{
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421}}
>
   {data.map((item => {
                         console.log(item, "KKKKKKK")
                         return (
                             <Marker
                                 title={"customer"}
                            
                                 draggable
                                 pinColor="#1A98D5"
                          


                                 coordinate={{
                                     latitude: parseFloat(item.lat),
                                     longitude: parseFloat(item.long)
                                     // latitudeDelta: LATITUDE_DELTA,
                                     // longitudeDelta: LONGITUDE_DELTA,
                                 }}

                                 onCalloutPress={e => {
                                     console.log('Marker was clicked', e);
                                 }}>

                             </Marker>

                         )
                     }))}
</MapView>
  }
   </View>
 </Layout>
  )
}

export default Map

const styles = StyleSheet.create({})