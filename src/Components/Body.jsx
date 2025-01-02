import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import LoginPage from "./LoginPage";
import Browse from "./Browse";
import Header from "./Header";
import { addUser, removeUser } from "../Utils/userSlice";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        console.log(user);
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        console.log(user);
        // ...
      } else {
        dispatch(removeUser()); // ...
      }
    });
  }, []);

  return (
    <RouterProvider router={appRouter}>
      <Header />
      <LoginPage />
    </RouterProvider>
  );
};

export default Body;
