import React, { useState } from "react";
import "./Style.scss"

const Form=()=>{
    const[name,setName]=useState("")
    const[password,setPassword]=useState("")
    const[gender,setGender]=useState("")
    const[arr,setArray]=useState([])
    const[err,setErr]=useState(false)
    const[show,setShow]=useState(true)
    const[hide,setHide]=useState(false)


    const ipVal=(e)=>{
        if(e.target.name === "username"){
            setName(e.target.value)
        }
        else if(e.target.name === "password"){
            setPassword(e.target.value)
        }
        
        else if(e.target.value === "male" || e.target.value === "female" ){     
            setGender(e.target.value)
            console.log(e.target.value)
        }
    }

    const Register=(e)=>{
        e.preventDefault()
        setHide(true)
        setShow(false)
    }

    const SignInUSer=(e)=>{
        e.preventDefault()
        setHide(false)
        setShow(true)
    }


    const RegisterUser=(e)=>{
        e.preventDefault()
        if(name === "" && password === ""){
            setErr(true)
        }
        else{   
            let obj={
                user_name:name,
                user_pass:password,
                Gender:gender
            }

            localStorage.setItem("array",JSON.stringify([...arr,obj]))
            
            setArray([...arr,obj])
            setHide(true)
            setShow(false)
        }
    }

    const SignIn=(e)=>{
        e.preventDefault()

        let get=JSON.parse(localStorage.getItem("array"))
        let sign_name=name
        let sign_pass=password

        let y=get.filter((val) => {
            return sign_name===val.user_name && sign_pass===val.user_pass ? val : ""
        })

        var count=y.length
        if(count>0){
            alert("success")
        }
        else{
            alert("failure")
        }
    }


    return(
        <div className="container">
            {show && (
            <div className="row jcnt col-12 align h-100">
                {password}
                <form className="col-5 text-center">
                    <input type="text" placeholder="Username" name="username" onInput={ipVal}/>
                        <div>{err && name==="" ? <p>Name required</p> : ""}</div>
                    <input type="password" placeholder="Password" name="password" onInput={ipVal}/>
                        <div>{err && password==="" ? <p>Password required</p>: ""}</div>
                    <button type="submit" onClick={Register}>SignUp</button>
                    <button type="submit" onClick={SignIn}>SignIn</button>
                    {password}
                </form>    
            </div>  
            )}  


        {hide && (
            <div className="row jcnt col-12 align h-100">
                <form className="col-5 text-center">
                    <input type="text" placeholder="Username" name="username" onInput={ipVal}/>
                        <div>{err && name==="" ? <p>Name required</p> : ""}</div>
                    <input type="password" placeholder="Password" name="password" onInput={ipVal}/>
                        <div>{err && password==="" ? <p>Password required</p>: ""}</div>

                    <label htmlFor="male">Male</label>
                    <input type="radio" id="male" value="male" onInput={ipVal} name="hi"/>

                    <label htmlFor="female">Female</label>
                    <input type="radio" id="Female" value="female" name="hi" onInput={ipVal}/>
                    
                    <button type="submit" onClick={RegisterUser}>Register</button>
                    <button type="submit" onClick={SignInUSer}>SignIn</button>
                </form>    
            </div>  
            )}  
        </div>
        )
}

export default Form