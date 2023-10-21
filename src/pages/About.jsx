import React, { useEffect } from 'react';
import styled from 'styled-components';
import image2 from '../../public/vaishnavi/image2.jpg';
import image1 from '../../public/vaishnavi/image1.webp';

const About = () => {
  useEffect(() => {
    // Function to move the carousel to the next slide every 3 seconds
    const slideInterval = setInterval(() => {
      const carousel = document.getElementById('carouselExampleControls');
      if (carousel) {
        const currentSlide = carousel.querySelector('.carousel-item.active');
        const nextSlide = currentSlide.nextElementSibling || carousel.querySelector('.carousel-item:first-child');
        currentSlide.classList.remove('active');
        nextSlide.classList.add('active');
      }
    }, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <Wrapper>
      <div className='detail'>
        <div className='about'>
          <img src={image2} width="100%" height="auto" alt="Image 2" />
        </div>

        <div className='mission'>
          <div>
            <h2>Our Mission</h2>
            <p>There's this notion that to grow a business, you have to be ruthless. But we know there's a better way to grow. One where what's good for the bottom line is also good for customers. We believe businesses can grow with a conscience, and succeed with a soul — and that they can do it with inbound. That's why we've created an ecosystem uniting software, education, and community to help businesses grow better every day.</p>
          </div>
          <img src={image1} width="100%" height="auto" alt="Image 1" />
        </div>

        <div className='mission'>
          <img src={image1} width="100%" height="auto" alt="Image 1" />
          <div>
            <h2>Our Vision</h2>
            <p>There's this notion that to grow a business, you have to be ruthless. But we know there's a better way to grow. One where what's good for the bottom line is also good for customers. We believe businesses can grow with a conscience, and succeed with a soul — and that they can do it with inbound. That's why we've created an ecosystem uniting software, education, and community to help businesses grow better every day.</p>
          </div>
        </div>

        <div className='history'>
          <h2>Our History</h2>
          <div className='images'>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={image1} className="d-block w-100" alt="Image 1" />
                </div>
                <div className="carousel-item">
                  <img src={image1} className="d-block w-100" alt="Image 2" />
                </div>
                <div className="carousel-item">
                  <img src={image1} className="d-block w-100" alt="Image 3" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        <div className='judges'>
          <h1>Judge Panel</h1>

          <div className="container">
            <div className="image">
              <img src="https://i.pinimg.com/736x/fb/14/36/fb14367fee180889b66e95d3a0659a4a.jpg" alt="Image 4" height="400px" />
              <h2>Name</h2>
            </div>
            <div className="image">
              <img src="https://i.pinimg.com/564x/30/33/4c/30334cb60ebcb05da34f6fc9bd2a9d8e.jpg" alt="Image 5" height="400px" />
              <h2>Name</h2>
            </div>
            <div className="image">
              <img src="https://i.pinimg.com/564x/af/e3/eb/afe3eb181af33e1af29ec78448631382.jpg" alt="Image 6" height="400px" />
              <h2>Name</h2>
            </div>
            <div className="image">
              <img src="https://i.pinimg.com/564x/30/33/4c/30334cb60ebcb05da34f6fc9bd2a9d8e.jpg" alt="Image 7" height="400px" />
              <h2>Name</h2>
            </div>
            <div className="image">
              <img src="https://i.pinimg.com/564x/30/33/4c/30334cb60ebcb05da34f6fc9bd2a9d8e.jpg" alt="Image 8" height="400px" />
              <h2>Name</h2>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

  
  body {
    overflow-x: hidden;
  }

  .detail {
    background-color: skyblue;
  }

  .about {
    margin-right: 10%;
    margin-left: 10%;
  }

  .mission {
    text-align: justify;
    margin-top: 50px;
    margin-right: 10%;
    margin-left: 10%;
    display: flex;
    flex-wrap: wrap;
  }

  h1, h2 {
    text-align: center;
    font-family: Cursive;
    text-decoration: underline;
  }

  p {
    font-size: 14px;
    margin-top: 20px;
    margin-left: 10px;
  }

  .history {
    font-size: 15px;
  }

  .images {
    margin-top: 50px;
  }

  .judges {
    margin-top: 50px;
    background-color: skyblue;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
  }

  .image {
    padding: 5px;
    margin-top: 10px;
    text-align: center;
  }

`;

export default About;