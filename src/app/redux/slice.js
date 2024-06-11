const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
    email: "",
    password: "",
    remember: false,
}

const Slice = createSlice({
    name:'login',
    initialState,
    reducers:{
        handleChange:(state,action)=>{
            const {name,type,value,checked} = action.payload;
            let newState = { ...state, [name]: type === "checkbox" ? checked : value }
            return newState;
        }
    }
})

export const {handleChange} = Slice.actions
export default Slice.reducer