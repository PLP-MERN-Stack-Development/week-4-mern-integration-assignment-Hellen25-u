import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CategoriesPage from './pages/CategoriesPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <CategoriesPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
