const WebSocketReducer = (state=0,action) => {
    switch(action.type){
        case 'CONNECT':
            return state = new WebSocket('ws://192.168.1.201:81/');
        default:
                return state
        
    }
}
export default WebSocketReducer;