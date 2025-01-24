"use client"

import  React from "react";

type Offer ={
    title:string;
    description:string;

}
const SpecailOffer:React.FC =() =>{
    const offers:Offer[]=[
        {
            title:"HAPPY HOURS",
            description:"5pm to 8pm 50% off on cold drinks",
        },

        {
        title:"FAMILY MEAL DEAL",
        description:"buy 2 pizza and get famiy coupons"
        },
        {
            title:"WEEKLY BRUNCH",
            description:"one jumbo size drink compimentry on large pizza"
        },
    ];
    const handleofferClick = (description:string)=>{
        alert(description);
    }
    return(
        <section className="p-10">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6 text-white"> Specail offers!</h2>
                <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-6">
                    {offers.map((offers,index)=>(
                        <button key={index}onClick={()=> handleofferClick(offers.description)}
                        className="bg-white shadow-lg rounded-lg text-center hover:bg-gray-600 transition duration-200 transform hover:scale-105">
                            <h3 className="text-2xl font-semibold text-slate-400">{offers.title}</h3>
                            <p className="text-red-500 mt-3">{offers.description}</p>
                        </button>
                   ) )}
                </div>

            </div>
        </section> 
    )
}
export default SpecailOffer