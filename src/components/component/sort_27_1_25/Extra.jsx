import { useState, useEffect } from "react";

export function Extra   (){

    const[product, setProduct]= useState({});

    function LoadProduct(){
        var http = new XMLHttpRequest();
        http.open("get","product.json",true);
        http.send();
        http.onreadystatechange = function(){
            if(http.readyState===4){
                setProduct(JSON.parse(http.response.data));
                
            }
        }
    }
    useEffect(()=>{
            LoadProduct();
    },[]);

    return(
        <div className="container-fluid">
            <div className="mt-4 row">
                <div className="col-3">
                   <img src={product.image1}/>  
                   </div>
            </div>
        </div>
    )

}