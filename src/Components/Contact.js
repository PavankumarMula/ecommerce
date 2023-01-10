import React, {useRef} from 'react'
import './Contact.css'
const Contact = ()=>{
    const Name=useRef('')
    const Email=useRef('')
    const Phone=useRef('')
   async function submitHandler(event){
        event.preventDefault();
        const user= {
            name:Name.current.value,
            Email:Email.current.value,
            Phone:Phone.current.value
        }
       const promise=await fetch('https://react-92f28-default-rtdb.firebaseio.com/movies.json',{
            method:'POST',
            body:JSON.stringify(user)
        })
        const data=await promise.json();
        console.log(data)
    }

    return <div className='form'>
        <form onSubmit={submitHandler}>
      <div>
         <label htmlFor='Name'>Name</label>
         <input type='text' id='Name' ref={Name} />
       </div>
       <div>
        <label htmlFor='Email'>Email</label>
         <input type='email'  id='Email' ref={Email}></input>
       </div>
       <div>
         <label htmlFor='Phone'>Phone</label>
         <input type='text' id='Phone' ref={Phone} />
       </div>
      <center><button>submit</button></center>
     </form>
    </div>
}
export default Contact
    