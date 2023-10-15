import React, { useState } from "react";
import '../signup/patientsignup.css'
// import doctor from "../../../../../img/doctoravatar.png";
// import { useDispatch, useSelector } from "react-redux";
// import { DoctorRegister, SendPassword } from "../../../../../Redux/auth/action";
// import Sidebar from "../../GlobalFiles/Sidebar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/features";
// import { Navigate } from "react-router-dom";
// const notify = (text) => toast(text);

const AddDoctor = () => {
  // const { data } = useSelector((store) => store.auth);

  // const dispatch = useDispatch();

  // const [loading, setLoading] = useState(false);

  // const initData = {
  //   docName: "",
  //   age: "",
  //   mobile: "",
  //   email: "",
  //   bloodGroup: "",
  //   gender: "",
  //   DOB: "",
  //   address: "",
  //   education: "",
  //   department: "",
  //   docID: Date.now(),
  //   password: "",
  //   details: "",
  // };
  // const [DoctorValue, setDoctorValue] = useState(initData);

  // const HandleDoctorChange = (e) => {
  //   setDoctorValue({ ...DoctorValue, [e.target.name]: e.target.value });
  // };

  // const HandleDoctorSubmit = (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   dispatch(DoctorRegister(DoctorValue)).then((res) => {
  //     if (res.message === "Doctor already exists") {
  //       setLoading(false);
  //       return notify("Doctor Already Exist");
  //     }
  //     if (res.message === "error") {
  //       setLoading(false);
  //       return notify("Something went wrong, Please try Again");
  //     }

  //     let data = {
  //       email: res.data.email,
  //       password: res.data.password,
  //       userId: res.data.docID,
  //     };
  //     console.log(data, "DOCTOR REGISTER SUCCESSFULLY");
  //     dispatch(SendPassword(data)).then((res) => notify("Account Detais Sent"));
  //     setLoading(false);
  //     setDoctorValue(initData);
  //   });
  // };

  // if (data?.isAuthticated === false) {
  //   return <Navigate to={"/"} />;
  // }

  // if (data?.user.userType !== "admin") {
  //   return <Navigate to={"/dashboard"} />;
  // }
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const submitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const age = formData.get('age');
    const emergencyNumber = formData.get('emergencyNumber');
    const  email = formData.get('email');
    const  gender = formData.get('gender');
    const  bloodgroup = formData.get('bloodgroup');
    const  address = formData.get('address');
    const  password = formData.get('password');


    const data = {name,age,emergencyNumber,email,gender,bloodgroup,address,password};
    axios.post("http://localhost:8080/api/patient/create",data)
    .then((response) =>{
      console.log(response);
      dispatch(
        login({
          email: data.email,
          password: data.password,
          token: response.data.token,
          role: data.staffType,
          loggedIn: true,
        })
      );
      navigate("/");
    })
    .catch((error) =>{
      console.log(error);
    });
    };


  return (
    <>
      <ToastContainer />
      <div className="container">
        {/* <Sidebar /> */}
        <div className="AfterSideBar">
          <div className="Main_Add_Doctor_div">
            <h1>Patient Signup</h1>
            {/* <img src={doctor} alt="doctor" className="avatarimg" /> */}
            <form onSubmit={submitHandler}>
              <div>
                <label>Patient Name</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    // value={DoctorValue.docName}
                    // onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Age</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="Age"
                    name="age"
                    // value={DoctorValue.age}
                    // onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Emergency Number</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="Emergency Number"
                    name="emergencyNumber"
                    // value={DoctorValue.mobile}
                    // onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Email</label>
                <div className="inputdiv">
                  <input
                    type="email"
                    placeholder="abc@abc.com"
                    name="email"
                    // value={DoctorValue.email}
                    // onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Gender</label>
                <div className="inputdiv">
                  <select
                    name="gender"
                    // value={DoctorValue.gender}
                    // onChange={HandleDoctorChange}
                    required
                  >
                    <option value="Choose Gender">Choose Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>
              <div>
                <label>Blood Group</label>
                <div className="inputdiv">
                  <select
                    name="bloodgroup"
                    // value={DoctorValue.bloodGroup}
                    // onChange={HandleDoctorChange}
                    required
                  >
                    <option value="Choose Blood Group">Select</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
              </div>
              <div>
                <label>Address</label>
                <div className="inputdiv adressdiv">
                  <input
                    type="text"
                    placeholder="Address"
                    name="address"
                    // value={DoctorValue.address}
                    // onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Password</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Password"
                    name="password"
                    // value={DoctorValue.password}
                    // onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <button type="submit" className="formsubmitbutton">
                {/* {loading ? "Loading..." : "Submit"} */}
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddDoctor;