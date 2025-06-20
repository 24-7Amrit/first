import { useState, useEffect } from "react";


export function DataBinding(){
   
    const [product, setProduct] = useState({title:'', rating:{rate:0, ratings:0, reviews:0}, price:0, offers:[], image:''});

    function LoadProduct(){
        var http = new XMLHttpRequest();
        http.open("get","product.json",true);
        http.send();

        http.onreadystatechange = function(){
             if(http.readyState===4){
                 setProduct(JSON.parse(http.responseText));
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
                    <img src={product.image} width="100%" />
                </div>
                <div className="col-9">
                    <div className="h3"> {product.title} </div>
                    <div>
                        <span className="badge bg-success text-white p-2">{product.rating.rate} <span className="bi bi-star-fill"></span> </span>
                        <span className="ms-3 fw-bold text-secondary"> {product.rating.ratings.toLocaleString()} Ratings & {product.rating.reviews} Reviews </span>
                    </div>
                    <div className="mt-3">
                        <div className="h2 fw-bold"> {product.price.toLocaleString('en-in',{style:'currency', currency:'INR'})} </div>
                    </div>
                    <div className="mt-3">
                       <div className="h5">Available Offers</div>
                       <ul className="list-unstyled">
                         {
                            product.offers.map(offer=>
                                <li key={offer} className="bi text-success bi-tag-fill my-2"> <span className=" ms-2 text-secondary">{offer}</span> </li>
                                )
                         }
                       </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}