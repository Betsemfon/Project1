/*import logo from "./assets/Images/idak.jpg"*/

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
                        <button class="flex items-center bg-white text-red-500 font-bold py-2 px-4 rounded">
    
                         <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M15.8327 16.625V15.0417C15.8327 14.2018 15.4991 13.3964 14.9052 12.8025C14.3113 12.2086 13.5059 11.875 12.666 11.875H6.33268C5.49283 11.875 4.68738 12.2086 4.09351 12.8025C3.49965 13.3964 3.16602 14.2018 3.16602 15.0417V16.625" stroke="#E93740" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9.50065 8.70833C11.2496 8.70833 12.6673 7.29057 12.6673 5.54167C12.6673 3.79276 11.2496 2.375 9.50065 2.375C7.75175 2.375 6.33398 3.79276 6.33398 5.54167C6.33398 7.29057 7.75175 8.70833 9.50065 8.70833Z" stroke="#E93740" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                          Sign in
                        </button>
                        <button className="bg-red-500 text-white font-bold py-2 px-6 rounded-full"> 
                              
                          + Post Listing</button>
                    </ul>
                  
                </nav> 
                
                
            
    </header>
                
    );
}

export default NavBar;