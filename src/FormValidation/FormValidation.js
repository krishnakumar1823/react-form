import React, { useState } from "react";

const Form=()=>{
    const[name,setName]=useState("")
    const[password,setPass]=useState("")
    const[arr,setArray]=useState([])
    const[err,setErr]=useState(false)

    const ipVal=(e)=>{
        if(e.target.name === "username"){
            setName(e.target.value)
        }
        else{
            setPass(e.target.value)
        }
    }

    const submit=(e)=>{
        e.preventDefault()

        if(name === "" && password === ""){
            setErr(true)
        }
        else{
            let obj={user_name:name,user_password:password}
            setArray([...arr,obj])
        }
    }
    console.log(arr)


    return(<form>
        <input type="text" placeholder="Username" name="username" onInput={ipVal}/>
            <div>{err && name==="" ? <p>Name required</p> : ""}</div>
        <input type="password" placeholder="Password" name="password" onInput={ipVal}/>
            <div>{err && password==="" ? <p>Password required</p>: ""}</div>
        <button type="submit" onClick={submit}>Submit</button>
    </form>)
}

export default Form