import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const AppContext = createContext({})
export const AppProvider = ({ children }) => {
    const url = 'https://66a07af87053166bcabb8822.mockapi.io/student'
    const [students, setStudents] = useState(() => {
        const storedStudents = localStorage.getItem('students')
        return storedStudents ? JSON.parse(storedStudents) : []
      })
    const fetchdata = ()=>{
        axios.get(url)
        .then(function(res){
            setStudents(res.data)
            localStorage.setItem('students', JSON.stringify(res.data))
        })
        .catch(function(error){
            console.log(error)
        })
    }
    useEffect(()=>{
        fetchdata()
    },[])
    const addStudent = (newStudent) => {
        axios.post(url, { name: newStudent }).then(function (res) {
        setStudents([...students, { id: res.data.id, name: newStudent }]);
      })
    }
    const deleteStudent = (id)=>{
        axios.delete(`${url}/${id}`).then(function (res) {
            setStudents(students.filter((student) => student.id !== id));
        })
        .catch(function(error){
            console.log(error)
        })
    }
    const checkedStudent = (id) => {
        const updatedStudents = students.map((student) => {
          if (student.id === id) {
            return { ...student, checked: !student.checked };
          }
          return student;
        });
        setStudents(updatedStudents);
      };
      const editStudent = (id, updatedName) => {
        axios.put(`${url}/${id}`, { name: updatedName }).then(function (res) {
            const updatedStudents = students.map((student) => {
                if (student.id === id) {
                    return { ...student, name: updatedName };
                }
                return student;
            });
            setStudents(updatedStudents);
        })
        .catch(function(error){
            console.log(error)
        })
    }
  return (
    <AppContext.Provider value={{students ,addStudent, deleteStudent, checkedStudent, editStudent}}>
        {children}
    </AppContext.Provider>
  )
}
