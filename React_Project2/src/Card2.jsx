import Card from "./card"

function Card2() {
    const profilePicture ="Body_Image.jpg"
  
    return (
      <div className="container mx-auto mt-10">
        {/* Center the card */}
        <div className="flex justify-center">
          <Card profilePicture={profilePicture} />
        </div>
        <div className="flex justify-center">
          <Card profilePicture={profilePicture} />
        </div>
  

  
        
        
      </div>
    );
  }
  
  export default Card2;