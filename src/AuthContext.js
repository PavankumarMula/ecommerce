import React, { useState } from "react";
  export const AuthData=React.createContext({
    token:'',
    isLoggedIn:false,
    login:()=>{},
    logout:()=>{}

})
 const AuthContext = (props) =>{
    const[token,setToken]=useState(null)
    const isLoggedIn=!!token

    const loginHandler=(id)=>{
        if(id){
            setToken(true)
            localStorage.setItem('token',id)
        }
        
        
        
    }
    const logoutHandler=()=>{
        setToken(null)
        localStorage.removeItem('token');
    }
    const AuthContextData={
        tokenId:token,
        isLoggedIn:isLoggedIn,
        login:loginHandler,
        logout:logoutHandler
    }
    return <AuthData.Provider value={AuthContextData}>
        {props.children}
    </AuthData.Provider>
}
export default AuthContext;