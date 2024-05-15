import { useEffect, useState } from "react";
import Card from "./Card";





const Home = () => {

       const [ shirt , SetShirt ] = useState([]);


       useEffect( () => {

           fetch('shirt.json')
           .then(res => res.json())
           .then(data => SetShirt(data))

       } , [] )




    return (
        <div className=" flex justify-center mb-10 mt-10 ml-10 mr-10">

            <div className=" grid  md:grid-cols-3">
                
             
              {
 
               shirt.map(  shirt => <Card key={shirt.id} shirt={shirt} ></Card> )

              }






            </div>
            
        </div>
    );
};

export default Home;