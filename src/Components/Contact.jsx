
import React, {useState} from 'react'
import {BsPhone} from 'react-icons/bs'


function Contact() {

    const [name,setname]=useState("")
    const [nameD, setnameD]=useState("none")
    const [email,setemail]=useState("")
    const [emailD, setemailD]=useState("none")
    const [phone, setphone]=useState("")
    const [phoneD,setphoneD]=useState("none")
    const [message, setmessage]=useState("")
    const[messageD, setmessageD]=useState("none")
    const [user,setuser]=useState([])
    const handleSubmit=(e)=>{
        e.prevent.Default()
        let copy =[...user, {name:name, email:email, phone:phone, message:message}];
        if(name === ''){
            setnameD("flex")
        }
        else{
            setnameD("none")
        }
        if(email===''){
            setemailD("flex")
        }
        else{
            setemailD("none")
        }
        if(phone===''){
            setphoneD("flex")
        }
        else{
            setphoneD("none")
        }
        if(message===''){
            messageD("flex")
        }
        else{
            messageD("none")
        }
        if(name !=='' && email !=='' && phone !=='' && message !=='' ){
            setuser(copy);
            setname('');
            setemail('');
            setphone('');
        }
    }
    const namechange=(e)=> {
        setname(e.target.value)
    }
    const emailchange=(e)=> {
        setemail(e.target.value)
    }
    const phonechange=(e)=> {
        setphone(e.target.value)
    }
    const messagechange=(e)=> {
        setmessage(e.target.value)
    }


  return ( 
 
    <div className='contact'>
        <form onSubmit={handleSubmit} >
            <input type="text" value={name} placeholder='Full Name'  onChange={namechange} />
                <p className='name' style={{display: nameD}}>Name is required</p>
        <input type="text" value={email}   placeholder='Email Addres' onChange={emailchange} />
        <p className='email' style={{display:emailD}}>Name is required</p>
        <input type="text" value={phone} placeholder='Phone Number' onChange={phonechange} />
        <p className='phone' style={{display: phoneD}}>Phone is required</p>
        <input type="text" value={message} placeholder='Message' onChange={messagechange} />
        <p className='message' style={{display:messageD}}>Message is empty</p>
       
        <button type='submit'>Submit</button>
  </form>
        <BsPhone style={{fontSize: '30px'}}></BsPhone>
        <p>+1 (555) 123-4567</p>
    </div>
  )
}

export default Contact