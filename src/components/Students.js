import React, { useContext, useState } from "react";
import { Button, Container } from "reactstrap";
import { AppContext } from "../AppContext";
import './style.css'

export default function Students() {
  const { students, addStudent, deleteStudent, checkedStudent, editStudent } = useContext(AppContext);
  const [newStudent, setNewStudent] = useState("");
  const [editing, setEditing] = useState(null);
  const [newValue, setNewValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleAddStudent = () => {
    addStudent(newStudent);
    setNewStudent("");
  };
  const handleDeleteStudent = (id)=>{
    deleteStudent(id)
  }
  const handleEditStudent= (id, updateName) =>{
    editStudent(id, updateName)
  }
  const handleDoubleClick = (id, name) => {
    setEditing(id);
    setNewValue(name);
    setIsEditing(true);
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEditStudent(editing, newValue);
      setIsEditing(false);
    }
  };

  return (
    <div>
      <Container className="text-center">
        <div className="bg-danger">
          <h1>Students list</h1>
          <input
            type="text"
            placeholder="Nhập tên"
            value={newStudent}
            onChange={(e) => setNewStudent(e.target.value)}
          />
          <span className="btn btn-primary" onClick={handleAddStudent}>
            Add
          </span>
        </div>
        <ul>
          {students.map((student, index) => (
            <li
              onClick={() => checkedStudent(student.id)}
              className={`text-center ${student.checked ? 'checked' : ''}`}
              onDoubleClick={() => handleDoubleClick(student.id, student.name)}
            >
              {isEditing && editing === student.id ? (
                <input
                  type="text"
                  value={newValue}
                  onChange={(e) => setNewValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
              ) :(
                <span>
                  <a>{student.id}</a>
                  {student.name}
                  <Button onClick={()=> handleDeleteStudent(student.id)}>X</Button>
                </span>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
