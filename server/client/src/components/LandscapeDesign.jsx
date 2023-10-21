import React from 'react';
import styled from 'styled-components';
import building_1 from '../assets/building_1.jpg';
import ramtemple2 from '../assets/ramtemple2.jpg';
import landscape from '../assets/landscape.jpg';
import Auditorium from '../assets/Auditorium.jpg';
import community from '../assets/community.jpg';
import labirary from '../assets/labirary.jpg';
import design_img from '../assets/design_img.jpg';
const LandscapeDesign = () => {
  return (

    <Wrapper>
      <section class="school-banners">
        <h1>Category of Arch Architectural Competetion 2023</h1>
      </section>
      <section class="school-banner">
        <h1>Landscape Design</h1>
      </section>
      <section class="section bg-primary">
        <div class="container">
          <h2 class="section-title text-center text-white">Shishu Vatika</h2>
          <div className=' container bg-greya'>
            <p className='text-center'>A School Celebrating Indian Culture,Tradition,and Family Values.</p>
            <div class="row">
              <div class="col-md-3">
                <div class="gallery-item">
                  <img src={building_1} alt="Image 1" className='shadow img-fluid' />
                </div>
              </div>
              <div class="col-md-3">
                <div class="gallery-item">
                  <img src={building_1} alt="Image 2" />
                </div>
              </div>
              <div class=" col-md-3">
                <div class="gallery-item">
                  <img src={building_1} alt="Image 3" />
                </div>
              </div>
              <div class=" col-md-3">
                <div class="gallery-item">
                  <img src={building_1} alt="Image 3" />
                </div>
              </div>

            </div>
            <div class="row">
              <div class="col-md-3">
                <div class="gallery-item">
                  <img src={building_1} alt="Image 1" />
                </div>
              </div>
              <div class="col-md-3">
                <div class="gallery-item">
                  <img src={building_1} alt="Image 2" />
                </div>
              </div>
              <div class=" col-md-3">
                <div class="gallery-item">
                  <img src={building_1} alt="Image 3" />
                </div>
              </div>
              <div class=" col-md-3">
                <div class="gallery-item">
                  <img src={building_1} alt="Image 3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section class="section bg-primary">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <img src={ramtemple2} alt="Shriram Panchayatan Temple" class="img-fluid temp_img shadow" />
            </div>
            <div class="col-md-6">
              <h2 class="section-title">Shriram Panchayatan Temple</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, accusantium numquam id ad veniam, cupiditate non magnam optio dolores quasi quae perspiciatis autem, praesentium vel repellendus! Eos voluptatum repellendus dolores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, accusantium numquam id ad veniam, cupiditate non magnam optio dolores quasi quae perspiciatis autem, praesentium vel repellendus! Eos voluptatum repellendus dolores.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, accusantium numquam id ad veniam, cupiditate non magnam optio dolores quasi quae perspiciatis autem.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section class="section bg-primary">
        <div class="container">
          <div class="row test">
            <div class="col-md-6">
             <h2 class="section-title">Auditorium Hall</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, accusantium numquam id ad veniam, cupiditate non magnam optio dolores quasi quae perspiciatis autem, praesentium vel repellendus! Eos voluptatum repellendus dolores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, accusantium numquam id ad veniam, cupiditate non magnam optio dolores quasi quae perspiciatis autem, praesentium vel repellendus! Eos voluptatum repellendus dolores.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, accusantium numquam id ad veniam, cupiditate non magnam optio dolores quasi quae perspiciatis autem.
              </p>
            </div>
            <div class="col-md-6">
            <img src={Auditorium} alt="Auditorium" class="img-fluid temp_img shadow"/>
            </div>
          </div>
        </div>
      </section>

      <section class="section bg-primary">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <img src={community} alt="Community center" class="img-fluid temp_img shadow" />
            </div>
            <div class="col-md-6">
              <h2 class="section-title">Community Center</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, accusantium numquam id ad veniam, cupiditate non magnam optio dolores quasi quae perspiciatis autem, praesentium vel repellendus! Eos voluptatum repellendus dolores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, accusantium numquam id ad veniam, cupiditate non magnam optio dolores quasi quae perspiciatis autem, praesentium vel repellendus! Eos voluptatum repellendus dolores.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, accusantium numquam id ad veniam, cupiditate non magnam optio dolores quasi quae perspiciatis autem.
             </p>
            </div>
          </div>
        </div>
      </section>
      
      <section class="section bg-primary">
        <div class="container">
          <div class="row test">
            <div class="col-md-6">
              <h2 class="section-title">Public Library</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, accusantium numquam id ad veniam, cupiditate non magnam optio dolores quasi quae perspiciatis autem, praesentium vel repellendus! Eos voluptatum repellendus dolores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, accusantium numquam id ad veniam, cupiditate non magnam optio dolores quasi quae perspiciatis autem, praesentium vel repellendus! Eos voluptatum repellendus dolores.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, accusantium numquam id ad veniam, cupiditate non magnam optio dolores quasi quae perspiciatis autem.
              </p>
            </div>
            <div class="col-md-6">
            <img src={labirary} alt="Public Library" class="img-fluid temp_img shadow" />
            </div>
          </div>
        </div>
      </section>
      
    </Wrapper>
  )
}

const Wrapper = styled.section`

 .school-banner {
  background:rgba(0,0,0,0.4)url(${landscape});
  background-size: cover;
  background-position: center;
  height: 500px; 
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-blend-mode:darken;
}

 .school-banners{
  background:rgba(0,0,0,0.4)url(${design_img });
  background-size: cover;
  background-position: center;
  height: 500px; 
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-blend-mode:darken;
}
.school-banner p{
  font-size:20px;
  padding-top:20px;
  font-weight:700;
}
 .section {
    padding: 50px;
    color:white
}
.section p{
  overflow:hidden;
}
.section-title {
    font-size: 24px;
    font-weight: bold;
}
.section .temp_img{
   border:5px solid white; 
   border-radius:10px;
}

.gallery-item {
    position: relative;
    overflow: hidden;
    border: 2px solid #f0f0f0;
    margin-bottom: 20px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s ease-in-out;
  }

  .gallery-item img {
    width: 100%;
    height: auto;
  }

  .gallery-item:hover {
    transform: scale(1.05);
  }

  /* Media Queries */
@media screen and (max-width: 767px) {
    .section h2 {
        font-size: 18px;
    }
    .section p {
        font-size: 12px;
    }
    .section-title{
        margin-top:5px;
    }
    .school-banner h1 {
      font-size: 32px;
  }
  .school-banner p {
      font-size: 16px;
  }
  .test{
    display:flex;
    flex-direction:column-reverse;
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
    .section h2 {
        font-size: 30px;
    }
    
    .section p {
        font-size: 14px;
    }
    .school-banner h1 {
      font-size: 40px;
  }
  .school-banner p {
      font-size: 18px;
  }
}

@media screen and (min-width: 992px) {
    .section h2 {
        font-size: 34px;
    }
    .section p {
        font-size: 16px;
    }
    .school-banner h1 {
      font-size: 42px;
  }
  .school-banner p {
      font-size: 20px;
  }
}
  
 `
export default LandscapeDesign;