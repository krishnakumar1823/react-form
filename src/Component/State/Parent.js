
import React, { Component } from "react";
import '../State/Main.css'


class Parent extends Component{
    constructor(){
        super();
        this.state = {
            name: "State in React",
            Number:10,
            array:[1,2,3,4,5],
            obj:[{
                    topic:"state"
                },
                {
                    topic:"state"
                }
            ]
        }
    }

    render(){
       
        const handleName=()=>{
            this.setState({name: "State in class",Number:20,array:[5,6,7,8,9],obj:[{topic:"hi"}]})

 
            console.log(this.state)

            var updated=document.getElementById("updated")
            updated.setAttribute("class","align")
            updated.innerHTML=this.state.name
        }

        return(
            <div style={{textAlign:"center"}}>
                <button onClick={handleName}>Update Name</button>
                {/* <button onClick={()=>this.setState({name: "HIII"})}>click</button> */}
                
                <p>{JSON.stringify(this.state)}</p>

                <h3 id="updated">updated content:</h3>
            </div>
        )
    }
}

export default Parent 
