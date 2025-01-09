import React from 'react'
const Products =[
    {
        id:1,
        title:"mexican pizza",
        category:"fixing",
        price: "700.00",
        imageurl:"/peizza6.jpg",
        bgColor:"bg-amber-500"
    
    },

    {
        id:2,
        title:"newyork",
        category:"specail",
        price: "600.00",
        imageurl:"/pizza7.jpg",
        bgColor:"bg-teal-500"
    
   
    },



    {
        id:3,
        title:"itlain",
        category:"delight",
        price: "500.00",
        imageurl:"pizza8.jpg",
        bgColor:"bg-amber500"
    
    }





]

export default function product()  {
  return (
    <div className='p-1 flex-wrap items-center justify-center mb-6'>
      {Products.map((product) =>(
        <div key={product.id} className={"flex shrink-0 m-6 relative overflow-hidden ${product.bgColor } rounded-lg shadow-lggroup max-w-sm"}>
          <svg className='absoulte bottom-0 left-0 mb-8 scale-150 group:hover:sxale-[1.65 transition-transform'viewBox='0 0 375 283' fill='none' style={{opacity:0.1}}>
            <rect x="159.52" y="152" height="152" width="152" rx="8" transform="rotate(-45 159.52 175)"fill="white"/>
            <rect y="107.48" height="152" width="152" rx="8" transform='rounded{-45 0 107.48)'fill="white"/>
            </svg>
            <div className='relative pt-10 px-10 flex item-center justify-center group-hover:scale-110 transition-transform'>
              <div className='block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3' style={{background:"radial-gradient(black,transparent 50%", transform:"rotate3d(0,1,20deg) scale3d(1,0.6,1",opacity:0.2}}>


              </div>
              <img className='relative w-50'
              src={product.imageurl} alt={product.title}/>
            </div>
            <div className='relative text-white px-6 pb-6 mt-6'>
              <span className='block opacity-75 -mb-1'>{product.category}</span>
              <div className='flex justify-between'>
                <span className='block font-semibold text-xl'>{product.title}</span>
                <span className='block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none items-center'>{product.title}</span>
              </div>
            </div>
        </div>
        
      ))}
      
    </div>
  )
}


