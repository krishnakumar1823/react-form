import React from "react";

const Child1=(prop)=>{
    console.log(prop)
    return (
        <div style={{display:"flex",flexWrap:"wrap"}}>
            //Event Emitter
         {
            prop.c.map((value,index)=>{
              return(
                <div>
                <img src={value.Mobile_img}/>
                <h2> Price: {value.Mobile_name}</h2>
                <h2> Price: {value.Mobile_storage}</h2>
                <h2> Price: {value.Mobile_color}</h2>
                <h2> Price: {value.Mobile_pice}</h2>
                <button onClick={()=>prop.d(value)}>Click me</button>
                </div>

              )
            })
         } 
        </div>
    )
}
export default Child1