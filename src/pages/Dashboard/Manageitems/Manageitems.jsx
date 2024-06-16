
import Swal from 'sweetalert2';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import Fooditems from '../../../Hooks/Fooditems';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const Manageitems = () => {
    const [items,refetch]=Fooditems();
    const axiosSecure=useAxiosSecure();
     const handleDeleteItem=(item)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then( async(result) => {
            if (result.isConfirmed) {
              const res=await axiosSecure.delete(`/items/${item._id}`)
              if(res.data.deletedCount>0){
                refetch();
                Swal.fire({
                  icon: "success",
                  title: `${item.name} has been deleted`,
                  showConfirmButton: false,
                  timer: 1500
                });
              }

             
            }
          });


     }


    return (
        <div>
          <SectionTitle heading="Manage All Items"></SectionTitle>
          <div>
          <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
            #
        </th>
        <th>Image</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        {
           items.map((item,index)=> <tr key={item._id}>
            <td>{index+1}</td>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </div>
            </td>
            <td>
              {item.name}
            </td>
            <td className=''>{item.price}</td>
            <td>

              <Link to={`/dashboard/updateItem/${item._id}`}>
              <button 
               className="btn btn-sm bg-orange-500">
                <FaEdit
                 className='text-red-600'></FaEdit>

              </button>
              
              </Link>
              
            </td>
            <td>

              <button 
              onClick={()=>handleDeleteItem(item)}
              className="btn btn-ghost btn-xs">
              <FaTrashAlt
               className='text-red-600'></FaTrashAlt>

              </button>

            </td>
          </tr>)

        }
      
     
    </tbody>

    
  </table>
</div>
          </div>


        </div>
    );
};

export default Manageitems;