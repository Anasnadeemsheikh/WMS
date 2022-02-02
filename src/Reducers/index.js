import WebSocketReducer from './SocketReducer'
import dataReducer from './dataReducer'
import connReducer from './connReducer'
import {combineReducers } from 'redux' 



const RootReducers=combineReducers({
     WebSocketReducer, 
     dataReducer,
     connReducer,

});
export default RootReducers;