import { useState, useEffect } from "react";



export function Fetchingdata(){

    const[product, setProduct]= useState([]);

    function LoadProduct(){
        fetch("product.json")
        .then((response)=>{
            return response.json();  //1
        })
        .then((product)=>{
            setProduct(product);
            //console.log(product);
        })
        .catch((error)=>{
            console.log(error);
        })
        .finally(()=>
        console.log(`cbshdcbsdbc`))
        }
    
    useEffect(()=>{
            LoadProduct();
    },[]);

    return(
        <div className="container-fixed">
            <div className="mt-4">
                <div className="row">
                <div className="col-3">
                {/* <img src={product.image2}/> */}
                {
                        product.map(producta=>
                            <div key={producta.image}>
                                <img src={producta.image2} width="60" height="70"/>
                            </div>
                            )
                    }
                </div>
                
            <div className="row col-9">
                <div className="overflow-fixed">{product.map(p=><div key={p.img_src}><img src={p.image2} width="90" height="78" /></div>)}
                </div>
                </div>
                </div>
            </div>
            </div>
   
)


    
}
