import React, {  useState } from "react";
export const AuthData = React.createContext({
  token: "",
  isLoggedIn: false,
  email:'',
  login: () => {},
  logout: () => {},
});
const AuthContext = (props) => {
  const loadToken=localStorage.getItem('token');
  const [token, setToken] = useState(loadToken);

  const isLoggedIn = !!token;
  console.log(isLoggedIn);
  
  const loginHandler = (id,email) => {
    console.log(email)
      setToken(true);
      localStorage.setItem("token", id);
      localStorage.setItem('email',email) 
  };
  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem('email')
  };
  const AuthContextData = {
    tokenId: token,
    isLoggedIn: isLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    email:localStorage.getItem('email')===null? '':localStorage.getItem('email')
  };
  return (
    <AuthData.Provider value={AuthContextData}>
      {props.children}
    </AuthData.Provider>
  );
};
export default AuthContext;
