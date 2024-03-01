import { useEffect, useState, } from "react";


const useitems = () => {
  
    const [products,setProducts]=useState([]);
      useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data =>setProducts(data))
       
     
     
     
     
       },[])



return (
        <div>
            


        </div>
    );
};

export default useitems;