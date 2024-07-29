import {createSlice} from '@reduxjs/toolkit'

const initialState={
    students:[
        {id:1,name:'meo',checked: true},
        {id:2,name:'bao',checked: false},
        {id:3,name:'cho',checked: false},
        {id:4,name:'nai',checked: true},
    ],
    checkAll:false
}
const listSlice= createSlice({
    name:"students",
    initialState,
    reducers:{
        addStudent(state, action){
            state.students=[...state.students,{id:state.students.length + 1,name:action.payload,checked:true}]
        },
        deleteStudent(state,action){
            state.students = state.students.filter(item=>item.id !== action.payload)
        },
        editStudent(state, action) {
            const studentIndex = state.students.findIndex((student) => student.id === action.payload.id);
            if (studentIndex !== -1) {
              state.students[studentIndex] = { ...state.students[studentIndex], ...action.payload };
            }
          }
    }
})
export const {addStudent,deleteStudent,editStudent}= listSlice.actions
export default listSlice.reducer;