import React from 'react'
import styled from 'styled-components'

const Contact = () => {
 

  return (
    <Wrapper>
      <div className='contact'>
        <div className="d-flex justify-content-center align-items-stretch">
          <div className="p-1">
            <h1>Contact Us</h1>
            <p className="text-break">Need to get in touch with us? Either fill out the form with your inquiry or find the xyz@gmai.com you would like to contact below.</p>
          </div>
          <div className="p-2 border border-dark">
            <form>
              <div className="mb-3">
                <div className="col">
                  <label htmlFor="exampleInputFirstName" className="form-label">First Name</label>
                  <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                </div>
                <div className="col">
                  <label htmlFor="exampleInputLastName" className="form-label">Last Name</label>
                  <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                </div>
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInput" className="form-label">What can we help you with?</label>
                <input type="text" className="form-control" id="exampleInput" />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 100px;
  margin-bottom: 150px;

  .p-2 {
    width: 30%;
    background-color: #C0C0C0;
  }

  .p-1 {
    width: 50%;
    text-align: left;
  }

  .d-flex {
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 15px;
    background-color: white;
  }

  h1 {
    margin: 70px 0;
  }

  @media (max-width: 768px) {
    .d-flex {
      flex-direction: column;
      align-items: center;
    }

    .p-1, .p-2 {
      width: 90%;
    }
  }
`;

export default Contact;