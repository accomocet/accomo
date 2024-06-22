import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';
import './LoginPage.css';

function App() {
  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
            The best accommodations, <br />
            <span style={{color: 'hsl(218, 81%, 75%)'}}>ensuring a home-away-from-home for CET students.</span>
          </h1>

          <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
            
The Accommodation Management project for CET students aims to simplify housing allocation and improve the overall living experience. Through an efficient online system, students can easily access housing options, submit preferences, and receive timely notifications. Transparency and fairness are prioritized to ensure equitable distribution of resources. This initiative strives to create a supportive environment conducive to student success at CET.
          </p>

        </MDBCol>

        <MDBCol md='6' className='position-relative'>

          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'>

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text'/>
                </MDBCol>

              </MDBRow>

              <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password'/>

              <MDBBtn className='w-100 mb-4' size='md'>Login</MDBBtn>

              <hr />

              <div className='d-flex justify-content-center mb-3'>
                <p>New here? Signup below</p>
              </div>
              <div className='d-flex justify-content-center mb-3'>
                <h4><a href='signup'>Signup</a></h4>
              </div>
              <hr />

              <div className="text-center">

                <p>or sign up with:</p>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='github' size="sm"/>
                </MDBBtn>

                <hr />

              </div>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default App;