import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import ChefCards from '../chefSection/ChefCards/ChefCards';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [{
        path: '/',
        element: <ChefCards></ChefCards>
      }]
    },
  ]);

export default router;