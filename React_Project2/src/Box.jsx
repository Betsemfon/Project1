

function Box(){
    return(
        <div className="min-h-15 flex flex-col items-center mt-8  bg-gray-100">
           
         <body className=" flex  bg-gray-100 jusify-center items-center mb-8 mt-10">

             <div className="text-left space-y-2 mr-10 ml-10">
                <b className="text-3xl block  ">Insights and </b>
                 <b className="text-3xl block">Performance</b>
                 <b className="text-3xl block  "> Metrics</b>
                </div>

                <div className="flex flex-row items-center justify-center space-x-4">
                 <div className="bg-black text-center w-32 h-32 flex flex-col justify-center items-center p-4 rounded-lg shadow-md">
                  <p className="text-xl text-white font-bold">5000+</p>
                  <small className="block text-white text-xs">
                      Total Listings in the system
                  </small>
                  </div>
                 <div className="bg-black text-center w-32 h-32 flex flex-col justify-center items-center p-4 rounded-lg shadow-md">
                 <p className="text-xl text-white font-bold">1000+</p>
                 <small className="block text-white text-xs">Active Listings</small>
                 </div>
                 <div className="bg-black text-center w-32 h-32 flex flex-col justify-center items-center p-4 rounded-lg shadow-md">
                 <p className="text-xl text-white font-bold">30+</p>
                 <small className="block text-white text-xs">Articles in Blog</small>
                 </div>
              </div>

        
                 
         </body>
        </div>

    )
}

export default Box