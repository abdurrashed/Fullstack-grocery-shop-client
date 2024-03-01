import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStore,faIndustry,faWarehouse } from '@fortawesome/free-solid-svg-icons'


const Changemaker = () => {
    return (
      <>
      <h3 className='pl-4  text-green-500 text-3xl font-green'>Lending Hand to </h3>

      <h3 className='pl-4 pb-4 text-green-500 font-bold text-3xl'>
          ChangeMakers</h3>
<div className="grid grid-cols-3 gap-4 mb-4 ml-4">
 
<div className="card w-96  bg-green-600 text-primary-content">
  <div className="card-body">
  <div className="card-actions justify-center">
    <FontAwesomeIcon  size="xl" icon={faIndustry} />
    </div>
    <h2 className="card-title justify-center text-white">Producer</h2>
   
  </div>
</div>
<div className="card w-96  bg-green-600 text-primary-content">
  <div className="card-body">
  <div className="card-actions justify-center">
    <FontAwesomeIcon 	size="xl"	icon={faWarehouse} />
    </div>
    <h2 className="card-title justify-center text-white">Grocery Shop Warehouse</h2>
  
    
  </div>
</div>
<div className="card w-96  bg-green-600 text-primary-content">
  <div className="card-body">
  <div className="card-actions justify-center ">
    <FontAwesomeIcon  size="xl" icon={faStore} />
    </div>
   
    <h2 className="card-title 	justify-center text-white">Retailer</h2>

    
  </div>
</div>
  
</div>
</>
            

    );
};

export default Changemaker;