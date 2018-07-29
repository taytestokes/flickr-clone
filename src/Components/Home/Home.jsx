import React, {Component} from 'react';

//Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//StyleSheets
import './Home.css';

//Importing Images
import image1 from '../../assets/arch.jpg';
import image2 from '../../assets/beach.jpg'; //not in use; might need later
import image3 from '../../assets/concert.jpg';
import image4 from '../../assets/girl.jpg';
import image5 from '../../assets/jellyfish.jpg'; //not in use; might need later
import image6 from '../../assets/skate.jpg';

//Array Of Background Images For Landing Page
let backgroundImageArray = [image1, image3, image4, image6];

//Loops through the backgroundImageArray and will desplay the image
let background = document.getElementsByClassName('home-container');
let i = 0;
setInterval(() => {
    background[0].style.backgroundImage = 'url(' + backgroundImageArray[i] + ')';
    i += 1;
    if(i == backgroundImageArray.length){
        i = 0;
    }
}, 5000);


class Home extends Component {
    constructor(){
        super()

        this.state = {

        }
    }

    render(){
        return (
            <div className="home-container" style={{ "backgroundImage": `url(${image6})`, "backgroundSize": "cover", "backgroundPosition": "center"}}>
                <nav className="home-nav">
                    <h1>flickr</h1>
                    <div className="home-search-container">
                        <span id="home-nav-search-icon"><FontAwesomeIcon icon="search"/></span>
                        <input type="text" placeholder="Photos, people, or groups"/>
                    </div>
                    <div className="home-nav-btn-container">
                    <button id="home-nav-login">Log In</button>
                    <button id="home-nav-signup">Sign Up</button>
                    </div>
                </nav>

                <section className="welcome-container">
                    <h1>Find your inspiration.</h1>
                    <h2>Join the Flickr community, home to tens of billions of photos and 2 million groups.</h2>
                    <button>Sign Up</button>
                </section>

                <footer className="footer">
                    <span>About</span>
                    <span>Jobs</span>
                    <span>Blog</span>
                    <span>Developers</span>
                    <span>Guidelines</span>
                    <span>Privacy</span>
                    <span>Terms</span>
                    <span>Help forum</span>
                    <span>English</span>
                </footer>
            </div>
        )
    }
}

export default Home;