import React from 'react'
import styled from 'styled-components'
import RulesImage from '../../public/vaishnavi/rules.webp';

const Rules = () => {


  return (
    <Wrapper>
      <div className='rules-page'>
        <div class="text-center">
          <img src={RulesImage} class="img-fluid" alt=""></img>
        </div>
      <div className='guidline-rules'>
          <div class="guidlines">
            <ul>
              <h2>Submission Guidelines</h2>
              <li>
                Concept: Clear articulation of the design idea.
              </li>
              <li>
                Explanation: Detailed description of the design and its significance.
              </li>
              <li>
                Material Suggestions: List and explanation of materials proposed for the
                construction.
              </li>
              <li>
                Design Drawings: All necessary architectural drawings (file formats to be
                announced).
              </li>
              <li>
                Images: Rendered images or sketches of the proposed design.
              </li>
              <li>
              Applicants shall submit at least one reference project involving complex and high quality
buildings of similar use and describe their respective role in these projects
              </li>
             
            </ul>
          </div>

          <div class="rules">
            <ul>
             <h2>Basic Rules</h2>
              <li>
                Each participant/team can submit only one design per category.
              </li>
              <li>
                All submissions must be original.
              </li>
              <li>
                Any form of plagiarism will result in immediate disqualification.
              </li>
              <li>
                All designs, once submitted, will be property of XYZ organisation.
              </li>
              <li>
              The applicant and all members of his team having the required qualification as architect shall not
be older than 45 years
              </li>
              <li>
                Note: No need for plumbing, electrical designs.
              </li>
              <li>
                More rules will be provided upon registration.
              </li>
            </ul>
          </div>
          </div>
        </div>
      

    </Wrapper>
  )
}

const Wrapper = styled.section`

  margin-bottom:100px;

h1, h2{
  text-align : center;
font-family : Cursive;
color: red;
text-shadow: 
       1px 0px 0px red;
       color: red;    
}
.rules-page{
  background-color: #C0C0C0;

}
.img-fluid{
  height : 150px;
  width : 700px;
  margin-bottom :20px;
  margin-top : 20px;
  
 }
 img {
  border: 5px solid white;
}
li{
  font-size: 18px;
  text-shadow: 
       1px 0px 0px black;
       color: black; 

}
.guidlines{
    
  border-right: 5px dotted black;
  line-height: 1.6;
  width : 50%;
  
}
.rules{
  
  line-height: 1.6;
  width : 50%;
}
.guidline-rules{
    margin-top: 100px;
  display : flex;
  flex-direction : row;
}
`;

export default Rules