import React, { useState } from "react";
import './Style.scss'

export const FunState=(props)=>{
    
    const[array,setArray]=useState(props.arr)

    const sorting=(data)=>{
        if(data=="a"){
            let x=[...array].sort(function(a,b){
                if (a.Mobile_name < b.Mobile_name) {
                    return -1;
                }
                if (a.Mobile_name > b.Mobile_name) {
                    return 1;
                }
                return 0;
            })
            setArray(x)
        }
        else if(data=="d"){
            let x=[...array].sort(function(a,b){
                if (a.Mobile_name < b.Mobile_name) {
                    return -1;
                }
                if (a.Mobile_name > b.Mobile_name) {
                    return 1;
                }
                return 0;
            })

            x=x.reverse()
            setArray(x)
        }
        else if(data=="priceA"){
            let x=[...array].sort(function(a,b){
                return a.Mobile_pice-b.Mobile_pice
            })
            setArray(x)
        }
        else{
            let x=[...array].sort(function(a,b){
                return b.Mobile_pice-a.Mobile_pice
            })
            setArray(x)
        }
    }

    const access=(index)=>{ 
        let x=[...array].map((val,ind)=>{
            return index==ind ? {...val,Mobile_pice:100}:val
        })
        setArray(x)
    }


    const del=(data)=>{  
        let x=[...array].filter((val) => {
            return val.Mobile_name==data ? "" : val
        })
        setArray(x)
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-12 row btn-row justify-content-center">
                    <div className="col-2 btn-style text-center">
                        <button onClick={()=>sorting("a")}>Ascending</button>
                    </div>
                    <div className="col-2 btn-style text-center">
                        <button onClick={()=>sorting("d")}>Descending</button>
                    </div>
                    <div className="col-2 btn-style text-center">
                        <button onClick={()=>sorting("priceA")}>Price low to high</button>
                    </div>
                    <div className="col-2 btn-style text-center">
                        <button onClick={()=>sorting("priceD")}>Price high to low</button>
                    </div>
                </div>
                {
                    array.map((val,ind) => {
                        return(
                        <div className="col-2 card" key={ind}>
                            <img src={val.Mobile_img}/>
                            <p>Mobile Name:{val.Mobile_name}</p>
                            <p>Price:{val.Mobile_pice}</p>
                            <p>Storage:{val.Mobile_storage}</p>
                            <div className="card-btn">
                                <button onClick={()=>access(ind)}>Click</button>
                                <button onClick={()=>del(val.Mobile_name)}>Delete</button>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}