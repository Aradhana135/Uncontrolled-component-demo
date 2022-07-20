import React, { useRef } from 'react'

const Unconrolled = () => {
    const nameRef=useRef()
    const emailRef=useRef()
    const passwordRef=useRef()
    const handleSubmit=(e)=>{
        e.preventDefault()
        const name=nameRef.current.value
        const email=emailRef.current.value
        const password=passwordRef.current.value
        console.log("asdf",name,email,password)

    }

  return (
    <>
    <form>
        <label>Name:
            <input type="text" placeholder='name' ref={nameRef}/>
        </label><br/>
        <label>
            Email:
            <input type="Email" placeholder='email' ref={emailRef}/>
        </label><br/>
        <label>
            Passwrd:
            <input type="password" placeholder='password' ref={passwordRef}/>
        </label><br/>
        <hr color="grey"/>
        <button onClick={()=>{nameRef.current.focus()}}>Focus Name input</button>
        <button onClick={()=>{emailRef.current.focus()}}>Focus Email input</button>
        <button onClick={()=>{passwordRef.current.focus()}}>Focus Passwrd input</button>
        <hr color="grey"/>
        <button onClick={handleSubmit}>Submit</button>
    </form>
    </>
  )
}

export default Unconrolled