const dataReducer = (state=0,action) => {
    switch(action.type){
        case 'SETSTATE':
             return state = action.payload;
        default:
                return state;
        
    }
}
export default dataReducer;