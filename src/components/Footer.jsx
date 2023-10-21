import React from 'react';
import styled from "styled-components";
const Footer = () => {
    return (
        <Wrapper>
            <footer>
                <div>
                    <p>&copy;Copyright 2023. All rights are reserved.</p>
                </div>
                <div>
                    <i className="fa-brands fa-facebook icon"></i>
                    <i className=" fa-brands  fa-twitter icon"></i>
                    <i className=" fa-brands fa-whatsapp icon"></i>
                    <i className="fa-brands fa-instagram icon"></i>
                </div>
            </footer>
        </Wrapper>
    )
}

const Wrapper = styled.section`
footer{
     width: 100%;
    //  position: absolute;
    //  bottom: 0;
     text-align: center;
     background-color:black;
     color: #fff;
     padding: 10px 2px;
     display: flex;
     text-align: center;
     justify-content: center;
     flex-direction: column;
 }
 .icon{
     margin-left:9px;
     width: 20px;
     height: 20px;
     cursor: pointer;
 }
`
export default Footer;