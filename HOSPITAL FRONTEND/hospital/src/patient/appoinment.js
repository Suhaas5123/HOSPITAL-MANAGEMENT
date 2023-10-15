import React, { useState } from "react";
import { CommonProblem } from "../patient/commondata.js";
import '../patient/appoinment.css'
import '../Admin/css/addDoctor.css'
// import { useDispatch } from "react-redux";
// import { AddPatients, CreateBooking } from "../../../../../Redux/Datas/action";
// import Sidebar from "../../GlobalFiles/Sidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
// const notify = (text) => toast(text);

const BookAppointment = () => {
  // const dispatch = useDispatch();
  // const [Loading, setLoading] = useState(false);

  // const InitValue = {
  //   patientName: "",
  //   age: "",
  //   gender: "",
  //   mobile: "",
  //   disease: "",
  //   address: "",
  //   email: "",
  //   department: "",
  //   date: "",
  //   time: "",
  // };

  // const [BookAppoint, setBookAppoint] = useState(InitValue);

  // const HandleAppointment = (e) => {
  //   setBookAppoint({ ...BookAppoint, [e.target.name]: e.target.value });
  // };

  // const HandleOnsubmitAppointment = (e) => {
  //   e.preventDefault();

  //   if (BookAppoint.gender === "" || BookAppoint.department === "") {
  //     return notify("Please fill all the Details");
  //   }
  //   setLoading(true);
  //   dispatch(AddPatients({ ...BookAppoint, patientId: Date.now() })).then(
  //     (res) => {
  //       let data = {
  //         ...BookAppoint,
  //         patientId: res.id,
  //       };
  //       dispatch(CreateBooking(data));
  //       notify("Appointment Booked");
  //       setLoading(false);
  //       setBookAppoint(InitValue);
  //     }
  //   );
  // };

  const submitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const patientName = formData.get("patientName");
    const age = formData.get("age");
    const gender = formData.get("gender");
    const mobile = formData.get("mobile");
    const email = formData.get("email");
    const disease = formData.get("disease");
    const address = formData.get("address");
    const department = formData.get("department");
    const date = formData.get("date");
    const time = formData.get("time");

    const data = {
      patientName,
      age,
      gender,
      mobile,
      email,
      disease,
      address,
      department,
      date,
      time,
    };

    axios
      .post("http://localhost:8080/auth/appointments/book", data)
      .then((response) => {
        console.log(response.data); // Assuming the backend sends the response with the created appointment details
        // Add any logic to handle the response here
        // For example, show a success toast or redirect to a confirmation page
      })
      .catch((error) => {
        console.log(error);
        // Handle the error here, show an error toast, or display an error message to the user
      });
    };

  return (
    <>
      <ToastContainer />
      <div className="container">
        {/* <Sidebar /> */}
        <div className="AfterSideBar">
          <div className="Main_Add_Doctor_div">
            <h1>Book Appointment</h1>
            <form onSubmit={submitHandler}>
              {/* Name PlaceHolder */}
              <div>
                <label>Patient Name</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="First Name"
                    name="patientName"
                    // value={BookAppoint.patientName}
                    // onChange={HandleAppointment}
                    required
                  />
                </div>
              </div>
              {/* AGE PLACEHOLDER  */}
              <div>
                <label>Age</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="Age"
                    name="age"
                    // value={BookAppoint.age}
                    // onChange={HandleAppointment}
                    required
                  />
                </div>
              </div>
              {/* GENDER PLACEHOLDER  */}
              <div>
                <label>Gender</label>
                <div className="inputdiv">
                  <select
                    name="gender"
                    // value={BookAppoint.gender}
                    // onChange={HandleAppointment}
                    required
                  >
                    <option value="Choose Blood Group">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              {/* MOBILE PLACEHOLDER */}
              <div>
                <label>Contact Number</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="Number"
                    name="mobile"
                    // value={BookAppoint.mobile}
                    // onChange={HandleAppointment}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Email</label>
                <div className="inputdiv">
                  <input
                    type="email"
                    placeholder="example@email.com"
                    name="email"
                    // value={BookAppoint.email}
                    // onChange={HandleAppointment}
                    required
                  />
                </div>
              </div>
              {/* PROBLEM PLACEHOLDER */}
              <div>
                <label>Type of Disease</label>
                <div className="inputdiv">
                  <select
                    name="disease"
                    // value={BookAppoint.disease}
                    // onChange={(e) => {
                    //   HandleAppointment(e);
                    // }}
                    required
                  >
                    <option value="Choose Blood Group">Select Disease</option>
                    {CommonProblem.map((ele, i) => {
                      return (
                        <option key={i} value={ele.title}>
                          {ele.title}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              {/* ENTER SAMPLE DISEASE */}

              {/* ADDRESS SECTION  */}

              <div>
                <label>Address</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Address line 1"
                    name="address"
                    // value={BookAppoint.address}
                    // onChange={HandleAppointment}
                    required
                  />
                </div>
              </div>
              {/* DEPARTMENT SECTION */}

              <div>
                <label>Department</label>
                <div className="inputdiv">
                  <select
                    name="department"
                    // value={BookAppoint.department}
                    // onChange={HandleAppointment}
                    required
                  >
                    <option value="">Select</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="General">General</option>
                    <option value="Neurology">Neurology</option>
                    <option value="ENT">ENT</option>
                    <option value="Ophthalmologist">Ophthalmologist</option>
                    <option value="Anesthesiologist">Anesthesiologist</option>
                    <option value="Dermatologist">Dermatologist</option>
                    <option value="Oncologist">Oncologist</option>
                    <option value="Psychiatrist">Psychiatrist</option>
                  </select>
                </div>
              </div>
              {/* APPOINTMENT DATE  */}
              <div className="dateofAppointment">
                <p  style={{color:'black'}}>Date and Time </p>
                <div className="inputdiv">
                  <input
                    type={"date"}
                    placeholder="Choose Date"
                    name="date"
                    // value={BookAppoint.date}
                    // onChange={HandleAppointment}
                    required
                  />
                  <input
                    type={"time"}
                    placeholder="Choose Time"
                    name="time"
                    // value={BookAppoint.time}
                    // onChange={HandleAppointment}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="book_formsubmitbutton">
                {/* {Loading ? "Loading..." : "Book Appointment"} */}
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookAppointment;