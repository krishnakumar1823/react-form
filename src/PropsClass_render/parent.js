 import React from "react";
 import { Child } from "./child";

 export const Parent=class Parent extends React.Component{
    render(){
        let arr=[
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
        
        return(<div>
            <h1 style={{textAlign:"center"}}>This is Parent </h1>
            <Child a={arr}/>
        </div>)
    }
 }