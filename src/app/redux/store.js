const { configureStore } = require("@reduxjs/toolkit");
import loginSlice from './slice';



const store = configureStore({
    reducer: {
      login: loginSlice,
    }
});

export default store;