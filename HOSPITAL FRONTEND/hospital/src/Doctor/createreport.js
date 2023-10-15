// // import React, { useState } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";
// // import { CreatePayment, CreateReport } from "../../../../../Redux/Datas/action";
// // import Sidebar from "../../GlobalFiles/Sidebar";
// import "react-toastify/dist/ReactToastify.css";
// import { toast, ToastContainer } from "react-toastify";
// // const notify = (text) => toast(text);
// import '../Admin/css/addDoctor.css'
// import '../patient/appoinment.css'
// import axios from "axios";

// const CreateReport = () => {
// //   const { data } = useSelector((store) => store.auth);

// //   const [loading, setLoading] = useState(false);

// //   const dispatch = useDispatch();
// //   const initmed = {
// //     medName: "",
// //     dosage: "",
// //     duration: "",
// //   };
// //   const [med, setmed] = useState(initmed);

// //   const [medicines, setmedicines] = useState([]);

// //   const HandleMedChange = (e) => {
// //     setmed({ ...med, [e.target.name]: e.target.value });
// //   };

// //   const InitData = {
// //     docName: "",
// //     docDepartment: "",
// //     patientAge: "",
// //     docMobile: "",
// //     patientMobile: "",
// //     patientBloodGroup: "",
// //     patientGender: "",
// //     email: "",
// //     patientDisease: "",
// //     patientTemperature: "",
// //     patientWeight: "",
// //     patientBP: "",
// //     patientGlucose: "",
// //     patientName: "",
// //     extrainfo: "",
// //     date: "",
// //     time: "",
// //     medicines: [],
// //   };

// //   const [ReportValue, setReportValue] = useState(InitData);

// //   const HandleReportChange = (e) => {
// //     setReportValue({ ...ReportValue, [e.target.name]: e.target.value });
// //   };

// //   const HandleMedAdd = (e) => {
// //     e.preventDefault();
// //     setmedicines([...medicines, med]);
// //     setmed(initmed);
// //   };

// //   const HandleReportSubmit = (e) => {
// //     e.preventDefault();
// //     let data = {
// //       ...ReportValue,
// //       medicines,
// //     };
// //     try {
// //       setLoading(true);
// //       dispatch(CreateReport(data)).then((res) => {
// //         if (res.message === "Report successfully created") {
// //           notify("Report Created Sucessfully");
// //           setLoading(false);
// //           setReportValue(InitData);
// //         } else {
// //           setLoading(false);
// //           notify("Something went Wrong");
// //         }
// //       });
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };

// //   if (data?.isAuthticated === false) {
// //     return <Navigate to={"/"} />;
// //   }

// //   if (data?.user.userType !== "doctor") {
// //     return <Navigate to={"/dashboard"} />;
// //   }


//     const submitHandler = (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const patientName = formData.get("patientName");
//     const age = formData.get("age");
//     const gender = formData.get("gender");
//     const mobile = formData.get("mobile");
//     const email = formData.get("email");
//     const disease = formData.get("disease");
//     const address = formData.get("address");
//     const department = formData.get("department");
//     const date = formData.get("date");
//     const time = formData.get("time");

//     const data = {
//       patientName,
//       age,
//       gender,
//       mobile,
//       email,
//       disease,
//       address,
//       department,
//       date,
//       time,
//     };

//     axios
//       .post("http://localhost:8080/auth/appointments/book", data)
//       .then((response) => {
//         console.log(response.data); // Assuming the backend sends the response with the created appointment details
//         // Add any logic to handle the response here
//         // For example, show a success toast or redirect to a confirmation page
//       })
//       .catch((error) => {
//         console.log(error);
//         // Handle the error here, show an error toast, or display an error message to the user
//       });
//     };






//   return (
//     <>
//       <ToastContainer />
//       <div className="container">
//         {/* <Sidebar /> */}
//         <div className="AfterSideBar">
//           <div className="Main_Add_Doctor_div">
//             <h1>Create Report</h1>
//             <form>
              // <div>
              //   <label>Doctor Name</label>
              //   <div className="inputdiv">
              //     <input
              //       type="text"
              //       placeholder="Full Name"
              //       name="docName"
              //       // value={ReportValue.docName}
              //       // onChange={HandleReportChange}
              //       required
              //     />
              //   </div>
              // </div>
              // <div>
              //   <label>Department</label>
              //   <div className="inputdiv">
              //     <input
              //       type="text"
              //       placeholder="Department"
              //       name="docDepartment"
              //       // value={ReportValue.docDepartment}
              //       // onChange={HandleReportChange}
              //       required
              //     />
              //   </div>
              // </div>
              // <div>
              //   <label>Doctor Mobile</label>
              //   <div className="inputdiv">
              //     <input
              //       type="number"
              //       placeholder="No"
              //       name="docMobile"
              //       // value={ReportValue.docMobile}
              //       // onChange={HandleReportChange}
              //     />
              //   </div>
              // </div>
              // <div>
              //   <label>Patient Name</label>
              //   <div className="inputdiv">
              //     <input
              //       type="text"
              //       placeholder="Name"
              //       name="patientName"
              //       // value={ReportValue.patientName}
              //       // onChange={HandleReportChange}
              //       required
              //     />
              //   </div>
              // </div>
              // <div>
              //   <label>Patient Age</label>
              //   <div className="inputdiv">
              //     <input
              //       type="number"
              //       placeholder="Age"
              //       name="patientAge"
              //       // value={ReportValue.patientAge}
              //       // onChange={HandleReportChange}
              //       required
              //     />
              //   </div>
              // </div>
              // <div>
              //   <label>Patient Mobile</label>
              //   <div className="inputdiv">
              //     <input
              //       type="number"
              //       placeholder="Mobile"
              //       name="patientMobile"
              //       // value={ReportValue.patientMobile}
              //       // onChange={HandleReportChange}
              //       required
              //     />
              //   </div>
              // </div>
              // <div>
              //   <label>Email</label>
              //   <div className="inputdiv">
              //     <input
              //       type="email"
              //       placeholder="abc@abc"
              //       name="email"
              //       // value={ReportValue.email}
              //       // onChange={HandleReportChange}
              //       required
              //     />
              //   </div>
              // </div>
              // <div>
              //   <label>Patient Gender</label>
              //   <div className="inputdiv">
              //     <select
              //       name="patientGender"
              //       // value={ReportValue.patientGender}
              //       // onChange={HandleReportChange}
              //     >
              //       <option value="Choose Gender">Choose Gender</option>
              //       <option value="Male">Male</option>
              //       <option value="Female">Female</option>
              //       <option value="Others">Others</option>
              //     </select>
              //   </div>
              // </div>
              // <div>
              //   <label>Patient Blood Group</label>
              //   <div className="inputdiv">
              //     <select
              //       name="patientBloodGroup"
              //       // value={ReportValue.patientBloodGroup}
              //       // onChange={HandleReportChange}
              //       required
              //     >
              //       <option value="Choose Blood Group">Select</option>
              //       <option value="A+">A+</option>
              //       <option value="A-">A-</option>
              //       <option value="B+">B+</option>
              //       <option value="B-">B-</option>
              //       <option value="AB+">AB+</option>
              //       <option value="AB-">AB-</option>
              //       <option value="O+">O+</option>
              //       <option value="O-">O-</option>
              //     </select>
              //   </div>
              // </div>
              // <div>
              //   <label>Patient Disease</label>
              //   <div className="inputdiv">
              //     <input
              //       type="text"
              //       placeholder="Disease"
              //       name="patientDisease"
              //       // value={ReportValue.patientDisease}
              //       // onChange={HandleReportChange}
              //       required
              //     />
              //   </div>
              // </div>
              // <div>
              //   <label>Patient Temperature</label>
              //   <div className="inputdiv">
              //     <input
              //       type="number"
              //       placeholder="99^C"
              //       name="patientTemperature"
              //       // value={ReportValue.patientTemperature}
              //       // onChange={HandleReportChange}
              //     />
              //   </div>
              // </div>

              // <div>
              //   <label>Patient Weight</label>
              //   <div className="inputdiv">
              //     <input
              //       type="number"
              //       placeholder="75 KG"
              //       name="patientWeight"
              //       // value={ReportValue.patientWeight}
              //       // onChange={HandleReportChange}
              //     />
              //   </div>
              // </div>
              // <div>
              //   <label>Patient BP</label>
              //   <div className="inputdiv adressdiv">
              //     <input
              //       type="number"
              //       placeholder="140/90 mmHg"
              //       name="patientBP"
              //       // value={ReportValue.patientBP}
              //       // onChange={HandleReportChange}
              //     />
              //   </div>
              // </div>
              // <div>
              //   <label>Patient Glucose</label>
              //   <div className="inputdiv">
              //     <input
              //       type="number"
              //       placeholder="99 mg/dL"
              //       name="patientGlucose"
              //       // value={ReportValue.patientGlucose}
              //       // onChange={HandleReportChange}
              //     />
              //   </div>
              // </div>
              // <div>
              //   <label>Incharge staff email</label>
              //   <div className="inputdiv">
              //     <input
              //       type="email"
              //       placeholder="email"
              //       name="extrainfo"
              //       // value={ReportValue.extrainfo}
              //       // onChange={HandleReportChange}
              //     />
              //   </div>
              // </div>
              // {/* **************** */}
              // <div>
              //   <label>Medicines</label>
              //   <div className="inputdiv">
              //     <input
              //       type="text"
              //       placeholder="PCM"
              //       name="medName"
              //       // value={med.medName}
              //       // onChange={HandleMedChange}
              //     />
              //     <select name="duration" >
              //       <option value="Dosage">Duration</option>
              //       <option value="After Meal">After Meal</option>
              //       <option value="Before Meal">Before Meal</option>
              //     </select>
              //     <select name="dosage" >
              //       <option value="Dosage">Dosage</option>
              //       <option value="1">1</option>
              //       <option value="2">2</option>
              //       <option value="3">3</option>
              //     </select>
              //     {/* <input type="submit" value={"Add"}  /> */}
              //   </div>
              // </div>
              // {/* ************* */}
              // <div>
              //   <label>Date</label>
              //   <div className="inputdiv">
              //     <input
              //       type="date"
              //       placeholder="dd-mm-yyyy"
              //       name="date"
              //       // value={ReportValue.date}
              //       // onChange={HandleReportChange}
              //     />
              //   </div>
              // </div>
              // <div>
              //   <label>Time</label>
              //   <div className="inputdiv">
              //     <input
              //       type="time"
              //       name="time"
              //       // value={ReportValue.time}
              //       // onChange={HandleReportChange}
              //     />
              //   </div>
              // </div>

//               <button
//                 className="formsubmitbutton bookingbutton"
//                 // onClick={HandleReportSubmit}
//               >
//                 {/* {loading ? "Loading..." : "Generate Report"} */}
              
//               Submit</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CreateReport;

import React from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

import '../Admin/css/addDoctor.css';
import '../patient/appoinment.css';
import Cookies from "js-cookie";
import { TextField } from "@mui/material";
import { Input } from "antd";

const CreateReport = () => {
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
        console.log(response.data);
       

        // Show a success toast
        toast.success("Report Created Successfully");

        // Clear the form or perform any other necessary actions

        // Add any logic to handle the response here
        // For example, show a success toast or redirect to a confirmation page
      })
      .catch((error) => {
        console.log(error);

        // Show an error toast
        toast.error("Something went wrong");
        // console.log(Cookies.get('Id'));


        // Handle the error here, show an error toast, or display an error message to the user
      });
  };

  return (
    <>
      <ToastContainer />
      <div className="container">
        <div className="AfterSideBar">
          <div className="Main_Add_Doctor_div">
            <h1>Create Report</h1>
            <form onSubmit={submitHandler}>
              {/* Your form fields go here... */}
              {/* Example:
              <div>
                <label>Patient Name</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Name"
                    name="patientName"
                    required
                  />
                </div>
              </div>
              ... */}
              <div>
                <label>Doctor Name</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="docName"
                    // value={ReportValue.docName}
                    // onChange={HandleReportChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Department</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Department"
                    name="docDepartment"
                    // value={ReportValue.docDepartment}
                    // onChange={HandleReportChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Doctor Mobile</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="No"
                    name="docMobile"
                    // value={ReportValue.docMobile}
                    // onChange={HandleReportChange}
                  />
                </div>
              </div>
              <div>
                <label>Patient Name</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Name"
                    name="patientName"
                    // value={ReportValue.patientName}
                    // onChange={HandleReportChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Patient Age</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="Age"
                    name="patientAge"
                    // value={ReportValue.patientAge}
                    // onChange={HandleReportChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Patient Mobile</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="Mobile"
                    name="patientMobile"
                    // value={ReportValue.patientMobile}
                    // onChange={HandleReportChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Email</label>
                <div className="inputdiv">
                  <input
                    type="email"
                    placeholder="abc@abc"
                    name="email"
                    // value={ReportValue.email}
                    // onChange={HandleReportChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Patient Gender</label>
                <div className="inputdiv">
                  <select
                    name="patientGender"
                    // value={ReportValue.patientGender}
                    // onChange={HandleReportChange}
                  >
                    <option value="Choose Gender">Choose Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>
              <div>
                <label>Patient Blood Group</label>
                <div className="inputdiv">
                  <select
                    name="patientBloodGroup"
                    // value={ReportValue.patientBloodGroup}
                    // onChange={HandleReportChange}
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
                <label>Patient Disease</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Disease"
                    name="patientDisease"
                    // value={ReportValue.patientDisease}
                    // onChange={HandleReportChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Patient Temperature</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="99^C"
                    name="patientTemperature"
                    // value={ReportValue.patientTemperature}
                    // onChange={HandleReportChange}
                  />
                </div>
              </div>

              <div>
                <label>Patient Weight</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="75 KG"
                    name="patientWeight"
                    // value={ReportValue.patientWeight}
                    // onChange={HandleReportChange}
                  />
                </div>
              </div>
              <div>
                <label>Patient BP</label>
                <div className="inputdiv adressdiv">
                  <input
                    type="number"
                    placeholder="140/90 mmHg"
                    name="patientBP"
                    // value={ReportValue.patientBP}
                    // onChange={HandleReportChange}
                  />
                </div>
              </div>
              <div>
                <label>Patient Glucose</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="99 mg/dL"
                    name="patientGlucose"
                    // value={ReportValue.patientGlucose}
                    // onChange={HandleReportChange}
                  />
                </div>
              </div>
              <div>
                <label>Incharge staff email</label>
                <div className="inputdiv">
                  <input
                    type="email"
                    placeholder="email"
                    name="extrainfo"
                    disabled
                    value={Cookies.get('Id')}
                    
                    // value={ReportValue.extrainfo}
                    // onChange={HandleReportChange}
                  />
                </div>
              </div>
              {/* **************** */}
              <div>
                <label>Medicines</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="PCM"
                    name="medName"
                    // value={med.medName}
                    // onChange={HandleMedChange}
                  />
                  <select name="duration" >
                    <option value="Dosage">Duration</option>
                    <option value="After Meal">After Meal</option>
                    <option value="Before Meal">Before Meal</option>
                  </select>
                  <select name="dosage" >
                    <option value="Dosage">Dosage</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                  {/* <input type="submit" value={"Add"}  /> */}
                </div>
              </div>
              {/* ************* */}
              <div>
                <label>Date</label>
                <div className="inputdiv">
                  <input
                    type="date"
                    placeholder="dd-mm-yyyy"
                    name="date"
                    // value={ReportValue.date}
                    // onChange={HandleReportChange}
                  />
                </div>
              </div>
              <div>
                <label>Time</label>
                <div className="inputdiv">
                  <input
                    type="time"
                    name="time"
                    // value={ReportValue.time}
                    // onChange={HandleReportChange}
                  />
                </div>
              </div>

              <button className="formsubmitbutton bookingbutton" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateReport;
