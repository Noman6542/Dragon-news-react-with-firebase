import React from 'react';
import HomeLayout from '../Layouts/HomeLayout';
import { Navigate } from 'react-router';

const Home = () => {
  return (
    <Navigate to='/categores/1'></Navigate>
  );
};

export default Home;