const { configureStore } = require("@reduxjs/toolkit");
import signupSlice from './signupSlice';
import loginSlice from './loginSlice';



const store = configureStore({
    reducer: {
      login: loginSlice,
      signup: signupSlice
    }
});
console.log(store)
export default store;