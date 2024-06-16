import { useQuery } from "@tanstack/react-query";

import useAxiosPublic from "./useAxiosPublic";


const Fooditems = () => {


    const axiosPublic=useAxiosPublic();
 
/*

    const [menu,setItems]=useState([]);
    const [loading,setLoading]=useState(true);
    
     useEffect(()=>{
      fetch('http://localhost:5000/items')
      .then(res => res.json())
      .then(data =>{setItems(data);
              setLoading(false);
      
      
     })
     


        
     
   
   
   
     },[])

     */

     const{data:menu=[],refetch}=useQuery({

        queryKey:['menu'],
        queryFn: async()=>{
          const res= await axiosPublic.get('/items');

          return res.data;

        }
     })


     return [menu,refetch]



  
}

export default Fooditems;