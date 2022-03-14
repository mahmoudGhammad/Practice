
import React from "react"
import data from '../components/region.json'



function Region (){
    // const entries = data.entries();
    // console.log(data);
    // const values = Object.values(data)
    // console.log(values);
    console.log(Object.values(data));
    // console.log(Object.entries(data));
    // console.log(Object.keys(data));

    let language = 'en'
    

    let reg = data.regions

    console.log(reg);

    

    reg.map(item => console.log(item.id))

    let reg01 = Object.values(data)

    console.log(reg01);

    //reg01.map(el => console.log(el))   // why this gives undefined /because it gives an array inside another array 

    return(
        <div>

        </div>
    )
}


export default Region