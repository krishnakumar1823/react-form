import React from "react";
import '../Component/Nav/Nav.css'

export const Child=class Child extends React.Component{
    constructor(a){
        super()
        this.b=a
        console.log(this.b)
    }
    render(){
        let get=this.b.a
        
        return(
                <div>
                    <h1 style={{textAlign:"center"}}>Mobiles are  child</h1>
                    <div className="container">
                        <div className="row"> 
                        {get.map((val,ind) =>{
                            return(
                            <div key={ind} className="col-2 row border" style={{padding:"10px 15px",margin:"5px 5px"}}>
                                <img src={val.Mobile_img} width="100%" height="200px"/>
                                <div className="col-12 row">
                                    <p className="col-12">Mobile name : {val.Mobile_name}</p>
                                    <span className="col-12" style={{padding:"10px 0px"}}>Mobile price : {val.Mobile_pice}</span>
                                    <span className="col-12" style={{padding:"10px 0px"}}> Mobile storage : {val.Mobile_storage}</span>
                                    <span className="col-12" style={{padding:"10px 0px"}}> Mobile color : {val.Mobile_color}</span>
                                    {<button onClick={()=>this.b.d(val)}>Click me</button> }
                                </div>
                            </div>
                            )
                            })
                        }
                    </div>
                </div>
            </div>
        )   
    }
}