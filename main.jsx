import React from "react";
import ReactDOM from "react-dom/client";
//import App from './App.jsx'
import "./index.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Contactus from "./components/Contactus/Contactus";
import User from "./components/User/User";
import Github, { githubinfoloader } from "./components/Github/Github";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [{ path: "", element: <Home/> }, {path:"about",element :<About/>},{path:"contact",element:<Contactus />}],
//   },
// ]);

//OTHER SYNTAX
 const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="about" element={<About/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="contact" element={<Contactus/>}/>
      <Route path="user/:userid" element={<User/>}/>
      <Route loader={githubinfoloader} path="github" element={<Github/>}/>
    </Route>
  )
 )

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
