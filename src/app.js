import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Menu from"./components/Menu"
const AppLayout = () => {
  return (
    <div className="app">
      {Header()}
      <Outlet />
    </div>
  );
};


  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      children:[
        {
          path:"/",
          element:<Body/>
        },
        {
        path:"/About",
        element:<About/>
      },
      {
        path:"/Contact",
        element:<Contact/>
      },
      {
        path:"/restaurants/:id",
        element:<Menu/>
      }
    ],
      errorElement:<Error/>
    },
    

  ])



const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter}/>);
// console.log( dataobject[0])