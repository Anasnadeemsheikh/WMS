import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  FlatList,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import { useSelector, useDispatch} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import Micon from 'react-native-vector-icons/MaterialCommunityIcons';
import Meterialicons from 'react-native-vector-icons/MaterialIcons';
import Icon5 from 'react-native-vector-icons/FontAwesome5';



function Profile(props){
  const socketdata = useSelector(state => state.dataReducer);

  const socket = useSelector(state => state.WebSocketReducer);
  const [Indicator, setIndicator] = useState(false)
  const startcmd = {
    "username" : "username",
    "program" : 1,
    "command" : "start"
  }

  function start(){
    setIndicator(true)
    socket.send("Derek Doyle,"+props.route.params.prog.key+",Start");
    
  }
  useEffect(() => {
    if(socketdata.status === true){
      setIndicator(false)
      props.navigation.navigate('Process')
    }
    
  }, [socketdata])

  return (

       <LinearGradient colors={['#171921', '#181A20', '#18172A']} style={styles.linearGradient}>
        <StatusBar barStyle='light-content'/> 
        <SafeAreaView style={styles.container}>
          
          <View style={{flex:1, paddingHorizontal:'4%', marginTop:10}}>
            
            <View style={styles.topbar}>
              <Icon name="chevron-back" size={20} color="#fff" style={{alignContent:'flex-start'}} onPress={()=> {props.navigation.goBack()}}/>
              <Text style={{fontSize:22,fontWeight:'700',color:'white',textAlign:'center'}}>Profile</Text>
              <View style={{width:20}}></View>{/* should be equal to Icon */}
            </View>

            <View style={styles.idbar}>

              <View style={{flex:2,flexDirection:'row', alignItems:'center'}}>
                <Image style={{width:'23%', height:'100%', marginLeft:'4%', resizeMode:'contain' }} source={props.route.params.prog.icon}/>
                <Text style={{marginLeft:'4%',width:'55%', fontSize:38, fontWeight:'bold', color:'white'}}>{props.route.params.prog.name}</Text>
              </View>
              <View style={{flex:0.5}}>
                <Text style={{marginLeft:'4%', fontSize:12, fontWeight:'500',color:'#70707050'}}>{props.route.params.prog.disc}</Text>
              </View>
            </View>
            <View style={{flex:0.3}}>
            <View style={{height:1,marginBottom:'2%', marginHorizontal:'8%', backgroundColor:'#ffffff19'}}/>
            </View>
            <View style={styles.profile}>
            <View style={{flexDirection:'row',height:'15%', backgroundColor:'#7C7B931e',marginTop:'2%',marginBottom:'4%', borderRadius:20, alignItems:'center'}}>
                      <Icon name="thermometer-outline" size={20} color="#fff" style={{marginRight:'5%',marginLeft:'4%'}}/>
                      <Text style={{flex:2,fontSize:16,fontWeight:'600', color:'white'}}>Temperature</Text>
                      <View style={{flex:1,flexDirection:'row',marginRight:'4%',justifyContent:'flex-end',alignItems:'flex-end'}} >
                      <Text style={{color:'white',fontSize:16,fontWeight:'600',}}>{props.route.params.prog.temp}</Text>
                      <Text style={{color:'white',fontSize:12, justifyContent:'flex-end',marginHorizontal:'2%'}}>°C</Text>
                      </View>
                </View> 
                <View style={{flexDirection:'row',height:'15%', backgroundColor:'#7C7B931e',marginBottom:'4%', borderRadius:20, alignItems:'center'}}>
                      <Micon name="speedometer" size={20} color="#fff" style={{marginRight:'5%',marginLeft:'4%'}} />
                      <Text style={{flex:2,fontSize:16,fontWeight:'600', color:'white'}}>Pressure</Text>
                      <View style={{flex:1,flexDirection:'row',marginRight:'4%',justifyContent:'flex-end',alignItems:'flex-end'}} >
                      <Text style={{color:'white',fontSize:16,fontWeight:'600',}}>{props.route.params.prog.pres}</Text>
                      <Text style={{color:'white',fontSize:12, justifyContent:'flex-end',marginHorizontal:'2%'}}>Kpa</Text>
                      </View>
                </View> 
                <View style={{flexDirection:'row',height:'15%', backgroundColor:'#7C7B931e',marginBottom:'4%', borderRadius:20, alignItems:'center'}}>
                      <Icon name="thermometer-outline" size={20} color="#fff" style={{marginRight:'5%',marginLeft:'4%'}}/>
                      <Text style={{flex:2,fontSize:16,fontWeight:'600', color:'white'}}>Sterilization</Text>
                      <View style={{flex:1,flexDirection:'row',marginRight:'4%',justifyContent:'flex-end',alignItems:'flex-end'}} >
                      <Text style={{color:'white',fontSize:16,fontWeight:'600',}}>{props.route.params.prog.ster}</Text>
                      <Text style={{color:'white',fontSize:12, justifyContent:'flex-end',marginHorizontal:'2%'}}>min</Text>
                      </View>
                </View> 
                <View style={{flexDirection:'row',height:'15%', backgroundColor:'#7C7B931e',marginBottom:'4%', borderRadius:20, alignItems:'center'}}>
                      <Meterialicons name="dry" size={20} color="#fff" style={{marginRight:'5%',marginLeft:'4%'}}/>
                      <Text style={{flex:2,fontSize:16,fontWeight:'600', color:'white'}}>Dry</Text>
                      <View style={{flex:1,flexDirection:'row',marginRight:'4%',justifyContent:'flex-end',alignItems:'flex-end'}} >
                      <Text style={{color:'white',fontSize:16,fontWeight:'600',}}>{props.route.params.prog.drytime}</Text>
                      <Text style={{color:'white',fontSize:12, justifyContent:'flex-end',marginHorizontal:'2%'}}>min</Text>
                      </View>
                </View> 
                <View style={{flexDirection:'row',height:'15%', backgroundColor:'#7C7B931e',marginBottom:'4%', borderRadius:20, alignItems:'center'}}>
                      <Micon name="clock-time-four-outline" size={20} color="#fff" style={{marginRight:'5%',marginLeft:'4%'}}/>
                      <Text style={{flex:2,fontSize:16,fontWeight:'600', color:'white'}}>Total Estimated Time</Text>
                      <View style={{flex:1,flexDirection:'row',marginRight:'4%',justifyContent:'flex-end',alignItems:'flex-end'}} >
                      <Text style={{color:'white',fontSize:16,fontWeight:'600',}}>{props.route.params.prog.duration}</Text>
                      <Text style={{color:'white',fontSize:12, justifyContent:'flex-end',marginHorizontal:'2%'}}>min</Text>
                      </View>
                </View> 
            </View>
            <View style={styles.actions}>
            <TouchableOpacity onPress={()=>console.log("item")} style={{flex:1,flexDirection:'row',borderRadius:20, backgroundColor:'#C44A0D',marginVertical:'2.2%',justifyContent:'center',alignItems:'center',marginHorizontal:'2%'}}>
                <Icon5 name='door-open' size={22} color='#fff'/>
                <Text style={{marginLeft:'2%', fontSize:28,fontWeight:'600',color:'white'}}>Door</Text>

              </TouchableOpacity>

              <TouchableOpacity onPress={()=>start()} style={{flex:1,flexDirection:'row',borderRadius:20, backgroundColor:'#07C488E0',marginVertical:'2.2%',justifyContent:'center',alignItems:'center',marginHorizontal:'2%'}}>
                <Icon name='play-outline' size={22} color='#fff'/>
                <Text style={{marginLeft:'2%', fontSize:28,fontWeight:'600',color:'white'}}>Start</Text>

              </TouchableOpacity>
              
            </View>
          </View>
        </SafeAreaView>
        {
          Indicator ?
          <ActivityIndicator style={{position:'absolute',backgroundColor:'#000000e1', width:'100%', height:'100%'}} size={'large'} />
          :
          null
        }

      </LinearGradient>
   
     
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container:{
    flex: 1,
    
  },
  topbar:{
    flex:2.25,
    flexDirection:"row",
    justifyContent:'space-between',
    alignItems:'center', 
    textAlign:'center'
  },
  idbar:{
    flex:6.81,
    flexDirection:'column',
    marginTop:'2%',
  },
  profile:{
    flex:18,

  },
  actions:{
    flex:3,
    marginVertical:'2%',
    flexDirection:'row'
  },
});

export default Profile;
