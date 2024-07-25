
// import { configureStore } from "@reduxjs/toolkit";
// import userDetailSlice from "../Slice/userDetailSlice";

// const store = configureStore({
//     reducer:{
//         userDetails:userDetailSlice,
//     }
// })
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export default store;


import { configureStore } from "@reduxjs/toolkit";
import userDetailSlice from "../Slice/userDetailSlice";

const store = configureStore({
    reducer: {
        userDetails: userDetailSlice,
    }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store;