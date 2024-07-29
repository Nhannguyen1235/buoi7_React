import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import { countDown, countUp } from './redux/countSlice'

export default function Exam1() {
    const dispatch = useDispatch()
    const count = useSelector((state)=>state.count.value)

  return (
    <div>
        <h1>count: {count}</h1>
        <button onClick={()=> dispatch(countUp())}>Count up</button>
        <button onClick={()=> dispatch(countDown())}>Count down</button>
    </div>
  )
}
