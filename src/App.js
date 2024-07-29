import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signup from "./signup/Signup.jsx";
import Login from "./login/login.jsx";
import "./App.css";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={route}> </RouterProvider>
    </div>
  );
}
export default App;