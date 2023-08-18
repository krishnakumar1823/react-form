import React from "react";
import {Child} from './Child'
import { Child1 } from "./Child1";
import '../Component/Nav/Nav.css'

export const Parent=()=>{
    let Movie=[
        {
            type:"Action",
            img:"https://cinemazworld.com/wp-content/uploads/2018/03/2015-Tamil-Movies-List-11.jpg",
            Movie:[
                {
                Movie_Name:"Jailer",
                Movie_Rating:"9.0",
                Movie_Duration:"2h 49m",
                movie_Img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH6kxiitXlfPuqpFGiYgfL1qEURqT5JuR1_skQIi6kUt_Jc-suPQRW8N5p-XkZD5AX8GI&usqp=CAU"
                },
                {
                    Movie_Name:"Gadar 2: The Katha Continues",
                    Movie_Rating:"5.0",
                    Movie_Duration:"2h 50m",
                    movie_Img:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/gadar-2-et00338629-1688724591.jpg"
                },
                {
                    Movie_Name:"DD Returns",
                    Movie_Rating:"8.8",
                    Movie_Duration:"2h 5m",
                    movie_Img:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/dd-returns-et00364543-1689578736.jpg"
                },
                {
                    Movie_Name:"Meg 2: The Trench",
                    Movie_Rating:"7.9",
                    Movie_Duration:"1h 56m",
                    movie_Img:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/the-meg-2-the-trench-et00358316-1690446228.jpg"
                },
                {
                    Movie_Name:"Oppenheimer",
                    Movie_Rating:"8.8",
                    Movie_Duration:"3h 10m",
                    movie_Img:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/oppenheimer-et00347867-1683533414.jpg"
                },
                {
                    Movie_Name:"Mission Impossible: Dead Reckoning",
                    Movie_Rating:"9.1",
                    Movie_Duration:"2h 45m",
                    movie_Img:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/mission-impossible-dead-reckoning--part-one-et00329481-1688284554.jpg"
                },
                {
                    Movie_Name:"Mortal Kombat",
                    Movie_Rating:"7.0",
                    Movie_Duration:"1h 55m",
                    movie_Img:"https://images7.alphacoders.com/516/thumb-1920-516677.jpg"
                },
                {
                    Movie_Name:"Zack Snyder`s Justice League",
                    Movie_Rating:"4.0",
                    Movie_Duration:"4h 1m",
                    movie_Img:"https://assets-in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/zack-snyder-s-justice-league-et00047164-1686037785.jpg"
                },
                {
                    Movie_Name:"Por Thozhil",
                    Movie_Rating:"9.4",
                    Movie_Duration:"2h 27m",
                    movie_Img:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/por-thozhil-et00357691-1684415887.jpg"
                }
            ]
        }
    ]

    return(<div>
        <Child a={Movie} b={Fun}/>
    </div>)
}

const Fun=(data) =>{
    function New(){
        return new Promise((re,rj) => {
            if(data != undefined){
                re(data)
            }
        })
    }
    async function access(){
        try{
            let x=await New()
            console.log(x)
            return( 
                <div className="container">
                    <div className="row">
                        {x.map((val,ind) => {
                            console.log(val.Movie_Name)
                                return(
                                    <h2 key={ind}>{val.Movie_Name}</h2>
                                )                    
                            })
                        }
                    </div>
                </div>
            )
        }
        catch{
            // console.log("err")
        }
    }
    access()
}
export default Fun

