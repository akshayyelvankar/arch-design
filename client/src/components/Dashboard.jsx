import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { saveAs } from 'file-saver';
import axios from 'axios';
import Bg from '../../public/pratik/images/bg.jpg';
const Dashboard = () => {

  const[users,setUsers]=useState([]);
  useEffect(()=>{
    async function fetchData(){
        try{
            const response = await axios.get('http://localhost:3001/users');
            setUsers(response.data);
        } catch(error){
            console.log(error)
        }
    }
    fetchData();
  },[])
  console.log(users)
  const generateAndDownloadPDF = async (user) => {
    // Create a new PDF document
    const pdfDoc = await PDFDocument.create();
    const pageWidth = 500;
    const pageHeight = 400;
  
    // Add a new page to the document
    const page = pdfDoc.addPage([pageWidth, pageHeight]);
  
    // Set font
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  
    // Define y-position for each line of text
    const startY = pageHeight - 50;
    const lineHeight = 20;
    let currentY = startY;
  
    const textContent = `
      ID: ${user.id}
      Type: ${user.type}
      Name: ${user.name}
      Email ID: ${user.email}
      Mob: ${user.mobile}
    `;
  
    // Draw the text on the page
    page.drawText(textContent, {
      x: 50,
      y: currentY,
      size: 14,
      font,
      color: rgb(0, 0, 0), // Black color
    });
  
    // Serialize the PDF to bytes
    const pdfBytes = await pdfDoc.save();
  
    // Create a Blob from the PDF bytes
    const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });
  
    // Trigger the download of the PDF
    saveAs(pdfBlob, `${user.name}_info.pdf`);
  };
  

  return (
    <Wrapper>
      <DashboardTitle>Dashboard</DashboardTitle> {/* Use the styled h1 */}
     
      <ContainerRow>
      <CardContainer>
        {users.map((user) => (
          <Card key={user._id}>
            <CardTitle>User: {user.name}</CardTitle>
            <CardBody>
              <p>ID: {user.userId}</p>
              <p>Role: {user.role}</p>
              <p>Name: {user.name}</p>
              <p>Email ID: {user.email}</p>
              <p>Mob: {user.mobileNo}</p>
              <DownloadButton onClick={() => generateAndDownloadPDF(user)}>Download PDF</DownloadButton>
            </CardBody>
          </Card>
        ))}
      </CardContainer>
    </ContainerRow>

</Wrapper>
  );
};

const Wrapper = styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: url(${Bg}) no-repeat center center fixed;
  background-size: cover;
`;


  

const DashboardTitle = styled.h1`
  font-size: 3em;
  color: #FFD700; /* Metallic gold color */
  text-align: center;
  margin-bottom: 20px; /* Added margin at the bottom */
  text-transform: uppercase; /* Convert text to uppercase */
  font-family: 'Roboto', sans-serif; /* Apply a modern font family */
  letter-spacing: 5px; /* Increased letter spacing for a techy look */
  transform: skew(-10deg); /* Skew the text for a dynamic effect */
  background: linear-gradient(135deg, #222, #000); /* Gradient background */
  -webkit-background-clip: text; /* Clip text to the background */
  background-clip: text;
  -webkit-text-fill-color: transparent; /* Hide the text fill */
  transition: all 0.3s ease-in-out; /* Smooth transition on hover */

  &:hover {
    color: #33FF99; /* Change color on hover */
  }
`;

const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center; /* Adjusted to distribute space between cards */
  gap: 20px;
  margin-top: 20px;
  margin: auto;
  overflow-x: auto;
  width: 100%; /* Adjusted width to fill the available space */
  max-width: 100%;
  white-space: nowrap;
  padding: 20px; /* Added padding to create space around the cards */
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;


const Card = styled.div`
  width: 100%;
  max-width: 550px;
  padding: 10px;
  background: linear-gradient(135deg, #0c0c0c 0%, #252525 100%);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  color: white;
  margin-bottom: 20px;
`;



const CardTitle = styled.h3`
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #F4C542; /* Yellow color for the title */
  text-align: center;
`;

const CardBody = styled.div`
  font-size: 1.2em;
  color: #FFFFFF; /* White color for the body text */
`;

const DownloadButton = styled.a`
  margin-top: 15px;
  padding: 10px 20px;
  font-size: 1em;
  background-color: #4CAF50;
  color: #FFFFFF;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #45a049;
    transform: scale(1.05);
  }
`;



export default Dashboard;