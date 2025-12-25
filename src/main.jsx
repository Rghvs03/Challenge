import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Approuter from "./router/Approuter.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {" "}
    <Approuter />
  </Provider>
);
