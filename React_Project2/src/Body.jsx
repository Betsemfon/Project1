
function Body(){

    return(
        <div>
           <h1 className="text-4xl font-bold text-center mt-10">Browse From Top Categories</h1>
           
           <div className="flex justify-center mt-8">
           <svg  width="60" height="6" viewBox="0 0 104 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="82" height="6" rx="3" fill="#E93740"/>
             <rect x="87" width="16" height="6" rx="3" fill="#E93740"/>
            </svg>
            </div> 
            
       

       <div className="flex justify-center space-x-4 mt-8">
            <button class="bg-gray-200 text-black  font-bold py-2 px-6 rounded-full">
            👍 Holiday Rentals
             </button>
             <button class="bg-gray-200 text-black  font-bold py-2 px-6 rounded-full">
             🏠 Residential Spaces
             </button>
            <button className="bg-gray-200 text-black font-bold py-2 px-6 rounded-full">
             🕛Event Spaces
            </button>
            <button className="bg-gray-200 text-black font-bold py-2 px-6 rounded-full">
            💰 Commercial Properties
            </button>
            <button className="bg-gray-200 text-black font-bold py-2 px-6 rounded-full">
              ➡️ More
            </button>
        </div>
          
          <h1 className="text-4xl font-bold text-center mt-10">Featured Listings</h1>

          <div className="flex justify-center mt-8">
           <svg  width="60" height="6" viewBox="0 0 104 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="82" height="6" rx="3" fill="#E93740"/>
             <rect x="87" width="16" height="6" rx="3" fill="#E93740"/>
            </svg>
            </div> 

          <div class="flex justify-center text-xs space-x-4 mt-8 ml-10 block">
              <button class="bg-red-500 text-xs text-white py-2 px-6 rounded-full">
                All items (5125)
              </button>
              <button class="bg-gray-200 text-xs text-black py-2 px-6  rounded-full">
                Residential Space (64)
              </button>
              <button class="bg-gray-200 text-xs text-black py-2 px-6 rounded-full">
               Sport Venues
              </button>
              <button class="bg-gray-200 text-xs text-black py-2 px-6 rounded-full">
               Meeting Spaces
             </button>
             <button class="bg-gray-200 text-xs text-black py-2 px-6 rounded-full">
               Vans and Buses
             </button>
             <button class="bg-gray-200 text-xs text-black py-2 px-6 rounded-full">
               Cars and SUVs
             </button>
             <button class="bg-gray-200 text-xs text-black py-2 px-6 rounded-full">
               Lorries and Industrial Vehicles
             </button>
             <button class="bg-gray-200 text-xs text-black py-2 px-6 rounded-full">
        
             </button>
        </div>

     </div>
        
    )
}

export default Body;