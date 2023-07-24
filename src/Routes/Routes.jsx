import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import Login from "../Home/Shared/Login/Login";
import Register from "../Home/Shared/Registraion/Register";
import ErrorPage from "../Home/Shared/ErrorPage/ErrorPage";
import ProfileUpdate from "../Home/ProfileUpdate/ProfileUpdate";
import Colleges from "../Colleges/Colleges";
import Admission from "../Admission/Admission";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/colleges",
        element: <Colleges></Colleges>,
      },
      {
        path: "/update:id",
        element: <ProfileUpdate></ProfileUpdate>,
        loader: ({ params }) =>
          fetch(`https://academic-avenue-server-six.vercel.app/users/${params.id}`),
      },
      {
        path:'/admission',
        element:<Admission></Admission>
      }
    ],
  },
]);

export default router;
