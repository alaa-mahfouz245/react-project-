import React from "react";
import "./StudentsList.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import { IoMdDownload ,IoMdCloudDownload  } from "react-icons/io";


const StudentTable = () => {
  const Students = [
    { id: 1, firstName: "Super", lastName: "Admin", email: "admin@example.com", universityId: "123456789", status: "Active", specialization: "DEVELOPER" },
    { id: 2, firstName: "Abd El-Rahman", lastName: "Nasr", email: "abdo.nasr@gmail.com", universityId: "123", status: "Active", specialization: "Professor" },
    { id: 3, firstName: "Khaled", lastName: "Taha", email: "khaledtaha105@gmail.com", universityId: "258", status: "Active", specialization: "Backend" },
    { id: 4, firstName: "Adel", lastName: "Hany", email: "Adel@email.com", universityId: "16", status: "Active", specialization: "Machine Learning" },
    { id: 5, firstName: "Ahmed", lastName: "Hossam", email: "Ahmed@email.com", universityId: "12", status: "Active", specialization: "Software Engineer" },
  ];

  return (
    <div className="admins-container">
      <h2 className="title">Students</h2>
      <div className="buttons">
        <button className="add-btn">+ Add Student</button>
        <button className="export-btn">
          <IoMdDownload/>
          Export Student</button>
        <button className="import-btn">
          <IoMdCloudDownload/>
          Import Student</button>
      </div>
      <div className="table-container">
        <table className="admins-table">
          <thead>
            <tr>
              <th>No.</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>University Id</th>
              <th>Status</th>
              <th>Specialization</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Students.map((admin, index) => (
              <tr key={admin.id}>
                <td>{index + 1}</td>
                <td>{admin.firstName}</td>
                <td>{admin.lastName}</td>
                <td>{admin.email}</td>
                <td>{admin.universityId}</td>
                <td><span className="status active">{admin.status}</span></td>
                <td>{admin.specialization}</td>
                <td>
                  <FaEdit className="edit-icon" />
                  <FaTrash className="delete-icon" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentTable;
