import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import Contact from "./components/Contact";
import About from "./components/About";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"


const AppLayout = () => {
    return (
    <div className="app">
        < Header />
        <Outlet/>
    </div>
)
}
const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children:[
            {
                path: '/',
                element: <Body />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/contact',
                element: <Contact />,
            }
        ],
        errorElement: <Error />
    },

])

root.render(<RouterProvider router={appRouter}/>);