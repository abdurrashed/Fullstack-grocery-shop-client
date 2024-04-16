import { useForm } from "react-hook-form";
import { Helmet } from 'react-helmet-async';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

import Swal from 'sweetalert2';

const SignUp = () => {
    const {
        register,
        handleSubmit,reset,
        formState: {errors},
    } = useForm();


   
 const  {createUser,updateuserprofile}=useContext(AuthContext);

 const  navigate=useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email,data.password)

        .then(result=>{
             const loggedUser=result.user;
             console.log(loggedUser);

             updateuserprofile(data.name , data.photoURL)

             .then(()=>{


                console.log('user profile updated')
                reset();

                Swal.fire({
                 
                    icon: "success",
                    title: "User created successfully.",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/login')
             })


        })
    };

    return (
        <>
            <Helmet>
                <title>Grocery shop| Sign Up </title>
            </Helmet>
       g

          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign up now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" required />
                            {errors.name && <span className="text-xs text-red-500">This field is required</span>}
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" {...register("photoURL", { required: true })} name="photoURL" placeholder="Photo URL" className="input input-bordered" required />
                            {errors.photoURL && <span className="text-xs text-red-500">Photo URL  is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name="email" placeholder="Email" className="input input-bordered" required />
                            {errors.email && <span className="text-xs text-red-500">This field is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true, minLength: 6 })} placeholder="Password" className="input input-bordered" required />
                            {errors.password && errors.password.type === "required" && <span className="text-xs text-red-500">Password is required</span>}
                            {errors.password && errors.password.type === "minLength" && <span className="text-xs text-red-500">Password must be at least 6 characters</span>}
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value='Sign Up' />
                        </div>
                    </form>

                    <p><small>Already have an accounth <Link to="/login">Create an account</Link></small></p>
    
                </div>
            </div>
            </div>
        
        
        
        
        </>
        
    );
};

export default SignUp;
