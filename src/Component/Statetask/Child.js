import React from "react";
import './Style.scss'

export const Child=class Child extends React.Component{
   
    constructor(props){
        super(props)
        this.state={b: this.props.a}
        console.log(this.state)
    }
    render(){ 
        const access=(ind)=>{
            let x=this.state.b.map((val,i) => {
                return ind==i ? {...val,Mobile_pice:100} : val
            })
            // console.log(x)
            this.setState({b:x})
        }



        const sorting=(data)=>{
            if(data=="a"){
                let y=this.state.b.sort(function(a,b){
                    if (a.Mobile_name < b.Mobile_name) {
                        return -1;
                    }
                    if (a.Mobile_name > b.Mobile_name) {
                        return 1;
                    }
                    return 0;
                })
                this.setState({b:y})
            }
            else if(data=="d"){
                var z=this.state.b.sort(function(a,b){
                    if (a.Mobile_name < b.Mobile_name) {
                        return -1;
                      }
                      if (a.Mobile_name > b.Mobile_name) {
                        return 1;
                      }
                      return 0;
                })
                var z=z.reverse()
                this.setState({b:z})
            }
            else if(data=="priceA"){
                console.log("fun working")
                let a=this.state.b.sort(function(a,b){
                    return a.Mobile_pice-b.Mobile_pice
                })
                this.setState({b:a})
            }
            else{
                let a=this.state.b.sort(function(a,b){
                    return b.Mobile_pice-a.Mobile_pice
                })
                this.setState({b:a})
            }
        }




        const del=(data)=>{  
            let x=this.state.b.filter((val) => {
                return val.Mobile_name==data ? "" : val
            })
            this.setState({b:x})
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
                        {/* <form className="col-6">
                            <input type="text" id="getting_mob_name"></input>
                            <button onClick={()=>submit()}>Search</button>
                        </form> */}
                    </div>
                    {
                        this.state.b.map((val,ind) => {
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
}