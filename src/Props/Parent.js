import React from "react";
import {Child} from "./Child";
import Child1 from "./Child1";


export const Parent=()=>{
    let a='I am props';
    let arr=[3,5,6,9]
    let ArrOfMovie=[
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

    let ArrayProduct=[
        {
            Mobile_name:"APPLE iPhone 13",
            Mobile_pice:61999,
            Mobile_storage:128,
            Mobile_color:"black",
            Mobile_img:"https://rukminim2.flixcart.com/image/416/416/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70"
        },
        {
            Mobile_name:"APPLE iPhone 14 Plus",
            Mobile_pice:79999,
            Mobile_storage:128,
            Mobile_color:"white",
            Mobile_img:"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/l/v/8/-original-imaghx9qudmydgc4.jpeg?q=70"
        },
        {
            Mobile_name:"Infinix Zero Ultra",
            Mobile_pice:29999,
            Mobile_storage:256,
            Mobile_color:"black",
            Mobile_img:"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/j/u/t/-original-imagh2jqy8pkhdhz.jpeg?q=70"
        },
        {
            Mobile_name:"POCO F4 5G",
            Mobile_pice:39999,
            Mobile_storage:256,
            Mobile_color:"black",
            Mobile_img:"https://rukminim2.flixcart.com/image/416/416/l4n2oi80/mobile/h/h/i/-original-imagfhuecztmg3gz.jpeg?q=70"
        },
        {
            Mobile_name:"SAMSUNG Galaxy Z Fold3 5G ",
            Mobile_pice:1719999,
            Mobile_storage:256,
            Mobile_color:"Phantom Black",
            Mobile_img:"https://rukminim2.flixcart.com/image/416/416/ksnjp8w0/mobile/b/t/k/galaxy-z-fold3-5g-sm-f926bzkdinu-samsung-original-imag662a7zgxn2fv.jpeg?q=70"
        },
        {
            Mobile_name:"SAMSUNG Galaxy S23 Ultra 5G",
            Mobile_pice:1249999,
            Mobile_storage:256,
            Mobile_color:"Cream",
            Mobile_img:"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/1/o/-original-imagmg6gz3bsgan7.jpeg?q=70"
        }

    ]

    
    let hi =(data)=>{
        console.log("data from child to hi function",data)
        let d=ArrayProduct.filter((v)=>{
            return data.Mobile_pice > v.Mobile_pice
        })
        console.log(d)
    }

    return (<div>
        <p style={{textAlign:"center"}}>I am function props Parent</p>
        <Child b={a} c={arr} d={ArrOfMovie}/>
        
        <Child1 c={ArrayProduct} d={hi}/>
    </div>)
 }