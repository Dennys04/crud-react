import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const AddStudent = () => {

    let navigate = useNavigate();


  const [student, setStudents] = useState({
    firstname: "",
    lastname: "",
    email: "",
    department: "",
  });

  const { firstname, lastname, email, department } = student;

  const handleInputChange = (e) => {
    setStudents({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const savedStudent = async(e) => {
    e.preventDefault();
    console.log(student);
    await axios.post("https://heartbreaking-payment-production.up.railway.app/student", student);
    navigate("/view-students");
  }

  return (
    <div className="col-sm-8 py-2 px-5 offset-2 shadow">
      <form onSubmit={(e) => savedStudent(e)}>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlForm="firstname">
            First Name
          </label>

          <input
            className="form-control col-sm-6"
            type="text"
            name="firstname"
            id="firstname"
            value={firstname}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlForm="lastname">
            Last Name
          </label>

          <input
            className="form-control col-sm-6"
            type="text"
            name="lastname"
            id="lastname"
            value={lastname}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlForm="email">
            Email
          </label>

          <input
            className="form-control col-sm-6"
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlForm="department">
            Department
          </label>

          <input
            className="form-control col-sm-6"
            type="text"
            name="department"
            id="department"
            value={department}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="row mb-5">
          <div className="col-sm-2">
            <button type="submit" className="btn btn-outline-success btn-lg">
              Save
            </button>
          </div>

          <div className="col-sm-2">
            <Link to={"/view-students"} type="submit" className="btn btn-outline-warning btn-lg">
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
