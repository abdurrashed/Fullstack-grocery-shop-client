
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featuredimg from '../../../assets/home/featureitems.jpg'
import './featuread.css'

const Featureditems = () => {
    return (
        <div className="featured-item bg-fixed mb-4">
            <SectionTitle  subHeading={"Check it out"}
          heading={"Featured Items"}> </SectionTitle>
           <div className='md:flex  justify-center items-center bg-slate-500 bg-opacity-20  py-8 px-16'>
           
              <img className=" rounded-full " src={featuredimg} alt=""  />


           
            <div className='md:ml-10'> 
                    <p className='uppercase'>where can i get some ?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, mollitia hic velit veniam quam nihil porro saepe laborum exercitationem enim perferendis pariatur ipsam temporibus, repudiandae deleniti voluptatem tenetur explicabo illo reprehenderit. Modi ipsam aliquid alias nihil sunt possimus fugit, accusamus blanditiis molestias pariatur odio quas dolorum adipisci accusantium nesciunt corporis? </p>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>


            </div>




           </div>




        </div>
    );
};

export default Featureditems;