import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./components/NotFound";
import Homepage from "./components/Homepage";
import Body from "./components/Body";
import TabsComponent from "./components/TabsComponent";
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import PasswordReset from './components/PasswordReset';
import SignUp from "./components/SignUp";
import CompanyDetails from './components/CompanyDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/Admin",
        element: <TabsComponent />,
      },
      {
        path: "/Sign-Up",
        element: <SignUp />,
      },
      {
        path: "/companyDetails",
        element: <CompanyDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/reset-password",
        element: <PasswordReset />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
