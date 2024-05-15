




const Card = ({shirt}) => {

     const { image, Title, Price, rating, para} = shirt

    return (
        <div className=" ml-10 mr-10 mb-10 mt-10">
             
             <div>
                

             <div className="max-w-xs p-6 rounded-md shadow-md bg-gray-900 text-gray-50">
	         <img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
	         <div className="mt-6 mb-2">
		     
		     <h2 className="text-xl font-semibold tracking-wide"> {Title} </h2>
		     <h2 className="text-xl font-semibold tracking-wide"> {Price} </h2>
		     <h2 className="text-xl font-semibold tracking-wide"> {rating} </h2>
	         </div>
	         <p className="text-gray-100"> {para} </p>
             <button className=" btn bg-white mt-2">Add Cart</button>
             </div>





             </div>



            
        </div>
    );
};

export default Card;