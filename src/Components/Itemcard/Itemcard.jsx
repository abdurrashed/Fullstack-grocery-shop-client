

const Itemcard = ({item}) => {

    const {name,weight,price,image}=item;

    const imageStyle = {
        width: '150px', 
        height: '150px', 
        objectFit: 'cover'
      };
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt={name} style={imageStyle}  /></figure>
  <div className="card-body flex felx-col  ">
    <h2 className="card-title justify-center">{name}</h2>
    <p className="text-center">{weight}</p>
    <p className="text-center text-red-500">{price}</p>
    
    <div className="card-actions justify-center">
      <button className="btn btn-outline bg-slate-100 border-0 border-b-2 border-orange-400 mt-4">Add to Cart</button>
     

    </div>
  </div>
</div>
    );
};

export default Itemcard;