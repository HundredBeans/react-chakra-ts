import React from 'react';
import { RouteProps } from 'react-router-dom';
import { MainPage } from '../pages';

const routes: RouteProps[] = [
  {
    path: '/',
    exact: true,
    children: <MainPage />,
  },
  {
    path: '*',
    children: <h1>Not Found</h1>,
  },
];

export default routes;
