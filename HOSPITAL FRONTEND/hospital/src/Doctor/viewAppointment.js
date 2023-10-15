import { Table } from "antd";
import { useEffect, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from "axios";

const ViewAppointment = () => {
  const [AppointmentDetails, setAppointmentDetails] = useState([]); // Initialize as an empty array

  useEffect(() => {
    axios.get("http://localhost:8080/auth/appointments/all")
      .then((res) => {
        setAppointmentDetails(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []); // Empty dependency array to run the effect once

  return (
    <>
      <div className="container">
        <div className="AfterSideBar">
          <div className="Payment_Page">
            <h1 style={{ marginBottom: "2rem" }}>Appointment Details</h1>
            <div className="patientBox">
              <table>
                <thead>
                  <tr>
                    <th>Patient Name</th>
                    <th>Mobile</th>
                    <th>Disease</th>
                    <th>Department</th>
                    <th>Date</th>
                    <th>Resolve</th>
                  </tr>
                </thead>
                <tbody>
                  {AppointmentDetails.map((ele) => (
                    <tr key={ele._id}>
                      <td>{ele.patientName}</td>
                      <td>{ele.mobile}</td>
                      <td>{ele.disease}</td>
                      <td>{ele.department}</td>
                      <td>{ele.date}</td>
                      <td>
                        <button
                          style={{
                            border: "none",
                            color: "red",
                            outline: "none",
                            background: "transparent",
                            cursor: "pointer",
                          }}
                          // onClick={() => DeleteAppoint(ele._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewAppointment;
