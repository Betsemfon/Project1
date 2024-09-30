  import Photos from "./assets/Images/Kandy.jpg"
  import picture from "./assets/Images/Anuradhapura.jpg"
  import pics from "./assets/Images/Gampaha.jpg"
  import pic from "./assets/Images/Badulla.jpg"
  import photo from "./assets/Images/Jaffna.jpg"
  import Photo from "./assets/Images/Colombo.jpg"


 function ImageSection(){

        return(
          
          <div className="flex mt-10 justify-center items-center ">
           
           <img className="w-20 h-auto md:w-34 lg:w-40 xl:w-30 ml-20  rounded" src={Photos} alt="image"/>
           <div className="flex-col">
           <img className="w-20 h-20 md:w-44 md:h-34 lg:w-40 lg:h-30 xl:w-30 xl:h-30 ml-5 rounded" src={picture} alt="image"/> 
           <img className="w-20 h-20 md:w-44 md:h-34 lg:w-40 lg:h-30 xl:w-30 xl:h-30 ml-5 mt-8 rounded" src={pics} alt="image"/>        
           </div>
           <div className="flex-col">
           <img className="w-20 h-20 md:w-44 md:h-34 lg:w-40 lg:h-30 xl:w-30 xl:h-30 ml-5 rounded" src={pic} alt="image"/> 
           <img className="w-20 h-20 md:w-44 md:h-34 lg:w-40 lg:h-30 xl:w-30 xl:h-30 ml-5 mt-8 rounded" src={photo} alt="image"/>        
           </div>
           <img className="w-20 h-auto md:w-34 lg:w-40 xl:w-30 ml-5  rounded" src={Photo} alt="image"/>
           
          </div>
        )
}
export default ImageSection