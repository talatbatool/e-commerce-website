import React from 'react';

const Reservationsection=()=>{
    return(
        <section className='bg-gradient-to-r from-black to bg-slate-500 py-10'>
            <div className='container mx-auto text-center'>
                <h2 className='text-3xl font-extrabold mb-6 text-white'>{""}Make a reservation</h2>
                <form className='mzx-w-wmd mx-auto'>
                    
                    
                    <div className='mb-4 text-white'>
                        <input
                        type="text"
                        placeholder="your Name"
                        className='w-full p-3 border border-gray-300 rounded-md'
                        required />
                        </div>
                      
                      
                        <div className='mb-4'>
                            <input type="email"
                            placeholder="your Email"
                            className='w-full p-3 border border-gray-300 rounded-md'
                            required />
                        </div>


                        <div className='mb-4'>
                            <input type="date"
                        
                            className='w-full p-3 border border-gray-300 rounded-md'
                            required />
                        </div>


                        
                        <div className='mb-4'>
                            <input type="time"
                            className='w-full p-3 border border-gray-300 rounded-md'
                            required />
                        </div>
                        <div className='mb-4'>
                        <button className='bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700'>Reserved Table </button>
                        </div>

                </form>

                 
            </div>
        </section>
    )
}
export default Reservationsection;

