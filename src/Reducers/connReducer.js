const connReducer = (state=false,action) => {
    switch(action.type){
        case 'SETCONN':
             return state = action.payload;
        default:
            return state;
        
    }
}
export default connReducer;