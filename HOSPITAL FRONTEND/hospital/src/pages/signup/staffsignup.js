import React, { useState } from "react";
import "../signup/patientsignup.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/features";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const StaffSignupPage = () => {
  // const [staffData, setStaffData] = useState({
  //   staffType: "",
  //   name: "",
  //   age: "",
  //   emergencyNumber: "",
  //   email: "",
  //   gender: "",
  //   address: "",
  //   password: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setStaffData((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("http://localhost:8080/api/staff/create", staffData)
  //     .then((response) => {
  //       toast.success("Staff created successfully!");
  //       setStaffData({
  //         staffType: "",
  //         name: "",
  //         age: "",
  //         emergencyNumber: "",
  //         email: "",
  //         gender: "",
  //         address: "",
  //         password: "",
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       toast.error("Failed to create staff. Please try again.");
  //     });
  // };

  const navigate=useNavigate();
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const staffType = formData.get('staffType');
    const name = formData.get('name');
    const age = formData.get('age');
    const emergencyNumber = formData.get('emergencyNumber');
    const  email = formData.get('email');
    const  gender = formData.get('gender');
    const  address = formData.get('address');
    const  password = formData.get('password');


    const data = {staffType,name,age,emergencyNumber,email,gender,address,password};
    axios.post("http://localhost:8080/auth/register",data)
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
    .then(()=>
      {}
    )
    .catch((error) =>{
      console.log(error);
    });
    };




  return (
    <>
      <ToastContainer />
      <div className="container">
        <div className="AfterSideBar">
          <div className="Main_Add_Doctor_div">
            <h1>Staff Signup</h1>
            <form onSubmit={submitHandler}>
              <div>
                <label>Staff Type</label>
                <div className="inputdiv">
                  <select
                    name="staffType"
                    // value={staffData.staffType}
                    // onChange={handleChange}
                    required
                  >
                    <option value="">Choose type</option>
                    <option value="Admin">Admin</option>
                    <option value="Nurse">Nurse</option>
                    <option value="Doctor">Doctor</option>
                  </select>
                </div>
              </div>
              <div>
                <label>Name</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    // value={staffData.name}
                    // onChange={handleChange}
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
                    // value={staffData.age}
                    // onChange={handleChange}
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
                    // value={staffData.emergencyNumber}
                    // onChange={handleChange}
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
                    // value={staffData.email}
                    // onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Gender</label>
                <div className="inputdiv">
                  <select
                    name="gender"
                    // value={staffData.gender}
                    // onChange={handleChange}
                    required
                  >
                    <option value="">Choose Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
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
                    // value={staffData.address}
                    // onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Password</label>
                <div className="inputdiv">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    // value={staffData.password}
                    // onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <button type="submit" className="formsubmitbutton">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffSignupPage;
