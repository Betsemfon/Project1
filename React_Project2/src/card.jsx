import profilePicture from "./assets/Images/Body_Image.jpg"
import Picture from "./assets/Images/rent2.jpg"
import RentHouse  from "./assets/Images/rent3.jpg"


function card(){

    return (
        <div className="flex flex-row  items-center justify-center space-x-4 mt-8" >
        <div className="card max-w-sm bg-white rounded-lg shadow-md overflow-hidden m-4">
        <img className="card-image w-full h-48 object-cover" src={profilePicture} alt="profile picture" />
        <div className="p-4">
            <p className="card-text1 text-xl mb-2">
                <span className="text-red-500 font-bold">85,000 LKR</span>
                <span className="text-gray-600">/Month</span>
            </p>
            <p className="card-text2 text-lg font-semibold mb-1">
                Luxury villa in Rego Park
            </p>
            <p class="text-gray-500 text-sm mb-4">
                3 Bedrooms | 2 Bathrooms | 2500 Square FT
            </p>
            <hr className="border-t border-gray-200" />
        </div> 
    </div>

    

    <div className="card  max-w-sm bg-white rounded-lg shadow-md overflow-hidden m-4">
        <img className="card-image w-full h-48 object-cover" src={Picture} alt="Picture" />
        <div className="p-4">
            <p className="card-text1 text-xl mb-2">
                <span className="text-red-500 font-bold">85,000 LKR</span>
                <span className="text-gray-600">/Month</span>
            </p>
            <p className="card-text2 text-lg font-semibold mb-1">
                Luxury villa in Rego Park
            </p>
            <p class="text-gray-500 text-sm mb-4">
                3 Bedrooms | 2 Bathrooms | 2500 Square FT
            </p>
            <hr className="border-t border-gray-200" />
              
        </div> 
    </div>
    <div className="card  max-w-sm bg-white rounded-lg shadow-md overflow-hidden m-4">
        <img className="card-image w-full h-48 object-cover" src={RentHouse} alt="RentHouse" />
        <div className="p-4">
            <p className="card-text1 text-xl mb-2">
                <span className="text-red-500 font-bold">85,000 LKR</span>
                <span className="text-gray-600">/Month</span>
            </p>
            <p className="card-text2 text-lg font-semibold mb-1">
                Luxury villa in Rego Park
            </p>
            <p class="text-gray-500 text-sm mb-4">
                3 Bedrooms | 2 Bathrooms | 2500 Square FT
            </p>
            <hr className="border-t border-gray-200" />
        </div> 
    </div>
    
    </div>
    
    
    
         
    );
}



export default card;