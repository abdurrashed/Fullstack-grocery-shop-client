import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const PaymentHistory = () => {
    const axiosSecure=useAxiosSecure();
    const {user}=useAuth();
   
    const {data:order=[]} = useQuery({
        queryKey:['order',user?.email],
        queryFn:async()=>{

            const res=await axiosSecure.get(`/order/${user.email}`)
            return res.data ;
        }

       
      })



    return (
        <div>
            <h2 className="text-3xl">Total Payments:{order.length}</h2>

            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>price</th>
        <th>Transaction Id</th>
        <th>Payment Status</th>
      </tr>
    </thead>
    <tbody>
      {order.map((payment,index)=>  <tr key={payment._id}>
        <th>{index+1}</th>
        <td>{payment.Price}</td>
        <td>{payment.
tranjectionId}</td>
        <td>{payment.paidStatus}</td>
      </tr>)}
     
      
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default PaymentHistory;