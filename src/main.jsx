import { createRoot } from "react-dom/client";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import router from "./components/routes/Route";
import "../global.css";
import CourseContextProvider from "./components/context/CourseContext";
import UserContextProvider from "./components/context/AuthContext";
import PrivateRoot from "./components/context/PrivateContext";
createRoot(document.getElementById("root")).render(
  <PrivateRoot>
    <UserContextProvider>
      <CourseContextProvider>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </CourseContextProvider>
    </UserContextProvider>
  </PrivateRoot>
);
