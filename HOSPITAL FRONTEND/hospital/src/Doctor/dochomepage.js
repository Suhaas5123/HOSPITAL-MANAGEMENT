import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBBtn
} from 'mdb-react-ui-kit';
import {Outlet,Link} from 'react-router-dom';
import NavBar from '../Components/navigationBar';
import Footer from '../Components/footer';
import Cookies from 'js-cookie';
export default function DoctorHomePage() {
  console.log(Cookies.get("Id"));

  return (
    <>
    <div>
        <NavBar/>
        <br/>
    </div>
    <MDBCard className='text-center'>
      <MDBCardHeader>
        <MDBTabs pills className='card-header-tabs'>
          <MDBTabsItem>
            <MDBTabsLink>
            <Link to="/doctormainhome/createReport">Create Report</Link>
            </MDBTabsLink>
          </MDBTabsItem>

          <MDBTabsItem>
            <MDBTabsLink>
            <Link to="/doctormainhome/viewappointment">View Appointment</Link>
            </MDBTabsLink>
          </MDBTabsItem>
          {/* <MDBTabsItem>
            <MDBTabsLink>
            <Link to="/">LOGOUT</Link>
            </MDBTabsLink>
          </MDBTabsItem> */}
        </MDBTabs>
      </MDBCardHeader>
      <MDBCardBody>
        {/* <MDBCardTitle>Special title treatment</MDBCardTitle>
        <MDBCardText>
          With supporting text below as a natural lead-in to additional content.
        </MDBCardText>
        <MDBBtn>Go somewhere</MDBBtn> */}
        <Outlet/>
      </MDBCardBody>
    </MDBCard>
    <div>
      {Cookies.get("Id")}
        <Footer/>
    </div>
    </>
  );
}