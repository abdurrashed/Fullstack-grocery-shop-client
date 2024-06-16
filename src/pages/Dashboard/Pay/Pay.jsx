import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useCart from "../../../Hooks/useCart";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const TotalPrice = ({ cart }) => {
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    return totalPrice;
};

const Pay = () => {

    const {user}=useContext(AuthContext);
    const [cart] = useCart();
    const { register, handleSubmit, setValue } = useForm();

    // Calculate total price
    const totalPrice = TotalPrice({ cart });

    // Set default value for the price input
    setValue("Price", totalPrice);

    const onSubmit = async (data) => {
        console.log(data);

        const additional_data={
            date:new Date(),
            cartId:cart.map(item=>item._id),
            menuId: cart.map(item=>item.menuId),
            paidStatus:'pending'


        }

        const dataa={
            ...data,
            ...additional_data
        }
        
            const response = await fetch("http://localhost:5000/pay", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataa),
            });
            const result = await response.json();
            window.location.replace(result.url);
            console.log(result);
        } 
    

    return (
        <div>
            <SectionTitle heading="Payment" />
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input 
                            type="text" 
                            placeholder="Name" 
                            {...register("Name", { required: true })} 
                            className="input input-bordered w-full" 
                        />
                    </div>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input 
                            type="email" 
                            placeholder="Email" 
                            {...register("email", { required: true })}
                            className="input input-bordered w-full" 
                            defaultValue={user.email} 
                            readOnly 
                        />
                    </div>






                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input 
                            type="number" 
                            placeholder="Price" 
                            {...register("Price", { required: true })}
                            className="input input-bordered w-full" 
                            defaultValue={totalPrice} 
                            readOnly 
                        />
                    </div>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input 
                            type="text" 
                            placeholder="Address" 
                            {...register("Address", { required: true })} 
                            className="input input-bordered w-full" 
                        />
                    </div>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Number</span>
                        </label>
                        <input 
                            type="text" 
                            placeholder="Number" 
                            {...register("Number", { required: true })} 
                            className="input input-bordered w-full" 
                        />
                    </div>
                    <button className='btn btn-primary'>Pay</button>
                </form>
            </div>
        </div>
    );
};

export default Pay;
