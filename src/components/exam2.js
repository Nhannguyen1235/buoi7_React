import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import { changeName, changeAge } from './redux/userSlice'

export default function Exam2() {
    const dispatch = useDispatch()
    const user = useSelector(state=>state.user.user)

  return (
    <div>
        <h1>user name: {user.name}</h1>
        <h1>user age: {user.age}</h1>
        <button onClick={()=> dispatch(changeName(1))}>Change Name</button>
        <button onClick={()=> dispatch(changeAge("nhan"))}>Change Age</button>
    </div>
  )
}
