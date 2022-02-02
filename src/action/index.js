
export const connect=()=>{
   return {
      type:'CONNECT',
      payload:null
   }
     
    
};

export const setdata=(data)=>{
   return {
      type:'SETSTATE',
      payload: data,

   }
     
    
};

export const setconnection=(data)=>{
   return {
      type:'SETCONN',
      payload: data,

   }
     
    
};



