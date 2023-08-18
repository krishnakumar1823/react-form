import React from "react";
import '../Component/Nav/Nav.css'
export const Child=(props)=>{  //we can use any name for parameter

    console.log(props.b,props.c)
    var arr=props.d
    console.log(arr)
    return(
        <div className="container">
            <div className="row">
            {arr.map((val) => {
                return(
                    <div className="col-4 row border" style={{padding:"10px 15px",margin:"5px 5px"}}>
                        <img src={val.movie_Img} width="100%" height="200px"/>
                        <div className="col-12 row">
                            <p className="col-12">Movie name : {val.Movie_Name}</p>
                            <span className="col-12" style={{padding:"10px 0px"}}>Movie Rating : {val.Movie_Rating}</span>
                            <span className="col-12" style={{padding:"10px 0px"}}>Movie Duration : {val.Movie_Duration}</span>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    
    )
}

//export default Child