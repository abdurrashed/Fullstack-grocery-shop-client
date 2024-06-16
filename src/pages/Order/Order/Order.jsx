import { useState } from 'react';
import orderCover from '../../../assets/home/featureitems.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Fooditems from '../../../Hooks/Fooditems';
import Ordertab from '../Ordertab/Ordertab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';






const Order = () => {

    const categoris=['Baking','Cooking','furitsvegetables','dairyeggs','beverages']

    const {category}=useParams();
    const initialIndex=categoris.indexOf(category)
    const [tabIndex,setTabIndex]=useState(initialIndex);

 const [menu]=Fooditems();
 
   
    const vegetalbe=menu.filter(item=>item.category === 'Fruitsvegetables');

    const Cooking=menu.filter(item=>item.category === 'Cooking');
    const Baking=menu.filter(item=>item.category === 'Baking');
    const DairyEggs=menu.filter(item=>item.category === 'Dairyeggs');
    const Beverages =menu.filter(item=>item.category === 'Beverages');




   





    
    return (
        <div>
            <Helmet>
                <title>Grocery shop| Order items </title>
            </Helmet>
            <Cover img={orderCover} title="Order Items"></Cover>
           
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>Baking</Tab>
    <Tab>Cooking</Tab>
    <Tab>Frutis & Vegetables</Tab>
    <Tab>Dairy & Eggs</Tab>
    <Tab>Beverages</Tab>
  </TabList>
  <TabPanel>
    <Ordertab
    items={Baking}

   ></Ordertab>
   
  </TabPanel>
  <TabPanel>
  <Ordertab  items={Cooking}></Ordertab>
 
    
  </TabPanel>

  <TabPanel>
    


    <Ordertab  items={vegetalbe}></Ordertab>
    
  
  
      
    </TabPanel>


    <TabPanel>
    

  <Ordertab  items={DairyEggs}></Ordertab>





  
  </TabPanel>
  <TabPanel>

  
  <Ordertab  items={Beverages}></Ordertab>
 






  
 
  </TabPanel>
  
 

</Tabs>
           
            
        </div>
    );
};

export default Order;