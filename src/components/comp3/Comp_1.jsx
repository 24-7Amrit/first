import {useState} from "react";

export function Comp_1(){

    const[data,setdata] = useState([{category:"electronics",products:["tv","mobiles"]},{category:"footwear",products:["boots","sneakers"]},{category:"washmachine",products:["topload","frontload"]}]);

    return(

        <div className="container-fluid">
            <h2>Data Types</h2>
            {/* <ol>
                {
                    data.map
                    (item=>     <li key={item.category}>    {item.category          }
                    <ul>
                    {
                    item.products.map
                    (product=>  <li key={product}>          {product}       </li>)  }
                    </ul>
                                </li>)
                }
            </ol> */}
            <select>
                {
                    data.map
                    (item=>     <optgroup label={item.category}>
                        {
                item.products.map   (product=>  <option key={product}>  {product}   </option>)
                        }
                                </optgroup>)
                }
            </select>






        </div>
    )
}



// 

// 

// <li>
// </li>