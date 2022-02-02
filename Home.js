import React, { Component, useState, useEffect}  from 'react';
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
 } from 'react-native';
 import { useSelector, useDispatch} from 'react-redux';
 import LinearGradient from 'react-native-linear-gradient';
 import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
 import Icon from 'react-native-vector-icons/Ionicons';
 import Micon from 'react-native-vector-icons/MaterialCommunityIcons';
 import Icon5 from 'react-native-vector-icons/FontAwesome5';
 import * as Progress from 'react-native-progress';

 
 
 function Home(props){
  const socketdata = useSelector(state => state.dataReducer);
   data =[
     {key:1,type:'const',name:"Wrapped 134",temp:134,ster:10,pres:220,duration:60,drytime:10,icon:require('./assets/wrapped134.png'),disc:'For High temprature packed instruments.'},
     {key:2,type:'const',name:"Unwrapped 134",temp:134,ster:5,pres:220,duration:60,drytime:10,icon:require('./assets/unwrapped134.png'),disc:'For High temprature nude instruments.'},
     {key:3,type:'const',name:"Wrapped 121",temp:134,ster:20,pres:110,duration:60,drytime:10,icon:require('./assets/wrapped121.png'),disc:'For Low temprature packed instruments.'},
     {key:4,type:'const',name:"Unwrapped 121",temp:134,ster:15,pres:110,duration:60,drytime:10,icon:require('./assets/unwrapped121.png'),disc:'For Low temprature nude instruments.'},
     {key:5,type:'editable',name:"Custom 134",temp:134,pres:220,ster:0,duration:60,drytime:10,icon:require('./assets/custom134.png'),disc:'User defined Sterlization period for High temprature instruments.'},
     {key:6,type:'editable',name:"Custom 121",temp:134,ster:0,pres:110,duration:60,drytime:10,icon:require('./assets/custom121.png'),disc:'User defined Sterlization period for Low temprature instruments.'},
     {key:7,type:'const',name:"Halix test",temp:134,ster:0,pres:220,duration:60,drytime:10,icon:require('./assets/heat_test.png'),disc:'Maintenance test.'},
     {key:8,type:'const',name:"vaccume test",temp:134,ster:0,pres:-70,duration:60,drytime:10,icon:require('./assets/pressure_test.png'),disc:'Maintenance test.'},
   ]
 
   if(socketdata.status === true){
    //setIndicator(false)
    props.navigation.navigate('Process')
  }
 
   return (
    
      
        <LinearGradient colors={['#171921', '#181A20', '#18172A']} style={styles.linearGradient}>
         <StatusBar barStyle='light-content'/> 
         <SafeAreaView style={styles.container}>
           <View style={{flex:1, paddingHorizontal:'4%', marginTop:10}}>
             
             <View style={styles.topbar}>
               <SimpleLineIcons name="options-vertical" size={20} color="#fff" onPress={()=> {props.navigation.toggleDrawer()}}/>
             </View>
             <View style={styles.idbar}>
               <Text style={{marginLeft:'4%', fontSize:38, fontWeight:'bold', color:'white',}}>Hi,{"\n"}Derek Doyle</Text>
             </View>
             <View style={styles.status}>
               <View style={{flex:0.9,paddingHorizontal:'4%', borderRadius:20, flexDirection:'row',backgroundColor:'#7C7B931e'}}>
                 <View style={{flex:1,flexDirection:'column',justifyContent:'space-evenly', }}>
                     <View style={{flexDirection:'row', alignItems:'center'}}>
                             <Icon name="thermometer-outline" size={30} color="#fff" style={{marginRight:10}}/>
                             <Text style={{color:'white',fontWeight:'bold',fontSize:32}}>{socketdata.temp}</Text>
                             <Text style={{color:'white',fontWeight:'normal',fontSize:16, alignSelf:'flex-end',marginLeft:2}}>°C</Text>
                       </View>
                     <View style={{flexDirection:'row', alignItems:'center',}}>
                           <Micon name="speedometer" size={30} color="#fff" style={{marginRight:10}} />
                           <Text style={{color:'white',fontWeight:'bold',fontSize:32}}>{socketdata.pres}</Text>
                           <Text style={{color:'white',fontWeight:'normal',fontSize:16, alignSelf:'flex-end',marginLeft:2}}>Kpa</Text>
                     </View>
                 </View>
                 <View style={{flex:1,flexDirection:'column',alignItems:'flex-end',justifyContent:'space-evenly',}}>
                     <Micon name={socketdata.Twater ? "water" : "water-off"} size={30} color="#fff" />{/*water and water-off*/}
                     <Micon name={socketdata.door ? "lock" : "lock-open"} size={30} color="#fff" />{/*lock and water-open*/}
                 </View>
               </View>
             </View>
             <View style={styles.overview}>
                 <View style={{flex:0.9,paddingHorizontal:'4%', backgroundColor:'#7C7B931e', borderRadius:20, flexDirection:'row'}}>
                     <View style={{flex:2,flexDirection:'column',justifyContent:'space-evenly',}}>
                           <Text style={{color:'#70707032',fontWeight:'bold',fontSize:16}}>Overview</Text>
                           <View style={{flexDirection:'row', alignItems:'center',}}>
                                 <View style={{flex:1,height:'70%',maxWidth:50,backgroundColor:'#00C259', borderRadius:5,alignItems:'center',justifyContent:'center'}}>
                                   <Text style={{color:'white'}}>100%</Text>
                                 </View>
                                 <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>Process Completion</Text>
                           </View>
                           <Text style={{color:'#70707050',fontWeight:'normal',fontSize:12,marginLeft:2}}>Process #00022</Text>
                     </View>
                     <View style={{flex:1,flexDirection:'column',alignItems:'flex-end',justifyContent:'space-evenly',}}>
                      <Progress.Circle
                          style={{marginHorizontal:'5%', marginVertical:'10%'}}
                          size={30}
                          progress={0.7}
                          thickness={2}
                          direction={'counter-clockwise'}
                          borderWidth={0.5}
                          color={'#00C259'}
                          indeterminate={false}
                      />
                     </View>
                 </View>
             </View>
             <View style={styles.cycles}>
                 <Text style={{marginLeft:'4%',fontSize:32, fontWeight:'600', color:'white',}}>Cycles</Text>
                 
                 <FlatList 
                     style={{marginTop:'3%'}}
                     data={data}
                     renderItem={({item})=>{
                       return (
                         <TouchableOpacity style={{flexDirection:'row', backgroundColor:'#7C7B931e',marginBottom:'4%', borderRadius:20, alignItems:'center'}} onPress={()=> props.navigation.navigate('Profile',{prog:item})}>
                           
                                       <Image style={{flex:1,height:Dimensions.get('window').height/25, marginVertical:'2.8%', resizeMode:'contain'}} source={item.icon}/>
                                       <Text style={{flex:2,fontSize:18, color:'white'}}>{item.name}</Text>
                                       <View style={{flex:1,marginRight:10,alignItems:'flex-end'}} >
                                           <Micon name="chevron-right" size={30} color="#fff"  />
 
                                         </View>
                                   </TouchableOpacity>
                         
                         );
                     }}
                 /> 
             </View>
             <View style={styles.actions}>
               <TouchableOpacity onPress={()=>console.log("item")} style={{flex:1,flexDirection:'row',borderRadius:20, backgroundColor:'#C44A0F',marginVertical:'2.2%',justifyContent:'center',alignItems:'center'}}>
                 <Icon5 name='door-open' size={22} color='#fff'/>
                 <Text style={{marginLeft:'2%', fontSize:28,fontWeight:'600',color:'white'}}>Door</Text>
 
               </TouchableOpacity>
             </View>
           </View>
         </SafeAreaView>
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
     flex:1,
     justifyContent:'center',
   },
   idbar:{
     flex:4.5,
     justifyContent:'center',
 
   },
   status:{
     flex:6,
     justifyContent:'center',
   },
   overview:{
     flex:3,
 
   },
   cycles:{
     flex:13,
     flexDirection:'column',
 
   },
   actions:{
     flex:3,
     marginVertical:'2%'
 
   },
 });
 
 export default Home;
 