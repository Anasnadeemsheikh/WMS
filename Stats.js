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
 import Entypo from 'react-native-vector-icons/Entypo';
 import * as Progress from 'react-native-progress';
 const tasks=[
        {Tnumber:1,name:'initialization',status:'completed'},
        {Tnumber:1,name:'pre-Vacuum',status:'completed'},
        {Tnumber:1,name:'Intake',status:'completed'},
        {Tnumber:1,name:'pre-Heating',status:'completed'},
        {Tnumber:1,name:'Normalizing',status:'completed'},
        {Tnumber:1,name:'Vacuum',status:'current'},
        {Tnumber:1,name:'Heating',status:'pending'},
        {Tnumber:1,name:'Sterilization',status:'pending'},
        {Tnumber:1,name:'Exhaust',status:'pending'},
        {Tnumber:1,name:'Dry',status:'pending'},
    ]
 
 function Stats(props){
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
 

    
 
   return (
    
      
        <LinearGradient colors={['#171921', '#181A20', '#18172A']} style={styles.linearGradient}>
         <StatusBar barStyle='light-content'/> 
         <SafeAreaView style={styles.container}>
           <View style={{flex:1, paddingHorizontal:'4%', marginTop:10}}>
             
             <View style={styles.topbar}>
               <SimpleLineIcons name="options-vertical" size={20} color="#fff" onPress={()=> {props.navigation.toggleDrawer()}}/>
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
             <LinearGradient 
                    start={{x: 0.1, y: -0.1}} end={{x: 0.3, y: 2}}
                    locations={[0,0.25,0.65,0.9]}
                    colors={['#00FFC2E3', '#00A3FF', '#D684CDD5', '#FFB802']} 
                    style={{flex:1,paddingHorizontal:'4%', borderRadius:20}}
                    >
                     <View style={{flex:2,flexDirection:'column',justifyContent:'space-evenly',alignItems:'center',}}>
                           <Text style={{color:'#000',fontWeight:'400',fontSize:28}}>{socketdata.process.name}</Text>
                     </View>
                     <View style={{flex:2,flexDirection:'column',alignItems:'center',}}>
                         
                           <Image style={{width:'22%', height:'100%',  resizeMode:'contain', tintColor:'#000' }} source={data[socketdata.process.icon-1].icon}></Image>
                     <View style={{position:'absolute', width:'32%', height:'100%',alignItems:'flex-end'}}>
                       {
                         socketdata.process.program_Completed ?
                         <Icon name="checkbox" size={30} color="#00C259" />
                         :
                         <Entypo name="squared-cross" size={30} color="#FF2D2BE0" />

                       }
                          
                     </View>
                     </View>
                     <View style={{flex:2,justifyContent:'center'}}>

                        <Progress.Bar
                            style={{marginBottom:'4%'}}
                            color={socketdata.process.program_Completed ? "#14DB40" : "#FF2D2BE0"}
                            width={null}
                            progress={1}
                            indeterminate={false}
                            /> 
                        <View style={{alignSelf:'center',alignItems:'baseline',flexDirection:'row'}}>
                        {
                         socketdata.process.program_Completed ?
                         <Text style={{color:'#14DB40',fontWeight:'500',fontSize:22}}>Process Completed</Text>
                         :
                         <Text style={{color:'#FF2D2BE0',fontWeight:'500',fontSize:22}}>Process Failed</Text>

                       }
                             
                         </View>
                     </View>
                 </LinearGradient>
             </View>
             <View style={styles.tasks}>
                 <FlatList
                    data={socketdata.process.task}
                    ListHeaderComponent={()=>{
                        return (
                            <View style={{flex:1, paddingVertical:'2%',paddingHorizontal:'4%',marginBottom:'2%', backgroundColor:'#7C7B931e', borderRadius:20, flexDirection:'row'}}>
                                <View style={{flex:2,flexDirection:'column',justifyContent:'space-evenly',}}>
                                    <Text style={{color:'#70707032',fontWeight:'bold',fontSize:16}}>Overview</Text>
                                    <View style={{flexDirection:'row', marginVertical:'2%', alignItems:'center',}}>
                                            <View style={{flex:1,height:'70%',maxWidth:50,backgroundColor:'#00C259', borderRadius:5,alignItems:'center',justifyContent:'center'}}>
                                            <Text style={{color:'white'}}>4/8</Text>
                                            </View>
                                            <Text style={{color:'white',fontWeight:'bold',fontSize:18, marginLeft:'2%'}}>Tasks</Text>
                                    </View>
                                    <Text style={{color:'#70707050',fontWeight:'normal',fontSize:12,marginLeft:2}}>4/8 Tasks of the process are done</Text>
                                </View>
                                <View style={{flex:1,flexDirection:'column',alignItems:'flex-end',justifyContent:'flex-start',}}>
                                <Progress.Circle
                                        style={{marginHorizontal:'5%', marginVertical:'10%'}}
                                        size={40}
                                        progress={0.7}
                                        thickness={2}
                                        direction={'counter-clockwise'}
                                        borderWidth={0.5}
                                        color={'#00C259'}
                                        indeterminate={false}
                                    />
                                </View>
                            </View>
                        )
                    }} 
                    renderItem={({item})=>{
                        return(
                          
                            <View style={{flexDirection:'row', backgroundColor:'#7C7B931e',marginBottom:'2%',paddingVertical:'2%', borderRadius:20, alignItems:'center'}} >
                                    <Text style={{flex:2,fontSize:14, color:'white',marginLeft:'4%'}}>{
                                    item.name === '1' ? "Initialization" :
                                    item.name === '2' ? "pre-Vacuum" :
                                    item.name === '3' ? "Intake" :
                                    item.name === '4' ? "pre-Heating" :
                                    item.name === '5' ? "Normalizing" :
                                    item.name === '6' ? "Vacuum" :
                                    item.name === '7' ? "Heating" :
                                    item.name === '8' ? "Sterilization" :
                                    item.name === '9' ? "Exhaust" :
                                    "Dry" 
                                    }</Text>
                                    <View style={{flex:1,marginRight:10,alignItems:'flex-end'}} >
                                        {
                                            item.status===100? <Icon name="checkmark-done-circle-outline" size={30} color="#00C259" style={{marginRight:10}}/>
                                            : <Icon name="ios-close-circle" size={30} color="#FF2D2BE0" style={{marginRight:10}}/>
                                            
                                        }
                                        

                                       

                                        </View>
                                </View>
                         
                        )
                    }}
                
                  />
             </View>
             <View style={styles.actions}>
             <TouchableOpacity onPress={()=>console.log("item")} style={{flex:1,flexDirection:'row',borderRadius:20, backgroundColor:'#C44A0D',marginVertical:'2.2%',justifyContent:'center',alignItems:'center',marginHorizontal:'2%'}}>
                <Icon5 name='door-open' size={22} color='#fff'/>
                <Text style={{marginLeft:'2%', fontSize:28,fontWeight:'600',color:'white'}}>Door</Text>

              </TouchableOpacity>

              <TouchableOpacity onPress={()=>props.navigation.navigate('Home')} style={{flex:1,flexDirection:'row',borderRadius:20, backgroundColor:'#00A3FFE0',marginVertical:'2.2%',justifyContent:'center',alignItems:'center',marginHorizontal:'2%'}}>
                <Icon name='home-outline' size={22} color='#fff'/>
                <Text style={{marginLeft:'2%', fontSize:28,fontWeight:'600',color:'white'}}>Home</Text>

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
     flex:1.5,
     justifyContent:'center',
   },
   idbar:{
    flex:3.2,
    flexDirection:'column',
    justifyContent:'center',

    marginTop:'2%',
 
   },
   status:{
     flex:6,
     justifyContent:'flex-end',
   },
   overview:{
     flex:9.2,
    marginVertical:'5%',
   },
   tasks:{
     flex:10,
     flexDirection:'column',
 
   },
   actions:{
    flex:3,
    marginVertical:'2%',
    flexDirection:'row'
 
   },
 });
 
 export default Stats;
 