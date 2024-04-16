import Itemcard from "../../../Components/Itemcard/Itemcard"


const Ordertab = ({items}) => {
    return (
        <div className='grid md:grid-cols-3 gap-10'>
        {
          items.map(item=> <Itemcard 
            
            key={item._id}
           item={item}
          
          
          >



          </Itemcard>
           )
      
      
      
      }
      
      
      
        </div>);
        };


export default Ordertab;