import React, { useState } from "react"
import axios from 'axios';
import styled from 'styled-components';
import Bg from '../../public/pratik/images/bg.jpg';

const UploadPdf = () => {
  const [file, setFile] = useState(null)
  const [email, setEmail] = useState('')


  const upload = async (e) => {
    e.preventDefault()
    try {
      const formData = new FormData()
      formData.append('file', file, 'file.pdf')
      const res = await axios.post(`http://localhost:3001/upload/${email}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      if (res.data) {
        alert('PDF uploaded successfully!')
      }
      else {
        alert('PDF upload failed.')
      }
      console.log(res.data)
    } catch (err) {
      alert("Invaild Feild")
      console.log(err)
    }
  }


  // Download Pdf
  const handleDownload = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.get(`http://localhost:3001/download-pdf/${email}`, {
        responseType: 'blob', // Specify that the response should be treated as binary data
      });
      console.log(response)
      // Create a temporary URL for the PDF data and trigger the download
      const url = window.URL.createObjectURL(new Blob([response.data], { type: response.data.type }));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'user.pdf');
      document.body.appendChild(link);
      link.click();

      // Clean up the temporary URL
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading PDF file:', error);
    }
  };
  return (
    <Wrapper>

      <div class="container-fluid upload-container">
        <div class="text-center py-5">
          <h1 className="pb-4">Upload Your Design</h1>
          <div class="row">
            <div class="col-md-4 offset-md-4">
              <form>
                <div class="mb-3">
                  <input type="email" class="form-control" id="file1" placeholder="Enter Your Mail Id" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div class="mb-3">
                  <label for="file2" class="form-label"></label>
                  <input type="file" class="form-control" accept=".pdf" onChange={(e) => setFile(e.target.files[0])} />
                </div>
                <button class="btn btn-primary" onClick={(e) => upload(e)}>Upload</button>
                <button className="btn btn-success mx-4" onClick={(e) => handleDownload(e)}>Download Pdf</button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </Wrapper>
  )
}

const Wrapper = styled.section`
.upload-container {
  background: url(${Bg});
  background-size: cover;
  background-position: center;
  height: 100vh;
 }
  h1 {
  font-size: 36px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
  color:#fff;
}
`
export default UploadPdf;