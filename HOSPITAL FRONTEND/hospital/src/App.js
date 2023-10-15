import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import StaffLoginForm from "./pages/login/stafflogin";
import StaffSignupPage from "./pages/signup/staffsignup";
import PatientLoginForm from "./pages/login/patientlogin";
import PatientSignupPage from "./pages/signup/patientsignup";
import MainMenu from "./pages/login/mainlogin";
import Home from "./Components/home";
import Contact from "./pages/contact";
import CustomerService from "./Components/faq";
import store from "./redux/store";
import {Provider} from "react-redux";
import Appointment from "./patient/appoinment";
import Pharmacy from "./Components/pharmacy";
import StaffHomePage from "./Nurse/staffhomepage";
import AdminHomePage from "./Admin/adminhomepage";
import AddNurse from "./Admin/addNurse";
import AddAmbulance from "./Admin/addAmbulance";
import AddDoctor from "./Admin/addDoctor";
import PersonAdd from "./Axios/post";
import PersonList from "./Axios/get";
import navigation from "./redux/navigation";
import DoctorHomePage from "./Doctor/dochomepage";
import CreateReport from "./Doctor/createreport";
import ViewAppointment from "./Doctor/viewAppointment";
import About from "./Components/about";

// import Home from "./Components/home";
function App() {
  return (
      <Provider store={navigation}>
      <Router>
        <Routes>
            <Route path="/" element={<MainMenu />} />
            <Route path="/home" element={<Home />} />
            <Route path="/mainlogin" element={<MainMenu />}/>
            <Route path="/stafflogin" element={<StaffLoginForm />} />
            <Route path="/staffsignup" element={<StaffSignupPage/>} />
            <Route path="/patientlogin" element={<PatientLoginForm/>} />
            <Route path="/patientsignup" element={<PatientSignupPage/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/faq" element={<CustomerService/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/staffmainhome" element={<StaffHomePage/>} >
                <Route path="appointment" element={<Appointment/>} />
                <Route path="pharmacy" element={<Pharmacy/>} />
              </Route>
            <Route path="/doctormainhome" element={<DoctorHomePage/>} >
                <Route path="createReport" element={<CreateReport/>} />
                <Route path="viewappointment" element={<ViewAppointment/>} />
              </Route>
            <Route path="/adminmainhome" element={<AdminHomePage/>} >
                <Route path="doctor" element={<AddDoctor/>} />
                <Route path="nurse" element={<AddNurse/>} />
                <Route path="ambulance" element={<AddAmbulance/>} />
              </Route>
          </Routes>
      </Router>
      </Provider>
  );
}

export default App;