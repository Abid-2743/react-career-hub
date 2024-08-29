import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from './components/Home/Home';
import Root from './components/Root/Root';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Statistics from './components/Statistics/Statistics';
import ErrorPage from './components/ErrorPage/ErrorPage';
import JobDetails from './components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/Statistics',
        element: <Statistics />
      },
      {
        path: '/Applied',
        element: <AppliedJobs />,
        loader: () => fetch('/jobs.json')
      },
      {
        path:'/Job/:id',
        element: <JobDetails />,
        loader: () => fetch('/jobs.json')
      },
      {
        path:'/jobDetails',
        element:<AppliedJobs></AppliedJobs>,
        loader:() => fetch('/jobs.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
