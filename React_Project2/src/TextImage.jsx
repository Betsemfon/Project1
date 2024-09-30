import BannerImage from "./assets/Images/Banner_Image.jpg"


const TextImage = ({ imageUrl, text }) => {
  return (
    <div
      className="relative flex items-center justify-center h-96 bg-cover bg-center"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <img
        className="hidden"
        src={BannerImage}
        alt="profile picture"
      />
      <div className="absolute inset-0  flex flex-col items-center justify-center text-center text-white p-4">
        <h1 className="text-3xl font-bold mb-2">
          {text} <span className="text-black text-4xl">Discover Your</span><big className="text-red-500 font-bold">Perfect Rentals</big> 
        </h1>
        <h4 className="text-black text-4x">
          {text} Rent Cars, Houses, and Items in Just a Few Clicks
        </h4>
        <div className="flex space-x-4">
        <button className="bg-red-500 text-white py-2 px-6 rounded-full ">
          Places
        </button>
        <button className="bg-gray-200 text-black py-2 px-6 rounded-full">
          Rides
        </button>
        <button className="bg-gray-200 text-black py-2 px-6 rounded-full">
          Things
        </button>
          
        </div>
        <div className='flex flex-wrap justify-center mt-2 bg-white rounded-full gap-2 sm:gap-4 w-full sm:w-4/6 mx-auto'>
            <div className='w-full sm:w-auto bg-[#fff]  p-2'>
              <input
                type='text'
                placeholder='🔍 Search for cars, houses, and more...'
                className="py-2 px-4 sm:px-10 w-full cursor-pointer"
              />
            </div>
            <div className='w-full sm:w-auto bg-[#fff] rounded-[20px] p-2'>
              <input
                type='text'
                placeholder='📍 Select Location  ▼'
                className='py-2 px-4 sm:px-10 rounded-[20px] w-full cursor-pointer'
              />
            </div>
            <div className='flex items-right  sm:w-auto justify-center  p-2'>
              <span className="text-lg bg-[#E93740] px-2 py-1 rounded-[20px] cursor-pointer">🔍</span>
            </div>
          </div>
      </div>
           
      <div className="flex">
        <a className="relative block group">
          <img
            className="absolute inset-0 object-cover w-full h-full group-hover:opacity-50"
            src={BannerImage}
            alt="Banner"
          />
          <div className="relative"></div>
        </a>
      </div>
    </div>
  );
};
  export default TextImage;