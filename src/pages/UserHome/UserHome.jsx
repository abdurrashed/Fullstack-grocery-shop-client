import useAuth from "../../Hooks/useAuth";


const UserHome = () => {
    const {user}=useAuth();
    return (
        <div>
            {
               user?.displayName ?user.displayName :"Back"
            }
           
            
        </div>
    );
};

export default UserHome;