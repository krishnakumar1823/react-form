import React,{useState} from "react";

export const Fun =()=>{
    const [name,setName]=useState("Tghjjk")
    const [age,setAge]=useState(23);
    const[array,setArray]=useState([1,2,3,4,5])
    const[object,setObject]=useState({name:"krish",age:23})
    const[arrayofobj,setArrayofobj]=useState([{
                                                name:"krishna",
                                                age:23
                                            },
                                            {
                                                name:"sathesh",
                                                age:25
                                            }
                                            ])


    const handle = ()=>{
        setName("React function state")
    }
    
    return(
        <div style={{textAlign:"center"}}>
            {name}
            <div>
                <button onClick={handle}>updateName</button> 
            </div>

            <div>
                {array}
                <button onClick={()=>setArray([6,7,8,9,10])}>Array</button>
            </div>

            <div>
                {age}
                <button onClick={()=>setAge(25)}>UpdateAge</button>
            </div>

            <div>
                {object.name}
                <button onClick={()=>setObject({name:"kumar"})}>object</button>
            </div>

            <div>
                {arrayofobj.map((val,ind) => {
                    return(
                        <div key={ind}>name:{val.name} and age = {val.age}</div>
                    )
                })
                }
            </div>
        
            {/* <button onClick={()=>setName("Error")}>Click</button> */}
        </div>
    )

}