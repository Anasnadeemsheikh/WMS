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

 import LinearGradient from 'react-native-linear-gradient';
 import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
 import Icon from 'react-native-vector-icons/Ionicons';
 import Micon from 'react-native-vector-icons/MaterialCommunityIcons';
 import Icon5 from 'react-native-vector-icons/FontAwesome5';
 
 
 function History(props){
  
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
 
   
 
   return (
    
      
        <LinearGradient colors={['#171921', '#181A20', '#18172A']} style={styles.linearGradient}>
         <StatusBar barStyle='light-content'/> 
         <SafeAreaView style={styles.container}>
           <View style={{flex:1, paddingHorizontal:'4%', marginTop:10}}>
             
           <View style={styles.topbar}>
              <Icon name="chevron-back" size={20} color="#fff" style={{alignContent:'flex-start'}} onPress={()=> {props.navigation.goBack()}}/>
              <Text style={{fontSize:22,fontWeight:'700',color:'white',textAlign:'center'}}>History</Text>
              <View style={{width:20}}></View>{/* should be equal to Icon */}
            </View>
             
             <View style={styles.status}>
               <View style={{flex:0.9,paddingHorizontal:'4%', borderRadius:20, flexDirection:'row',backgroundColor:'#7C7B931e'}}>
                 <View style={{flex:1,flexDirection:'column',justifyContent:'space-evenly', }}>
                     <View style={{flexDirection:'row', alignItems:'center'}}>
                             <Icon name="thermometer-outline" size={30} color="#fff" style={{marginRight:10}}/>
                             <Text style={{color:'white',fontWeight:'bold',fontSize:32}}>9</Text>
                             <Text style={{color:'white',fontWeight:'normal',fontSize:16, alignSelf:'flex-end',marginLeft:2}}>°C</Text>
                       </View>
                     <View style={{flexDirection:'row', alignItems:'center',}}>
                           <Micon name="speedometer" size={30} color="#fff" style={{marginRight:10}} />
                           <Text style={{color:'white',fontWeight:'bold',fontSize:32}}>102</Text>
                           <Text style={{color:'white',fontWeight:'normal',fontSize:16, alignSelf:'flex-end',marginLeft:2}}>Kpa</Text>
                     </View>
                 </View>
                 <View style={{flex:1,flexDirection:'column',alignItems:'flex-end',justifyContent:'space-evenly',}}>
                     <Micon  name="water-off" size={30} color="#fff" />{/*water and water-off*/}
                     <Micon name="lock" size={30} color="#fff" />{/*lock and water-open*/}
                 </View>
               </View>
             </View>

             <View style={{flex:0.5}}>
            <View style={{height:1,marginHorizontal:'8%', backgroundColor:'#ffffff19'}}/>
            </View>

             <View style={styles.cycles}>
                 
                 <FlatList 
                     data={data}
                     renderItem={({item})=>{
                       return (
                         <TouchableOpacity style={{flexDirection:'row', backgroundColor:'#7C7B931e',marginBottom:'4%', borderRadius:20, alignItems:'center'}} onPress={()=> props.navigation.navigate('Profile',{prog:item})}>
                           
                                       <Image style={{flex:1,height:Dimensions.get('window').height/25, marginVertical:'2.8%', resizeMode:'contain'}} source={item.icon}/>
                                       <View style={{flex:2,flexDirection:'column'}}>
                                       <Text style={{fontSize:18, color:'white'}}>{item.name}</Text>
                                       <Text style={{fontSize:12, color:'#707070'}}>Today 04:45</Text>
                                       </View>
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
    flex:2.25,
    flexDirection:"row",
    justifyContent:'space-between',
    alignItems:'center', 
    textAlign:'center'
   },
   status:{
     flex:6,
     justifyContent:'center',
   },
   cycles:{
     flex:19,
     flexDirection:'column',
 
   },
   actions:{
     flex:3,
     marginVertical:'2%'
 
   },
 });
 
 export default History;
 