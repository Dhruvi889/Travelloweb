import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './home';
import { Header } from './header';
import { Footer } from './footer';
import { About } from './about';
import { Services } from './services'
import { News } from './news';
import { Contact } from './contact'

const routers = createBrowserRouter([{
  path: '/', element: <><Header /><Home /><Footer /></>
},
{ path: "/about", element: <><Header /><About /><Footer /></> },
{ path: "/services", element: <><Header /><Services /><Footer /></> },
{ path: "/news", element: <><Header /><News /><Footer /></> },
{ path: "/contact", element: <><Header /><Contact /><Footer /></> }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routers} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
