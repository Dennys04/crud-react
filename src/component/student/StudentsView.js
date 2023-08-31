import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const StudentsView = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const result = await axios.get(
      "https://heartbreaking-payment-production.up.railway.app/student",
      {
        validateStatus: () => {
          return true;
        },
      }
    );
    if (result.status === 200 || 302) {
      setStudents(result.data);
    }
  };

  
  const handleDelete = async (id) => {
    await axios.delete(
      `https://heartbreaking-payment-production.up.railway.app/student/delete/${id}`
    );
    loadStudents();
  };




  return (
    <section>
      <table className="table table-bordered table-hover shadow">
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Depatment</th>
            <th colSpan="3">Actions</th>
          </tr>
        </thead>

        <tbody className="text-center">
          {students.map((s, index) => (
            <tr key={index}>
              <td>{s.id}</td>
              <td>{s.firstname}</td>
              <td>{s.lastname}</td>
              <td>{s.email}</td>
              <td>{s.department}</td>
              <td className="mx-2">
                <Link
                  to={`/student-profile/${s.id}`}
                  className="btn btn-info"
                >
                  <FaEye />
                </Link>
              </td>
              <td className="mx-2">
                <Link
                  to={`/edit-student/${s.id}`}
                  className="btn btn-warning"
                >
                  <FaEdit />
                </Link>
              </td>
              <td className="mx-2">
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(s.id)}
                >
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default StudentsView;
