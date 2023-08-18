import React from "react";
import '../Component/Nav/Nav.css'

export const Child=class Child extends React.Component{
    constructor(props){
        super()
        this.a=props
    }
    render(){
        let get=this.props.a
        // console.log(get)
        return(<section>
                <div className="container">
                    <div className="row">
                        {get.map((val,ind) =>{
                            return(
                            <div className="col-2" key={ind} onClick={()=>this.props.b(val.Movie)}>
                                <img src={val.img} width="100%"/>
                                <h1>Movie type:{val.type}</h1>
                            </div>
                            )
                        })
                        }
                    </div>
                </div>
        </section>)
    }


}