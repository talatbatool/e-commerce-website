import React from "react";
const FloatingImageContentBlock =() => {
    return(
        <section className="container mx-auto py-10 flex flex-col md:flex-row items-center">
            <div className="md-1/2 md:pr-10">
            <h2 className="text-3xl font-bold mb-4 text-white">Delecious pizza</h2>
            <p className="text-white mb-4">Experience the creamy pizza in town, made with freash ingredients and grilled to perfection</p>
            <button className="bg-green-500 text-white px-4 rounded hover:bg-green-600 transition duration-200">Order Now</button>
            <h3 className="text-2xl font-semibold mt-6 mb-2 text-center text-white">{""}coming soon: our new flavour launches{""}</h3>
            <ul className="text-blue-300">
                <li>z <strong>cheesy BBQ bacon pizza:</strong> A mouthwatering blend of cheddar chese,
                crispy bacon, and BBQ,{""}
                    
                </li>
                <br/>

                <li> <strong>Mashroom swiss pizza:</strong> chesey and creamy topped with masrooms.
                {""}
                    
                </li>
                <br/>


                <li>z <strong>Avocado veggie pizza:</strong> A delecious plant-based featuring a grilled veggies toping
                {""}
                    
                </li>
                <br/>


                <li>z <strong>cheesy and scipy pizza:</strong> A mouthwatering blend of cheddar chese,and secret spices.
                {""}
                    
                </li>
                <br/>
            






  <li> <strong>Afgani feast:</strong> A mouthwatering blend of cheddar chese,
                crispy bacon, and BBQ,{""}
                    
                </li>
                <br/>





            </ul>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-6">
            <img 
            src="/pizza11.jpg"
            alt="delicious pizza"
            className="w- full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 mr-7"/>
            </div>
            
            
            
        </section>
    )
}
export default FloatingImageContentBlock;