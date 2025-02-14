import { createRoot } from "react-dom/client";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import router from './components/routes/Route';
import '../global.css'
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
