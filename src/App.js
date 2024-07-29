import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Students from './components/Students';
import { AppProvider } from './AppContext';
import Exam1 from './components/exam1';
import Exam2 from './components/exam2';
import TodoList from './components/TodoList';

export default function App() {
  return (
    <div>
       <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Exam1 />} />
            <Route path="/user" element={<Exam2 />} />
            <Route path="/todolist" element={<TodoList />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </div>
  )
}
