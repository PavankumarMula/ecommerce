import { Form, Button } from "react-bootstrap";
import { useContext, useRef, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { AuthData } from "./AuthContext";

const LogIn = () => {
    const authCtx=useContext(AuthData);
   const history = useHistory()
  const email = useRef();
  const password = useRef();
  const formhandler = (event) => {
        event.preventDefault();
        const useremail=email.current.value
        const userpassword=password.current.value
        fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAsYyotWR2zesaRukTm4MhJNB9k7RTFZdY`,
        {
            method:'POST',
            body:JSON.stringify({
                email:useremail,
                password:userpassword,
                returnSecureToken:true
            }),
            headers:{
                'content-Type':'application/json'
            }
        }).then(res=>{if(res.ok){
               res.json().then(data=>{
               authCtx.login(data.idToken)
               history.replace('/store')
               })
        }else{
            res.json().then(data=>{
                alert(data.error.message)
            })
        }
    })
  }
  return (
    <Form onSubmit={formhandler}
      style={{
        padding: "30px",
        marginLeft: "350px",
        marginRight: "350px",
        backgroundColor: "lightgreen",
        marginTop: "20px",
      }}
    >
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" ref={email} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" ref={password} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};
export default LogIn;
