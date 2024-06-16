import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import {useLocation, useNavigate } from "react-router-dom";

import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";


const Itemcard = ({item}) => {

    const {name,weight,price,image,_id}=item;
    const {user}=useAuth();

    const  navigate=useNavigate();
    const location=useLocation();
    const axiosSecure=useAxiosSecure();

    const [,refetch]=useCart( );


    const handleToCart =() => {
      if(user&&user.email){

          

            const cartItem={
               menuId:_id,
               email:user.email,
               name,
               image,
               price
            }
            axiosSecure.post('/carts',cartItem)
            .then(res=>{

              console.log(res.data)

              if(res.data.insertedId){
                Swal.fire({
                
                  icon: "success",
                  title: `${name} added to your cart`,
                  showConfirmButton: false,
                  timer: 1500
                });
                refetch()

              }
            })

      }

      else{

        Swal.fire({
          title: "You are not Logged In",
          text: "Please login to add to the cart?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, login!"
        }).then((result) => {
          if (result.isConfirmed) {
           

            navigate('/login',{state:{from:location}})

          }
        });



      }
    };
  

    const imageStyle = {
        width: '150px', 
        height: '150px', 
        objectFit: 'cover'
      };
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt={name} style={imageStyle}  /></figure>
  <div className="card-body flex felx-col  ">
    <h2 className="card-title justify-center">{name}</h2>
    <p className="text-center">{weight}</p>
    <p className="text-center text-red-500">{price}TK</p>
    
    <div className="card-actions justify-center">
      <button 

onClick={handleToCart}
      
      className="btn btn-outline bg-slate-100 border-0 border-b-2 border-orange-400 mt-4">Add to Cart</button>
     

    </div>
  </div>
</div>
    );
};

export default Itemcard;