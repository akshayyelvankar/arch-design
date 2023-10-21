import React , {useState, useEffect}from 'react';
import styled from 'styled-components';
import img3 from '../../public/pratik/images/img3.jpg';
import img1 from '../../public/pratik/images/img1.jpg';
import img2 from '../../public/pratik/images/img2.jpg';
import bg from '../../public/pratik/images/background.jpg';
import banner from '../../public/pratik/images/banner3.jpg';

function Home() {
  const targetDate = new Date("2023-12-31T23:59:00").getTime();

    // Calculate the remaining time and update it every second
    const calculateTimeRemaining = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      return {
        days,
        hours,
        minutes,
        seconds
      };
    };
  
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeRemaining(calculateTimeRemaining());
      }, 1000);
  
      return () => clearInterval(timer);
    }, []); // Run this effect only once

  return (
    <Wrapper>
      <div className="homepage">
        <div className="card">
          <h1 className="home-title">
            "Arch <br /> Architectural <br /> Competition 2023: <br /> Shape the Future:
          </h1>
          <h3 className="home-subtitle">
            Unleash Your Architectural Creativity. Register Now!
          </h3>
        </div>
      </div>

      <CarouselHeading>
        <h1>Discover Inspiring Architectural Designs</h1>
      </CarouselHeading>

      <CarouselWrapper>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img3} className="d-block w-100" alt="slide1" />
              <div className="carousel-caption d-none d-md-block">
                <h3>Discover Inspiring Architectural Designs</h3>
                <p>Explore a world of innovation and creativity in architecture.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img1} className="d-block w-100" alt="slide2" />
              <div className="carousel-caption d-none d-md-block">
                <h3>Join the Competition Today!</h3>
                <p>Showcase your architectural prowess and win exciting prizes.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img2} className="d-block w-100" alt="slide3" />
              <div className="carousel-caption d-none d-md-block">
                <h3>Collaborate and Innovate</h3>
                <p>Collaborate with fellow architects and shape the future of design.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </CarouselWrapper>

      <VideoHeading>
        <h1>What's that about Watch Video</h1>
      </VideoHeading>

      <YoutubeVideo>
        <div className="youtube-video">
          {/* Add your YouTube video here */}
          <iframe
            src="https://www.youtube.com/embed/ly8orBNiNQM"
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="right-content">
          <h2>Video with description</h2>
          <p>Encourage users to watch <br /> the video by featuring an attractive thumbnail or a video play button overlay on the video poster image.</p>
        </div>
      </YoutubeVideo>


      <Details>
  <div class="container mt-5">
    <div class="text-center">
      <h1>Welcome to the Architecture Design Competition</h1>
      <p>Submit your designs for a chance to win exciting prizes!</p>
    </div>

    <div class="mt-4">
      <h2>Eligibility:</h2>
      <ul>
        <li>All students must be currently enrolled in architecture colleges.</li>
        <li>Participation can be individual or in a team.</li>
        <li>Maximum team size: 4 members.</li>
      </ul>
    </div>

    <div class="mt-4">
      <h2>Judgement:</h2>
      <ul>
        <li>Designs will be judged by a panel of experienced architects appointed by XYZ organisation.</li>
        <li>Three top designs in both categories will be awarded.</li>
      </ul>
    </div>

    <div class="mt-4">
      <h2>Prizes:</h2>
      <p>Selected designs in each category will receive a cash prize of 50,000/-.</p>
    </div>

    <div class="mt-4">
      
      <p class="small"><strong>Note :</strong> Designs, once submitted and selected, will become the property of XYZ Organisation. The
        organisation holds the right to use them for expansion, promotion, and construction.</p>
    </div>

    <div class="mt-4">
      <h2>Deadline:</h2>
      <p>Last Date for Submission:  31st December 
        2023</p>
    </div>

    <div class="mt-4">
  <h2>Countdown Timer:</h2>
  <div id="countdown">
  <div className="countdown-item">
          <span className="countdown-value">{timeRemaining.days}</span>
          <span className="countdown-label">Days</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-value">{timeRemaining.hours}</span>
          <span className="countdown-label">Hours</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-value">{timeRemaining.minutes}</span>
          <span className="countdown-label">Minutes</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-value">{timeRemaining.seconds}</span>
          <span className="countdown-label">Seconds</span>
        </div>
  </div>
</div>


  </div>
  </Details>
      <Banner>
        {/* <img src={banner} alt="Banner" height='500px' className="banner-img" /> */}
        <div className="overlay">
          <h1>"Join the Competition"</h1>
          <p>The wording should be clear, concise, and persuasive, guiding users through their journey on your website.</p>
          <button className="register-button">Register</button>
        </div>
      </Banner>
    </Wrapper>
  );
}

const Wrapper = styled.section`
    body{
      overflow-x: hidden;
    }

  .homepage {
    background: url(${bg}) no-repeat center center;
    background-size: cover;
    position: relative;
    width: 100%;
    min-height: 90vh; /* Use min-height for a full-screen effect */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card {
    text-align: center;
    padding: 20px;
    border-radius: 10px;
    background: rgba(205, 217, 230, 0.9);
    width: 80%; /* Adjust the width as needed */
    max-width: 600px; /* Set a maximum width for larger screens */
  }

  .home-title {
    font-size: 24px; /* Adjust the title font size */
    color: #333;
    font-family: 'Arial', sans-serif;
    padding: 10px;
    font-family: 'Arial', sans-serif;
    font-weight: bold;
  }

  .home-subtitle {
    font-size: 18px; /* Adjust the subtitle font size */
    color: #0077cc;
    font-style: italic;
    font-weight: bold;
  ${'' /* }
  @media (min-width: 862px){
    
    .home-title {
    font-size: 70px !important; /* Set the title font size */
   
}
  
  .home-subtitle {
    font-size: 40px; /* Set the subtitle font size */
  }

  } */}
  @media (min-width: 862px){
    .homepage{
      height: 90vh;
    }
     .card {
    text-align: center;
    padding: 20px;
    border-radius: 10px;
    background: rgba(205, 217, 230, 0.9);
    height: 50vh;
    ${'' /* width: 80vw;  */}
    max-width: 1000px; /* Set a maximum width for larger screens */
  }
    .home-title {
    font-size: 40px !important; /* Set the title font size */
   
   
}
  
  .home-subtitle {
    ${'' /* font-size: 40px !important; */}
    
  }

  }
  @media (max-width: 576px) {
  .homepage {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
  }

  .card {
    left: -0%;
  margin-bottom: 100%;
    text-align: center;
    padding: 50px;
    border-radius: 30px;
    background: rgba(205, 217, 230, 0.9);
    width: 80%; /* Adjust the width of the card for smaller screens */
  }

  .home-title {
    font-size: 30px; /* Adjust the title font size for smaller screens */
  }

  .home-subtitle {
    font-size: 16px; /* Adjust the subtitle font size for smaller screens */
  }
}


  @media (max-width: 768px) {
    ${'' /* .homepage {
      min-height: auto; /* Remove full-screen effect on smaller screens */
    } */}
    .homepage{
      height: 90vh;
    }

    .card {
      width: 90%; /* Adjust the width for smaller screens */
      margin: 20px; /* Add some margin for spacing */
    }

    .home-title {
      font-size: 20px; /* Adjust title font size for smaller screens */
    }

    .home-subtitle {
      font-size: 16px; /* Adjust subtitle font size for smaller screens */
    }
  }


`;

const CarouselHeading = styled.div`
  /* Add your CSS styles here */

  text-align: center;
  margin-top: 20px;
  padding-top: 50px;
  font-size: 32px !important;
  font-weight: bold;
  color: #333;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 90%;
    margin: auto;
  }
`;

const CarouselWrapper = styled.div`
  /* Add your CSS styles here */

  width: 50%;
  padding-top: 4%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    background-color: black;
    border: solid black;
    border-width: 0 3px 3px 0;
    height: 50px;
    width: 45px;
  }

  .carousel-control-prev:hover,
  .carousel-control-next:hover {
    opacity: 1;
  }

  .carousel-caption h3,
  .carousel-caption p {
    color: black;
  }

  @media (max-width: 768px) {
    width: 90%;
    margin: auto;
  }
`;

const VideoHeading = styled.div`
  /* Add your CSS styles here */

  text-align: center;
  margin-top: 20px;
  padding-top: 50px;
  font-size: 32px !important;
  font-weight: bold;
  color: #333;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 90%;
    margin: auto;
  }
`;

const YoutubeVideo = styled.div`
  /* Add your CSS styles here */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  padding: 20px;
  border: 3px solid #333;
  border-radius: 10px;
  background-color: rgba(0, 56, 168, 0.8);
  box-sizing: border-box;

  .youtube-video {
    width: 80%;
    ${'' /* max-width: 800px;  */}
    iframe {
      width: 100%;
      height: 400px;
    }
  }

  .right-content {
    width: 100%;
    max-width: 800px; /* Adjust the maximum width as needed */
    text-align: center;
    color: #fff;
    padding: 20px;
    
    h2 {
      font-size: 24px;
      margin-bottom: 10px;
      font-weight: bold;
      text-align: left;
    }

    p {
      text-align: left;
      font-size: 16px;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    .youtube-video {
      width: 60%;
    }
    .right-content {
      width: 40%;
      padding: 0 20px;
      h2 {
        font-size: 28px;
        margin-bottom: 10px;
      }
      p {
        font-size: 18px;
      }
    }
  }

`;


const Details = styled.div`
  .container {
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color:  rgb(0, 56, 168, 0.8);
  border-radius: 10px;
  border: 3px solid #333;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.text-center {
  text-align: center;
}

h1 {
  font-size: 2em;
  color: #fff;
}

p {
  font-size: 1.2em;
  color: #fff;
}

ul {
  list-style-type: disc;
}

li {
  font-size: 1.1em;
  color: #fff;
}

h2 {
  font-size: 1.5em;
  color: #fff;
  margin-top: 15px;
}

.small {
  font-size: 0.9em;
  color: #fff;
}

/* Adjusting margins and paddings */
.mt-4 {
  margin-top: 20px;
}

.countdown-item {
    color: red; /* Set the countdown item color to red */
    font-size: 24px; /* Adjust the font size of the countdown value */
    font-weight: bold; /* Make the countdown value bold */
    display: inline-block;
    margin: 0 10px;
    padding: 10px 20px;
    border-radius: 50%; /* Create a circular appearance */
    background-color: rgba(0, 0, 0, 0.1); /* Add a background for contrast */
  }

  .countdown-label {
    font-size: 16px; /* Adjust the font size of the countdown label */
    display: block; /* Ensure labels appear on a new line */
  }
`;

const Banner = styled.div`
  /* Add your CSS styles here */
  background: url(${banner});
  height: 400px;
  position: relative;
  text-align: center;
  margin-top: 20px;
 
  .banner-img {
    width: 100%;
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }

  .overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%; /* Adjust the width for smaller screens */
    max-width: 100%; /* Ensure it doesn't exceed the banner width */
    text-align: center;
    color: #333;
  }

  .overlay h1 {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .overlay p {
    font-size: 18px;
    margin-bottom: 20px;
  }

  .register-button {
    background-color: #0077cc;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    height: 300px;
    .overlay h1 {
      margin-top: 20px;
      font-size: 28px;
      margin-bottom: 10px;
    }

    .overlay p {
      font-size: 16px;
      margin-bottom: 10px;
    }

    .register-button {
      font-size: 18px;
    }
  }
`;

export default Home;