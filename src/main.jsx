import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes";
import FirebaseProvider from "./Pages/FirebaseProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseProvider>
      <RouterProvider router={routes}></RouterProvider>
    </FirebaseProvider>
  </React.StrictMode>
);
