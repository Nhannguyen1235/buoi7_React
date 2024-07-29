import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudent, deleteStudent, editStudent } from "./redux/listSlice";
import Add from "./Add.js";

export default function TodoList() {
  const students = useSelector((state) => state.students.students);
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(null);
  const [newName, setNewName] = useState("");
  const handleAdd = (text) => {
    dispatch(addStudent(text));
  };
  const handleEdit = (id) => {
    setEditing(id);
    const student = students.find((student) => student.id === id);
    setNewName(student.name);
  };
  const handleSave = (id) => {
    dispatch(editStudent({ id, name: newName }));
    setEditing(null);
    setNewName("");
  };
  return (
    <div>
      <Add handleAdd={handleAdd} />
      <ul>
      {students.map((item, index) => (
        <li className="text-center d-flex justify-content-between" key={index}>
          
            {editing === item.id ? (
              <input
                type="text"
                placeholder="Add student"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
            ) : (
              item.name
            )}
            {editing === item.id ? (
              <button onClick={() => handleSave(item.id)}>Save</button>
            ) : (
              <button onClick={() => handleEdit(item.id)}>Edit</button>
            )}
            <button onClick={() => dispatch(deleteStudent(item.id))}>
              Delete
            </button>
         
        </li>
      ))}
       </ul>
    </div>
  );
}
