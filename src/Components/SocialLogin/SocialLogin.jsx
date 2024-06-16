
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../Hooks/useAuth';

import { useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosSecure();
    const navigate = useNavigate();

    const handleGoogleSignin = () => {
        googleSignIn()
            .then(result => {
                console.log(result);
                

                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                };

                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate('/');
                    })
                    .catch(error => {
                        // Handle Axios network error
                        console.error('Axios network error:', error);
                        // Handle the error gracefully, e.g., display a message to the user
                    });
            })
            .catch(error => {
                // Handle Google sign-in error
                console.error('Google sign-in error:', error);
                // Handle the error gracefully, e.g., display a message to the user
            });
    };
     

    
    return (
        <div className='px-8 mb-4'>
              <div className="divider"></div> 
            <div>
            <button onClick={handleGoogleSignin} className='btn'>
            <FaGoogle className='mr-2'></FaGoogle>
            Google

            </button>

            </div>
            
           
        </div>
    );
};

export default SocialLogin;