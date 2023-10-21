import React, { useState } from "react";
import styled from "styled-components";
import design_img from '../assets/design_img.jpg';
import seminarhall from '../assets/seminarhall.jpg';
import park1 from '../assets/park1.jpg';
import parking from '../assets/parking.jpg';
import computerlab from '../assets/computerlab.jpg'; 
import playground from '../assets/playground.jpg';
import indoor_6 from '../assets/indoor_6.jpg';

const indoordata = [
    {
        indoor_img:seminarhall,
        indoor_title: "Seminar Hall",
        indoor_text: "Look Various Indoor Facilities"
    },
    {
        indoor_img:computerlab,
        indoor_title: "Computer Lab",
        indoor_text: "Look Various Indoor Facilities"
    },
    {
        indoor_img:indoor_6,
        indoor_title: "Class Room",
        indoor_text: "Look Various Indoor Facilities"
    },
]
const outdoordata = [
    {
        outdoor_img:playground,
        outdoor_title: "Play Ground",
        outdoor_text: "Outdoor Facilities Include Fields and Recreational Areas."
    },
    {
        outdoor_img:park1,
        outdoor_title: "Water Park",
        outdoor_text: "Outdoor Facilities Include Fields and Recreational Areas."
    },
    {
        outdoor_img:parking,
        outdoor_title: "Parking",
        outdoor_text: "Outdoor Facilities Include Fields and Recreational Areas."
    }
]
const SchoolDesign = () => {
    const [indoor, setIndoor] = useState(indoordata);
    const [outdoor, setOutdoor] = useState(outdoordata)

    return (
        <Wrapper>
            <section class="school-banner">
                <h1>Category of Arch Architectural Competetion 2023</h1>
                
            </section>
            <div className="">
                <section className="indoor">
                    <div class="container">
                        <h2 class="mt-5 mb-4 text-center">Facilities Required in School Design</h2>
                        <div class="row">
                            <h3 className="">Indoor Facilities</h3>

                            {
                                indoor.map((item, i) => (

                                    <div class="col-lg-4 col-md-6 mb-4">
                                        <div class="card facility-card">
                                            <img src={item.indoor_img} alt="Facility 1" />
                                            <div class="card-body">
                                                <h5 class="card-title">{item.indoor_title}</h5>
                                                <p class="card-text">{item.indoor_text}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>

                <section className="outdoor">
                    <div class="container">
                        <div class="row">
                            <h3 className="">Outdoor Facilities</h3>
                            {
                                outdoor.map((item, i) => (
                                    <div class="col-lg-4 col-md-6 mb-4">
                                        <div class="card facility-card">
                                            <img src={item.outdoor_img} alt="Facility 1" />
                                            <div class="card-body">
                                                <h5 class="card-title">{item.outdoor_title}</h5>
                                                <p class="card-text">{item.outdoor_text}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
 
 .school-banner {
    background:rgba(0,0,0,0.5)url(${design_img});
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
.school-banner h1 {
    font-size: 36px;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    margin-bottom: 10px;
}

.school-banner p {
    font-size: 20px;
    font-weight:600;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.container {
    max-width: 1200px;
}

.facility-card {
    transition: transform 0.2s ease-in-out; 
}

.facility-card:hover {
    transform: scale(1.05); 
}

.facility-card img {
    max-width: 100%;
    height: auto;
}

/* Media Queries */
@media screen and (max-width: 767px) {
    .school-banner h1 {
        font-size: 28px;
    }
    .school-banner p {
        font-size: 16px;
    }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
    .school-banner h1 {
        font-size: 32px;
    }
    .school-banner p {
        font-size: 18px;
    }
}

@media screen and (min-width: 992px) {
    .school-banner h1 {
        font-size: 36px;
    }
    .school-banner p {
        font-size: 20px;
    }
}

 `
export default SchoolDesign;
