import { counter } from "@fortawesome/fontawesome-svg-core";
import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../featurs/counter/CounterSlice";
export default configureStore({
  reducer: {
    counter: CounterSlice,
  },
});
