import React, { useState } from "react";
import './Style.scss'
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";

const FormTable =() =>{

    const[name,setName]=useState("")
    const[description,setDescription]=useState("")
    const[radio,setRadio]=useState("")
    const[arr,setArray]=useState([])
    const[err,setErr]=useState(false)

    const checkInput=(e)=>{
        if(e.target.name === "Tname"){
            setName(e.target.value)
        }
        else if(e.target.name === "Tdesc"){
            setDescription(e.target.value)
        }
        else{
            setRadio(e.target.value)
        }
    }


    const Btnsubmit=(e)=>{
        e.preventDefault()
        if(name === "" && description ==="" && radio === ""){
            setErr(true)
        }
        else{
            let object={
                Task_name:name,
                Task_Description:description,
                Radio:radio
            }
            console.log(object)
            setArray([...arr,object])

            localStorage.setItem("array",JSON.stringify(arr))

        }
    }

    const edit=(e)=>{
        setName(e.target.value)
        setDescription(e.target.value)
        setRadio(e.target.value)
        let object1={
            Task_name:name,
            Task_Description:description,
            Radio:radio
        }
        console.log(object1)
        setArray([...arr,object1])
        localStorage.setItem("array",JSON.stringify(object1))
    }

    const del=(e)=>{
        e.preventDefault()
        setName("")
        setDescription("")
        setRadio("")
        let object1={
            Task_name:name,
            Task_Description:description,
            Radio:radio
        }
        console.log(object1)
        setArray([...arr,""])
        localStorage.setItem("array",JSON.stringify(""))
    }
    return(
        <section className="bg">
        <div className="container">
            <div className="col-12 row justify-content-center align-items-center vh-100">
                <form className="res row bgblur">
                    <h1 className="col-12" style={{color:"white",textAlign:"center"}}>TASK</h1>

                    {/* <!--Name--> */}
                    <div className="col-12 pos">
                        <input type="text" name="Tname" onInput={checkInput} required/>
                        <span>Task Name</span>
                        {err && name==="" ? <p>Task name required</p>:""}
                    </div>
                    

                    {/* <!--Description--> */}
                   <div className="col-12 pos">
                        <textarea type="text" rows="5" cols="50" name="Tdesc" onInput={checkInput} required></textarea>
                        <span>Task Description</span>
                        {err && description==="" ? <p>Task description required</p>:""}
                   </div>
            

                    {/* <!--radio--> */}
                   <div className="col-12 row label justify-content-center">
                        <div className="col-2 text-center">
                            <label htmlFor="Rad1">Radio1</label>
                            <input type="radio" name="hi" value="Radio1" onInput={checkInput}/>
                        </div>
                        <div className="col-2 text-center">
                            <label htmlFor="Rad2">Radio2</label>
                            <input type="radio" name="hi" value="Radio2" onInput={checkInput}/>
                        </div>
                        {err && radio==="" ? <p>Radio button is not choosed</p>:""}
                    </div>
                    

                    {/* <!--button--> */}
                    <div className="col-12 justify-content-center row submit-btn">
                        <button type="submit" onClick={Btnsubmit}>Submit</button>
                    </div>

                    {/* <!--table--> */}
                    <table className="col-12">
                        <thead>
                            <tr>
                                <th>Task Name</th>
                                <th>Task Description</th>
                                <th>Radio value</th>
                                <th>Edit</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{name}</td>
                                <td>{description}</td>
                                <td>{radio}</td>
                                <td className="text-center hvr" onClick={edit}><FiEdit/></td>
                                <td className="text-center hvr" onClick={del}><AiOutlineDelete/></td>
                            </tr>
                        </tbody>
                        
                    </table>
                </form>
            </div>
        </div>
        </section>
    )
}

export default FormTable