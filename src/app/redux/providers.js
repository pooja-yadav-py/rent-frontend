"use client";
import  store  from "./store";

const { Provider } = require("react-redux");

export function Providers({ children }) {
    console.log(store.getState())
  return <Provider store={store}>{children}</Provider>;
}
