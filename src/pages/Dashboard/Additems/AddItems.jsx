import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

 const image_hosting_key=import.meta.env.VITE_IMAGE_HOSTING_KEY;

 const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItems = () => {

    const { register, handleSubmit ,reset} = useForm();
    const axiosPublic=useAxiosPublic();
    const axiosSecure=useAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data);
    
        const imageFile = new FormData();
        imageFile.append('image', data.image[0]);
    
          const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          if(res.data.success){
               /*now send the menu item data to the server with the imageurl*/

             const Item={
                 name:data.Name,
                 category:data.Category,
                 price :parseFloat(data.Price),
                 weight:data.Weight,
                 image:res.data.data.display_url 
                 
                

             }
             const itemRes= await axiosSecure.post('/items',Item);
             console.log(itemRes);
             if(itemRes.data.insertedId){
                reset();
                Swal.fire({
                    icon: "success",
                    title: `${data.name} is added the item`,
                    showConfirmButton: false,
                    timer: 1500
                  });
             }


          }

          console.log(res.data.data. display_url
           );
       
      };


    return (
<div>
    <SectionTitle heading="add an item"></SectionTitle>

<div>
<form onSubmit={handleSubmit(onSubmit)}>
    

<div className="form-control w-full my-6 ">
  <label className="label">
    <span className="label-text">Item Name*</span>
  </label>
  <input type="text" placeholder="Item Name" 
    {...register("Name",{required:true})}
  className="input input-bordered w-full" />
</div>

<div className="flex gap-6">

<div className="form-control w-full my-6 ">
  <label className="label">
    <span className="label-text">Category*</span>
  </label>
  <select {...register("Category",{required:true})}className="select select-bordered w-full ">
  <option value="" disabled>select a category</option>
  <option value="Fruitsvegetables">Fruits & Vegetables</option>
  <option value="Dairyeggs">Dairy & Eggs</option>
  <option value="Beverages">Beverages</option>
  <option value="Baking">Baking</option>
  <option value="Cooking">Cooking</option>
</select>
</div>

{/*price*/}

<div className="form-control w-full my-6 ">
  <label className="label">
    <span className="label-text">Price*</span>
  </label>
  <input type="number" placeholder="Price" 
    {...register("Price",{required:true})}
  className="input input-bordered w-full" />
</div>


<div className="form-control w-full my-6 ">
  <label className="label">
    <span className="label-text">Weight*</span>
  </label>
  <input type="text" placeholder="Weight" 
    {...register("Weight",{required:true})}
  className="input input-bordered w-full" />
</div>

    



</div>

<div className="form-control w-full my-6">

    <input {...register('image',{required:true})} type="file" className="file-input w-full max-w-xs"/>
</div>

<button className="btn">Add Item</button>
</form>
</div>
</div>
    );
};

export default AddItems;