import profilePicture from "./assets/Banner Image.jpg"

function NavBar(){

    return (
      <header>
                <nav>
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>Rentals</a></li>
                        <li><a>Categories</a></li>
                        <li><a>About Us</a></li>
                        <li><a>Contact</a></li>
                        <li><a>Blog</a></li>
                    </ul>
                  
                </nav> 
                <div className="image-container">
                <img  className="Banner-image" src={profilePicture} alt="profile picture"/>
            </div>
    </header>
                
    );
}

export default NavBar;