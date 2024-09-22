import './styles/reset.css'
import './styles/style.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from './routes/root';
import Home from './routes/home';
import Projects from './routes/projects';
import About from './routes/about';
import Contact from './routes/contact';

const router = createBrowserRouter([
    {
        id: "root",
        path: `/`,
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: `/projects`,
                element: <Projects />,
            },
            {
                path: `/about`,
                element: <About />,
            },
            {
                path: `/contact`,
                element: <Contact />,
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
