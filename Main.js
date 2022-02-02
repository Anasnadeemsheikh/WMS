import React, {  useState, useEffect,useRef} from 'react'
import {
    TouchableOpacity,
    View,
    Text,
  } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector, useDispatch} from 'react-redux';
import Home from './Home';
import Profile from './Profile';
import Process from './Process';
import Stats from './Stats';
import {connect, setdata, setconnection} from './src/action';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Main(props) {
    const [reload, setreload] = useState(true)
    const socket = useSelector(state => state.WebSocketReducer);
    
    const dispatch = useDispatch();
    const reloadCounter = useRef(0);

useEffect(() => {
        dispatch(connect());
        
      }, [])

      useEffect(() => {
        setTimeout(()=>{setreload(!reload);}, 1500); 
          console.log(reloadCounter.current);
          
          if(reloadCounter.current>10){
              socket.close();
              console.log("Reconnecting...");
            dispatch(connect());
            
          }else
          ++reloadCounter.current;
          
          
        
        }, [reload])

    useEffect(() => {
        
            
            socket.onopen = function(event) {
                dispatch(setconnection(true));
            console.log("WebSocket is open now.");
            };
            socket.onclose = function(event) {
            dispatch(setconnection(false));
            console.log("WebSocket is closed now.");
            };
            socket.onmessage=(e)=>{
            var cache = JSON.parse(e.data);
            dispatch(setdata(cache));
            console.log(cache);
            console.log(cache.process.task); 
            reloadCounter.current=0;
            }
             
        
    }, [socket])
    
    return (
        <Stack.Navigator> 
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
            <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
            <Stack.Screen name="Process" component={Process} options={{headerShown: false}}/>
            <Stack.Screen name="Stats" component={Stats} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}



export default Main

