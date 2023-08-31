import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditStudent = () => {
  let navigate = useNavigate();

	const { id } = useParams();

	const [student, setStudent] = useState({
		firstname: "",
		lastname: "",
		email: "",
		department: "",
	});
	const {
		firstname,
		lastname,
		email,
		department,
	} = student;

	useEffect(() => {
		loadStudent();
	},[]);

	const loadStudent = async () => {
		const result = await axios.get(
			`https://heartbreaking-payment-production.up.railway.app/student/${id}`
		);
		setStudent(result.data);
	};

	const handleInputChange = (e) => {
		setStudent({
			...student,
			[e.target.name]: e.target.value,
		});
	};
	const updateStudent = async (e) => {
		e.preventDefault();
		await axios.put(
			`https://heartbreaking-payment-production.up.railway.app/student/update/${id}`,
			student
		);
		navigate("/view-students");
	};

  return (
    <div className="col-sm-8 py-2 px-5 offset-2 shadow">
      <form onSubmit={(e) => updateStudent(e)}>
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
            <Link
              to={"/view-students"}
              type="submit"
              className="btn btn-outline-warning btn-lg"
            >
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditStudent;
